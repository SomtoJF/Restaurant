let createMenu = function (){
    let container = document.createElement('div');
    container.setAttribute('id', 'menu-container');
    for(let i = 0; i < 3; i++){
        let smallerContainer = document.createElement('div');
        container.appendChild(smallerContainer);
    };
    return container;
};
export default createMenu;