var host = 'http://localhost:3000'
var KEY = 'URL';

$('.send-button').click(function(){
  var request = $('.request-input').val();
  var encryptedRequest = CryptoJS.AES.encrypt(request, KEY);
  handleRequest(encryptedRequest);
});

$('#add-button').click(function(){
  $('#param-table tbody>tr:last').clone(true).insertAfter('#param-table tbody>tr:last');
  return false;
});

$('#reset-button').click(function(){
  $('#param-table tr:gt(1)').remove();
});

var handleRequest = function(request){
  $.ajax({
    type: "GET",
    url: host + '/requests?call=' + request,
    success: function(data) {
      var rawJSON = JSON.stringify(data, null, 2);
      editor.setValue(rawJSON);
    },
    dataType: 'json'
  });
}
