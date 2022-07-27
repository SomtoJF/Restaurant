let createSlider = function (){
    let sliderContainer = document.createElement('div');
    sliderContainer.setAttribute('id', 'slider-container');
    for(let i = 0; i < 5; i++){
        let sliderItem = document.createElement('div');
        sliderContainer.appendChild(sliderItem);
    }
    return sliderContainer;
};
export default createSlider;