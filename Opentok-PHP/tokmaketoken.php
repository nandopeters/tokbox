<?php
/* used by Appointment Scheduler to create
 * token

 * values are returned in json string as follows
 * { token:<value>, sessionid:<value (same as input param)>,apikey:<value>}
 * 
 * obective is to regenerate a token for a given session id
 *  
 *  Parameters: datetime of appointment, used to set expiration on token
 *  				24 hours are added to the experation time (
 *  				this may be changed in the future)
 *  				if no argument is passed then the current datetime+24hours 
 *  				will be used
 *  			role: MODERATOR, or PUBLISHER (defaults to PUBLISHER )
 *  			sessionid:  session id - required
 *  			participant: the participant Name - Defaults to 'Guest'
 *  			apikey: defaults to API_Config::API_KEY
 *  			apisecret: defaults to API_Config::API_SECRET
 */


if(count($_GET) ) {
	$dt =  $_GET['sched_tm'] ;
	$role = $_GET['role'];
	$sessionId = $_GET['sessionid'];
	$participant = $_GET['participant'];
	$myapiKey = $_GET['apikey'];
	$myapiSecret = $_GET['secret'];
}
if (!isset($dt))
	$dt = time();
	
if (!isset($role))
	$role = 'PUBLISHER';

if (!isset($participant))
	$participant= 'Guest';
		
	
$hours = 24;
$days = 1;	
$dt += $days*$hours*60*60;


require_once './Opentok-PHP-SDK/API_Config.php';
require_once './Opentok-PHP-SDK/OpenTokSDK.php';

if($role == PUBLISHER  )
	$role = RoleConstants::PUBLISHER;
else
	$role = RoleConstants::MODERATOR;

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

// Getting sessionId from Sessions
// Option 1: Call getSessionId()


$arr =  array();

$arr['apiKey'] = $myapiKey;
$arr['sessionId'] = $sessionId;
$arr['token'] = $apiObj->generateToken($sessionId, $role, $dt, $participant );

echo json_encode($arr);
?>
