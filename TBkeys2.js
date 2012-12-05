document.write("<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js'></script>");
document.write("<script type='text/javascript' src='http://static.opentok.com/webrtc/v2.0/js/TB.min.js'></script>'");

var TBSessionParams;
var readyTB = false;

function session_token(){
}

function getTBsessionId(){
	var id = "1_MX4xMTQyMTg3Mn4xMjcuMC4wLjF-VHVlIERlYyAwNCAxODozNzowMiBQU1QgMjAxMn4wLjIxODMzNzQ4fg";
	return id;
	}

function getTBtoken(){
	var token = "T1==cGFydG5lcl9pZD0xMTQyMTg3MiZzaWc9ZmNkOWZiNmU5OGM0ZGU5M2ZjMjQ3MzQ2ZDliMjM0ZTdlYzJkZWYzNjpzZXNzaW9uX2lkPTFfTVg0eE1UUXlNVGczTW40eE1qY3VNQzR3TGpGLVZIVmxJRVJsWXlBd05DQXhPRG96Tnpvd01pQlFVMVFnTWpBeE1uNHdMakl4T0RNek56UTRmZyZjcmVhdGVfdGltZT0xMzU0Njc1MDE3JnJvbGU9cHVibGlzaGVyJm5vbmNlPTEzNTQ2NzUwMTcuNzUxMzQ1MDYxMjEx";
	return token;
}

function getTBapiKey(){
	var apiKey = '1127';
	console.log(apiKey);
	return apiKey;
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


