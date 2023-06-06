//アコーディオンメニュー

$('.accordion-question-wrapper').on('click', function(e) {

  $(this).find('.accordion-q-mark').toggleClass('open');
  $(this).find('.accordion-question-text').toggleClass('open');
  $(this).find('.accordion-plus-minus-mark').toggleClass('open');



  // .accordion-contentを選択

  var content =  $(this).next();

  // .accordion-contentを表示・非表示
  content.slideToggle();
});

