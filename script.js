$(function() {
  $('.header__wrapper').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000
  })

  setHeight()

  $(window).on('resize', setHeight)
  
  function setHeight() {
    let garanty = $('.garanty__img')
    let height = $('.garanty__img .main').height()
    garanty.height(height)
  }
  
  let navicon = $('.navicon')
  let navmobile = $('.header__top')

  navicon.on('click', function() {
    $(this).toggleClass('active')
    $('body').toggleClass('active')
    navmobile.toggleClass('active')
  })
})