function imgSlider(selectImage){
  document.querySelector('.starbucks').src = selectImage;
}

function changeCircleColor(color){
  const circle = document.querySelector('.circle');
  circle.style.background = color;
}