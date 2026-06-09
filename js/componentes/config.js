export function initConfig() {
    const openBtn =
        document.getElementById("openconfig");
    const dropdown =
        document.getElementById("configmenu");
    if (!openBtn || !dropdown) {
        return;
    }
    openBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        dropdown.classList.toggle("ativo");
    });
    dropdown.addEventListener("click", (event) => {
        event.stopPropagation();
    });
    document.addEventListener("click", () => {
        dropdown.classList.remove("ativo");
    });
}

export function initTheme() {
    const themeToggle =
        document.getElementById("themeToggle");
    const savedTheme =
        localStorage.getItem("theme");
    const theme =
        savedTheme || "light";
    document.documentElement.setAttribute(
        "data-theme",
        theme
    );
    if (themeToggle) {
        themeToggle.checked =
            theme === "dark";
        themeToggle.addEventListener(
            "change",
            () => {
                const newTheme =
                    themeToggle.checked
                        ? "dark"
                        : "light";
                document.documentElement.setAttribute(
                    "data-theme",
                    newTheme
                );
                localStorage.setItem(
                    "theme",
                    newTheme
                );
            }
        );
    }
}