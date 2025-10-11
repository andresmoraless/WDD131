const menuButton = document.querySelector("#menuButton");
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}
menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    if(window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide")
    }
}

handleResize();
window.addEventListener("resize", handleResize);


const gallery = document.querySelector(".gallery");
function viewHandler(event) {
  const clickedImage = event.target.closest("img");
  const src = clickedImage.getAttribute("src");
  const alt = clickedImage.getAttribute("alt");
  const fullSrc = src.split("-")[0] + "-full.jpeg";
  const modal = document.createElement("dialog");
  modal.innerHTML = `
    <img src="${fullSrc}" alt="${alt}">
    <button class="close-viewer">X</button>
  `;

  document.body.appendChild(modal);
  modal.showModal();

  const closeBtn = modal.querySelector(".close-viewer");
  closeBtn.addEventListener("click", () => {
    modal.close(); 
  });
}

gallery.addEventListener("click", viewHandler);