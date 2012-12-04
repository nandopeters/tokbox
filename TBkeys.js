var sessionUrl = "http://app.itelepsych.com/Opentok-PHP/gensessionid_token.php";

document.write("<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js'></script>");


function getTBsessionId(){
	return TBSessionParams.sessionId;
	}

function getTBtoken(){
	return TBSessionParams.token;
}

function getTBapiKey(){
	var apiKey = '1127';
	return TBSessionParams.apiKey;
}

var TBSessionParams;

function session_token(){
	var theUrl = sessionUrl;
	$.ajax({
        async: false,
        type: 'GET',
        url: theUrl,
        dataType: 'jsonp',
        success: function (json) {
        	TBSessionParams = json;
        }
    });
	
}