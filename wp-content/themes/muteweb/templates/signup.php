<?php /* Template Name: signup*/ ?>
<!DOCTYPE html>
<html>
<head>
    <title>Signup ~ Giddh</title>
    <link rel='stylesheet' id='muteweb-vendor-style-css'  href='<?php echo site_url(); ?>/wp-content/themes/muteweb/assets/css/vendor.min.css?ver=1.5' type='text/css' media='all' />
    <link rel='stylesheet' id='muteweb-style-css'  href='<?php echo site_url(); ?>/wp-content/themes/muteweb/style.css?ver=1.5' type='text/css' media='all' />
    <link rel="icon" href="<?php echo site_url(); ?>/wp-content/uploads/2019/11/favicon.ico" sizes="32x32" />
    <link rel="icon" href="<?php echo site_url(); ?>/wp-content/uploads/2019/11/favicon.ico" sizes="192x192" />
    <link rel="apple-touch-icon-precomposed" href="<?php echo site_url(); ?>/wp-content/uploads/2019/11/favicon.ico" />
    <meta name="msapplication-TileImage" content="<?php echo site_url(); ?>/wp-content/uploads/2019/11/favicon.ico" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

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
	background-image: url(<?php echo site_url(); ?>/wp-content/uploads/2019/11/Login-Page-Image.png);
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

/* google button */
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
#otp-message-parent{
    float: left;
    margin-top: 14px;
    text-align: center;
    width: 100%;
    display: none;
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
                  <div id="customBtn" class="customGPlusSignIn" onclick="initGoogleSignup();">
                    <span class="icon"></span>
                    <span class="buttonText">Signup with google</span>
                  </div>
                </div>
                </li>
              </ul>
              <section id="signup_form_wrap">
                <p class="login-with mb-2">Signup with<a href="#" data-toggle="collapse" data-target="#demo"> email and password</a></p>
                <form id="demo" class="collapse">
                  <div class="form-group mb-2">
                    <input type="email" name="email" id="email" class="form-control" placeholder="Email Id" />
                  </div>
                  <div class="form-group mb-2">
                    <input type="password" name="password" id="password" class="form-control" placeholder="Password">
                  </div>
                  <button type="submit" class="btn btn-block btn-primary">Signup</button>
                </form>
              </section>
            
              <!-- verify  -->
              <section id="verify_form_wrap">
                <form id="verifyOtpForm">
                  <div class="form-group mb-2">
                    <input type="text" name="verificationCode" id="verificationCode" class="form-control" placeholder="Enter verification code here" />
                  </div>
                  <button type="submit" class="btn btn-block btn-primary">Verify Email</button>
                  <div class="d-flex justify-content-end mt-2">
                    <a onclick="resendOtpEmail()" href="javascript:void(0)">Resend code</a>
                  </div>
                </form>
              </section>
              <!-- verification end -->

              <div class="d-flex align-items-center account">
                <p class="mb-0">Already have an account? </p>
                <a href="<?php echo site_url(); ?>/login/" class="btn btn-secondary"> Login</a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

<!-- Modal start -->
<div class="modal fade" id="otpVerifyModal" tabindex="-1" role="dialog" aria-labelledby="otpVerifyLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-md" role="document">
    <div class="modal-content">
    <div class="modal-header">
    <h3>Giddh Two Factor Auth</h3>
    <span aria-hidden="true" class="close" data-dismiss="modal" onclick="resetTwoWayAuthModal()">×</span>
    </div>
      <div class="modal-body">
        <div id="modalInfoSpan"></div>
        <form id="otpForm">
        <div class="form-group">
        <input autocomplete="off" type="text" name="otp" id="otp" class="form-control" placeholder="OTP" required />
        <small class="form-text text-muted">We have sent an OTP to your registered mobile number.</small>
        </div>
        <div class="form-group">
        <button type="submit" class="btn btn-block btn-primary">Submit</button>
        </div>
        <div class="form-group" style="text-align: center;font-size: 14px;">
          <span>Didn't receive OTP?</span>&nbsp;<a href="javascript:;" onclick="resendOtp()">Resend OTP</a>
          <div id="otp-message-parent"><span id="otp-message" class="alert"></span></div>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
<!-- Modal ends -->

<script type='text/javascript' src='<?php echo site_url(); ?>/wp-content/themes/muteweb/assets/js/vendor.min.js?ver=20141010'></script>
<script type='text/javascript' src='<?php echo site_url(); ?>/wp-content/themes/muteweb/assets/js/front-script.js?ver=20141010'></script>
<script src="https://apis.google.com/js/api:client.js"></script>
<script type='text/javascript'>
var _GID_API_RES = null;
var googleUser = {};
var adwordsParams = "";

