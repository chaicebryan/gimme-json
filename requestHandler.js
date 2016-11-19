$('.send-button').click(function(){
  var request = $('.request-input').val();
  handleRequest(request);
});

var handleRequest = function(request){
  $.ajax({
    type: "GET",
    url: request,
    success: function(data) {
      var rawJSON = $.text(JSON.stringify(data));
      console.log(data);
    },
    dataType: 'jsonp'
  });
}
