$(document).ready(function() {

  var error = function(err) {
    $('#messages').text(err.statusText || err.responseText || err);
    $('#register').show();
    $('header').hide();
  };

  var success = function(text) {
    $('#messages').text(text);
    $('#register').show();
    $('header').hide();
  };

  // Slack OAuth

  var code = $.url('?code')
  if (code) {
    $.ajax({
      type: "POST",
      url: "http://pong.playplay.io/teams",
      data: {
        code: code
      },
      success: function(data) {
        success('Team successfully registered! Invite @pong to a #pong channel.');
      },
      error: error
    });
  }
});
