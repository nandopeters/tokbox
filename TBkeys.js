var sessionUrl = "http://rossmaniaci.com:9080/nsegreto/tokbox/Opentok-PHP/gensessionid_token.php";

document.write("<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js'></script>");

var TBSessionParams;
var readyTB = false;

function session_token(){
	var theUrl = sessionUrl;
	$.ajax({
        async: false,
        type: 'GET',
        url: theUrl,
        dataType: 'jsonp',
        success: function (json) {
        	TBSessionParams = json;
        	readyTB = true;
        	console.log(json);

        }
    });
}

function TBisready(){
	if(typeof readyTB == 'undefined'){
		console.log('readyTB is undefined');
		return false;
	}
	else {
		if( !readyTB )
			return false;
		else
			return true;
	}
}

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


