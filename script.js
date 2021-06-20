function imgSlider(selectImage){
  document.querySelector('.starbucks').src = selectImage;
}

function changeCircleColor(color){
  const circle = document.querySelector('.circle');
  circle.style.background = color;
}

function toggleMenu(){
  let menuToggle = document.querySelector('.toggle');
  let navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}