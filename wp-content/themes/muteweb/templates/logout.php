<?php /* Template Name: signup*/ ?>
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
	background-image: url(https://giddh.com/wp-content/uploads/2019/11/Login-Page-Image.png);
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
#verify_form_wrap{
  display: none;
}

/* button */
#customBtn {
  display: inline-block;
  background: white;
  color: #444;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #888;
  white-space: nowrap;
  cursor: pointer;
}
#customBtn:hover{
  box-shadow: 0 8px 20px rgba(55, 125, 255, 0.075)
}
span.icon {
  background: url('https://developers.google.com/identity/sign-in/g-normal.png') transparent 5px 50% no-repeat;
  display: inline-block;
  vertical-align: middle;
  width: 42px;
  height: 42px;
}
span.buttonText {
  display: inline-block;
  vertical-align: middle;
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
      <div class="login_right d-flex align-items-center ">
        <div class="giddh_login">
          <div class="giddh_login_inner">
            <div id="infoSpan"></div>
            <div class="logo_login">
              <a href="<?php echo site_url(); ?>">
                <img src="<?php echo site_url(); ?>/wp-content/uploads/2019/11/login-Page-Logo.png" alt="" width="141px" />
              </a>
            </div>
            <div class="accounting_space bg-white">


              
              <h4>Signup to your secure accounting space</h4>
              <ul class="pl-0">
                <li class="list-unstyled pt-3">
  <div id="gSignInWrapper">
    <div id="customBtn" class="customGPlusSignIn">
      <span class="icon"></span>
      <span class="buttonText">Signup with google</span>
    </div>
  </div>
                </li>
              </ul>
              

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

<script type='text/javascript' src='https://giddh.com/wp-content/themes/muteweb/assets/js/vendor.min.js?ver=20141010'></script>
<script type='text/javascript' src='https://giddh.com/wp-content/themes/muteweb/assets/js/front-script.js?ver=20141010'></script>
<script src="https://apis.google.com/js/api:client.js"></script>
<script type='text/javascript'>
  var googleUser = {};
  var startApp = function() {
    gapi.load('auth2', function(){
      auth2 = gapi.auth2.init({
        client_id: '641015054140-3cl9c3kh18vctdjlrt9c8v0vs85dorv2.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });
      attachSignin(document.getElementById('customBtn'));
    });
  };

  function attachSignin(element) {
    auth2.attachClickHandler(element, {},
    function(googleUser) {
      console.log('bingo');
      console.log(googleUser);
    }, function(error) {
      console.log(JSON.stringify(error, undefined, 2));
    });
  }

  // oajgjalgjllg

function signOut() {
  localStorage.setItem('logout', false);
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
  localStorage.getItem('logout')
}

// count retry
_retryCount = 0;


function resetFormButton(formId) {
  jQuery(formId).find(":submit").prop("disabled", false);
}

jQuery(function(){

  startApp();
  
  jQuery("form").submit(function () {
    jQuery(this).find(":submit").attr('disabled', 'disabled');
  });

  // signup with email and password
  jQuery("#demo").on("submit", function(event) {
    event.preventDefault();
    var email= jQuery('#email').val();
    var password= jQuery('#password').val();
    let obj = {
      email,
      password
    }
    if (email && password) {
      jQuery.ajax({
        url: "https://api.giddh.com/v2/signup",
        type: "POST",
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify(obj),
        success: function(d) {
          showVerificationStep();
          resetFormButton('#demo');
        },
        error: function(xhr, ajaxOptions, thrownError){
          resetFormButton('#demo');
          if (xhr && xhr.responseJSON) {
            showMsg(xhr.responseJSON.message);
          }
        }
      });
    } else {
      showMsg('Fields cannot be empty.');
      resetFormButton('#demo');
    }
  });

  // verify otp
  jQuery("#verifyOtpForm").on("submit", function(event) {
    event.preventDefault();
    var email= jQuery('#email').val();
    var verificationCode = jQuery('#verificationCode').val();
    let obj = {
      email,
      verificationCode
    }
    if (email && verificationCode) {
      jQuery.ajax({
        url: "https://api.giddh.com/v2/verify-email",
        type: "POST",
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify(obj),
        success: function(data) {
          resetFormButton('#verifyOtpForm');
          window.location = "https://app.giddh.com/token-verify?request="+JSON.stringify(data);
        },
        error: function(xhr, ajaxOptions, thrownError){
          console.log(xhr);
          resetFormButton('#verifyOtpForm');
          if (xhr && xhr.responseJSON) {
            showMsg(xhr.responseJSON.message);
          }
        }
      });
    }
    else {
      showMsg('Field cannot be empty.');
      resetFormButton('#verifyOtpForm');
    }
  });

}); 


function showVerificationStep() {
  jQuery("#signup_form_wrap").hide();
  jQuery("#verify_form_wrap").show();
}

function showMsg(msg, type) {
  // remove all alerts first
  jQuery('#infoSpan').html('');
  var className = (type) ? 'alert-success' : 'alert-danger';
  var htmlTemplate = '<div class="'+className+' alert alert-dismissible fade show" role="alert">'+msg+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
  jQuery('#infoSpan').append(htmlTemplate);
  setTimeout( function() {
    jQuery('#infoSpan').html('');
  }, 30000);
}

function resendOtp() {
  resetFormButton('#verifyOtpForm');
  jQuery('#verificationCode').val('');
  var email= jQuery('#email').val();
  if (email && _retryCount < 4) {
    _retryCount++;
    let obj = {
      email,
      retryCount: _retryCount
    }
    jQuery.ajax({
      url: "https://api.giddh.com/signup-with-email",
      type: "POST",
      dataType: "json",
      contentType: 'application/json',
      data: JSON.stringify(obj),
      success: function(d) {
        showMsg(d.body, 'success');
      },
      error: function(xhr, ajaxOptions, thrownError){
        console.log(xhr);
        if (xhr && xhr.responseJSON) {
          showMsg(xhr.responseJSON.message);
        }
      }
    });
  } else {
    //
  }
}

</script>
</body>
</html>