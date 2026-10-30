// Screenshot lightbox: the only script on the page. The image morphs out of its plate with a view transition.
const dlg = document.createElement("dialog");
dlg.className = "lightbox";
dlg.setAttribute("aria-label", "Screenshot");
dlg.innerHTML = '<form method="dialog"><button class="close">Close</button></form><img alt=""><p></p>';
document.body.append(dlg);
const big = dlg.querySelector("img");
const cap = dlg.querySelector("p");
const still = matchMedia("(prefers-reduced-motion: reduce)");
let thumb = null, trigger = null;

function morph(update) {
  if (!document.startViewTransition || still.matches) return update();
  document.startViewTransition(update);
}

function open(btn) {
  trigger = btn;
  thumb = btn.querySelector("img");
  big.src = thumb.currentSrc.replace("-720.", "-1440.");
  big.alt = thumb.alt;
  big.width = thumb.width; big.height = thumb.height;
  cap.textContent = btn.closest("figure").querySelector("figcaption")?.textContent || "";
  thumb.style.viewTransitionName = "shot";
  morph(() => { thumb.style.viewTransitionName = ""; big.style.viewTransitionName = "shot"; dlg.showModal(); });
}

function close() {
  if (!dlg.open) return;
  morph(() => {
    big.style.viewTransitionName = "";
    thumb.style.viewTransitionName = "shot";
    dlg.close();
    trigger.focus({ preventScroll: true });
  })?.finished.then(() => { thumb.style.viewTransitionName = ""; });
  if (!document.startViewTransition || still.matches) thumb.style.viewTransitionName = "";
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".plate-open");
  if (btn) open(btn);
});
dlg.addEventListener("cancel", (e) => { e.preventDefault(); close(); });
dlg.addEventListener("submit", (e) => { e.preventDefault(); close(); });
dlg.addEventListener("click", (e) => { if (e.target === dlg) close(); });
