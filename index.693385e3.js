(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),openModalBtnm:document.querySelector("[data-modal-openm]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("visually-hidden")}e.openModalBtn.addEventListener("click",t),e.openModalBtnm.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),o=document.querySelector("[data-body]");e.addEventListener("click",(()=>{const n="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),o.classList.toggle("no-scroll")}))})(),(()=>{const e=document.getElementById("link-menu"),t=document.querySelector("[data-menu]"),o=document.querySelector("[data-menu-button]"),n=document.querySelector("[data-body]");e.addEventListener("click",(()=>{o.classList.toggle("is-open"),t.classList.toggle("is-open"),n.classList.toggle("no-scroll")}))})();const e=document.querySelectorAll('a[href*="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const o=t.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}));
//# sourceMappingURL=index.693385e3.js.map
