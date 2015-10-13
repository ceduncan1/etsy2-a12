(function () {

  var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=dhz2o347b10mvvul6vdr8g9k&keywords=space+cat&includes=Images,Shop';

  


  $.ajax({
    url: etsyURL,
    dataType: 'jsonp',
    method: 'get'
  }).then(function (response) {
    var templateString = $('#itemTemplate').text();
    var templateFunction = _.template(templateString);

    _.each(response.results,  function(item, index) {
      console.log(item);
      if (index <= 23) {
        var itemHTML = templateFunction(item);
        $('.items').append(itemHTML);
      }
    });
  });

})();