import { useState, useEffect } from "react";

// API key pulled from Vite env — set VITE_ANTHROPIC_API_KEY in your .env file
const ANTHROPIC_API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY || "";

// ===== Default Data =====
const VOCAB0 = {
  medical: [
    { id: "m1", es: "Necesito un médico", en: "I need a doctor", notes: "" },
    { id: "m2", es: "Me duele aquí", en: "It hurts here", notes: "Point to the area" },
    { id: "m3", es: "Llame una ambulancia", en: "Call an ambulance", notes: "Emergency phrase" },
    { id: "m4", es: "Tengo alergia a ___", en: "I am allergic to ___", notes: "e.g. la penicilina, los mariscos, el gluten" },
    { id: "m5", es: "¿Dónde está el hospital más cercano?", en: "Where is the nearest hospital?", notes: "" },
    { id: "m6", es: "Tengo fiebre", en: "I have a fever", notes: "" },
    { id: "m7", es: "Me recetaron esto", en: "I was prescribed this", notes: "Show the bottle or prescription" },
    { id: "m8", es: "Soy diabético/a", en: "I am diabetic", notes: "" },
    { id: "m9", es: "Estoy embarazada", en: "I am pregnant", notes: "" },
    { id: "m10", es: "Necesito una receta médica", en: "I need a prescription", notes: "" },
    { id: "m11", es: "Tengo presión alta", en: "I have high blood pressure", notes: "" },
    { id: "m12", es: "¿Habla inglés?", en: "Do you speak English?", notes: "Very useful in any situation" },
  ],
  housing: [
    { id: "h1", es: "El contrato de arrendamiento", en: "The lease agreement", notes: "" },
    { id: "h2", es: "El depósito / la fianza", en: "The security deposit", notes: "" },
    { id: "h3", es: "¿Está incluida la luz?", en: "Is electricity included?", notes: "Also: el agua, el gas, el internet" },
    { id: "h4", es: "El casero / la casera", en: "The landlord", notes: "" },
    { id: "h5", es: "Hay una fuga de agua", en: "There is a water leak", notes: "Plumbing emergency" },
    { id: "h6", es: "¿Cuándo vence el alquiler?", en: "When is the rent due?", notes: "" },
    { id: "h7", es: "¿Se permiten mascotas?", en: "Are pets allowed?", notes: "" },
    { id: "h8", es: "El ascensor no funciona", en: "The elevator is not working", notes: "" },
    { id: "h9", es: "Busco un apartamento amueblado", en: "I'm looking for a furnished apartment", notes: "" },
    { id: "h10", es: "¿Hay estacionamiento incluido?", en: "Is parking included?", notes: "" },
    { id: "h11", es: "Necesito hablar con el administrador", en: "I need to speak with the building manager", notes: "" },
    { id: "h12", es: "¿Cuánto es el alquiler mensual?", en: "How much is the monthly rent?", notes: "" },
  ],
  food: [
    { id: "f1", es: "La cuenta, por favor", en: "The bill, please", notes: "Essential!" },
    { id: "f2", es: "¿Tiene opciones vegetarianas?", en: "Do you have vegetarian options?", notes: "" },
    { id: "f3", es: "Sin gluten, por favor", en: "Gluten-free, please", notes: "" },
    { id: "f4", es: "Soy alérgico/a a los mariscos", en: "I am allergic to shellfish", notes: "" },
    { id: "f5", es: "¿Qué me recomienda?", en: "What do you recommend?", notes: "Great conversation opener" },
    { id: "f6", es: "Para llevar", en: "To go / takeaway", notes: "" },
    { id: "f7", es: "¿Tienen mesa para dos?", en: "Do you have a table for two?", notes: "" },
    { id: "f8", es: "Está delicioso", en: "This is delicious", notes: "A great compliment" },
    { id: "f9", es: "Sin picante, por favor", en: "Without spice, please", notes: "Also: sin sal (no salt)" },
    { id: "f10", es: "¿Dónde está el baño?", en: "Where is the bathroom?", notes: "" },
    { id: "f11", es: "¿Puedo ver la carta?", en: "Can I see the menu?", notes: "" },
    { id: "f12", es: "Una mesa para no fumadores", en: "A non-smoking table", notes: "" },
  ],
};

