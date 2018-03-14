
<?php
require_once ('credentials.php');

// Complain if credentials haven't been filled out.
assert($CLIENT_ID, "Please supply your client_id.");
assert($CLIENT_SECRET, "Please supply your client_secret.");
// API constants, you shouldn't have to change these.
$API_HOST = "https://api.yelp.com";
$SEARCH_PATH = "/v3/businesses/search";
$TOKEN_PATH = "/oauth2/token";
$GRANT_TYPE = "client_credentials";
// Default search terms to fall back to in case the user does not have any inputs.
$DEFAULT_TERM = '';
$DEFAULT_LOCATION = "irvine, ca";
$LIMIT = 49;
$RADIUS = 16000;
$PRICE = '';


?>