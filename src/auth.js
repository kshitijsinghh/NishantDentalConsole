const ALLOWED_EMAILS = (import.meta.env.VITE_ALLOWED_EMAILS || '')
  .split(',')
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

const SESSION_KEY = 'clinic_auth';
const TTL_MS = 24 * 60 * 60 * 1000;

export function isAllowed(email) {
  return ALLOWED_EMAILS.includes(email.toLowerCase());
}

export function getStoredUser() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const stored = JSON.parse(raw);
    if (!stored || !stored.user || !stored.user.email) { localStorage.removeItem(SESSION_KEY); return null; }
    if (Date.now() - stored.ts > TTL_MS) { localStorage.removeItem(SESSION_KEY); return null; }
    if (!isAllowed(stored.user.email)) { localStorage.removeItem(SESSION_KEY); return null; }
    return stored.user;
  } catch {
    return null;
  }
}

export function storeUser(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ user, ts: Date.now() }));
}

export function clearUser() {
  localStorage.removeItem(SESSION_KEY);
}

export function getClientId() {
  return import.meta.env.VITE_GOOGLE_CLIENT_ID || '';
}