const DEFAULT = {
  modules: { medical: true, housing: true, food: true },
  vocab: VOCAB0,
  home: { country: "", fullName: "", nationalId: "", passport: "", address: "", phone: "", emergencyName: "", emergencyPhone: "", insurance: "", notes: "" },
  dest: { country: "", visaType: "", visaNumber: "", localAddress: "", localPhone: "", embassyAddress: "", embassyPhone: "", emergencyNumber: "", doctorContact: "", notes: "" },
  appointments: [],
  profile: { fullName: "", dob: "", nationality: "", passport: "", bloodType: "", allergies: "", emergencyName: "", emergencyPhone: "", medNotes: "" },
};

const NAV = [
  { id: "vocab", label: "Vocabulario" },
  { id: "home", label: "País de Origen" },
  { id: "dest", label: "País Destino" },
  { id: "appts", label: "Citas" },
  { id: "translate", label: "Traducir" },
  { id: "profile", label: "Perfil Público" },
];

const HOME_F = [
  { k: "country", l: "Country" }, { k: "fullName", l: "Full Legal Name" },
  { k: "nationalId", l: "National ID / SSN", s: true }, { k: "passport", l: "Passport Number", s: true },
  { k: "address", l: "Home Address", t: "ta" }, { k: "phone", l: "Phone Number" },
  { k: "emergencyName", l: "Emergency Contact Name" }, { k: "emergencyPhone", l: "Emergency Contact Phone" },
  { k: "insurance", l: "Health Insurance Info", t: "ta" }, { k: "notes", l: "Notes", t: "ta" },
];

const DEST_F = [
  { k: "country", l: "Destination Country" }, { k: "visaType", l: "Visa Type", ph: "Tourist, Work, Student…" },
  { k: "visaNumber", l: "Visa / Permit Number", s: true }, { k: "localAddress", l: "Local Address", t: "ta" },
  { k: "localPhone", l: "Local Phone" }, { k: "embassyAddress", l: "Embassy / Consulate Address", t: "ta" },
  { k: "embassyPhone", l: "Embassy Phone" }, { k: "emergencyNumber", l: "Local Emergency Number", ph: "e.g. 133, 112, 911" },
  { k: "doctorContact", l: "Local Doctor / Clinic" }, { k: "notes", l: "Notes", t: "ta" },
];

const PROF_F = [
  { k: "fullName", l: "Full Name / Nombre Completo" }, { k: "dob", l: "Date of Birth / Fecha de Nacimiento", t: "date" },
  { k: "nationality", l: "Nationality / Nacionalidad" }, { k: "passport", l: "Passport No. / Pasaporte" },
  { k: "bloodType", l: "Blood Type / Tipo de Sangre", ph: "A+, O-, etc." }, { k: "allergies", l: "Allergies / Alergias", t: "ta" },
  { k: "emergencyName", l: "Emergency Contact / Contacto de Emergencia" }, { k: "emergencyPhone", l: "Emergency Phone / Teléfono de Emergencia" },
  { k: "medNotes", l: "Medical Notes / Notas Médicas", t: "ta" },
];

const MOD_META = {
  medical: { label: "Médico", accent: "#4a80c4" },
  housing: { label: "Vivienda", accent: "#4aaa80" },
  food: { label: "Comida", accent: "#c4904a" },
};
const MODS = ["medical", "housing", "food"];

const inpStyle = {
  background: "#090e1c", color: "#ddd8c8", border: "1px solid #1c2240",
  borderRadius: 6, padding: "7px 11px", fontSize: 13,
  fontFamily: "'DM Sans',sans-serif", outline: "none", width: "100%",
};

