document.write("<script type='text/javascript' src='js/jquery-1.7.2.min.js'></script>");
document.write("<script type='text/javascript' src='js/jquery.validate.min.js'></script>");
document.write("<script type='text/javascript' src='http://ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js'></script>");


//$("#banner").load("templates/banner.html")


function ccNotValid(){
	$("#col2").load("templates/ccNotValid.html");
}

var apiKey; 
var sessionId;
var token;
var session;

function doVideo() {
	TB.addEventListener("exception", exceptionHandler);
	session = TB.initSession(getTBsessionId()); // Replace with your own session ID. See https://dashboard.tokbox.com/projects
	session.addEventListener("sessionConnected", sessionConnectedHandler);
	session.addEventListener("streamCreated", streamCreatedHandler);
	session.connect(getTBapiKey(), getTBtoken()); 		// Replace with your API key and token. See https://dashboard.tokbox.com/projects
	                                        // and https://dashboard.tokbox.com/projects

}

function sessionConnectedHandler(event) {
    var publisherContainer = document.getElementById("pos1");
    publisher = TB.initPublisher(getTBapiKey(), publisherContainer.id);
		 
		 session.publish(publisher);
		 subscribeToStreams(event.streams);
	}
	
	function streamCreatedHandler(event) {
		subscribeToStreams(event.streams);
	}
	
	function subscribeToStreams(streams) {
		for (i = 0; i < streams.length; i++) {
			var stream = streams[i];
			if (stream.connection.connectionId != session.connection.connectionId) {
				session.subscribe(stream);
			}
		}
	}
	
	function exceptionHandler(event) {
		alert("Exception: " + event.code + "::" + event.message);
	}
	
	function apiKey(){
		var a = document.getElementById("apiKey");
		a.innerHTML = getTBapiKey();
	}

	function token(){
		var a = document.getElementById("token");
		a.innerHTML = getTBtoken();
	}

	function sessionId(){
		var a = document.getElementById("sessionId");
		a.innerHTML = getTBsessionId();
	}			
