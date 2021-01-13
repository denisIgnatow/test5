$(function() {
  $('.header__wrapper').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 2000
  })

  setHeight()

  $(window).on('resize', setHeight)
  
  function setHeight() {
    let garanty = $('.garanty__img')
    let height = $('.garanty__img .main').height()
    garanty.height(height)



    let width = $('.header__middle .container').width() + 30
    $('.header__bottom .header__inner').width(width)
  }
  
  let navicon = $('.navicon')
  let navmobile = $('.header__top')

  navicon.on('click', function() {
    $(this).toggleClass('active')
    $('body').toggleClass('active')
    navmobile.toggleClass('active')
  })
})