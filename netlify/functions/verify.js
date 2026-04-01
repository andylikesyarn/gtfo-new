import crypto from "crypto";

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ valid: false }) };
  }

  const { token } = body;
  const TOKEN_SECRET = process.env.TOKEN_SECRET;

  if (!TOKEN_SECRET || !token) {
    return { statusCode: 200, body: JSON.stringify({ valid: false }) };
  }

  // Recompute the expected token for the current hour.
  // Also accept the previous hour's token to avoid edge-case lockouts at hour boundaries.
  const now = Math.floor(Date.now() / 1000 / 3600);
  const validTokens = [now, now - 1].map((h) =>
    crypto.createHmac("sha256", TOKEN_SECRET).update(h.toString()).digest("hex")
  );

  const valid = validTokens.includes(token);

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ valid }),
  };
};
