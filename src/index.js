import "./style.css";
import "./slider.css";
import {default as createSlider} from "./slider";

let content = document.getElementById('content');

let createNav = (function(){
    let nav = document.createElement('nav');
    let logo = document.createElement('div');
    logo.textContent = 'pizzaPizza';
    logo.setAttribute('id', 'logo');
    let ul = document.createElement('ul');
    let navLinks = ['HOME', 'MENU', 'CONTACT US'];
    let li;
    for(let i = 0; i < 3; i++){
        li = document.createElement('li');
        li.textContent = navLinks[i];
        ul.appendChild(li);
    };
    nav.appendChild(logo);
    nav.appendChild(ul);
    content.appendChild(nav);

})()

content.appendChild(createSlider());