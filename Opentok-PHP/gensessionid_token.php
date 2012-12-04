<?php

require_once './Opentok-PHP-SDK/API_Config.php';
require_once './Opentok-PHP-SDK/OpenTokSDK.php';

// Creating an OpenTok Object
$apiObj = new OpenTokSDK( API_Config::API_KEY, API_Config::API_SECRET );

// Creating Simple Session object, passing IP address to determine closest production server
// Passing IP address to determine closest production server
$session = $apiObj->createSession( $_SERVER["REMOTE_ADDR"] );

// Creating Simple Session object 
// Enable p2p connections
//$session = $apiObj->createSession( $_SERVER["REMOTE_ADDR"], array(SessionPropertyConstants::P2P_PREFERENCE=> "enabled") );

// Getting sessionId from Sessions
// Option 1: Call getSessionId()
$sessionId = $session->getSessionId();

// After creating a session, call generateToken(). Require parameter: SessionId
$token = $apiObj->generateToken($sessionId);

// Giving the token a moderator role, expire time 5 days from now, and connectionData to pass to other users in the session
//$token = $apiObj->generateToken($sessionId, RoleConstants::MODERATOR, time() + (5*24*60*60), "hello world!" );

$arr =  array();
$arr['token'] = $token;
$arr['sessionId'] = $sessionId;
$arr['apiKey'] = '1127';
	
// for cross-domain ajax calls use the two lnes below
//header("content-type: application/json");  
//echo $_GET['callback']. '('. json_encode($arr) . ')';  


echo json_encode($arr);
?>
