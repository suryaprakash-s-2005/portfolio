const DEFAULT_API_URL = 'https://surya-prakash-s-portfolio-backend.onrender.com';

function normalizeBaseUrl(value) {
  const raw = (value ?? '').trim();
  const base = raw || DEFAULT_API_URL;
  return base.endsWith('/') ? base.slice(0, -1) : base;
}

export const API_BASE_URL = normalizeBaseUrl(import.meta.env.VITE_API_URL);

export function apiUrl(path) {
  const p = String(path || '');
  if (!p) return API_BASE_URL;
  return `${API_BASE_URL}${p.startsWith('/') ? '' : '/'}${p}`;
}

