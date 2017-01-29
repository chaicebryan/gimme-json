// Send request to server
$('.send-button').click(function(){
    var request = $('.request-input').val();
    var encryptedRequest = btoa(request);
    handleRequest(encryptedRequest);
});

// Add new row to table
$('#add-button').click(function(){
    $('#param-table tbody>tr:last').clone(true).insertAfter('#param-table tbody>tr:last');
    return false;
});

// Clear rows in table
$('#reset-button').click(function(){
    $('#param-table tr:gt(1)').remove();
});