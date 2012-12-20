<?php
/* used by Appointment Scheduler to create
 * sessionid
 * apikey
 * token for moderator
 * token for guest
 * values are returned in json string as follows
 * { apikey:<value>, sessionid:<value>,token_moderator:<value>, token_guest: <value>}
 * 
 * obective is to store the values in the schedule table and the invites table
 * 	host uses token from shedule table
 *  guest (patient) uses token from from invites table.
 *  
 *  Parameters: datetime of appointment, ised to set expiration on token
 *  			24 hours are added to the experation time (
 *  			this may be changed in the future)
 *  			if no argument is passed then the current datetime+24hourr will be used
 *  
 *  			moderator: defaults to 'Host'
 *				publisher: defaults to 'Guest' 
 *  			apikey: defaults to API_Config::API_KEY
 *  			apisecret: defaults to API_Config::API_SECRET
 *
 */


if(count($_GET) ){
	$dt =  $_GET['sched_tm'] ;
	$moderator = $_GET['moderator'];
	$publisher = $_GET['publisher'];
	$myapiKey = $_GET['apikey'];
	$myapiSecret = $_GET['secret'];	
}

if (!isset($dt))
	$dt = time();
$hours = 24;
$days = 1;
	
$dt += $days*$hours*60*60;


require_once './Opentok-PHP-SDK/API_Config.php';
require_once './Opentok-PHP-SDK/OpenTokSDK.php';

if (!isset($publisher) )
	$publisher = 'Guest';

if (!isset($moderator))
	$moderator = 'Host';

if (!isset($myapiKey))
	$myapiKey = API_Config::API_KEY;

if (!isset($myapiSecret))	
	$myapiSecret = API_Config::API_SECRET;

// Creating an OpenTok Object
$apiObj = new OpenTokSDK( $myapiKey, $myapiSecret );

// Creating Simple Session object, passing IP address to determine closest production server
// Passing IP address to determine closest production server
//        e.g.   $session = $apiObj->createSession( $_SERVER["REMOTE_ADDR"] );
$session = $apiObj->createSession(  );

// Creating example for Simple Session object to enable p2p connections

//$session = $apiObj->createSession( $_SERVER["REMOTE_ADDR"], array(SessionPropertyConstants::P2P_PREFERENCE=> "enabled") );

// Getting sessionId from SessionsRoleConstants::MODERATOR
// Option 1: Call getSessionId()
$sessionId = $session->getSessionId();


$arr =  array();

$arr['apiKey'] = $myapiKey;
$arr['sessionId'] = $sessionId;
$arr['token_moderator'] = $apiObj->generateToken($sessionId, RoleConstants::MODERATOR, $dt, moderator );
$arr['token_guest']		= $apiObj->generateToken($sessionId, RoleConstants::PUBLISHER, $dt, publisher );
echo json_encode($arr);
?>