<?php 
if($_COOKIE['utm_source'] || $_COOKIE['utm_medium'] || $_COOKIE['utm_campaign'] || $_COOKIE['utm_term'] || $_COOKIE['utm_content']) {
    ?>
    adwordsParams = "&utm_source=<?php echo $_COOKIE['utm_source'];?>&utm_medium=<?php echo $_COOKIE['utm_medium'];?>&utm_campaign=<?php echo $_COOKIE['utm_campaign'];?>&utm_term=<?php echo $_COOKIE['utm_term'];?>&utm_content=<?php echo $_COOKIE['utm_content'];?>";
    <?php
}
?>

function initGoogleSignup() {
    var width = 600;
    var height = 500;
    var left = (screen.width/2)-(width/2);
    var top = (screen.height/2)-(height/2);
    window.open("<?php echo getGoogleAuthUrl(); ?>", "Giddh - Google Login", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+width+', height='+height+', top='+top+', left='+left);
}

function deleteUtmCookies() {
    document.cookie = 'utm_source=; Path=/; Domain=giddh.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'utm_medium=; Path=/; Domain=giddh.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'utm_campaign=; Path=/; Domain=giddh.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'utm_term=; Path=/; Domain=giddh.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'utm_content=; Path=/; Domain=giddh.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function checkToken(token) {
  if (token) { 
    jQuery.ajax({
      url: "https://api.giddh.com/v2/signup-with-google",
      type: "GET",
      dataType: "json",
      contentType: 'application/json',
      headers: { 'access-token': token },
      success: function(data){
        if (data.body.statusCode === 'AUTHENTICATE_TWO_WAY') {
          jQuery('#otpVerifyModal').modal('show');
          _GID_API_RES = data.body;
        } else {
          deleteUtmCookies();
          window.location = "https://app.giddh.com/token-verify?token="+token+adwordsParams;
        }
      },
      error: function(err){
        showMsg(err.responseJSON.message);
      }
    });
  }
}

jQuery("#otpForm").submit(function(e) {
  e.preventDefault();
  var otp= jQuery('#otp').val();
  if (otp) {
    let obj = {"countryCode": _GID_API_RES.countryCode,"mobileNumber": _GID_API_RES.contactNumber,"oneTimePassword":otp};
    jQuery.ajax({
      url: "https://api.giddh.com/v2/verify-number",
      type: "POST",
      dataType: "json",
      contentType: 'application/json',
      data: JSON.stringify(obj),
      success: function(d) {
        resetFormButton('#otpForm');
        window.location = "https://app.giddh.com/token-verify?request="+JSON.stringify(d)+adwordsParams;
      },
      error: function(xhr, ajaxOptions, thrownError){
        resetFormButton('#otpForm');
        if (xhr && xhr.responseJSON) {
          window.alert(xhr.responseJSON.message);
        }
      }
    });
  } else {
    resetFormButton('#otpForm');
    window.alert('Provide OTP to validate.');
  }
});

// count retry
_retryCount = 0;

function resetFormButton(formId) {
  jQuery(formId).find(":submit").prop("disabled", false);
}

jQuery(function(){
  
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
          deleteUtmCookies();
          resetFormButton('#verifyOtpForm');
          window.location = "https://app.giddh.com/token-verify?request="+JSON.stringify(data)+adwordsParams;
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

function resendOtpEmail() {
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
        if (xhr && xhr.responseJSON) {
          showMsg(xhr.responseJSON.message);
        }
      }
    });
  } else {
    //
  }
}

var resendInProgress = false;

function resendOtp() {
    jQuery("#otp-message-parent").hide();

    if(!resendInProgress && _GID_API_RES && _GID_API_RES.contactNumber && _GID_API_RES.countryCode) {
        resendInProgress = true;

        jQuery.ajax({
            url: "https://api.giddh.com/generate-otp",
            type: "POST",
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify({mobileNumber: _GID_API_RES.contactNumber, countryCode: _GID_API_RES.countryCode }),
            success: function(data) {
                resendInProgress = false;

                jQuery("#otp-message-parent").show();

                if (data.status === 'success') {
                    jQuery("#otp-message").removeClass("alert-danger").addClass("alert-success").html(data.body);
                } else {
                    jQuery("#otp-message").removeClass("alert-success").addClass("alert-danger").html(data.body);
                }
            },
            error: function(err) {
                resendInProgress = false;

                jQuery("#otp-message-parent").show();
                jQuery("#otp-message").removeClass("alert-success").addClass("alert-danger").html("Something went wrong! Please try again.");
            }
        });
    }
}

function resetTwoWayAuthModal() {
    jQuery("#otp-message-parent").hide();
    jQuery("#otp-message").removeClass("alert-success alert-danger").html("");
}
</script>
</body>
</html>