// ===== Shared Components =====
function SectionHead({ title, sub }) {
  return (
    <div>
      <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, color: "#ddd8c8", fontWeight: 600, marginBottom: 6 }}>{title}</h1>
      {sub && <p style={{ color: "#5a647e", fontSize: 12.5, marginBottom: 20 }}>{sub}</p>}
      <div style={{ height: 1, background: "linear-gradient(to right,#c8983840,transparent)", marginBottom: 28 }} />
    </div>
  );
}

function FieldInput({ f, value, onChange }) {
  const [show, setShow] = useState(false);
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: "block", color: "#5a647e", fontSize: 10.5, letterSpacing: ".09em", textTransform: "uppercase", marginBottom: 5 }}>{f.l}</label>
      {f.t === "ta" ?
        <textarea value={value} onChange={e => onChange(e.target.value)} rows={3} placeholder={f.ph || ""} style={{ ...inpStyle, resize: "vertical" }} />
        : f.t === "date" ?
          <input type="date" value={value} onChange={e => onChange(e.target.value)} style={inpStyle} />
          : f.s ?
            <div style={{ position: "relative" }}>
              <input type={show ? "text" : "password"} value={value} onChange={e => onChange(e.target.value)} placeholder={f.ph || ""} style={{ ...inpStyle, paddingRight: 34 }} />
              <button onClick={() => setShow(!show)} style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#3a4060", cursor: "pointer", fontSize: 13 }}>{show ? "hide" : "show"}</button>
            </div>
            :
            <input type="text" value={value} onChange={e => onChange(e.target.value)} placeholder={f.ph || ""} style={inpStyle} />
      }
    </div>
  );
}

// ===== Vocab =====
function VocabCard({ item, accent, onDelete }) {
  const [flip, setFlip] = useState(false);
  return (
    <div onClick={() => setFlip(!flip)} style={{ background: "#0f1626", border: `1px solid ${flip ? accent + "50" : "#1c2240"}`, borderRadius: 9, padding: 14, cursor: "pointer", position: "relative", minHeight: 82 }}>
      {flip ? <>
        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 14.5, color: "#aaa498", fontStyle: "italic", lineHeight: 1.4 }}>{item.en}</p>
        {item.notes && <p style={{ fontSize: 10.5, color: accent + "90", marginTop: 6 }}>{item.notes}</p>}
      </> : <>
        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 14.5, color: "#ddd8c8", lineHeight: 1.4 }}>{item.es}</p>
        <p style={{ fontSize: 10.5, color: accent + "60", marginTop: 6 }}>tap to translate</p>
      </>}
      <button onClick={e => { e.stopPropagation(); onDelete(); }} style={{ position: "absolute", top: 7, right: 8, background: "none", border: "none", color: "#2e3860", cursor: "pointer", fontSize: 12 }}>x</button>
    </div>
  );
}

