<?php
require 'wp-load.php';
require ABSPATH.'vendor/autoload.php';

// create Client Request to access Google API
$client = new Google_Client();
$client->setClientId(GOOGLE_CLIENT_ID);
$client->setClientSecret(GOOGLE_CLIENT_SECRET);
$client->setRedirectUri(GOOGLE_REDIRECT_URL);
$client->setAccessType("offline");

if (isset($_GET['code'])) {
    $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
    echo "<script>window.opener.checkToken('".$token['access_token']."');window.close();</script>";
} else {
    echo "<script>window.opener.showMsg('#infoSpan', 'Something went wrong! Please try again.');window.close();</script>";
}
?>