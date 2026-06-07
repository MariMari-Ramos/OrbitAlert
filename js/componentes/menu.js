export function initMenu() {
    const menuBtn =
        document.getElementById("menuBtn");

    const menuLateral =
        document.getElementById("menuLateral");

    menuBtn.addEventListener("click", () => {

        menuLateral.classList.toggle("ativo");

    });
}