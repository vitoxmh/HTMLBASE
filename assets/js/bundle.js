(()=>{"use strict";document.querySelectorAll(".c-select__selection").forEach((e=>{null==e||e.addEventListener("click",(t=>{e.closest(".c-select__container").classList.add("c-select__display")}))})),document.querySelectorAll(".c-select__options li").forEach((e=>{null==e||e.addEventListener("click",(t=>{e.closest(".c-select").querySelector('input[type-ui="select"]').setAttribute("value",e.getAttribute("value")),e.closest(".c-select__container").classList.remove("c-select__display"),e.closest(".c-select").querySelector(".c-select__selection").textContent=e.textContent}))}))})();