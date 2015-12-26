$(document).ready(function() {

  var error = function(xhr) {
    var message;
    if (xhr.responseText) {
      var rc = JSON.parse(xhr.responseText);
      if (rc && rc.message) {
        message = rc.message;
        if (message == 'invalid_code') {
          message = 'The code returned from the OAuth workflow was invalid.'
        } else if (message == 'code_already_used') {
          message = 'The code returned from the OAuth workflow has already been used.'
        }
      }
    }
    $('#messages').text(message || xhr.statusText || xhr.responseText || 'Unexpected Error');
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
  var game = $.url('?game')
  if (code && game && (game == 'pong' || game == 'chess' || game = 'pool')) {
    $.ajax({
      type: "POST",
      url: "http://" + game + ".playplay.io/teams",
      data: {
        code: code,
        game: game
      },
      success: function(data) {
        success('Team successfully registered! Create a #' + game + ' channel and invite @' + game + 'bot to it.');
      },
      error: error
    });
  }
});
