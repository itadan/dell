document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Сделать пагинацию кликабельной
    },
    navigation: {
      nextEl: '.swiper-button-next',
    },
    on: {
      init: function () {
        // При инициализации слайдера, показать текущий слайд
        var initialSlide = this.slides[this.activeIndex];
        initialSlide.style.opacity = 1;
        initialSlide.style.transform = 'translateX(0)';
      },
      slideChange: function () {
        // При смене слайда скрыть предыдущий и показать текущий
        var previousSlide = this.slides[this.previousIndex];
        var currentSlide = this.slides[this.activeIndex];
        previousSlide.style.opacity = 0;
        previousSlide.style.transform = 'translateX(20px)';
        currentSlide.style.opacity = 1;
        currentSlide.style.transform = 'translateX(0)';
      },
    },
  });
});
