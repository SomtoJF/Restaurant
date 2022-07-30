import {default as createSlider} from './slider';
import {default as createHomeContent} from './homeContent';
import {default  as createMenu} from './menu';
import {default as createContacts} from './contact';

let createNav = function(){
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
        if(i == 0){
            li.addEventListener('click', () =>{
                content.innerHTML = "";
                createNav();
                content.appendChild(createSlider());
                content.appendChild(createHomeContent());
            });
        };
        if(i == 1){
            li.addEventListener('click', () =>{
                content.innerHTML = "";
                createNav();
                content.appendChild(createSlider());
                content.appendChild(createMenu());
            });
        };
        if(i == 2){
            li.addEventListener('click', () => {
                content.innerHTML = "";
                createNav();
                content.appendChild(createContacts());
            })
        };
        ul.appendChild(li);
    };
    nav.appendChild(logo);
    nav.appendChild(ul);
    content.appendChild(nav);

};
export default createNav;