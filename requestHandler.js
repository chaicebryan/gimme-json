$('.send-button').click(function(){
  var request = $('.request-input').val();
  handleRequest(request);
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
    url: request,
    success: function(data) {
      var rawJSON = JSON.stringify(data, null, 2);
      editor.setValue(rawJSON);
    },
    dataType: 'json'
  });
}
