// Mobile menu
const burger = document.getElementById('burger');
const mobile = document.getElementById('mobilemenu');
if (burger && mobile) {
  burger.addEventListener('click', () => mobile.classList.toggle('open'));
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobile.classList.remove('open')));
}

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Utilities
export function money(n){
  try {
    return new Intl.NumberFormat('fr-CA', { style:'currency', currency:'CAD', maximumFractionDigits:0 }).format(n);
  } catch {
    return `${n} $`;
  }
}

export function qs(name){
  const u = new URL(window.location.href);
  return u.searchParams.get(name);
}
export function setQS(params){
  const u = new URL(window.location.href);
  Object.entries(params).forEach(([k,v]) => {
    if (v === null || v === undefined || v === "") u.searchParams.delete(k);
    else u.searchParams.set(k, String(v));
  });
  window.history.replaceState({}, "", u.toString());
}