function VocabSection({ state, update }) {
  const [search, setSearch] = useState("");
  const [adding, setAdding] = useState(null);
  const [nw, setNw] = useState({ es: "", en: "", notes: "" });

  const toggle = mod => update({ modules: { ...state.modules, [mod]: !state.modules[mod] } });
  const addItem = mod => {
    if (!nw.es.trim() || !nw.en.trim()) return;
    update({ vocab: { ...state.vocab, [mod]: [...state.vocab[mod], { ...nw, id: `${mod[0]}${Date.now()}` }] } });
    setAdding(null); setNw({ es: "", en: "", notes: "" });
  };
  const del = (mod, id) => update({ vocab: { ...state.vocab, [mod]: state.vocab[mod].filter(v => v.id !== id) } });
  const filtered = mod => {
    const q = search.toLowerCase();
    return state.vocab[mod].filter(v => !q || v.es.toLowerCase().includes(q) || v.en.toLowerCase().includes(q));
  };

  return (
    <div>
      <SectionHead title="Vocabulario Español" sub="Tap any card to reveal the English translation." />
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap", alignItems: "center" }}>
        {MODS.map(mod => {
          const m = MOD_META[mod]; const active = state.modules[mod];
          return (
            <button key={mod} onClick={() => toggle(mod)} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 16px", borderRadius: 20, cursor: "pointer", border: `1px solid ${active ? m.accent + "70" : "#1c2240"}`, background: active ? m.accent + "18" : "transparent", color: active ? m.accent : "#3a4060", fontSize: 12.5, fontFamily: "'DM Sans',sans-serif" }}>
              {m.label}
            </button>
          );
        })}
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search…" style={{ ...inpStyle, borderRadius: 20, width: 170, marginLeft: "auto" }} />
      </div>
      {MODS.filter(m => state.modules[m]).map(mod => {
        const m = MOD_META[mod]; const items = filtered(mod);
        return (
          <div key={mod}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12, marginTop: 28 }}>
              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, color: m.accent }}>{m.label}</span>
              <button onClick={() => setAdding(adding === mod ? null : mod)} style={{ padding: "5px 11px", borderRadius: 6, fontSize: 11.5, fontFamily: "'DM Sans',sans-serif", cursor: "pointer", background: "transparent", border: `1px solid ${m.accent}50`, color: m.accent }}>+ Add</button>
            </div>
            {adding === mod && (
              <div style={{ background: "#0f1626", border: `1px solid ${m.accent}40`, borderRadius: 9, padding: 16, marginBottom: 12 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11, marginBottom: 11 }}>
                  <div><label style={{ display: "block", color: "#5a647e", fontSize: 10.5, letterSpacing: ".09em", textTransform: "uppercase", marginBottom: 5 }}>Español *</label><input value={nw.es} onChange={e => setNw({ ...nw, es: e.target.value })} style={inpStyle} placeholder="Frase en español" /></div>
                  <div><label style={{ display: "block", color: "#5a647e", fontSize: 10.5, letterSpacing: ".09em", textTransform: "uppercase", marginBottom: 5 }}>English *</label><input value={nw.en} onChange={e => setNw({ ...nw, en: e.target.value })} style={inpStyle} placeholder="English phrase" /></div>
                </div>
                <div style={{ marginBottom: 11 }}><label style={{ display: "block", color: "#5a647e", fontSize: 10.5, letterSpacing: ".09em", textTransform: "uppercase", marginBottom: 5 }}>Notes</label><input value={nw.notes} onChange={e => setNw({ ...nw, notes: e.target.value })} style={inpStyle} placeholder="Context or usage tip (optional)" /></div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => addItem(mod)} style={{ padding: "5px 11px", borderRadius: 6, fontSize: 11.5, fontFamily: "'DM Sans',sans-serif", cursor: "pointer", background: "#c89838", color: "#05080f", border: "none" }}>Save</button>
                  <button onClick={() => setAdding(null)} style={{ padding: "5px 11px", borderRadius: 6, fontSize: 11.5, fontFamily: "'DM Sans',sans-serif", cursor: "pointer", background: "transparent", border: "1px solid #1c2240", color: "#5a647e" }}>Cancel</button>
                </div>
              </div>
            )}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: 10, marginTop: 12 }}>
              {items.map(v => <VocabCard key={v.id} item={v} accent={m.accent} onDelete={() => del(mod, v.id)} />)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ===== Info Section =====
function InfoSection({ title, fields, data, onSave }) {
  const [form, setForm] = useState({ ...data });
  const [saved, setSaved] = useState(false);
  const save = () => { onSave(form); setSaved(true); setTimeout(() => setSaved(false), 2200); };
  return (
    <div>
      <SectionHead title={title} />
      <div style={{ background: "#0f1626", border: "1px solid #1c2240", borderRadius: 10, padding: 18, maxWidth: 600 }}>
        {fields.map(f => <FieldInput key={f.k} f={f} value={form[f.k] || ""} onChange={v => setForm({ ...form, [f.k]: v })} />)}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 6 }}>
          <button onClick={save} style={{ background: "#c89838", color: "#05080f", border: "none", borderRadius: 6, padding: "7px 16px", fontSize: 12.5, fontFamily: "'DM Sans',sans-serif", cursor: "pointer" }}>{saved ? "Saved" : "Save"}</button>
        </div>
      </div>
    </div>
  );
}

