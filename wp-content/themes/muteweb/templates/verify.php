<?php /* Template Name: verify*/ ?>
<!DOCTYPE html>
<html>
<head>
	<title>signup</title>
    <meta name="google-signin-client_id" content="641015054140-3cl9c3kh18vctdjlrt9c8v0vs85dorv2.apps.googleusercontent.com">
	<link rel='stylesheet' id='muteweb-vendor-style-css'  href='https://giddh.com/wp-content/themes/muteweb/assets/css/vendor.min.css?ver=1.5' type='text/css' media='all' />
	<link rel='stylesheet' id='muteweb-style-css'  href='https://giddh.com/wp-content/themes/muteweb/style.css?ver=1.5' type='text/css' media='all' />

<style type="text/css">
	body{padding: 0}
.abcRioButton.abcRioButtonLightBlue {
    background-color: #5192F1 !important;
    height: 40px !important;
width:240px !important
}
a.btn.btn-outline-primary.p-0.g-signin2 {
       border-color: #ffffff !important;
}
.abcRioButtonIcon {
    background-color: #fff;
       padding: 11px !important;
}
span.abcRioButtonContents {
    color: #fff;
    line-height: 40px !important;
}
.login_right{
	background-image: url(http://staginglabs.in/v2giddh/wp-content/uploads/2019/11/Login-Page-Image.png);
	height: 100vh;
	justify-content: flex-start;
	    background-position: top right;
}
.login_left {
    background-color: #36396f;
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
}
.logo_login {
    background-color: #36396e;
    height: 98px;
    display: flex;
    align-items: center;
    padding: 35px;
    position: relative;
}
.logo_login::before{
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;

}
.giddh_login_inner {
    max-width: 476px;
    width: 90%;
    margin: 0 auto;
    border-radius: 8px;
    overflow: hidden;
}
.accounting_space h4 {
    color: #36396e;
    font-weight: 500;
    font-size: 20px;
}
.login_box {
    position: relative;
}
.giddh_login {
    margin-left: -245px;
        width: 495px;
}
.accounting_space {
    padding: 30px;
    border-radius: 10px 10px 0 0;
}
.list-unstyled a:hover {
    background-color: transparent;
}
.list-unstyled a {
    border-radius: 0;
}
.login-with {
    color: #36396e;
    font-size: .9em;
}
.login-with a {
   font-weight: 600;
    color: #36396e;
   text-decoration: none;
}
.account a {
    background-color: #e6e7e9;
    border-radius: 0;
    font-size: 14px;
    width: 108px;
    margin-left: 15px;
}
body .form-group input{
	border-radius: 0;
}
body .form-group input:focus,body .btn.focus, .btn:focus{
box-shadow: none;
border-color: #36396e;
}
#demo button {
    background-color: #36396d;
    margin-bottom: 15px;
    border-radius: 0;
}
@media(max-width: 767px){
	.giddh_login {
    margin: 0 auto;
}
}
@media(max-width: 575px){
	.logo_login,.accounting_space {
    padding: 20px;
}
}
</style>
</head>
<body>
<div class="login_box">
	<div class="row mx-0">
		<div class="col-md-6 col-lg-6 col-sm-12 col-12 px-0">
			<div class="login_left">	
			</div>
		</div>
		<div class="col-md-6 col-lg-6 col-sm-12 col-12 px-0">
			<div class="login_right d-flex align-items-center ">.
        <!-- verify  -->
				<div class="giddh_login">
		<div class="giddh_login_inner">
			<div class="logo_login"><img src="<?php echo site_url(); ?>/wp-content/uploads/2019/11/login-Page-Logo.png" alt="" width="141px"></div>
			<div class="accounting_space bg-white">
				<h4>Signup to your secure accounting space</h4>
				<ul class="pl-0">
					<li class="list-unstyled pt-3"><a href="#" class="btn btn-outline-primary p-0 g-signin2" data-onsuccess="onSignIn">
            <span class="p-2 d-inline-block bg-primary text-white w-70">Login with google</span></a></li>
				</ul>
				<p class="login-with mb-2">Signup with<a href="#" data-toggle="collapse" data-target="#demo"> email and password</a></p>
				<form id="demo" class="collapse">
  <div class="form-group mb-2">
    <input type="text" id="verifi" class="form-control"placeholder="Enter verification code here" />
  </div>
  <button type="submit" class="btn w-100 text-white">Verify Email</button>
  <a href="#">Resend code</a>
</form>
				<div class="d-flex align-items-center account">
					<p class="mb-0">Already have an account? </p>
					<a href="<?php echo site_url(); ?>/login" type="button" class="btn"> Login</a>
				</div>
			</div>
		</div>
	</div>
  <!-- verifi end -->
		       
	        </div>
		</div>
	</div>

	
</div>
<script type='text/javascript' src='https://giddh.com/wp-content/themes/muteweb/assets/js/vendor.min.js?ver=20141010'></script>
<script type='text/javascript' src='https://giddh.com/wp-content/themes/muteweb/assets/js/front-script.js?ver=20141010'></script>
<script src="https://apis.google.com/js/platform.js" async defer></script>
<script>
//function onSignIn(googleUser) {
	
	//var profile = googleUser.getBasicProfile();
//	if (googleUser && googleUser['Zi']) {
//		let token = googleUser['Zi'].access_token;
//		console.log(token);
//		if (token) {
// 		window.location = "http://test.giddh.com/app/token-verify?token="+token;
//	}
//},
//error: function(err) {
				//console.log(err);
			//}
//});

//		}
//	}

//}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  if (googleUser && googleUser['Zi']) {
        let token = googleUser['Zi'].access_token;
        console.log(token);
        if (token) {
            window.location = "http://test.giddh.com/app/token-verify?token="+token;
        }
  }
  console.log(profile);
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}



jQuery("#demo").submit(function(e) {
    e.preventDefault();
var k= jQuery('#email').val();
var p= jQuery('#password').val();
	if (k && p) {
jQuery.ajax({
url: "http://apirelease.giddh.com/v2/signup",
type: "POST",
dataType: "json",
contentType: 'application/json',
cache: false,
data: JSON.stringify({"password": k , "uniqueKey": p}),
success: function(data){
	console.log(data);
}
});
	}
});
</script>
</body>
</html>