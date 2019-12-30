<?php /* Template Name: Landing page */ ?>
<?php get_header(); ?>

<style>
button:focus, a:focus{
    outline: none;
}
#sign_up .iti {
    display:block;
}
#sign_up .iti__selected-flag{
    height:38px;
}
.sign_up{
    border: 1px solid #ccc;
    overflow: hidden;
    margin: 3rem auto;
}

.sign_content{
    padding: 37px 100px 50px 80px;
}
.sign_gray_box{
    padding: 78px 80px;
    background-color: #edeef2;
    height: 100%;
}
.sign_content h2{
    color: #393a3d;
    line-height: 36px;
    padding-right: 50px;
    margin-bottom: 40px;
}
p.text-center.or {
    margin: 17px 0;
    font-size: 12px;
    color: #393a3d;
}
.sign_content #googleBtn {
    background: #fff;
    color: #393a3d;
    font-size: 0.9rem;
    border: 2px solid #8d9096;
    border-radius: 2px;
    white-space: nowrap;
    text-align: center;
    width: 100%;
    min-height: 40px;
    box-shadow: inherit;
    height: 44px;
}
.sign_content #googleBtn:hover,
.sign_content .btn-primary:hover{
    box-shadow: 0 8px 20px rgba(55, 125, 255, 0.075)
}
.google_icon{
    background: url(<?php echo get_template_directory_uri(); ?>/assets/images/google.png) 50% no-repeat;
    display: inline-block;
    vertical-align: middle;
    float: none;
    width: 32px;
    height: 32px;
}
.or span{
    position: relative;
}
.sign_content label.error {
    color: #ce141c;
    font-size: 14px;
    line-height: 20px;
}

.or span:before{
    content: "";
    position: absolute;
    left: -114px;
    top: 9px;
    width: 100px;
    height: 1px;
    background-color: #ccc
}
.or span:after{
    content: "";
    position: absolute;
    right: -114px;
    top: 9px;
    width: 100px;
    height: 1px;
    background-color: #ccc
}
.sign_content .btn-primary{
    background-color: #2CA01C;
    border-color: #2CA01C;
    border-radius: 2px;
    margin-bottom: 30px;
}
.lock_icon{
    background: url(<?php echo get_template_directory_uri(); ?>/assets/images/lock.png) 50% no-repeat;
    height: 1em;
    width: .8em;
    margin-top: 2px;
    margin-right: 4px;
    vertical-align: text-top;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
}
.sign_gray_box .media{
    margin-bottom: 18px;
}
.sign_gray_box .media img{
    width: 24px;
    height: 30px;
}
p.free_trial {
    font-size: 12px;
    color: #757575;
    margin-bottom: 45px;
}
p.capta {
    font-size: 10px;
    color: #8d9096;
}
.sign_content label {
    color: #393a3d;
    font-size: 14px;
    line-height: 20px;
}
.sign_gray_box h3{
    font-weight: 600;
    font-size: 19px;
    line-height: 24px;
    color: #393a3d;
    margin-bottom: 28px;
}
.media-body h5{
    font-size: 14px;
}
.try_free{
    margin-top: 33px;
    margin-bottom: 28px;
}
.sign_gray_box hr {
    background-color: #505050;
    height: 5px;
    margin-top: 66px;
    margin-bottom: 45px;
}
.sign_price{
    font-size: 14px;
    font-weight: 700;
    color: #333;
}
.sign_content .form-group{
    margin-bottom: 28px;
}
#verify_form_wrap{
    display:none
}
</style>

