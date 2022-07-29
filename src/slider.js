import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
let createSlider = function (){
    let sliderContainer = document.createElement('div');
    sliderContainer.setAttribute('id', 'slider-container');

    let backgroundImages = [image1, image2, image3, image4, image5];
    let pizzaTypes = ['Pepperoni', 'Cheese', 'Veggie', 'Vegan', 'Chicken'];
    for(let i = 0; i < 5; i++){
        let sliderItem = document.createElement('div');
        sliderItem.style.backgroundImage = `url(${backgroundImages[i]})`;
        let pizza = document.createElement('button');
        pizza.textContent = pizzaTypes[i]; 
        sliderItem.appendChild(pizza);
        sliderContainer.appendChild(sliderItem);
    }
    return sliderContainer;
};
export default createSlider;