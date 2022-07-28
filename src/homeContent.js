import image1 from './image1.png';

function createHomeContent(){
    let homeContent = document.createElement('div');
    homeContent.setAttribute('id', 'home-content');
    let div;
    for(let i = 0; i < 3; i++){
        div = document.createElement('div');
        if(i == 0){
            div.innerHTML = '<h2>...Under 30 minutes delivery</h2>'
        };
        if(i == 1){
            div.style.backgroundImage = `url(${image1})`;
            div.style.backgroundSize = 'contain';
            div.style.backgroundRepeat = 'no-repeat';
            div.style.backgroundPosition = 'center';
        };
        if(i == 2){
            div.textContent = 'This is some dummy text. Behave like the text is very interesting. Say "WOW" so others come and see this!!';
        }
        homeContent.appendChild(div);
    };
    return homeContent;
};
export default createHomeContent;