// etre a l ecoute de tout les buttons
const btns = document.querySelectorAll(".btn-modale");
const modaleEquipement = document.querySelector(".bloc-modale");
const fermetureModale = document.querySelector(".fermeture-modale");
const imgIndex = document.querySelector(".bloc-modale img");

// des aue l on va etre en dessous de 850px ca va retourner false et l'affichage des images ne sera pas disponible
if (window.matchMedia("(min-width: 850px)").matches) {
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      imgIndex.src = `./assets/pictures/img${e.target.getAttribute(
        "data-index"
      )}-equip.jpg`;
      modaleEquipement.classList.add("active-modale");
    });
  });

  modaleEquipement.addEventListener("click", () => {
    modaleEquipement.classList.remove("active-modale");
  });
}

//anim NAVBAR

const nav = document.querySelector("nav");

// si on scroll plus de 30 px sur y on enleve la classe

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    nav.classList.add("anim-nav");
  } else {
    nav.classList.remove("anim-nav");
  }
});