// ===== Appointments =====
function ApptsSection({ state, update }) {
  const [form, setForm] = useState({ title: "", date: "", time: "", location: "", notes: "" });
  const [adding, setAdding] = useState(false);

  const add = () => {
    if (!form.title.trim() || !form.date) return;
    update({ appointments: [...state.appointments, { ...form, id: String(Date.now()) }].sort((a, b) => a.date.localeCompare(b.date)) });
    setForm({ title: "", date: "", time: "", location: "", notes: "" }); setAdding(false);
  };
  const del = id => update({ appointments: state.appointments.filter(a => a.id !== id) });
  const gcLink = a => {
    const d = a.date.replace(/-/g, ""); const t = (a.time || "09:00").replace(":", "");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(a.title)}&dates=${d}T${t}00/${d}T${t}59&details=${encodeURIComponent(a.notes || "")}&location=${encodeURIComponent(a.location || "")}`;
  };
  const fmtDate = d => { try { return new Date(d + "T12:00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" }); } catch { return d; } };
  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <SectionHead title="Citas & Calendario" sub="Track appointments locally and push them to Google Calendar." />
      <div style={{ display: "flex", gap: 8, marginBottom: 22 }}>
        <button onClick={() => setAdding(!adding)} style={{ background: "#c89838", color: "#05080f", border: "none", borderRadius: 6, padding: "7px 16px", fontSize: 12.5, fontFamily: "'DM Sans',sans-serif", cursor: "pointer" }}>+ Nueva Cita</button>
      </div>
      {adding && (
        <div style={{ background: "#0f1626", border: "1px solid #c8983840", borderRadius: 10, padding: 18, marginBottom: 22, maxWidth: 600 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11, marginBottom: 11 }}>
            <div><label style={{ display: "block", color: "#5a647e", fontSize: 10.5, letterSpacing: ".09em", textTransform: "uppercase", marginBottom: 5 }}>Title *</label><input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} style={inpStyle} /></div>
            <div><label style={{ display: "block", color: "#5a647e", fontSize: 10.5, letterSpacing: ".09em", textTransform: "uppercase", marginBottom: 5 }}>Date *</label><input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} style={inpStyle} /></div>
            <div><label style={{ display: "block", color: "#5a647e", fontSize: 10.5, letterSpacing: ".09em", textTransform: "uppercase", marginBottom: 5 }}>Time</label><input type="time" value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} style={inpStyle} /></div>
            <div><label style={{ display: "block", color: "#5a647e", fontSize: 10.5, letterSpacing: ".09em", textTransform: "uppercase", marginBottom: 5 }}>Location</label><input value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} style={inpStyle} /></div>
          </div>
          <div style={{ marginBottom: 12 }}><label style={{ display: "block", color: "#5a647e", fontSize: 10.5, letterSpacing: ".09em", textTransform: "uppercase", marginBottom: 5 }}>Notes</label><textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} rows={2} style={{ ...inpStyle, resize: "vertical" }} /></div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={add} style={{ padding: "5px 11px", borderRadius: 6, fontSize: 11.5, fontFamily: "'DM Sans',sans-serif", cursor: "pointer", background: "#c89838", color: "#05080f", border: "none" }}>Save</button>
            <button onClick={() => setAdding(false)} style={{ padding: "5px 11px", borderRadius: 6, fontSize: 11.5, fontFamily: "'DM Sans',sans-serif", cursor: "pointer", background: "transparent", border: "1px solid #1c2240", color: "#5a647e" }}>Cancel</button>
          </div>
        </div>
      )}
      {state.appointments.map(a => (
        <div key={a.id} style={{ background: "#0f1626", border: "1px solid #1c2240", borderRadius: 9, padding: 14, marginBottom: 8, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, opacity: a.date < today ? 0.55 : 1 }}>
          <div>
            <p style={{ color: "#ddd8c8", fontWeight: 500, fontSize: 13.5, marginBottom: 5 }}>{a.title}</p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              {a.date && <span style={{ color: "#c89838", fontSize: 12 }}>{fmtDate(a.date)}</span>}
              {a.time && <span style={{ color: "#5a647e", fontSize: 12 }}>{a.time}</span>}
              {a.location && <span style={{ color: "#5a647e", fontSize: 12 }}>{a.location}</span>}
            </div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <a href={gcLink(a)} target="_blank" rel="noopener" style={{ textDecoration: "none" }}><button style={{ padding: "5px 11px", borderRadius: 6, fontSize: 11.5, fontFamily: "'DM Sans',sans-serif", cursor: "pointer", background: "transparent", border: "1px solid #7a5c2080", color: "#c89838" }}>+GCal</button></a>
            <button onClick={() => del(a.id)} style={{ padding: "5px 11px", borderRadius: 6, fontSize: 11.5, fontFamily: "'DM Sans',sans-serif", cursor: "pointer", background: "transparent", border: "1px solid #c4606040", color: "#c46060" }}>x</button>
          </div>
        </div>
      ))}
      {state.appointments.length === 0 && !adding && (
        <p style={{ color: "#3a4060", fontSize: 13, fontStyle: "italic" }}>No appointments yet.</p>
      )}
    </div>
  );
}

// ===== Translate =====
function TranslateSection() {
  const [input, setInput] = useState("");
  const [dir, setDir] = useState("en-es");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [from, to] = dir.split("-");
  const names = { en: "English", es: "Spanish" };
  const labels = { en: "English", es: "Español" };

  const translate = async () => {
    if (!input.trim()) return;
    if (!ANTHROPIC_API_KEY) { setResult("No API key set. Add VITE_ANTHROPIC_API_KEY to your .env file."); return; }
    setLoading(true); setResult("");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-api-key": ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01", "anthropic-dangerous-allow-browser": "true" },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, messages: [{ role: "user", content: `Translate the following ${names[from]} text to ${names[to]}. Return ONLY the translation:\n\n${input}` }] }),
      });
      const data = await res.json();
      setResult(data.content?.[0]?.text || "Translation failed.");
    } catch { setResult("Error: could not reach translation service."); }
    setLoading(false);
  };

  return (
    <div>
      <SectionHead title="Traducir" sub="AI-powered translation between English and Spanish." />
      <div style={{ maxWidth: 620 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <span style={{ color: "#ddd8c8", fontSize: 13, fontWeight: 500 }}>{labels[from]}</span>
          <button onClick={() => { setDir(d => d === "en-es" ? "es-en" : "en-es"); setResult(""); }} style={{ background: "#c8983820", border: "1px solid #c8983860", color: "#c89838", borderRadius: 20, padding: "4px 14px", cursor: "pointer", fontSize: 12.5, fontFamily: "'DM Sans',sans-serif" }}>Switch</button>
          <span style={{ color: "#ddd8c8", fontSize: 13, fontWeight: 500 }}>{labels[to]}</span>
        </div>
        <div style={{ background: "#0f1626", border: "1px solid #1c2240", borderRadius: 10, padding: 18, marginBottom: 12 }}>
          <textarea value={input} onChange={e => setInput(e.target.value)} placeholder={`Type ${from === "en" ? "English" : "Spanish"} text here…`} rows={5} style={{ ...inpStyle, resize: "vertical" }} />
          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <button onClick={translate} style={{ background: "#c89838", color: "#05080f", border: "none", borderRadius: 6, padding: "7px 16px", fontSize: 12.5, fontFamily: "'DM Sans',sans-serif", cursor: "pointer", minWidth: 100 }}>{loading ? "Translating…" : "Translate"}</button>
            <a href={`https://translate.google.com/?sl=${from}&tl=${to}&text=${encodeURIComponent(input)}&op=translate`} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
              <button style={{ background: "transparent", border: "1px solid #1c2240", color: "#5a647e", borderRadius: 6, padding: "7px 16px", fontSize: 12.5, fontFamily: "'DM Sans',sans-serif", cursor: "pointer" }}>Open in Google Translate</button>
            </a>
          </div>
        </div>
        {result && (
          <div style={{ background: "#0f1626", border: "1px solid #c8983830", borderRadius: 10, padding: 18 }}>
            <p style={{ color: "#5a647e", fontSize: 10.5, textTransform: "uppercase", letterSpacing: ".09em", marginBottom: 10 }}>{labels[to]} — Translation</p>
            <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, color: "#ddd8c8", lineHeight: 1.65 }}>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ===== Public Profile =====
function ProfileSection({ state, update }) {
  const [form, setForm] = useState({ ...state.profile });
  const [tab, setTab] = useState("edit");
  const [saved, setSaved] = useState(false);
  const save = () => { update({ profile: form }); setSaved(true); setTimeout(() => setSaved(false), 2200); };

  const qrText = [
    "TRAVELER PROFILE / PERFIL DE VIAJERO",
    form.fullName && `Name: ${form.fullName}`,
    form.dob && `DOB: ${form.dob}`,
    form.bloodType && `Blood Type: ${form.bloodType}`,
    form.allergies && `Allergies: ${form.allergies}`,
    (form.emergencyName || form.emergencyPhone) && `Emergency: ${form.emergencyName} — ${form.emergencyPhone}`,
    form.medNotes && `Medical: ${form.medNotes}`,
  ].filter(Boolean).join("\n");

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=c89838&bgcolor=0f1626&data=${encodeURIComponent(qrText)}`;

  return (
    <div>
      <SectionHead title="Perfil Público" sub="A bilingual emergency card others can scan." />
      <div style={{ display: "flex", gap: 8, marginBottom: 22 }}>
        {["edit", "preview"].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "7px 16px", borderRadius: 6, cursor: "pointer", fontSize: 12.5, fontFamily: "'DM Sans',sans-serif", border: "1px solid", background: tab === t ? "#c8983820" : "transparent", color: tab === t ? "#c89838" : "#5a647e", borderColor: tab === t ? "#c8983860" : "#1c2240" }}>
            {t === "edit" ? "Edit" : "Preview + QR"}
          </button>
        ))}
      </div>
      {tab === "edit" ? (
        <div style={{ background: "#0f1626", border: "1px solid #1c2240", borderRadius: 10, padding: 18, maxWidth: 600 }}>
          {PROF_F.map(f => <FieldInput key={f.k} f={f} value={form[f.k] || ""} onChange={v => setForm({ ...form, [f.k]: v })} />)}
          <button onClick={save} style={{ background: "#c89838", color: "#05080f", border: "none", borderRadius: 6, padding: "7px 16px", fontSize: 12.5, fontFamily: "'DM Sans',sans-serif", cursor: "pointer" }}>{saved ? "Saved" : "Save Profile"}</button>
        </div>
      ) : (
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "flex-start" }}>
          <div style={{ background: "#0f1626", border: "1px solid #1c2240", borderRadius: 10, padding: 18, flex: 1, minWidth: 260, maxWidth: 440 }}>
            <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, color: "#ddd8c8", fontWeight: 600, marginBottom: 16 }}>{form.fullName || "—"}</p>
            {[["DOB", form.dob], ["Passport", form.passport], ["Blood Type", form.bloodType], ["Allergies", form.allergies], ["Emergency", form.emergencyName && `${form.emergencyName} — ${form.emergencyPhone}`], ["Medical Notes", form.medNotes]].map(([label, val]) => val ? (
              <div key={label} style={{ marginBottom: 11 }}>
                <div style={{ fontSize: 10, color: "#5a647e", textTransform: "uppercase", letterSpacing: ".09em" }}>{label}</div>
                <div style={{ fontSize: 13.5, color: "#ddd8c8", marginTop: 2 }}>{val}</div>
              </div>
            ) : null)}
          </div>
          <div style={{ background: "#0f1626", border: "1px solid #1c2240", borderRadius: 10, padding: 20, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <img src={qrUrl} alt="QR Code" width={160} height={160} style={{ borderRadius: 6 }} />
            <p style={{ color: "#3a4060", fontSize: 11, textAlign: "center", maxWidth: 160, lineHeight: 1.5 }}>Scan to view your traveler profile</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ===== Root Viajero Component =====
export default function Viajero() {
  const [section, setSection] = useState("vocab");
  const [state, setState] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("viajero-data");
      setState(saved ? JSON.parse(saved) : DEFAULT);
    } catch { setState(DEFAULT); }
  }, []);

  const update = patch => {
    const next = { ...state, ...patch };
    setState(next);
    try { localStorage.setItem("viajero-data", JSON.stringify(next)); } catch {}
  };

  if (!state) return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "60vh", color: "#c89838", fontFamily: "'Playfair Display',serif", fontSize: 20 }}>
      Cargando…
    </div>
  );

  return (
    <div style={{ display: "flex", height: "calc(100vh - 120px)", overflow: "hidden", background: "#070b16", borderRadius: 12 }}>
      {/* Sidebar */}
      <nav style={{ width: 186, background: "#050812", borderRight: "1px solid #1c2240", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 16px", borderBottom: "1px solid #1c2240" }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 19, color: "#c89838", fontWeight: 700 }}>Viajero</div>
          <div style={{ fontSize: 9, color: "#2e3860", letterSpacing: ".14em", marginTop: 2, textTransform: "uppercase" }}>Travel Companion</div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "8px 0" }}>
          {NAV.map(n => (
            <button key={n.id} onClick={() => setSection(n.id)} style={{ display: "flex", alignItems: "center", gap: 9, width: "100%", padding: "9px 16px", border: "none", cursor: "pointer", background: section === n.id ? "#10172a" : "transparent", color: section === n.id ? "#c89838" : "#5a647e", borderLeft: `2px solid ${section === n.id ? "#c89838" : "transparent"}`, textAlign: "left", fontSize: 12.5, fontFamily: "'DM Sans',sans-serif" }}>
              {n.label}
            </button>
          ))}
        </div>
        <div style={{ padding: "12px 16px", borderTop: "1px solid #1c2240", fontSize: 10, color: "#2a3050", lineHeight: 1.5 }}>
          Data stored locally on this device.
        </div>
      </nav>
      {/* Content */}
      <main style={{ flex: 1, overflowY: "auto", padding: "28px 32px", background: "#070b16" }}>
        {section === "vocab" && <VocabSection state={state} update={update} />}
        {section === "home" && <InfoSection key="home" title="País de Origen" fields={HOME_F} data={state.home} onSave={d => update({ home: d })} />}
        {section === "dest" && <InfoSection key="dest" title="País Destino" fields={DEST_F} data={state.dest} onSave={d => update({ dest: d })} />}
        {section === "appts" && <ApptsSection state={state} update={update} />}
        {section === "translate" && <TranslateSection />}
        {section === "profile" && <ProfileSection state={state} update={update} />}
      </main>
    </div>
  );
}
