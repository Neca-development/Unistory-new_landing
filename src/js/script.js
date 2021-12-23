//DOM 
const slider      = document.querySelector('.slider'),
      slidesArray = slider.querySelectorAll('.slide-block'),
      previous    = slider.querySelector('.slider__controls_prev'),
      next        = slider.querySelector('.slider__controls_next'),
      pagination  = slider.querySelector('.slider__pagination');
      
//переменные
let slideCount = 2,
    hideQueue = 0;

//обработчик нажатий
function ChangeSlides() {
  previous.addEventListener('click', ()=> {
    slideCount--;
    ResetCount();
    SwitchDots();
  });
  next.addEventListener('click', ()=> {
    slideCount++;
    ResetCount();
    SwitchDots();
  });
}

//сброс значений при выходе за пределы (временное решение)
function ResetCount() {
  if (slideCount < 0) {
    slideCount = 2;
    ShowSlides();
  } else if (slideCount > 2) {
    slideCount = 0;
    ShowSlides();
  } else {
    ShowSlides();
  }
}

//показ слайдов (добавить/убрать класс активности)
function ShowSlides() {
  slidesArray.forEach((slide, id)=> {
    if (id == slideCount) {
      slide.classList.add('slide-block_active');
      HideSlides()
    } else {
      slide.classList.remove('slide-block_active');
      HideSlides()
    }
  });
}

//функция для корректного отображения свёрнутых слайдов
function HideSlides() {
  slidesArray.forEach((slide, id) => {
    if (id < slideCount) {
      hideQueue = (id + 1);
      slide.style.zIndex = hideQueue;
      console.log(hideQueue);
    } else if (id == slideCount) {
      hideQueue = (id + 2);
      slide.style.zIndex = hideQueue;
      console.log(hideQueue);
    } else if (id > (slideCount)) {
      hideQueue--;
      slide.style.zIndex = hideQueue;
      console.log(hideQueue);
    }
  });
}

//инициализаия при открытии страницы
ChangeSlides();

//генерация навигационной шкалы слева (оптимизировать при добавлении новых слайдов)
function GeneratePagination() {
  const div = document.createElement('span');
  for (let i = 0; i < slidesArray.length; i++) {
    pagination.append(div.cloneNode(true));
  }
  const dots = pagination.querySelectorAll('span');
  dots.forEach((dot) => {
      dot.classList.add('slider__dot');
      console.log(dot);
  });
  SwitchDots();
}

//инициализаия при открытии страницы
GeneratePagination();

//функция переключения элементов в навигационной шкале слева
function SwitchDots() {
  const dots = pagination.querySelectorAll('span');
  dots.forEach((dot, id) => {
    if (id == slideCount) {
      dot.classList.add('slider__dot_active');
    } else {
      dot.classList.remove('slider__dot_active');
    }
  });
}

