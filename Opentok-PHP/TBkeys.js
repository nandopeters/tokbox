/* 12/4/12 by Nino S.
 * TBKeys.js 
 * 	implements functions to initialize Tokbox sessionId, token, apiKey
 *  source file was added to 'Opentok-PHP director 
 *  invokes jQuery ajax call  to gensessionid_token.php  
 *  Note the variable theUrl
 *  	this means that the .html file that invokes this source file must contain the folder
 *  	Opentok-PHP directly below it.
 * 
 */
document.write("<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js'></script>");

if (typeof use_tokbox_api == 'undefined')
	use_tokbox_api = false;


if( use_tokbox_api ){
	console.log("using tok box api");
	document.write("<script src='http://static.opentok.com/v1.1/js/TB.min.js'></script>");
}
else
	document.write("<script type='text/javascript' src='http://static.opentok.com/webrtc/v2.0/js/TB.min.js'></script>'");


var TBSessionParams;
var readyTB = false;

function session_token(){

	var theUrl = "./Opentok-PHP/gensessionid_token.php";
	$.ajax({
        async: false,
        type: 'GET',
        url: theUrl,
       dataType: 'json',
        success: function (json) {
        	//TBSessionParams = jQuery.parseJSON(json);
        	TBSessionParams = json;
        },
        complete: function(e, XHR, options) {
        	if( ! XHR.status == 200){
            	console.log(e);
        	}

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
	//var apiKey = '1127';
	return TBSessionParams.apiKey;

}


