/*!
 * MyArcade Scores and Achievement Bridge
 *
 * @version 1.0.0
 * @author Daniel Bakovic
 * @url https://myarcadeplugin.com
 */

var MyArcadeConfig;

/**
 * Get MyArcadeBridgeData. Checks if MyArcadeBridge data are available.
 * Those data are embedded by MyArcadePluin on the parent page.
 *
 * @return void
 */
function myarcade_get_config() {

  if ( typeof parent.MyArcadeScoreBridgeConfig === "function" ) {
    MyArcadeConfig = parent.MyArcadeScoreBridgeConfig();

    return true;
  }

  return false;
}

/**
 * Submit new score
 *
 * @param  int score
 */
function myarcade_submit_score( score ) {

  if ( myarcade_get_config() ) {

    var params = 'game_id=' + MyArcadeConfig.game_id
    + '&user_id=' + MyArcadeConfig.user_id
    + '&event=score'
    + '&score=' + score
    + '&session=' + MyArcadeConfig.session;

    myarcade_ajax_call( params );
  }
}

/**
 * Submit a new achievement
 *
 * @access public
 * @param  object achievement Achievement contains a title, description, score and an icon URL

 */
function myarcade_submit_achievement( achievement ) {

  if ( myarcade_get_config() ) {

    var params = 'game_id=' + MyArcadeConfig.game_id
    + '&user_id=' + MyArcadeConfig.user_id
    + '&event=achievement'
    + '&score=' + achievement.score
    + '&title=' + achievement.title
    + '&description=' + achievement.description
    + '&icon=' + achievement.icon
    + '&session=' + MyArcadeConfig.session;

    myarcade_ajax_call( params );
  }
}

/**
 * Do the XMLHttpRequest request and send data to server
 *
 * @param  string post Data to be sent
 */
function myarcade_ajax_call( post ) {

  var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  var url   = MyArcadeConfig.site_url + "?action=MyArcade&do=ScoreBridge"

  xhttp.open( "POST", url, true );
  xhttp.setRequestHeader( "Content-type","application/x-www-form-urlencoded" );
  xhttp.send( post );
}