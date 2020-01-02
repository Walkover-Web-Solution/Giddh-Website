<?php /* Template Name: login*/ ?>
<!DOCTYPE html>
<html>
<head>
    <title>Login ~ Giddh</title>
    <link rel="icon" href="<?php echo site_url(); ?>/wp-content/uploads/2019/11/favicon.ico" sizes="32x32" />
    <link rel="icon" href="<?php echo site_url(); ?>/wp-content/uploads/2019/11/favicon.ico" sizes="192x192" />
    <link rel="apple-touch-icon-precomposed" href="<?php echo site_url(); ?>/wp-content/uploads/2019/11/favicon.ico" />
    <meta name="msapplication-TileImage" content="<?php echo site_url(); ?>/wp-content/uploads/2019/11/favicon.ico" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel='stylesheet' id='muteweb-vendor-style-css'  href='<?php echo site_url(); ?>/wp-content/themes/muteweb/assets/css/vendor.min.css?ver=1.5' type='text/css' media='all' />
    <link rel='stylesheet' id='muteweb-style-css'  href='<?php echo site_url(); ?>/wp-content/themes/muteweb/style.css?ver=1.5' type='text/css' media='all' />

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
  background-size: cover;
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
.account button {
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
.forgotStep{
    display:none;
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
            <!-- dynamic content inserted -->
            <div class="logo_login">
              <a href="<?php echo site_url(); ?>">
                <img src="<?php echo site_url(); ?>/wp-content/uploads/2019/11/login-Page-Logo.png" alt="" width="141px" />
              </a>
            </div>
            <div class="accounting_space bg-white">
              <section id="fullView">
                <h4>Login to your secure accounting space</h4>
                <ul class="pl-0">
                  <li class="list-unstyled pt-3"><a href="javascript:;" onclick="initGoogleLogin();" class="btn btn-outline-primary p-0 g-signin2"><span class="p-2 d-inline-block bg-primary text-white w-70">Login with google</span></a></li>
                </ul>
                <p class="login-with mb-2">Login with<a href="javascript:;" data-toggle="collapse" data-target="#demo"> email and password</a></p>
                <form id="demo" class="collapse">
                  <div class="form-group">
                    <input autocomplete="off" type="email" id="email" class="form-control" placeholder="Email Id" />
                  </div>
                  <div class="form-group">
                    <input autocomplete="off" type="password" id="password" class="form-control"
                      placeholder="Password" />
                  </div>
                  <button type="submit" class="btn btn-block btn-primary">Login</button>
                  <div class="d-flex justify-content-end mt-2">
                    <a href="javascript:;" onclick="showForgotPasswordStep1()">Forgot password?</a>
                  </div>
                </form>
                <div class="d-flex align-items-center account mt-2">
                  <p class="mb-0 mr-2">Don't have an account?</p>
                  <!-- <?php echo site_url();?> -->
                  <a href="<?php echo site_url(); ?>/signup/" class="btn btn-secondary"> signup</a>
                </div>
              </section>
              <!-- end of full view -->
              <!-- start forgot password -->
              <section id="forgotStep-1" class="forgotStep">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:;" onclick="hideForgotPasswordSteps()">Back</a></li>
                  </ol>
                </nav>
                <form id="forgotFormStep1" class="">
                  <div class="form-group">
                    <input autocomplete="off" type="email" id="userId" class="form-control" placeholder="Email Id" />
                  </div>
                  <button type="submit" class="btn btn-block btn-primary">Reset Password</button>
                </form>
              </section>
                <section id="forgotStep-2" class="forgotStep">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a onclick="hideForgotPasswordStep2()" href="javascript:;">Reset Password</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Verification</li>
                  </ol>
                </nav>
                <form id="forgotFormStep2" class="">
                  <div class="form-group">
                    <input autocomplete="off" type="text" name="verificationCode" id="verificationCode" class="form-control" placeholder="Verification Code" required />
                  </div>
                  <div class="form-group">
                    <input autocomplete="off" type="text" id="newPassword" name="newPassword" class="form-control" placeholder="New Password" required />
                  </div>
                  <button type="submit" class="btn btn-block btn-primary">Submit</button>
                </form>
                </section>
              <!-- end forgot password -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Modal start -->
<div class="modal fade" id="otpVerifyModal" tabindex="-1" role="dialog" aria-labelledby="otpVerifyLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
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
<script type="text/javascript">
var _GID_API_RES = null;
var EMAIL_REGEX = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
var initialLoad = true;
var adwordsParams = "";

<?php 
if($_COOKIE['utm_source'] || $_COOKIE['utm_medium'] || $_COOKIE['utm_campaign'] || $_COOKIE['utm_term'] || $_COOKIE['utm_content']) {
    ?>
    adwordsParams = "&utm_source=<?php echo $_COOKIE['utm_source'];?>&utm_medium=<?php echo $_COOKIE['utm_medium'];?>&utm_campaign=<?php echo $_COOKIE['utm_campaign'];?>&utm_term=<?php echo $_COOKIE['utm_term'];?>&utm_content=<?php echo $_COOKIE['utm_content'];?>";
    <?php
}
?>

function initGoogleLogin() {
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

function resetTwoWayAuthModal() {
    jQuery("#otp-message-parent").hide();
    jQuery("#otp-message").removeClass("alert-success alert-danger").html("");
}

function resetFormButton(formId) {
    jQuery(formId).find(":submit").prop("disabled", false);
}

function showMsg(id, msg, type) {
    // remove all alerts first
    jQuery(id).html('');
    var className = (type) ? 'alert-success' : 'alert-danger';
    var htmlTemplate = '<div class="'+className+' alert alert-dismissible fade show" role="alert">'+msg+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
    jQuery(id).append(htmlTemplate);
    setTimeout( function() {
        jQuery(id).html('');
    }, 5000);
}

jQuery(document).ready(function() {
    localStorage.setItem('logout', true); 
});

jQuery("#otpForm").submit(function(e) {
    e.preventDefault();
    var otp = jQuery('#otp').val();
    if (otp) {
        jQuery(this).find(":submit").attr('disabled', 'disabled');
        let obj = {"countryCode": _GID_API_RES.countryCode,"mobileNumber": _GID_API_RES.contactNumber,"oneTimePassword":otp};
        jQuery.ajax({
            url: "https://api.giddh.com/v2/verify-number",
            type: "POST",
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify(obj),
            success: function(d) {
              deleteUtmCookies();
              resetFormButton('#otpForm');
              window.location = "https://app.giddh.com/token-verify?request="+JSON.stringify(d);
            },
            error: function(xhr, ajaxOptions, thrownError){
              resetFormButton('#otpForm');
              if (xhr && xhr.responseJSON) {
                showMsg('#modalInfoSpan', xhr.responseJSON.message);
              }
            }
        });
    } else {
      resetFormButton('#otpForm');
      showMsg('#modalInfoSpan', 'Provide OTP to validate.');
    }
});

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
          jQuery('#otpVerifyModal').modal({backdrop: 'static', keyboard: false});
          jQuery('#otpVerifyModal').modal('show');
          _GID_API_RES = data.body;
        } else {
          deleteUtmCookies();
          window.location = "https://app.giddh.com/token-verify?token="+token+adwordsParams;
        }
      },
      error: function(err){
        showMsg('#infoSpan', err.responseJSON.message);
      }
    });
  }
}

