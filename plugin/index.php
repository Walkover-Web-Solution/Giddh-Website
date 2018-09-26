<!doctype html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <style>
            .edition-form .edition-form-buttons {
                padding: 1em 0 0.5em;
                width: 21%;
                margin-left: 35%;
                text-align: left !important;
            }
        </style>
        <script type="text/javascript" src="//cdn.dcsaas.net/js/mootools.js"></script>
        <script src="//cdn.dcsaas.net/js/appstore-sdk.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script>
            (function () {
                'use strict';

                var styles;

                if (localStorage.getItem('styles')) {
                    styles = JSON.parse(localStorage.getItem('styles'));
                    injectStyles(styles);
                }

                window.shopAppInstance = new ShopApp(function (app) {
                    app.init(null, function (params, app) {
                        if (localStorage.getItem('styles') === null) {
                            injectStyles(params.styles);
                        }
                        localStorage.setItem('styles', JSON.stringify(params.styles));

                        app.show(null, function () {
                            
                            new app.VisibilitySwitch();
                            $$('[data-switch-handle]').each(function(el) {
                                console.log(el);
                                el.addEvent('change', function() {
                                    app.adjustIframeSize();
                                });
                            });
                            app.adjustIframeSize();
                            
                        });
                        <?php if(isset($message) and isset($type)) { ?>
                        app.flashMessage({
                            msg : '<?php echo $message; ?>',
                            type : '<?php echo $type; ?>'
                        });
                        <?php } ?>
                    }, function (errmsg, app) {
                        alert(errmsg);
                    });
                    
                }, true);

                function injectStyles (styles) {
                    var i;
                    var el;
                    var sLength;

                    sLength = styles.length;
                    for (i = 0; i < sLength; ++i) {
                        el = document.createElement('link');
                        el.rel = 'stylesheet';
                        el.type = 'text/css';
                        el.href = styles[i];
                        document.getElementsByTagName('head')[0].appendChild(el);
                    }
                }
            }());
            
            var validations ={
    email: [/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/, 'Please enter a valid email address']
};
$(document).ready(function(){


    //                alert("wdewe");
//                $.ajax({
//                    url: 'ajax.php',
//                    type: 'post',
//                    dataType : 'json',
//                    data: { shop : '<?php echo $_GET['shop']?>'},
//                    success: function(response) { alert(response+"wqdewd"); }
//                });
    // Check all the input fields of type email. This function will handle all the email addresses validations
    //$("input[type=email]").on('keyup',function(){ 
        
        //$('#submitBtn').removeAttr("disabled");
    //});
    
    
    $("#formNew").on('submit',function(){ 
        var companyName = $("#companyName").val();
        if(companyName == '')
        {
            alert("Enter Giddh's company name");
            return false;
        }
        else
        {
            var authKey = $("#authKey").val();
            if(authKey == '')
            {
                validation = new RegExp(validations['email'][0]);
                if (!validation.test(this.value)){
                    // If the validation fails then we show the custom error message
                    this.setCustomValidity(validations['email'][1]);
                    return false;
                } else {
                    // This is really important. If the validation is successful you need to reset the custom error message
                    this.setCustomValidity('');
                }
            }
        
            return true;
        }
    });
})
        </script>
    </head>
    <body>
        <main>
            <section class="rwd-layout-col-12">
                <div class="edition-form">
                    <?php 
                    $user_name = "walkover";
                    $password = "w@lk0Ver";
                    $database = "demo_walkover";
                    $server = "db4free.net";
                    $con = mysqli_connect($server,$user_name,$password);

                    //2 connect with a data base 
                    $db_select = mysqli_select_db($con , $database);  

                    $shop = $_GET['shop']; 
                    $query = "select * from user where shop_url = '$shop' "; 
                    $result = mysqli_query($con,$query);
                    $row = mysqli_fetch_assoc($result);

                    ?>
                    <form id="formNew" method="POST" action="">
                        
                        <fieldset>

                            <header>Giddh's account settings</header>
                            <div class="edition-form-line">
                                <div class="edition-form-line-label">
                                    <label for="companyName" class="aicon-required">Company UniqueName:</label>
                                </div>
                                <div class="edition-form-line-field">
                                    <input name="companyName" type="text" id="companyName" value="<?=$row['company_name']?>" placeholder="Enter your Giddh's company name">
                                    
                                
                                </div>
                            </div>
                            
                            </br>
                            <hr>
                            </br>
                            
                            <div class="edition-form-line">
                                <div class="edition-form-line-label">
                                    <label for="authkey" class="aicon-required">Email:</label>
                                </div>
                                <div class="edition-form-line-field">
                                    <input name="uniqueKey" type="email" id="email" value="<?=$row['email']?>" placeholder= "Enter your Giddh's email-id">
                                    
                                
                                </div>
                            </div>
                            <div class="edition-form-line">
                                <div class="edition-form-line-label">
                                    <label for="authkey" class="aicon-required">Password:</label>
                                </div>
                                <div class="edition-form-line-field">
                                    <input name="password" type="password" value="<?=$row['password']?>" placeholder="Enter your Giddh's password">
                                    
                                
                                </div>
                            </div>
                            
                            
                            
                            <h2 style="text-align:center !important; display: block;">OR</h2>
                            
                            
                            <div class="edition-form-line">
                                <div class="edition-form-line-label">
                                    <label for="authkey" class="aicon-required">Auth Key:</label>
                                </div>
                                <div class="edition-form-line-field">
                                    <input name="authKey" type="text" id="authKey" value="<?=$row['authKey']?>" placeholder="Enter your Giddh's authkey">
                                    
                                
                                </div>
                            </div>

                            

                        </fieldset>
                        
                        <fieldset>
                            <div class="edition-form-buttons">
                                <a href="https://giddh.com/app/login" style="text-align: left; line-height: 40px;">Visit Giddh.com</a>
                                <input id="submitBtn" style="float:right;" <?php //if($row['email']!='') echo "disabled";?> class="button button-bg button-larger button-important save-button" type="submit" name="submit" value="Save">
                            </div>
                        </fieldset>
                        
                    </form>
                    
                    <fieldset>

                            <header>General Information</header>
                            
                            <div class="edition-form-line">
                                Test
                            </div>
                            
                    </fieldset>
                 
                    <div class="clearfix"></div>
                </div>
            </section>
        </main>
        
        <?php //echo basename($_SERVER['REQUEST_URI'])."<br>";
        
        if (isset($_POST['submit'])) 
        {
        
            if($_POST['submit'] != '')
            {
                
                $data = array('authKey' => $_POST['authKey'] ,
                    'zencommerceShopId' => $_GET['shop'] ,

                );
                $data = json_encode($data);

                $service_url     = 'http://api.giddh.com/company/%7BcompanyUniqueName%7D/zencommerce/user';
                $curl            = curl_init($service_url);


                curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
                curl_setopt($curl, CURLOPT_HTTPHEADER, array(
                        "Content-Type: application/json"
                    ));
                curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
                $curl_response   = curl_exec($curl);

        //        if (curl_error($curl)) {
        //            $error_msg = curl_error($curl);
        //            echo "<pre>"; print_r($error_msg); 
        //        }

                curl_close($curl);
                echo '<br>Information has been saved successfully';
                
//                    $user_name = "walkover";
//                    $password = "w@lk0Ver";
//                    $database = "demo_walkover";
//                    $server = "db4free.net";
//
//                    $con = mysqli_connect($server,$user_name,$password);
//                    if (!$con) {
//                        die('mysqli connection failed: ' . mysql_error() );
//                    }
//                    //2 connect with a data base 
//                    $db_select = mysqli_select_db($con , $database);  
//                    if (!$db_select) {
//                        die('data base selection failed: ' . mysql_error() );
//                    }
//
//                    $shop_url = $_GET['shop'];
//                    $authKey = $_POST['authKey'];
//                    $companyName = $_POST['companyName'];
//
//                    if($shop_url != $row['shop_url'])
//                    {
//                        $order = mysqli_query($con,"INSERT INTO user (`shop_url`, `auth_key`, `company_name`) VALUES ( '$shop_url', '$authKey', '$companyName')");
//                    }
//                    else 
//                    { 
//
//                        $order = mysqli_query($con,"UPDATE `user` SET `auth_key` = '$authKey', `company_name` = '$companyName' WHERE `shop_url` = '$shop_url' ");
//
//
//                    }
//
//                    if ($order) {
//                        echo '<br>Information has been saved successfully';
//                    } else {
//                        die(mysqli_error($con));
//                    }
            }
            else 
            {
                $data = array('uniqueKey' => $_POST['uniqueKey'] ,
                    'password' => $_POST['password'] ,

                );
                $data = json_encode($data);

                $service_url     = 'https://api.giddh.com/login-with-password';
                $curl            = curl_init($service_url);


                curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
                curl_setopt($curl, CURLOPT_HTTPHEADER, array(
                        "Content-Type: application/json"
                    ));
                curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
                $curl_response   = curl_exec($curl);

        //        if (curl_error($curl)) {
        //            $error_msg = curl_error($curl);
        //            echo "<pre>"; print_r($error_msg); 
        //        }

                curl_close($curl);
                $json_objekat = json_decode($curl_response);


                //echo "<pre>"; print_r($json_objekat); die;



                if($json_objekat->status == "success" )
                { 
                    $shop_url = $_GET['shop'];
                    $authKey = $json_objekat->body->authKey;
                    
                    $data = array('authKey' => $authKey ,
                        'zencommerceShopId' => $shop_url ,

                    );
                    $data = json_encode($data);

                    $service_url     = 'http://api.giddh.com/company/%7BcompanyUniqueName%7D/zencommerce/user';
                    $curl            = curl_init($service_url);


                    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
                    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
                    curl_setopt($curl, CURLOPT_HTTPHEADER, array(
                            "Content-Type: application/json"
                        ));
                    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
                    $curl_response   = curl_exec($curl);
                
//                    $user_name = "walkover";
//                    $password = "w@lk0Ver";
//                    $database = "demo_walkover";
//                    $server = "db4free.net";
//
//                    $con = mysqli_connect($server,$user_name,$password);
//                    if (!$con) {
//                        die('mysqli connection failed: ' . mysql_error() );
//                    }
//                    //2 connect with a data base 
//                    $db_select = mysqli_select_db($con , $database);  
//                    if (!$db_select) {
//                        die('data base selection failed: ' . mysql_error() );
//                    }
//
//                    $email = $_POST['uniqueKey'];
//                    $password = ($_POST['password']);
//                    $shop_url = $_GET['shop'];
//                    $authKey = $json_objekat->body->authKey;
//                    $companyName = $_POST['companyName'];
//
//                    if($shop_url != $row['shop_url'])
//                    {
//                        $order = mysqli_query($con,"INSERT INTO user (`email`, `password`, `shop_url`, `auth_key`, `company_name`) VALUES ( '$email', '$password', '$shop_url', '$authKey', '$companyName')");
//                    }
//                    else 
//                    { 
//
//                        $order = mysqli_query($con,"UPDATE `user` SET `email` = '$email',`password` = '$password',`auth_key` = '$authKey', `company_name` = '$companyName' WHERE `shop_url` = '$shop_url' ");
//
//
//                    }
//
//                    if ($order) {
//                        echo '<br>Information has been saved successfully';
//                    } else {
//                        die(mysqli_error($con));
//                    }

                }
                else 
                {
                    echo $json_objekat->message;
                }
            }
        }
        ?>
    </body>
</html>
