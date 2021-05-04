// Home Swipe Slides
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 5,
  // freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  allowTouchMove: false,
})
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,

  thumbs: {
    swiper: galleryThumbs,
  },
})

// Animate on scroll
AOS.init({
  once: true,
})

// Menu
const menuLis = document.querySelectorAll('.menu-li')
const menuItems = document.querySelectorAll('.menu-item')

menuItems.forEach(function (menuItems_item) {
  menuItems_item.addEventListener('click', function () {
    menuItems.forEach(function (menuItems_item) {
      menuItems_item.parentElement.classList.remove('active')
    })
    menuItems_item.parentElement.classList.toggle('active')
    menuItems_item.addEventListener('click', function () {
      menuItems_item.parentElement.classList.toggle('active')
    })
  })
})
menuItems.forEach(function (menuItems_item) {
  menuItems_item.addEventListener('mouseenter', function () {
    menuItems.forEach(function (menuItems_item) {
      menuItems_item.parentElement.classList.remove('active')
    })
    menuItems_item.parentElement.classList.toggle('active')
  })
})

// ******* Search Start
const searchBtn = document.querySelector('.search-li')
const searchModal = document.querySelector('.search-popup')
const closeBtn = document.querySelector('.close-btn')
const cfd = document.querySelector('.cfd')
// open
searchBtn.addEventListener('click', function () {
  searchModal.style.marginTop = '0'
  cfd.style.zIndex = 1
})
// close
closeBtn.addEventListener('click', function () {
  searchModal.style.marginTop = '-100%'
  cfd.style.zIndex = 9999
})
//outside click listener
window.addEventListener('click', function (e) {
  if (e.target == searchModal) {
    searchModal.style.marginTop = '-100%'
    cfd.style.zIndex = 9999
  }
})
// ******* Search End

// Tabs homepage
const btns = document.querySelectorAll('.btn-tab')
const tabCont = document.querySelector('.tabs-container')
const tabsContent = document.querySelectorAll('.tab-content')

tabCont.addEventListener('click', function (e) {
  const id = e.target.dataset.id
  if (id) {
    //remove active from all
    btns.forEach(function (btn) {
      btn.classList.remove('active')
      e.target.classList.add('active')
    })
    //hide all content
    tabsContent.forEach(function (content) {
      content.classList.remove('active')
    })
    const element = document.getElementById(id)
    element.classList.add('active')
  }
})

// Tel input
const input = document.querySelector('#tel')
const intl = window.intlTelInput(input, {
  utilsScript:
    'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js',
  initialCountry: 'cy',
  separateDialCode: true,
})

// Scroll to top
const scrollbtn = document.querySelector('.scrolltotop')
window.onscroll = function () {
  scrollFunction()
}
function scrollFunction() {
  if (
    document.body.scrollTop > 680 ||
    document.documentElement.scrollTop > 680
  ) {
    scrollbtn.style.display = 'block'
  } else {
    scrollbtn.style.display = 'none'
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
