// //DOM 
// const slider      = document.querySelector('.slider'),
//       slidesArray = slider.querySelectorAll('.slide-block'),
//       previous    = slider.querySelector('.slider__controls_prev'),
//       next        = slider.querySelector('.slider__controls_next'),
//       pagination  = slider.querySelector('.slider__pagination');
      
// //переменные
// let slideCount = (slidesArray.length - 1),
//     hideQueue = 0,
//     slidesQuantity = slidesArray.length;

// //обработчик нажатий
// function ChangeSlides() {
//   previous.addEventListener('click', ()=> {
//     slideCount--;
//     ResetCount();
//     SwitchDots();
//   });
//   next.addEventListener('click', ()=> {
//     slideCount++;
//     ResetCount();
//     SwitchDots();
//   });
// }

// //сброс значений при выходе за пределы (временное решение)
// function ResetCount() {
//   if (slideCount < 1) {
//     // slideCount = (slidesQuantity - 1);
//     ShowSlides();
//     previous.disabled = true,
//     previous.style.opacity = 0.5
//   } else if (slideCount > (slidesArray.length - 2)) {
//     // slideCount = 0;
//     ShowSlides();
//     next.disabled = true,
//     next.style.opacity = 0.5
//   } else {
//     ShowSlides();
//     previous.disabled = false,
//     previous.style.opacity = 1
//     next.disabled = false,
//     next.style.opacity = 1
//   }
// }
// ResetCount();

// //показ слайдов (добавить/убрать класс активности)
// function ShowSlides() {
//   slidesArray.forEach((slide, id)=> {
//     if (id == slideCount) {
//       slide.classList.add('slide-block_active');
//       HideSlides()
//     } else {
//       slide.classList.remove('slide-block_active');
//       HideSlides()
//     }
//   });
// }

// //функция для корректного отображения свёрнутых слайдов
// function HideSlides() {
//   slidesArray.forEach((slide, id) => {
//     if (id < slideCount) {
//       hideQueue = (id + (slideCount.length));
//       slide.style.zIndex = hideQueue;
//       console.log(hideQueue);
//     } else if (id == slideCount) {
//       hideQueue = (id +  slidesQuantity);
//       slide.style.zIndex = hideQueue;
//       console.log(hideQueue);
//     } else if (id > (slideCount)) {
//       hideQueue--;
//       slide.style.zIndex = hideQueue;
//       console.log(hideQueue);
//     }
//   });
// }

// //инициализаия при открытии страницы
// ChangeSlides();

// //генерация навигационной шкалы слева (оптимизировать при добавлении новых слайдов)
// function GeneratePagination() {
//   const div = document.createElement('span');
//   for (let i = 0; i < slidesArray.length; i++) {
//     pagination.append(div.cloneNode(true));
//   }
//   const dots = pagination.querySelectorAll('span');
//   dots.forEach((dot) => {
//       dot.classList.add('slider__dot');
//       console.log(dot);
//   });
//   SwitchDots();
// }

// //инициализаия при открытии страницы
// GeneratePagination();

// //функция переключения элементов в навигационной шкале слева
// function SwitchDots() {
//   const dots = pagination.querySelectorAll('span');
//   dots.forEach((dot, id) => {
//     if (id == slideCount) {
//       dot.classList.add('slider__dot_active');
//     } else {
//       dot.classList.remove('slider__dot_active');
//     }
//   });
// }

// //изменение input'a

// const labels = document.querySelectorAll('label');
// const inputs = document.querySelectorAll('input');

// inputs.forEach((input, id)=> {
//   input.addEventListener('change', ()=> {
//     labels.forEach((label, labelId)=> {
//       if (id == labelId && (input.formTarget.value != '')) {
//         label.style.marginTop = '-42px';
//         label.style.fontSize = '18px';
//         label.style.lineHeight = '82px';
//       }
//     })
//   })
// });

//выбор в portfolio

const tags = document.querySelectorAll('li');
let tagId = 0;

function InitTags() {
  tags.forEach((tag, id)=> {
    if (id == tagId) {
      tag.classList.add('active');
    } else {
      tag.classList.remove('active');
    }
  });
}
InitTags();