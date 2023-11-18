$(document).ready(function () {
    let list_1 = document.querySelectorAll('.list_1');
    init();

    list_1.forEach(function (element) {
        element.onclick = showTabs;
    });

    function init() {
        let block = document.querySelectorAll('.block');

        for (let i = 1; i < block.length; i++) {
            block[i].style.display = 'none';
        }
    }

    function showTabs() {
        let data = this.getAttribute('data');
        let block = document.querySelectorAll('.block');

        for (let i = 0; i < block.length; i++) {
            block[i].style.display = 'none';
        }

        document.querySelector(`.block[data="${data}"]`).style.display = 'block';
    }



    let imgLi = document.querySelectorAll('.img-li');
    init();

    imgLi.forEach(function (element) {
      element.onclick = showTabs;
    });

    function init() {
      let block = document.querySelectorAll('.block');

      for (let i = 1; i < block.length; i++) {
        block[i].style.display = 'none';
      }
    }

    function showTabs() {
      let data = this.getAttribute('data');
      let block = document.querySelectorAll('.block');

      for (let i = 0; i < block.length; i++) {
        block[i].style.display = 'none';
      }

      document.querySelector(`.block[data="${data}"]`).style.display = 'block';
    }



    let graphic = document.querySelectorAll('.graphic')
  let web_des = document.querySelectorAll('.web_des')
  let photography = document.querySelectorAll('.photography')



$('.all_li').click(function () {
  $('.graphic').show()
  $('.web_des').show()
  $('.photography').show()
})
  
  $('.graphic_li').click(function () {
  $('.web_des').hide()
  $('.photography').hide()
  $('.graphic').show()
})

  $('.web_des_li').click(function () {
    $('.graphic').hide()
    $('.photography').hide()
    $('.web_des').show()

  })

  $('.photography_li').click(function () {
    $('.graphic').hide()
    $('.web_des').hide()
    $('.photography').show()
  })

  


  $('.home_li').click(function () {
    $('.m').hide()
    $('.home').show()
  })

  $('.m').hide()


  $('.home-img').click(function () {
    $('.m').hide()
    $('.home').show()
  })


  $('.header-btn').click(function () {
    $('.m').show()
    $('.home').hide()
  })


  $('.home_li').click(function () {
    $('.m').hide()
    $('.home').show()
  })



  $('.img-li').click(function () {
    $('.home').hide()
    $('.m').show()
  })

  














})