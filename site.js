/* Shared by every page. Pages in a subfolder set  window.ROOT = "../"  before loading this file. */
const ROOT = window.ROOT || "";
const projectUrl = p => ROOT + (p.page || `project.html?id=${p.id}`);
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const byId = id => PROJECTS.find(p => p.id === id);
const li = a => a.map(x => `<li>${x}</li>`).join("");
const vt = fn => (document.startViewTransition && !reduced) ? document.startViewTransition(fn) : (fn(), null);
const params = new URLSearchParams(location.search);

function shapePath(lobes, amp = 0.08, r = 40, rot = 0) {
  const n = 288; let d = "";
  for (let i = 0; i <= n; i++) {
    const t = (i / n) * Math.PI * 2, rr = r * (1 + amp * Math.cos(lobes * (t - rot)));
    d += (i ? "L" : "M") + (50 + rr * Math.cos(t)).toFixed(2) + " " + (50 + rr * Math.sin(t)).toFixed(2);
  }
  return d + "Z";
}
/* Image, or a neutral placeholder shape until you add one */
/* Optional per-project framing in projects.js:
     coverPos  "left center" etc. (which part of the image to keep when it's cropped)
     coverFit  "contain" for logos, shown whole on coverBg instead of cropped */
function cover(p, cls = "", src = p.cover, label = "Add a cover image") {
  const isCover = src && src === p.cover;
  const fit = isCover && p.coverFit === "contain" ? " contain" : "";
  const style = isCover ? [p.coverBg && `background:${p.coverBg}`, p.coverPos && `--pos:${p.coverPos}`].filter(Boolean).join(";") : "";
  return `<div class="cover ${cls}${fit}"${style ? ` style="${style}"` : ""}>${src
    ? `<img src="${ROOT}${src}" alt="" loading="lazy">`
    : `<svg viewBox="0 0 100 100" aria-hidden="true"><path d="${shapePath(p.lobes, .08, 40, p.lobes * .1)}"/></svg><span class="ph">${label}</span>`}</div>`;
}

/* ===== External links and PDFs (résumé) open in a new tab =====
   Covers links written in the HTML and ones added later by scripts. */
function openExternalInNewTab(scope = document) {
  scope.querySelectorAll("a[href]").forEach(a => {
    const href = a.getAttribute("href");
    if (/^(mailto:|tel:|#)/.test(href)) return;
    const url = new URL(href, location.href);
    const external = /^https?:$/.test(url.protocol) && url.origin !== location.origin;
    if (external || /\.pdf$/i.test(url.pathname)) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  });
}

/* ===== Animated scroll for same-page links (Work, About, Contact, "On this page") ===== */
let scrollAnim = 0;
const cancelScroll = () => cancelAnimationFrame(scrollAnim);
["wheel", "touchstart", "keydown"].forEach(ev => addEventListener(ev, cancelScroll, { passive: true }));

function scrollToTarget(el) {
  const bar = document.querySelector(".top");
  const offset = (bar ? bar.offsetHeight : 0) + 16;
  const end = el ? Math.max(0, el.getBoundingClientRect().top + scrollY - offset) : 0;
  cancelScroll();
  if (reduced) return scrollTo(0, end);
  const start = scrollY, dist = end - start;
  const dur = Math.min(1100, 450 + Math.abs(dist) * 0.25);   // longer trips take a little longer
  const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  let t0;
  const step = now => {
    t0 ??= now;
    const t = Math.min(1, (now - t0) / dur);
    scrollTo(0, start + dist * ease(t));
    if (t < 1) scrollAnim = requestAnimationFrame(step);
  };
  scrollAnim = requestAnimationFrame(step);
}

document.addEventListener("click", e => {
  const a = e.target.closest("a[href]");
  if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const url = new URL(a.getAttribute("href"), location.href);
  if (url.pathname !== location.pathname || url.search !== location.search || a.target === "_blank") return;
  if (!url.hash && a.getAttribute("href") !== "#") return;
  const el = url.hash && url.hash !== "#" ? document.getElementById(decodeURIComponent(url.hash.slice(1))) : null;
  if (url.hash && url.hash !== "#" && !el) return;
  e.preventDefault();
  scrollToTarget(el);
  history.pushState(null, "", el ? url.hash : location.pathname + location.search);
  if (el) { el.setAttribute("tabindex", "-1"); el.focus({ preventScroll: true }); }
});

/* ===== Image strip: back/forward buttons and an image count under a .strip =====
   Markup: <div class="strip-wrap" data-gallery="Name"><div class="strip"><button><img></button>...</div></div> */
function initStrip(wrap) {
  const strip = wrap.querySelector(".strip"), n = strip.querySelectorAll("img").length;
  const controls = document.createElement("div");
  controls.className = "strip-controls";
  controls.innerHTML = `<span class="count">${n} image${n === 1 ? "" : "s"}</span>
    <button class="icon-btn" type="button" data-dir="-1" aria-label="Scroll ${wrap.dataset.gallery} gallery back"><span class="msr" aria-hidden="true">arrow_back</span></button>
    <button class="icon-btn" type="button" data-dir="1" aria-label="Scroll ${wrap.dataset.gallery} gallery forward"><span class="msr" aria-hidden="true">arrow_forward</span></button>`;
  wrap.append(controls);
  const [back, fwd] = controls.querySelectorAll("button");
  const sync = () => {
    back.disabled = strip.scrollLeft < 4;
    fwd.disabled = strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 4;
    controls.hidden = back.disabled && fwd.disabled && n < 2;
  };
  controls.addEventListener("click", e => { const b = e.target.closest("[data-dir]"); if (b) strip.scrollBy({ left: strip.clientWidth * .8 * b.dataset.dir }); });
  strip.addEventListener("scroll", sync, { passive: true });
  addEventListener("resize", sync);
  strip.querySelectorAll("img").forEach(img => img.addEventListener("load", sync));
  sync();
}

function initChrome() {
  const bar = document.querySelector(".top");
  addEventListener("scroll", () => bar.classList.toggle("scrolled", scrollY > 8), { passive: true });
  openExternalInNewTab();
}
