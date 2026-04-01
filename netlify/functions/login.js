import crypto from "crypto";

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid request body" }) };
  }

  const { password } = body;
  const SITE_PASSWORD = process.env.SITE_PASSWORD;
  const TOKEN_SECRET = process.env.TOKEN_SECRET;

  if (!SITE_PASSWORD || !TOKEN_SECRET) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server misconfigured — environment variables not set" }),
    };
  }

  if (!password || password !== SITE_PASSWORD) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: "Incorrect password" }),
    };
  }

  // Generate an HMAC token tied to the current UTC hour.
  // Tokens expire when the hour rolls over — client re-authenticates automatically.
  const hourStamp = Math.floor(Date.now() / 1000 / 3600).toString();
  const token = crypto
    .createHmac("sha256", TOKEN_SECRET)
    .update(hourStamp)
    .digest("hex");

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  };
};
