(function() {
  // keep header from chasing me down the page
  $(window).on('scroll', function(event) {
    $('body').removeClass('adv-condense-header');
    $('#adv-edition-chooser').removeClass('adv-open');
  });

  // remove mouseovers that cover enter page, making them inescapable
  // unable to get this working reliably based on enter/exit events, so just do
  // it all the time.
  $(window).mousemove(function() {
    $('.adv-open').removeClass('adv-open');
  });
  
  // remove urine stains
  $('#adv-network, #adv-masthead, #adv-condensed, .adv-logo, header, .module-tabs a:link.active, .module-tabs a:visited.active, .module-block, #footer, .river-end, #content header, #news-river .river-promo-inner, .river-feature-box, aside section').css('background-color', '#eee');

}).call(this)
