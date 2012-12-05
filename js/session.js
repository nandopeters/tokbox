document.write("<script type='text/javascript' src='js/jquery-1.7.2.min.js'></script>");
document.write("<script type='text/javascript' src='js/jquery.validate.min.js'></script>");
document.write("<script type='text/javascript' src='http://ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js'></script>");


//$("#banner").load("templates/banner.html")


function ccNotValid(){
	$("#col2").load("templates/ccNotValid.html");
}

function email(){
	$("#col2").load("templates/emailtmplt.html");
}




var apiKey; 
var sessionId;
var token;
var session;
var	publisher;

function publishStart() {
	TB.addEventListener("exception", exceptionHandler);
	session = TB.initSession(getTBsessionId()); // Replace with your own session ID. See https://dashboard.tokbox.com/projects
	session.addEventListener("sessionConnected", sessionConnectedHandler);
	session.addEventListener("streamCreated", streamCreatedHandler);
	session.addEventListener('sessionDisconnected', sessionDisconnectedHandler);
	session.connect(getTBapiKey(), getTBtoken()); 		// Replace with your API key and token. See https://dashboard.tokbox.com/projects
	                                        // and https://dashboard.tokbox.com/projects

}

function sessionConnectedHandler(event) {
    var publisherContainer = document.getElementById("pos1");
    var publisherProperties = {width: 200, height:200, name:getUseragent()};
    alert("PublisherContainer: "+ publisherContainer);
    alert("publisherProperties: "+ publisherProperties);
    
    publisher = TB.initPublisher(getTBapiKey(), publisherContainer.id, publisherProperties);
		 
		 session.publish(publisher);
		 subscribeToStreams(event.streams);
	}
	
	function streamCreatedHandler(event) {
		subscribeToStreams(event.streams);
		var subscriberProps = {	width: 200, height: 200, subscribeToAudio: true};
		var position = document.getElementById('pos2');

		//event.target.subscribe(event.streams[0], position.id, subscriberProps);
		streams = event.streams;

	}
	
	function subscribeToStreams(streams) {
		console.log("------------------------------------------------------------------------");
		console.log("subscribe to streams");
		console.log("------------------------------------------------------------------------");
		var subscriberProps = {	width: 200, height: 200, subscribeToAudio: true};
		var position = document.getElementById('pos2');
		
		for (i = 0; i < streams.length; i++) {
			var stream = streams[i];
			if (stream.connection.connectionId != session.connection.connectionId) {
				session.subscribe(stream, position.id, subscriberProps);
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

	function getUseragent(){
		if(navigator.userAgent.match(/Linux/i)){
			return 'Linux';
		}
		else if (navigator.userAgent.match(/Macintosh/i))
			return 'Macintosh';
		else
			return 'unknown';
	}
	
	
	function publishEnd(){
		
		//session.unpublish(publisher);
		session.disconnect();
		
	}
	
	
	function sessionDisconnectedHandler(event) {
		// This signals that the user was disconnected from the Session. Any subscribers and publishers
		// will automatically be removed. This default behaviour can be prevented using event.preventDefault()
		publisher = null;

;
	}
	