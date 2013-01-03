<?php

require_once './Opentok-PHP-SDK/API_Config.php';
require_once './Opentok-PHP-SDK/OpenTokSDK.php';

// Creating an OpenTok Object


$apiObj = new OpenTokSDK( API_Config::API_KEY, API_Config::API_SECRET );

// Creating Simple Session object, passing IP address to determine closest production server
// Passing IP address to determine closest production server
//$session = $apiObj->createSession( $_SERVER["REMOTE_ADDR"] );
$session = $apiObj->createSession(  );


// Creating Simple Session object 
// Enable p2p connections
//$session = $apiObj->createSession( $_SERVER["REMOTE_ADDR"], array(SessionPropertyConstants::P2P_PREFERENCE=> "enabled") );

// Getting sessionId from Sessions
// Option 1: Call getSessionId()
$sessionId = $session->getSessionId();

// After creating a session, call generateToken(). Require parameter: SessionId
//$token = $apiObj->generateToken($sessionId);

// Giving the token a moderator role, expire time 5 days from now, and connectionData to pass to other users in the session
//$token = $apiObj->generateToken($sessionId, RoleConstants::MODERATOR, time() + (5*24*60*60), "hello world!" );

$arr =  array();
$arr['apiKey'] = API_Config::API_KEY;

//$arr['sessionId'] = $sessionId;
$sid =  file_get_contents("sessionid.txt") or die("can't read file");
$ar2 =  json_decode($sid, true);

 $arr['sessionId'] = $ar2['sessionId'];
//$arr['token'] = $token;
$arr['token'] = $apiObj->generateToken($arr['sessionId']);

	
// for cross-domain ajax calls use the two lnes below
//header("content-type: application/json");  
//echo $_GET['callback']. '('. json_encode($arr) . ')';  


//$arr['token'] = "T1==cGFydG5lcl9pZD0xNDE5MTIyMiZzaWc9M2M0ZDIyMDk2ZjQyMDIzZjAxMTI5ZGUwN2EwMzM0NDA4ZDk0ZTYwNDpzZXNzaW9uX2lkPTJfTVg0eE5ERTVNVEl5TW41LVZHaDFJRVJsWXlBd05pQXhOVG95TVRveE9DQlFVMVFnTWpBeE1uNHdMakU0TXpjeE16aC0mY3JlYXRlX3RpbWU9MTM1NDgzNjA5NCZyb2xlPXB1Ymxpc2hlciZub25jZT0xMzU0ODM2MDk0LjYyMjIwMzQxMjg4NzE=";


echo json_encode($arr);
?>
