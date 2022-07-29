import "./style.css";
import "./slider.css";
import "./menu.css";
import {default as createNav} from './nav';
import {default as createSlider} from "./slider";
import {default as createHomeContent} from "./homeContent"

let content = document.getElementById('content');

createNav();
content.appendChild(createSlider());
content.appendChild(createHomeContent());