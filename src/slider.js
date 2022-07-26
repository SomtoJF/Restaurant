let content = document.getElementById('content');

let createSlider = function (){
    let sliderContainer = document.createElement('div');
    sliderContainer.setAttribute('id', 'slider-container');
    return sliderContainer;
};
export default createSlider;