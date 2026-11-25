// Google Analytics 4 se carga solo después de que la persona acepte la medición.
(() => {
  const measurementId = 'G-EHGP63E7CP';
  const storageKey = 'beyond-engineering-analytics-consent';
  const privacyUrl = document.currentScript?.dataset.privacyUrl || 'privacidad.html';

  function getChoice() {
    try { return localStorage.getItem(storageKey); } catch { return null; }
  }

  function saveChoice(choice) {
    try { localStorage.setItem(storageKey, choice); } catch { /* La elección dura solo esta página. */ }
  }

  function startAnalytics() {
    if (document.querySelector('script[data-beyond-analytics]')) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId);
    const tag = document.createElement('script');
    tag.async = true;
    tag.dataset.beyondAnalytics = '';
    tag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(tag);
  }

  function showChoice() {
    const style = document.createElement('style');
    style.textContent = `
      .be-analytics-choice{position:fixed;z-index:2147483647;left:16px;right:16px;bottom:16px;max-width:680px;margin:auto;padding:16px 18px;background:#fff;color:#182136;border:2px solid #182136;border-radius:14px;box-shadow:0 12px 35px #0005;font:14px/1.45 system-ui,-apple-system,"Segoe UI",sans-serif}
      .be-analytics-choice p{margin:0 0 12px}.be-analytics-choice a{color:#0039a6;text-decoration:underline}
      .be-analytics-actions{display:flex;flex-wrap:wrap;align-items:center;gap:10px}
      .be-analytics-actions button{font:inherit;font-weight:700;border:1px solid #182136;border-radius:8px;padding:8px 14px;cursor:pointer}
      .be-analytics-actions [data-choice="accepted"]{background:#182136;color:#fff}
      .be-analytics-actions [data-choice="rejected"]{background:#fff;color:#182136}
      .be-analytics-actions button:focus-visible,.be-analytics-choice a:focus-visible{outline:3px solid #e8611a;outline-offset:2px}
    `;
    document.head.appendChild(style);

    const banner = document.createElement('aside');
    banner.className = 'be-analytics-choice';
    banner.setAttribute('aria-label', 'Preferencias de medición');
    banner.innerHTML = `<p>Usamos Google Analytics para conocer las visitas y mejorar esta página. La medición solo se activa si aceptas. Consulta el <a href="${privacyUrl}">aviso de privacidad</a>.</p><div class="be-analytics-actions"><button type="button" data-choice="accepted">Aceptar medición</button><button type="button" data-choice="rejected">Rechazar</button></div>`;
    banner.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-choice]');
      if (!button) return;
      const choice = button.dataset.choice;
      saveChoice(choice);
      banner.remove();
      if (choice === 'accepted') startAnalytics();
    });
    document.body.appendChild(banner);
  }

  const choice = getChoice();
  if (choice === 'accepted') startAnalytics();
  else if (choice !== 'rejected') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', showChoice, { once: true });
    else showChoice();
  }
})();
