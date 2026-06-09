import { initMenu } from './componentes/menu.js';
import { initConfig } from './componentes/config.js';
import { initTheme } from './componentes/config.js';

document.addEventListener("DOMContentLoaded", () => {

    initTheme();

    initMenu();

    initConfig();

});