<section id="sign_up">
        <div class="container sign_up">
            <div class="row">
              
                <div class="col-md-6 p-0">
                  
                    <div class="sign_content">
                        <h2>Signup for 30-day free trial</h2>
                        <button type="button" id="googleBtn">
                            <span class="google_icon"></span> Sign up with Google
                        </button>
                        <p class="text-center or"> <span>or</span> </p>

                        <form method="post" name="signUp" id="signUp">
                            <div class="form-group">
                                <label for="email">Email Address (User ID)</label>
                                <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp">
                              
                            </div>
                            <div class="form-group">
                                <label for="first_name">First Name</label>
                                <input type="text" class="form-control" name="first_name" id="first_name">
                            </div>
                            <div class="form-group">
                                <label for="last_name">Last Name </label>
                                <input type="text" class="form-control" name="last_name" id="last_name">
                            </div>
                            <div class="form-group">
                                <label for="mobileNo">Mobile Number </label>
                                <div>
                                    <input type="text" class="form-control" name="mobileNo" id="mobileNo">
                                    <small class="form-text text-muted">Standard call, messaging or data rates may apply.</small>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" name="password" id="password">
                            </div>
                            <div class="form-group">
                                <label for="confirm_password">Confirm Password</label>
                                <input type="password" class="form-control" name="confirm_password" id="confirm_password">
                            </div>
                            <div id="infoSpan"></div>
                            <button type="submit" class="btn btn-primary btn-block"> <span class="lock_icon"></span>  Start Free Trial</button>
                        </form>

                        <!-- verify  -->
                        <section id="verify_form_wrap">
                            <form id="verifyOtpForm">
                            <div class="form-group mb-2">
                                <input type="text" name="verificationCode" id="verificationCode" class="form-control" placeholder="Enter verification code here" />
                            </div>
                            <button type="submit" class="btn btn-block btn-primary">Verify Email</button>
                            <div class="d-flex justify-content-end mt-2">
                                <a onclick="resendOtp()" href="javascript:void(0)">Resend code</a>
                            </div>
                            </form>
                        </section>
                        <!-- verification end -->

                        <p class="free_trial">By clicking Start Free Trial or Sign up with Google, you agree to our <a href="https://giddh.com/privacy-policy/">Terms</a> and have read and acknowledge our <a href="https://giddh.com/privacy-policy/">Privacy Statement.</a></p>

                        <!-- <p class="capta">Invisible reCAPTCHA by Google <a href="#">Privacy Policy </a> and <a href="#">Terms of Use.</a> </p> -->
                    </div>
                </div>

                <div class="col-md-6 p-0">
                    <div class="sign_gray_box">
                            <h3>Giddh – one-stop solution for all your accounting needs!</h3>
                            <div class="media">
                                    <img class="mr-3" src="<?php echo get_template_directory_uri(); ?>/assets/images/icon-Easy.svg" alt="">
                                    <div class="media-body">
                                      <h5 class="mt-0">Turn raw data into actionable information with graphs and charts.</h5>
                                    </div>
                           </div>
                           <div class="media">
                                <img class="mr-3" src="<?php echo get_template_directory_uri(); ?>/assets/images/icon-import.svg" alt="">
                                <div class="media-body">
                                  <h5 class="mt-0">Become GST compliant and file GST returns automatically. </h5>
                                </div>
                       </div>
                       <div class="media">
                            <img class="mr-3" src="<?php echo get_template_directory_uri(); ?>/assets/images/icon-secured.svg" alt="">
                            <div class="media-body">
                              <h5 class="mt-0">Bring your accounting data to Giddh in a few simple steps.</h5>
                            </div>
                   </div>
                   <div class="media">
                        <img class="mr-3" src="<?php echo get_template_directory_uri(); ?>/assets/images/icon-testimonial.svg" alt="">
                        <div class="media-body">
                          <h5 class="mt-0">Provide role-based access to the accounting information. </h5>
                        </div>
                   </div>
                   <div class="media">
                        <img class="mr-3" src="<?php echo get_template_directory_uri(); ?>/assets/images/icon-Easy.svg" alt="">
                        <div class="media-body">
                          <h5 class="mt-0">View Daybook, P/L Reports and Trial Balance anytime, anywhere. </h5>
                        </div>
                   </div>
                   <div class="media">
                        <img class="mr-3" src="<?php echo get_template_directory_uri(); ?>/assets/images/icon-import.svg" alt="">
                        <div class="media-body">
                          <h5 class="mt-0">Schedule invoices and send reminders to customers. </h5>
                        </div>
                   </div>
                   <p class="try_free">Try for Free!</p>
                   <p>For Special Offers, contact: <br><span class="phone-number">+91-8818888764</span></p>
                   <hr>
                   <p class="sign_price">*   Price includes all applicable taxes.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Modal start -->
<div class="modal fade" id="otpVerifyModal" tabindex="-1" role="dialog" aria-labelledby="otpVerifyLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
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
        </form>
      </div>
    </div>
  </div>
</div>
<!-- Modal ends -->

<?php get_footer();  ?>
<!-- <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"  crossorigin="anonymous"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js"></script>
<script src="https://apis.google.com/js/api:client.js"></script>
<script type="text/javascript">
// google signup
var _GID_API_RES = null;
var googleUser = {};
var startApp = function() {
  gapi.load('auth2', function(){
    auth2 = gapi.auth2.init({
      client_id: '641015054140-3cl9c3kh18vctdjlrt9c8v0vs85dorv2.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
    });
    attachSignin(document.getElementById('googleBtn'));
  });
};

function attachSignin(element) {
  auth2.attachClickHandler(element, {},
  function(googleUser) {
    onGoogleSuccess(googleUser);
  }, function(error) {
    console.log(JSON.stringify(error, undefined, 2));
  });
}