// reset step
jQuery("#forgotFormStep2").submit(function(e) {
    e.preventDefault();
    var uniqueKey= jQuery('#userId').val();
    var verificationCode= jQuery('#verificationCode').val();
    var newPassword= jQuery('#newPassword').val();
    var obj = {
        uniqueKey,
        verificationCode,
        newPassword
    };
    if (uniqueKey && verificationCode && newPassword) {
        jQuery(this).find(":submit").attr('disabled', 'disabled');

        jQuery.ajax({
            url: 'https://api.giddh.com/reset-password',
            type: "PUT",
            dataType: "json",
            contentType: 'application/json',
            cache: false,
            data: JSON.stringify(obj),
            success: function(data){
                jQuery("#forgotFormStep2").find(":submit").prop("disabled", false);
                showMsg('#infoSpan', data.body, 'success');
                hideForgotPasswordSteps();
            },
            error: function(xhr, ajaxOptions, thrownError){
                console.log(xhr);
                jQuery("#forgotFormStep2").find(":submit").prop("disabled", false);
                if (xhr && xhr.responseJSON) {
                    showMsg('#infoSpan', xhr.responseJSON.message);
                }
            }
        });
    }
});

// forgot step one to generate token
jQuery("#forgotFormStep1").submit(function(e) {
    e.preventDefault();
    var userId= jQuery('#userId').val();
    console.log(userId);
    if (userId) {
        jQuery(this).find(":submit").attr('disabled', 'disabled');
        jQuery.ajax({
            url: 'https://api.giddh.com/users/'+userId+'/forgot-password',
            type: "PUT",
            dataType: "json",
            contentType: 'application/json',
            cache: false,
            data: JSON.stringify({}),
            success: function(data){
                jQuery("#forgotFormStep1").find(":submit").prop("disabled", false);
                showMsg('#infoSpan', data.body, 'success');
                showForgotPasswordStep2();
            },
            error: function(err){
                jQuery("#forgotFormStep1").find(":submit").prop("disabled", false);
                if (err && err.responseJSON) {
                    showMsg('#infoSpan', err.responseJSON.message);
                } else {
                    console.log(err);
                }
            }
        });
    }
});


