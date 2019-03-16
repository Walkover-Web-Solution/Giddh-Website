<div class="modal fade" id="talkToSales_dialog" role="dialog">
    <div class="modal-dialog custom-dialog">
        <div class="modal-header">
            <h3 class="brdB left">Talk to Sales</h3>
            <a data-dismiss="modal" aria-label="Close" class="close-glyph">✕</a>
        </div>
        <div class="pd2 tab-content custom-padding-20 height-600 tab-content-modal">

            <div id="dropEmail">
                <div id="Jkvq" class="talktosale-superform"></div>

                <div class='alert alert-succcess successsales'></div>
            </div>
        </div>
    </div>
</div>
<!-- try a demo -->
<div class="modal fade" id="tryademo" role="dialog">
    <div class="modal-dialog custom-dialog">
        <div class="modal-header">
            <h3 class="brdB left">Try a Demo</h3>
            <a data-dismiss="modal" aria-label="Close" class="close-glyph">✕</a>
        </div>
        <div class="pd2 tab-content custom-padding-20 height-552 tab-content-modal">
            <div id="scheduleCall" class="tab-pane active vertical-center">
                <div class="calendly-box">
                    <div class="calendly-inline-widget" data-url="https://calendly.com/giddh/15min" style="min-width:320px;height:580px;"></div>
                </div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>

            </div>
        </div>
    </div>
</div>

<nav role="navigation" class="navbar navbar-custom navbar-fixed-top nav-testing" ng-class="{'transparent':!magicLinkPage, 'fixedHeader' : fixedHeader}">
    <div class="container-fluid">
        <div class="row">
            <div class="navbar-header">
                <button ng-click="toggleNavbar()" class="navbar-toggle" type="button">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
                <a href="/" class="navbar-brand" ng-if="!showBlack">
                    <img class="showWhite" src="/assets/images/new/giddh-logo-white.svg" alt="Giddh - online accounting software" ng-if="!magicLinkPage">
                    
                    <!-- <img class="showWhite" src="/assets/images/new/giddh_republicday.png" alt="Giddh - online accounting software" ng-if="!magicLinkPage"> -->
                    
                </a>
                <!-- <a href="/" class="navbar-brand" ng-if="showBlack" style="color:red;">
                    <img src="/assets/images/new/giddh-logo.png" alt="Giddh - online accounting software">
                </a> -->
            </div>

            <div ng-class="{collapse: isNavCollapsed}" class="navbar-collapse navbar-main-collapse col-sm-8">
                <div class="allmenu">
                    <ul class="nav navbar-nav usernavi">
                        <li class="hidden active">
                            <a href="#page-top"></a>
                        </li>
                        <li>
                            <a href="/" ng-class="{white:whiteLinks && !loginPage}">Home</a>
                        </li>
                        <li class="">
                            <a href="/features.php" class="page-scroll" ng-class="{white:whiteLinks && !loginPage}">Features</a>

                            <div class="sub-nav">
                                <h3>Giddh product features</h3>
                                <div class="row">
                                    <div class="col-md-4 col-xs-6">
                                        <ul>
                                            <li><a href="gst.php">GST Compliances</a></li>
                                            <li><a href="invoice-software.php">Invoicing</a></li>
                                            <li><a href="accounting-dashboard.php">Dashboard</a></li>
                                            <li><a href="cloud-accounting-software.php">Anywhere-Anytime</a></li>
                                            <li><a href="conect-bank-reconcile.php">Bank Reconciliation</a></li>
                                            <li><a href="#mobile-app" rel="relativeanchor">Mobile App</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4 col-xs-6">
                                        <ul>
                                            <li><a href="financial-reporting.php">Reports & Analysis</a></li>
                                            <li><a href="import-data.php">Import Excel Files</a></li>
                                            <li><a href="conect-bank-reconcile.php">Linked Bank Account</a></li>
                                            <li><a href="multi-currency-accounting-software.php">Multi Currency</a></li>
                                            <li><a href="#">Search</a></li>
                                            <li><a href="multi-user-accounting-software.php">Share Data</a></li>
                                        </ul>
                                    </div>
                                    
                                    <div class="col-md-4 col-xs-6">
                                        <ul>
                                            <li><a href="inventory-management-software.php">Inventory</a></li>
                                            <li><a href="https://developers.giddh.com/collection" target="_blank">API Integration</a></li>
                                            <li><a href="tallyplusgiddh.php">Tally Integration</a></li>
                                            <li><a href="contacts.php">Contact</a></li>
                                            <li><a href="security.php">Security</a></li>
                                            <li><a href="features.php">All Features</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </li>
                        <li class="">
                            <a href="gst.php" class="page-scroll" ng-class="{white:whiteLinks && !loginPage}">GST</a>
                        </li>
                        <li class="">
                            <a href="tallyplusgiddh.php" ng-class="{white:whiteLinks && !loginPage}">Tally</a>
                        </li>
                        <li class="">
                            <a href="about.php" ng-class="{white:whiteLinks && !loginPage}">About</a>
                        </li>
                    </ul>
                    <ul class="nav navbar-right head-btn">
                        <li ng-hide="signupPage">
                            <!-- <a href="tel:07939593939" class="talktoexpert" ng-class="{white:whiteLinks && !loginPage}"><span class="glyphicon glyphicon-earphone"></span>Talk to Expert</a> 
                            <button type="button" data-toggle="modal" data-target="#talkToSales_dialog" class="talktoexpert btn btn-primary navbar-btn">Talk to Sales</button>-->
                            
                            <a onclick="location.href='app/'" class="book-demo btn btn-primary navbar-btn mr-2">Login </a>
                        </li>
                        <li>
                        <a onclick="location.href='app/'" class=" btn btn-primary btn-login">Sign up</a>
                            <!-- <button type="button" href="javascript:void(0)" data-toggle="modal" data-target="#tryademo" class="book-demo btn btn-primary navbar-btn">Book a Demo</button> -->
                        </li>
                        <!-- <li class="">
                      <button onclick="location.href='app/'" class="btn btn-bordered navbar-btn m-t-20 m-r-15">Login</button>
                    </li>  -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
