var host = 'http://138.68.133.227:3000';
var requestsEndpoint = '/requests';
var paramStart = '?';
var callParam = 'call=';


var handleRequest = function(request){
  $.ajax({
    type: "GET",
    url: host + requestsEndpoint + paramStart + callParam + request,
    success: function(data) {
      console.log(typeof data);
      editor.setValue(JSON.stringify(data, null, 2));
    },
    error: function(jqXHR, responseText,status){
      console.log(jqXHR.responseText)
    },
    dataType: 'json'
  });
}