function showForgotPasswordStep1() {
  jQuery('#fullView').hide();
  jQuery('#forgotStep-1').show();
}

function showForgotPasswordStep2() {
  jQuery('#forgotStep-1').hide();
  jQuery('#forgotStep-2').show();
}

function hideForgotPasswordSteps() {
  jQuery('#fullView').show();
  jQuery('#forgotStep-1').hide();
  jQuery('#forgotStep-2').hide();
}

function hideForgotPasswordStep2() {
  jQuery('#fullView').hide();
  jQuery('#forgotStep-1').show();
  jQuery('#forgotStep-2').hide();
}

// login with username and password
jQuery("#demo").submit(function(e) {
    e.preventDefault();
    var k = jQuery('#email').val();
    var p = jQuery('#password').val();

  	if (k && p) {
        jQuery(this).find(":submit").attr('disabled', 'disabled');
        jQuery.ajax({
            url: "https://api.giddh.com/v2/login-with-password",
            type: "POST",
            dataType: "json",
            contentType: 'application/json',
            cache: false,
            data: JSON.stringify({"password": p , "uniqueKey": k}),
            success: function(data){
            	if (data.body.statusCode === 'AUTHENTICATE_TWO_WAY') {
		            jQuery('#otpVerifyModal').modal({backdrop: 'static', keyboard: false});
		            jQuery('#otpVerifyModal').modal('show');
		            _GID_API_RES = data.body;
		        } else {
	                jQuery("#demo").find(":submit").prop("disabled", false);
	                window.location = "https://app.giddh.com/token-verify?request="+JSON.stringify(data);
	            }
            },
            error: function(err) {
                jQuery("#demo").find(":submit").prop("disabled", false);
                if (err && err.responseJSON) {
                        showMsg('#infoSpan', err.responseJSON.message);
                } else {
                  console.log(err);
                }
            }
        });
  	}
});

var redirectUri = "<?php echo site_url(); ?>/login";
function someErrands() {
    initialLoad = false;
    localStorage.setItem('logout', false);
}

function signOut() {
    localStorage.setItem('logout', true);
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut()
    .then(function () {
    window.location = redirectUri;
    })
    .catch(function (err) {
    window.location = redirectUri;
    });
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
</script>
</body>
</html>