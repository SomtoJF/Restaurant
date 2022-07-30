import pepperoni from './toppings/pepperoni.png';
import cheese from './toppings/cheese.png';
import mushroom from './toppings/mushroom.png';
import tomato from './toppings/tomato.png';
import veggies from './toppings/veggies.png';
import coke from './drinks/coke.png';
import fanta from './drinks/fanta.png';
import juice from './drinks/juice.png';
import smoothie from './drinks/smoothie.png';
import yoghurt from './drinks/yoghurt.png';
import "./menu.css";

let createButton = function () {
    let button = document.createElement('button');
    button.textContent = '+';
    button.style.textAlign = 'center';
    button.addEventListener('click', () => {
        if(button.style.backgroundColor == '#FFA836'){
            button.style.backgroundColor = 'white';
            smallerContainer[i].style.backgroundColor = '#FFA836';
        }
        else{
            button.style.backgroundColor = '#FFA836';
            smallerContainer[i].style.backgroundColor = 'white';
        };
    })
    return button;
};

let createMenu = function (){
    let toppings = [pepperoni, cheese, mushroom, tomato, veggies];
    let sizes = ['Small', 'Medium', 'Large'];
    let drinks = [coke, fanta, juice, smoothie, yoghurt];
    let container = document.createElement('div');
    container.setAttribute('id', 'menu-container');
    for(let i = 0; i < 3; i++){
        let smallerContainer = document.createElement('div');
        let title = document.createElement('div');
        if(i == 0){
            title.textContent = 'Toppings';
            smallerContainer.appendChild(title);
            for(let j = 0; j < toppings.length; j++){
                let toppingsDiv = document.createElement('div');
                toppingsDiv.style.backgroundImage = `url(${toppings[j]})`;
                
                toppingsDiv.addEventListener('click', function (){
                    if(toppingsDiv.style.backgroundColor == 'white'){
                        toppingsDiv.style.backgroundColor = '#FFA836';
                    }
                    else{
                        toppingsDiv.style.backgroundColor = 'white';
                    }
                });
                smallerContainer.appendChild(toppingsDiv);
            };
        };
        if(i == 1){
            title.textContent = 'Sizes';
            smallerContainer.appendChild(title);
            for(let j = 0; j < sizes.length; j++){
                let toppingsDiv = document.createElement('div');
                toppingsDiv.textContent = `${sizes[j]}`;

                toppingsDiv.addEventListener('click', function (){
                    if(toppingsDiv.style.backgroundColor == 'white'){
                        toppingsDiv.style.backgroundColor = '#FFA836';
                    }
                    else{
                        toppingsDiv.style.backgroundColor = 'white';
                    }
                });
                smallerContainer.appendChild(toppingsDiv);
            };
        };
        if(i == 2){
            title.textContent = 'Drinks';
            smallerContainer.appendChild(title);
            for(let j = 0; j < drinks.length; j++){
                let toppingsDiv = document.createElement('div');
                toppingsDiv.style.backgroundImage = `url(${drinks[j]})`;

                toppingsDiv.addEventListener('click', function (){
                    if(toppingsDiv.style.backgroundColor == 'white'){
                        toppingsDiv.style.backgroundColor = '#FFA836';
                    }
                    else{
                        toppingsDiv.style.backgroundColor = 'white';
                    }
                });
                smallerContainer.appendChild(toppingsDiv);
            };
        };
        container.appendChild(smallerContainer);
    };
    return container;
};
export default createMenu;