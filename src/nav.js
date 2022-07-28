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
        li.addEventListener('click', () => {
            content.innerHTML = "";
            createNav();
            if(i < 2){
                content.appendChild(createSlider());
            };
        })
        ul.appendChild(li);
    };
    nav.appendChild(logo);
    nav.appendChild(ul);
    content.appendChild(nav);

};
export default createNav;