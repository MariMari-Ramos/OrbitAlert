import { initMenu } from './componentes/menu.js';
import { initConfig } from './componentes/config.js';
import { initTheme } from './componentes/config.js';
import { initContato } from './componentes/contato.js';
import { initFaq } from './componentes/faq.js';

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMenu();
    initConfig();
    initContato();
    initFaq();
});