function onGoogleSuccess(googleUser) {
  if (googleUser && googleUser['Zi']) {
    let token = googleUser['Zi'].access_token;
    if (token) {
      checkToken(token);
    } else {
      signOut();
    }
  }
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
          window.location = "https://app.giddh.com/token-verify?token="+token;
        }
      },
      error: function(err){
        console.log(err);
      }
    });
  }
}

function signOut() {
  localStorage.setItem('logout', false);
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
  localStorage.getItem('logout')
}

window.addEventListener('load', function() {
  startApp();
});

jQuery("#otpForm").submit(function(e) {
  e.preventDefault();
  var otp= jQuery('#otp').val();
  if (!_GID_API_RES) {
    resetFormButton('#otpForm');
    jQuery('#otpVerifyModal').modal('hide');
    return;
  }
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
        window.location = "https://app.giddh.com/token-verify?request="+JSON.stringify(d);
      },
      error: function(xhr, ajaxOptions, thrownError){
        resetFormButton('#otpForm');
        console.log(xhr.responseJSON);
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


// end google signup
// count retry
_retryCount = 0;
function resetFormButton(formId) {
  jQuery(formId).find(":submit").prop("disabled", false);
}

var input = document.querySelector("#mobileNo");
window.intlTelInput(input, {
	initialCountry: "auto",
  geoIpLookup: function(callback) {
    jQuery.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
			var isFoundAEInUrl = false;
			<?php if (strstr($_SERVER['REQUEST_URI'], '/ae') !== false) { ?>
				isFoundAEInUrl = true;
			<?php } ?>
			if (isFoundAEInUrl) {
				callback('AE');
			} else {
				var countryCode = (resp && resp.country) ? resp.country : "";
				callback(countryCode);
			}
    });
  },
  utilsScript: "" // just for formatting/placeholders etc
});

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

function getFormData(formId){
    var unindexed_array = jQuery(formId).serializeArray();
    var indexed_array = {};

    jQuery.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

function showVerificationStep() {
  jQuery("#signUp").hide();
  jQuery("#verify_form_wrap").show();
}

function performSignup(data) {
    if (data) {
        jQuery.ajax({
            url: "https://api.giddh.com/v2/signup",
            type: "POST",
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(d) {
                showVerificationStep();
                resetFormButton('#signUp');
            },
            error: function(xhr, ajaxOptions, thrownError){
                resetFormButton('#signUp');
                if (xhr && xhr.responseJSON) {
                    showMsg(xhr.responseJSON.message);
                }
            }
        });
    }
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
        if (xhr && xhr.responseJSON) {
          showMsg(xhr.responseJSON.message);
        }
      }
    });
  }
}

jQuery(document).ready(function () {
// verify otp
jQuery("#verifyOtpForm").on("submit", function(event) {
    jQuery(this).find(":submit").attr('disabled', 'disabled');
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


        //   signup form
        jQuery('#signUp').validate({ 
            onfocusout: function (element) {
                jQuery(element).valid();
            },

            rules: {
                email: {
                    required: true,
                    email: true
                },
                first_name: {
                    required: true,                     
                },
                last_name: {
                    required: true,                     
                },
                mobileNo: {
                minlength:10,
                maxlength:10,
                mobileCheck: true
            },

            password: {
                required: true,
                minlength: 8,
                pwLowercheck: true,
                pwupperCaseCheck: true,
                pwNumbersCheck: true
            },
            confirm_password : {
                minlength : 8,
                required: true,
                equalTo : '[name="password"]'
            }
        },
         messages: {
            password: {                                
                pwLowercheck: "The password at least one lowercase letter",
                pwupperCaseCheck: "The password at least one uppercase letter",
                pwNumbersCheck: "The password atleast at least one number",
            },
            mobileNo: {                                
                mobileCheck: "Mobile Number should be number digit",
            }
         },
        submitHandler: function (form) {
            event.preventDefault();
            jQuery('#signUp').find(":submit").attr('disabled', 'disabled');
            let d = getFormData('#signUp');
            console.log(d);
            performSignup(d);
            return false;
        }
    });

jQuery.validator.addMethod("pwLowercheck", function(value) {
return /[a-z]/g.test(value); 
});


jQuery.validator.addMethod("pwupperCaseCheck", function(value) {
return /[A-Z]/g.test(value); 
});


jQuery.validator.addMethod("pwNumbersCheck", function(value) {
return /[0-9]/g.test(value); 
});




jQuery.validator.addMethod("mobileCheck", function(value) {
return   /^\d{10}$/.test(value); 
});





});


    </script>