</nav>

<!-- <div class="modal fade" id="talkToSales_dialog" role="dialog">
  <div class="modal-dialog custom-dialog">
    <div class="modal-header">
      <h3 class="brdB left">Talk to Expert</h3>
      <a data-dismiss="modal" aria-label="Close" class="close-glyph">✕</a>
       <ul class="nav-tabs nav-tabs-talk height42" id="shortner_tabs">
           <li class="active"><a href="#scheduleCall"  data-toggle="tab">Arrange a Demo</a></li>
           <li><a href="#dropEmail"  data-toggle="tab">Drop us a mail</a></li>

       </ul>
    </div>
       <div class="pd2 tab-content custom-padding-20 height-552 tab-content-modal">

         <div id="dropEmail" class="tab-pane">
           <div id="Jkvq" class="talktosale-superform"></div>

           <div class='alert alert-succcess successsales'></div>
         </div>

         <div id="scheduleCall" class="tab-pane active vertical-center">
                <div class="calendly-box">
                <div class="calendly-inline-widget" data-url="https://calendly.com/giddh/15min" style="min-width:320px;height:580px;"></div>
              </div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
               
         </div>
       </div>
     </div>
 </div> -->
<!-- talk to expert -->
<!-- <div class="modal fade" id="talkToSales_dialog" role="dialog">
    <div class="modal-dialog custom-dialog">
        <div class="modal-header">
            <h3 class="brdB left">Talk to Sales</h3>
            <a data-dismiss="modal" aria-label="Close" class="close-glyph">✕</a>
        </div>
        <div class="pd2 tab-content custom-padding-20 height-600 tab-content-modal">

            <div id="dropEmail">
                <div id="Jkvq" class="talktosale-superform"></div>

                <div class='alert alert-succcess successsales'></div>
            </div>
        </div>
    </div>
</div> -->
<!-- try a demo -->
<!-- <div class="modal fade" id="tryademo" role="dialog">
    <div class="modal-dialog custom-dialog">
        <div class="modal-header">
            <h3 class="brdB left">Try a Demo</h3>
            <a data-dismiss="modal" aria-label="Close" class="close-glyph">✕</a>
        </div>
        <div class="pd2 tab-content custom-padding-20 height-552 tab-content-modal">
            <div id="scheduleCall" class="tab-pane active vertical-center">
                <div class="calendly-box">
                    <div class="calendly-inline-widget" data-url="https://calendly.com/giddh/15min" style="min-width:320px;height:580px;"></div>
                </div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>

            </div>
        </div>
    </div>
</div> -->

<!-- <div class="modal fade" id="talkToSales_dialog" role="dialog">
    <div class="modal-dialog custom-dialog">
        <div class="modal-header">
            <h3 class="brdB left">Talk to Sales</h3>
            <a data-dismiss="modal" aria-label="Close" class="close-glyph">✕</a>
            <ul class="nav-tabs nav-tabs-talk height42" id="shortner_tabs">
                <li class="active"><a href="#scheduleCall" data-toggle="tab">Arrange a Demo</a></li>
                <li><a href="#dropEmail" data-toggle="tab">Drop us a mail</a></li>

            </ul>
        </div>
        <div class="pd2 tab-content custom-padding-20 height-552 tab-content-modal">

            <div id="dropEmail" class="tab-pane">
                <div id="Jkvq" class="talktosale-superform"></div>

                <div class='alert alert-succcess successsales'></div>
            </div>

            <div id="scheduleCall" class="tab-pane active vertical-center"> -->
<!-- <p>Choose your preferred time to schedule<br>
                   a demo with an expert. </p>
                <button class="btn btn-primary">Click Here</button> -->
<!-- Calendly inline widget begin -->
<!-- <div class="calendly-inline-widget" data-url="https://calendly.com/giddh" style="min-width:320px;height:580px;"></div> -->
<!-- Calendly inline widget end -->
<!-- </div>
        </div>

    </div>
</div> -->

<script>
    $(".nav-tabs-talk li a").click(function(e) {
        e.preventDefault();
    })
    jQuery(function($) {
        $(".usernavi > li > a")
            .click(function(e) {
                var link = $(this);
                // refresh = false;
                var item = link.parent("li");

                if (item.hasClass("active")) {
                    item.removeClass("active").children("a").removeClass("active");
                } else {
                    item.addClass("active").children("a").addClass("active");
                }

                if (item.children("ul").length > 0) {
                    var href = link.attr("href");
                    link.attr("href", "#");
                    setTimeout(function() {
                        link.attr("href", href);
                    }, 300);
                    e.preventDefault();
                }
            })
            .each(function() {
                var link = $(this);
                if (link.get(0).href === location.href) {
                    link.addClass("active").parents("li").addClass("active");
                    return false;
                }
            });
    });
</script>