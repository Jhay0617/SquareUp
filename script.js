window.onload = function () {
  slideMin();
  slideMax();
};

const container = document.querySelectorAll('.faq-card');
const minVal = document.querySelector('.min-val');
const maxVal = document.querySelector('.max-val');
const minToolTip = document.querySelector('.min-tooltip');
const maxToolTip = document.querySelector('.max-tooltip');
const range = document.querySelector('.slider-track');
const navbar = document.querySelector('.navbar');
const navBtn = document.querySelector('.navbar-btn');

const minGap = 0;
const sliderMinValue = parseInt(minVal.min);
const sliderMaxValue = parseInt(maxVal.max);

window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    // Adjust '50' to your desired scroll threshold
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
navBtn.addEventListener('click', () => {
  console.log('click');
  navbar.classList.toggle('active');
});
function slideMin() {
  let gap = parseInt(maxVal.value) - parseInt(minVal.value);
  if (gap <= minGap) {
    minVal.value = parseInt(maxVal.value) - minGap;
  }
  minToolTip.innerHTML = `$` + minVal.value;
  setArea();
}
function slideMax() {
  let gap = parseInt(maxVal.value) - parseInt(minVal.value);
  if (gap <= minGap) {
    minVal.value = parseInt(minVal.value) + minGap;
  }
  maxToolTip.innerHTML = `$` + maxVal.value;
  setArea();
}

function setArea() {
  range.style.left = (minVal.value / sliderMaxValue) * 100 + '%';

  minToolTip.style.left = (minVal.value / sliderMaxValue) * 100 + '%';

  range.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + '%';

  maxToolTip.style.right = 92 - (maxVal.value / sliderMaxValue) * 100 + '%';
}
container.forEach(el =>
  el.addEventListener('click', function (e) {
    const test = el.lastElementChild;
    const test2 = test.firstElementChild;

    if (e.target.classList.contains('faq-btn')) {
      e.target.classList.toggle('btn-rotate');
      el.firstElementChild.classList.toggle('active');
      test2.firstElementChild.classList.toggle('active');
    }
    if (
      e.target.classList.contains('faq-btn') &&
      test.lastElementChild.style.maxHeight
    ) {
      test.lastElementChild.style.maxHeight = null;
    } else if (e.target.classList.contains('faq-btn')) {
      test.lastElementChild.style.maxHeight = 102 + 'px';
    }
  })
);
