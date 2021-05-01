window.addEventListener('DOMContentLoaded', function() {


// Dropdown menu

let secondaryMenuButtons = [];
let secondaryMenuLists = [];
let btnIndex;

document.querySelectorAll('.header__submenu-list').forEach(function (el) {
  secondaryMenuLists.push(el)
})

document.querySelectorAll('.header__secondary-menu-btn').forEach(function (el) {

  secondaryMenuButtons.push(el)

  el.addEventListener('click', function(eve) {
    const click = eve.target
  
    for (let menuBtn of secondaryMenuButtons) {
  
      if (click == menuBtn) {
        menuBtn.classList.toggle('header__secondary-menu-btn--active')
      }
  
      if (click !== menuBtn) {
        menuBtn.classList.remove('header__secondary-menu-btn--active')
      }
    }

    for (let menuBtnIndex in secondaryMenuButtons) {
      if (click == secondaryMenuButtons[menuBtnIndex]) {
        btnIndex = menuBtnIndex
      }
    }

    for (let menuList of secondaryMenuLists) {
      if (menuList == secondaryMenuLists[btnIndex]) {
        menuList.classList.toggle('header__submenu-list--active')
      }

      if (menuList !== secondaryMenuLists[btnIndex]) {
        menuList.classList.remove('header__submenu-list--active')
      }
    }
  })
})









  // document.querySelector('.header__secondary-menu-btn--one').addEventListener('click', function(eve) {
  //   eve.target.classList.toggle('header__secondary-menu-btn--active')

  //   document.querySelector('.header__secondary-menu-btn--two').classList.remove('header__secondary-menu-btn--active')
  //   document.querySelector('.header__secondary-menu-btn--three').classList.remove('header__secondary-menu-btn--active')
  //   document.querySelector('.header__secondary-menu-btn--four').classList.remove('header__secondary-menu-btn--active')
  //   document.querySelector('.header__secondary-menu-btn--five').classList.remove('header__secondary-menu-btn--active')

  //   document.querySelector('.header__submenu-list--one').classList.toggle('header__submenu-list--active')
  //   document.querySelector('.header__submenu-list--two').classList.remove('header__submenu-list--active')
  //   document.querySelector('.header__submenu-list--three').classList.remove('header__submenu-list--active')
  //   document.querySelector('.header__submenu-list--four').classList.remove('header__submenu-list--active')
  //   document.querySelector('.header__submenu-list--five').classList.remove('header__submenu-list--active')
  // })

  // document.querySelector('.header__secondary-menu-btn--two').addEventListener('click', function(eve) {
  //   eve.target.classList.toggle('header__secondary-menu-btn--active')

  //   document.querySelector('.header__secondary-menu-btn--one').classList.remove('header__secondary-menu-btn--active')
  //   document.querySelector('.header__secondary-menu-btn--three').classList.remove('header__secondary-menu-btn--active')
  //   document.querySelector('.header__secondary-menu-btn--four').classList.remove('header__secondary-menu-btn--active')
  //   document.querySelector('.header__secondary-menu-btn--five').classList.remove('header__secondary-menu-btn--active')

  //   document.querySelector('.header__submenu-list--two').classList.toggle('header__submenu-list--active')
  //   document.querySelector('.header__submenu-list--one').classList.remove('header__submenu-list--active')
  //   document.querySelector('.header__submenu-list--three').classList.remove('header__submenu-list--active')
  //   document.querySelector('.header__submenu-list--four').classList.remove('header__submenu-list--active')
  //   document.querySelector('.header__submenu-list--five').classList.remove('header__submenu-list--active')
  // })

  // document.querySelector('.header__secondary-menu-btn--three').addEventListener('click', function(eve) {
  //   eve.target.classList.toggle('header__secondary-menu-btn--active')

  //   document.querySelector('.header__secondary-menu-btn--two').classList.remove('header__secondary-menu-btn--active')
  //   document.querySelector('.header__secondary-menu-btn--one').classList.remove('header__secondary-menu-btn--active')
  //   document.querySelector('.header__secondary-menu-btn--four').classList.remove('header__secondary-menu-btn--active')
  //   document.querySelector('.header__secondary-menu-btn--five').classList.remove('header__secondary-menu-btn--active')

  //   document.querySelector('.header__submenu-list--three').classList.toggle('header__submenu-list--active')
  //   document.querySelector('.header__submenu-list--one').classList.remove('header__submenu-list--active')
  //   document.querySelector('.header__submenu-list--two').classList.remove('header__submenu-list--active')
  //   document.querySelector('.header__submenu-list--four').classList.remove('header__submenu-list--active')
  //   document.querySelector('.header__submenu-list--five').classList.remove('header__submenu-list--active')
  // })

  // document.querySelector('.header__secondary-menu-btn--four').addEventListener('click', function(eve) {
  //   eve.target.classList.toggle('header__secondary-menu-btn--active')

  //   document.querySelector('.header__secondary-menu-btn--two').classList.remove('header__secondary-menu-btn--active')
  //   document.querySelector('.header__secondary-menu-btn--three').classList.remove('header__secondary-menu-btn--active')
  //   document.querySelector('.header__secondary-menu-btn--one').classList.remove('header__secondary-menu-btn--active')
  //   document.querySelector('.header__secondary-menu-btn--five').classList.remove('header__secondary-menu-btn--active')

  //   document.querySelector('.header__submenu-list--four').classList.toggle('header__submenu-list--active')
  //   document.querySelector('.header__submenu-list--two').classList.remove('header__submenu-list--active')
  //   document.querySelector('.header__submenu-list--three').classList.remove('header__submenu-list--active')
  //   document.querySelector('.header__submenu-list--one').classList.remove('header__submenu-list--active')
  //   document.querySelector('.header__submenu-list--five').classList.remove('header__submenu-list--active')
  // })

  // document.querySelector('.header__secondary-menu-btn--five').addEventListener('click', function(eve) {
  //   eve.target.classList.toggle('header__secondary-menu-btn--active')

  //   document.querySelector('.header__secondary-menu-btn--two').classList.remove('header__secondary-menu-btn--active')
  //   document.querySelector('.header__secondary-menu-btn--three').classList.remove('header__secondary-menu-btn--active')
  //   document.querySelector('.header__secondary-menu-btn--four').classList.remove('header__secondary-menu-btn--active')
  //   document.querySelector('.header__secondary-menu-btn--one').classList.remove('header__secondary-menu-btn--active')

  //   document.querySelector('.header__submenu-list--five').classList.toggle('header__submenu-list--active')
  //   document.querySelector('.header__submenu-list--two').classList.remove('header__submenu-list--active')
  //   document.querySelector('.header__submenu-list--three').classList.remove('header__submenu-list--active')
  //   document.querySelector('.header__submenu-list--four').classList.remove('header__submenu-list--active')
  //   document.querySelector('.header__submenu-list--one').classList.remove('header__submenu-list--active')
  // })



  function closeMenu() {
    document.querySelectorAll('.header__submenu-list').forEach(function(el) {
      el.classList.remove('header__submenu-list--active')
    })
    document.querySelectorAll('.header__secondary-menu-btn').forEach(function(el) {
      el.classList.remove('header__secondary-menu-btn--active')
    })
  }
  
  document.onmouseup=function(event) {
    var target = event.target;

    if (target.className != 'header__secondary-menu-btn header__secondary-menu-btn--one header__secondary-menu-btn--active' && target.className != 'header__secondary-menu-btn header__secondary-menu-btn--two header__secondary-menu-btn--active' && target.className != 'header__secondary-menu-btn header__secondary-menu-btn--three header__secondary-menu-btn--active' && target.className != 'header__secondary-menu-btn header__secondary-menu-btn--four header__secondary-menu-btn--active' && target.className != 'header__secondary-menu-btn header__secondary-menu-btn--five header__secondary-menu-btn--active') {
      closeMenu()  
    }
  }

  


// Smooth anchors

  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function(ev) {
      ev.preventDefault();

      document.body.classList.remove('body_menu--active')
      
      const blockID = anchor.getAttribute('href')

      console.log(blockID)
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }



// Gallery modals

document.querySelectorAll('.section-gallery__slide-link').forEach(function (el) {
  el.addEventListener('click', function (ev) {
    const modal = ev.currentTarget.dataset.link

    console.log(modal)

    document.body.classList.add('body_menu--active')

    document.querySelector('.section-gallery__modals').classList.add('section-gallery__modals--active')

    document.querySelector(`[data-modal="${modal}"]`).classList.add('section-gallery__modal--active')
  })
})


function closeModal() {
  document.body.classList.remove('body_menu--active')

  document.querySelector('.section-gallery__modals').classList.remove('section-gallery__modals--active')

  document.querySelectorAll('.section-gallery__modal').forEach(function (elem) {
    elem.classList.remove('section-gallery__modal--active')
  })
}


document.querySelectorAll('.section-gallery__modal-btn').forEach(function(el) {
  el.addEventListener('click', function (ev) {

    closeModal()

  })
})

document.querySelector('.section-gallery__modal-overlay').addEventListener('click', function(ev) {
  const click = ev.target

  if (click.className !== 'section-gallery__modal-img' && click.className !== 'section-gallery__modal-content' && click.className !== 'section-gallery__modal-heading section-gallery__modal-heading--author' && click.className !== 'section-gallery__modal-heading section-gallery__modal-heading--named' && click.className !== 'section-gallery__modal-signature' && click.className !== 'section-gallery__modal-description') {

    closeModal()

  }
})







// Catalog lang tabs

  document.querySelectorAll('.section-catalog__tab-btn').forEach(function(elTabBtn) {
    elTabBtn.addEventListener('click', function(ev) {
      const path = ev.currentTarget.dataset.path

      document.querySelectorAll('.section-catalog__tab-btn').forEach(function(elTabBtn) {
        elTabBtn.classList.remove('section-catalog__tab-btn--active')

        document.querySelector(`[data-path="${path}"]`).classList.add('section-catalog__tab-btn--active')
      })

      document.querySelectorAll('.section-catalog__tab-item').forEach(function(elTabItm) {
        elTabItm.classList.remove('section-catalog__tab-item--active')

        document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__tab-item--active')
      })

      document.querySelectorAll('.section-catalog__content').forEach(function(elTabItm) {
        elTabItm.classList.remove('section-catalog__content--active')

        document.querySelector(`[data-content="${path}"]`).classList.add('section-catalog__content--active')
      })
    })
  })


  

  // Accordion and content tabs


  document.querySelectorAll('.section-catalog__accordion-link--french').forEach(function(elLink) {
    elLink.addEventListener('click', function(ev) {
      const art = ev.currentTarget.dataset.artFrench

      document.querySelectorAll('.section-catalog__box--french').forEach(function(elBox) {
        elBox.classList.remove('section-catalog__box--active')

        document.querySelector(`[data-box-french="${art}"]`).classList.add('section-catalog__box--active')
      })

      document.querySelectorAll('.section-catalog__accordion-link--french').forEach(function(elLink) {
        elLink.classList.remove('section-catalog__accordion-link--active')

        document.querySelector(`[data-art-french="${art}"]`).classList.add('section-catalog__accordion-link--active')
      })
    })
  })

  document.querySelectorAll('.section-catalog__accordion-link--german').forEach(function(elLink) {
    elLink.addEventListener('click', function(ev) {
      const art = ev.currentTarget.dataset.artGerman

      document.querySelectorAll('.section-catalog__box--german').forEach(function(elBox) {
        elBox.classList.remove('section-catalog__box--active')

        document.querySelector(`[data-box-german="${art}"]`).classList.add('section-catalog__box--active')
      })

      document.querySelectorAll('.section-catalog__accordion-link--german').forEach(function(elLink) {
        elLink.classList.remove('section-catalog__accordion-link--active')

        document.querySelector(`[data-art-german="${art}"]`).classList.add('section-catalog__accordion-link--active')
      })
    })
  })

  document.querySelectorAll('.section-catalog__accordion-link--italian').forEach(function(elLink) {
    elLink.addEventListener('click', function(ev) {
      const art = ev.currentTarget.dataset.artItalian

      document.querySelectorAll('.section-catalog__box--italian').forEach(function(elBox) {
        elBox.classList.remove('section-catalog__box--active')

        document.querySelector(`[data-box-italian="${art}"]`).classList.add('section-catalog__box--active')
      })

      document.querySelectorAll('.section-catalog__accordion-link--italian').forEach(function(elLink) {
        elLink.classList.remove('section-catalog__accordion-link--active')

        document.querySelector(`[data-art-italian="${art}"]`).classList.add('section-catalog__accordion-link--active')
      })
    })
  })

  document.querySelectorAll('.section-catalog__accordion-link--russian').forEach(function(elLink) {
    elLink.addEventListener('click', function(ev) {
      const art = ev.currentTarget.dataset.artRussian

      document.querySelectorAll('.section-catalog__box--russian').forEach(function(elBox) {
        elBox.classList.remove('section-catalog__box--active')

        document.querySelector(`[data-box-russian="${art}"]`).classList.add('section-catalog__box--active')
      })

      document.querySelectorAll('.section-catalog__accordion-link--russian').forEach(function(elLink) {
        elLink.classList.remove('section-catalog__accordion-link--active')

        document.querySelector(`[data-art-russian="${art}"]`).classList.add('section-catalog__accordion-link--active')
      })
    })
  })

  document.querySelectorAll('.section-catalog__accordion-link--belgian').forEach(function(elLink) {
    elLink.addEventListener('click', function(ev) {
      const art = ev.currentTarget.dataset.artBelgian

      document.querySelectorAll('.section-catalog__box--belgian').forEach(function(elBox) {
        elBox.classList.remove('section-catalog__box--active')

        document.querySelector(`[data-box-belgian="${art}"]`).classList.add('section-catalog__box--active')
      })

      document.querySelectorAll('.section-catalog__accordion-link--belgian').forEach(function(elLink) {
        elLink.classList.remove('section-catalog__accordion-link--active')

        document.querySelector(`[data-art-belgian="${art}"]`).classList.add('section-catalog__accordion-link--active')
      })
    })
  })




  // Mobile scroll to art

  function scrollToArt () {
    
    

    if (window.innerWidth <= 992) {


      // let frenchs = document.querySelectorAll('.section-catalog__accordion-link--french')

      // for (let french of frenchs) {
      //   french.addEventListener('click', function(e) {
      //     const scroll = e.currentTarget.dataset.artFrench
      //     document.querySelector(`[data-box-french="${scroll}"]`).scrollIntoView({
      //       behavior: 'smooth',
      //       block: 'start'
      //     })
      //   })
      // }

      document.querySelectorAll('.section-catalog__accordion-link--french').forEach(function (el) {
        el.addEventListener('click', function (e) {
          const scroll = e.currentTarget.dataset.artFrench
          document.querySelector(`[data-box-french="${scroll}"]`).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        })
      })
    
      document.querySelectorAll('.section-catalog__accordion-link--german').forEach(function (el) {
        el.addEventListener('click', function (e) {
          const scroll = e.currentTarget.dataset.artGerman
          document.querySelector(`[data-box-german="${scroll}"]`).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        })
      })
    
      document.querySelectorAll('.section-catalog__accordion-link--italian').forEach(function (el) {
        el.addEventListener('click', function (e) {
          const scroll = e.currentTarget.dataset.artItalian
          document.querySelector(`[data-box-italian="${scroll}"]`).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        })
      })
    
      document.querySelectorAll('.section-catalog__accordion-link--russian').forEach(function (el) {
        el.addEventListener('click', function (e) {
          const scroll = e.currentTarget.dataset.artRussian
          document.querySelector(`[data-box-russian="${scroll}"]`).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        })
      })
    
      document.querySelectorAll('.section-catalog__accordion-link--belgian').forEach(function (el) {
        el.addEventListener('click', function (e) {
          const scroll = e.currentTarget.dataset.artBelgian
          document.querySelector(`[data-box-belgian="${scroll}"]`).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        })
      })
    }
  }


  scrollToArt()
  

  window.addEventListener('resize', () => {
    scrollToArt()
  })












  // Open events

  document.querySelector('.section-events__btn').addEventListener('click', function() {
    document.querySelectorAll('.section-events__slide').forEach(function(el) {
      el.classList.add('section-events__slide--open')
    })

    document.querySelector('.section-events__btn').style.display = 'none'
  })







  // Mobile nav, burger


  document.querySelector('.header__burger').addEventListener('click', function () {
    document.querySelector('.header__burger').classList.toggle('header__burger--active')
    document.querySelector('.header__nav').classList.toggle('header__nav--active')
    document.body.classList.toggle('body_menu--active')
  })

  document.body.addEventListener('click', function(eve) {
    var target = eve.target;

    if (target.className != 'header__burger header__burger--active' && target.className != 'header__burger' && target.className != 'header__nav' && target.className != 'header__nav header__nav--active' && target.className != 'header__nav-list' && target.className != 'header__nav-item') {
      document.querySelector('.header__burger').classList.remove('header__burger--active')
      document.querySelector('.header__nav').classList.remove('header__nav--active')
    }
    
  })




  // Mobile search

  document.querySelector('.header__search-btn--mobile').addEventListener('click', function () {
    document.querySelector('.header').classList.add('header--active')
  })



  document.onmousedown=function(event) {
    var target = event.target;

    if (window.innerWidth > 768 && target.className != 'header__form header__form--mobile' && target.className != 'header__input header__input--mobile' && target.className != 'header__form-btn header__form-btn--mobile') {
      closeSearch()  
    }
  }

  function closeSearch() {
    document.querySelector('.header').classList.remove('header--active')
  }

  document.querySelector('.header__close-btn').addEventListener('click', () => {
    document.querySelector('.header').classList.remove('header--active')
  })












  // document.querySelector('.header__search-btn--mobile').addEventListener('click', function () {
  //   document.querySelector('.header__search-btn--mobile').style.display = 'none'
  //   document.querySelector('.header__form--mobile').style.display = 'flex'


  //   if (window.innerWidth <= 768) {
  //     document.querySelector('.header__burger').style.display = 'none'
  //     document.querySelector('.header__logo').style.display = 'none'
  //     document.querySelector('.header__close-btn').style.display = 'block'
  //     document.querySelector('.header').classList.add('header--active')
  //   }
  // })



  // document.onmousedown=function(event) {
  //   var target = event.target;

  //   if (window.innerWidth > 768 && target.className != 'header__form--mobile' && target.className != 'header__input--mobile' && target.className != 'header__form-btn--mobile') {
  //     closeSearch()  
  //   }
  // }

  // function closeSearch() {
  //   document.querySelector('.header__search-btn--mobile').style.display = 'block'
  //   document.querySelector('.header__form--mobile').style.display = 'none'
  // }





  // function closeSearch768() {

    
  //   if (window.innerWidth <= 768 && document.querySelector('.header-container').dataset.search == 'false') {
  //     document.querySelector('.header').classList.remove('header--active')

  //     document.querySelector('.header__search-btn--mobile').style.display = 'block'
  //     // document.querySelector('.header__burger').style.display = 'block'
  //     // document.querySelector('.header__logo').style.display = 'block'


  //     document.querySelector('.header__form--mobile').style.display = 'none'
  //     document.querySelector('.header__close-btn').style.display = 'none'
      
      

  //     document.querySelector('.header-container').dataset.search = 'true'
  //   }

  //   if (window.innerWidth > 768 && document.querySelector('.header-container').dataset.search == 'true') {
  //     document.querySelector('.header').classList.remove('header--active')



  //     document.querySelector('.header__search-btn--mobile').style.display = 'block'
  //     document.querySelector('.header__burger').style.display = 'block'
  //     document.querySelector('.header__logo').style.display = 'block'



  //     document.querySelector('.header__form--mobile').style.display = 'none'
  //     document.querySelector('.header__close-btn').style.display = 'none'

  //     document.querySelector('.header-container').dataset.search = 'false'
  //   }

  // }

  // closeSearch768()

  //   window.addEventListener('resize', () => {
  //     closeSearch768()
  //   })
  
  // document.querySelector('.header__close-btn').addEventListener('click', () => {
  //   document.querySelector('.header').classList.remove('header--active')
    
    
  //   document.querySelector('.header__search-btn--mobile').style.display = 'block'
  //   document.querySelector('.header__burger').style.display = 'block'
  //   document.querySelector('.header__logo').style.display = 'block'

  //   document.querySelector('.header__close-btn').style.display = 'none'
  //   document.querySelector('.header__form--mobile').style.display = 'none'
  // })








  // function closeSearch768() {
  //   if (window.innerWidth <= 1400 && document.querySelector('.header-container').dataset.search == 'false') {
  //     document.querySelector('.header__search-btn--mobile').classList.remove('header__search-btn--hide')
  //     document.querySelector('.header__form--mobile').style.display = 'none'
  //     document.querySelector('.header__close-btn').style.display = 'none'
  //     document.querySelector('.header').classList.remove('header--active')
  //     document.querySelector('.header__burger').style.display = 'block'
  //     document.querySelector('.header__logo').style.display = 'block'

  //     document.querySelector('.header-container').dataset.search = 'true'
  //   }

  //   if (window.innerWidth > 1400) {
  //     document.querySelector('.header__burger').style.display = 'none'

  //     document.querySelector('.header-container').dataset.search = 'false'
  //   }
  // }
    
  

  
  
  

  
  
  // Publications check list

  function checkList () {
    if (window.innerWidth < 657 && document.querySelector('.section-publications__form-box--checkbox').dataset.box == 'false') {

      document.querySelector('.section-publications__form-heading').style.display= 'block'
      document.querySelector('.section-publications__form-heading--open').style.display= 'none'


      document.querySelectorAll('.section-publications__item').forEach(function(el) {
        el.classList.remove('section-publications__item--active')
      })

      document.querySelectorAll('.section-publications__checkbox').forEach(function (el) {

        if (el.checked) {
          var check = el.getAttribute('data-check')
  
          document.querySelector(`[data-active="${check}"]`).classList.add('section-publications__item--active')
          document.querySelector(`[data-btn="${check}"]`).style.display = 'block'  
        }
      })




      document.querySelector('.section-publications__form-heading').addEventListener('click', function () {
         
  
        document.querySelector('.section-publications__form-heading').style.display= 'none'

        document.querySelector('.section-publications__form-heading--open').style.display= 'block'
  
        document.querySelectorAll('.section-publications__item').forEach(function(el) {
          el.classList.add('section-publications__item--active')
  
          document.querySelectorAll('.section-publications__item-btn').forEach(function(elem) {
            elem.style.display = 'none'
          })
        })
      })


  
      document.querySelector('.section-publications__form-heading--open').addEventListener('click', function() {
  
        document.querySelector('.section-publications__form-heading--open').style.display= 'none'

        document.querySelector('.section-publications__form-heading').style.display= 'block'
  
        document.querySelectorAll('.section-publications__checkbox').forEach(function(el) {
          
  
  
          if (el.checked) {
  
            var check = el.getAttribute('data-check')
  
            document.querySelector(`[data-btn="${check}"]`).style.display = 'block'
            
            
  
          } else {
            
            var uncheck = el.getAttribute('data-check')
            
            
            document.querySelector(`[data-active="${uncheck}"]`).classList.remove('section-publications__item--active')
          }
        })
      })
  
      document.querySelectorAll('.section-publications__item-btn').forEach(function (el) {
        el.addEventListener('click', function(eve) {
          const btn = eve.currentTarget.dataset.btn
  
          document.querySelector(`[data-active="${btn}"]`).classList.remove('section-publications__item--active')
          document.querySelector(`[data-check="${btn}"]`).checked = false
        })
      })




      document.querySelector('.section-publications__form-box--checkbox').dataset.box = 'true'
    }

    if (window.innerWidth >= 657) {
      document.querySelector('.section-publications__form-box--checkbox').dataset.box = 'false'
    }
  }

  checkList()

  window.addEventListener('resize', () => {
    checkList()
  })

  
})