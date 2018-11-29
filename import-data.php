<!DOCTYPE HTML>
<html lang="en" ng-app="giddhWebsite">
  <meta charset="UTF-8">
  <meta name="description" content="Import your offline accounting data & start managing it on the cloud or switch to Giddh from your old accounting software by importing your financial data."/>
  <!-- 
  <meta name="keywords" content=""/> -->
  
  <title>Import accounting data to cloud</title>
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> -->
  <?php include 'head.php';?>

</head>

<!-- {oh:geo.country != 'IN'} -->
<body id="page-top" class="light" ng-controller="homeController as vm">
  
  <!-- <div ng-class="{'other-country': geo.country != 'IN'}" ng-if="geo.country != 'IN'">
    <iframe src="global.html" style="height:100%;width:100%;padding: 0;margin:0"></iframe>
  </div> -->



  <!-- <ng-include src="'header.html'"></ng-include> -->
  <?php include 'header.php';?>  
  <!-- end navigation -->

  <section id="videoBg" class="black-back main-banner">
    <!-- <div class="scroll-btn">
      <a href="#feature" class="page-scroll"></a>
    </div> -->
   
    <div class="intro home flex-box-banner slide show container">
    <img src="../assets/images/Cloud Icon.svg" alt="" class="sky-one-01">
        <div class="banner_intro features_banner">
              <h1 class="banner_heading_new">Seamlessly bring your old accounting data to giddh</h1>
              <p class="banner_sub_heading m-t-15">Switching to online accounting is fast and simple with Giddh data import.</p>
              <p class="m-t-20">
              <a class="btn btn-primary" id="downloadWindows" href="https://s3.ap-south-1.amazonaws.com/giddhbuildartifacts/giddh-app+Setup+6.4.0.exe">Download Free</a>
                <a class="btn btn-primary" id="downloadMacOS" href="https://s3.ap-south-1.amazonaws.com/giddhbuildartifacts/giddh-app-6.4.0.dmg">Download Free</a>
                <a class="btn btn-primary" id="downloadLinux" href="https://s3.ap-south-1.amazonaws.com/giddhbuildartifacts/giddh-app-6.4.0.tar.gz">Download Free</a>
                <a class="talktosale" data-toggle="modal" data-target="#talkToSales_dialog"><span class="glyphicon glyphicon-earphone"></span>Talk to Sales</a>
            </p>
        </div>
        <div class="right-section">
          <!-- <img src="../assets/images/Cloud Icon.svg" alt="" class="sky-one bn-3"> -->
          <img src="../assets/images/Cloud Icon.svg" alt="" class="cloud_sky bn-3">
            <img src="../assets/images/import-data/import-data-banner.png" alt="Tally your books with giddh" class="cloud-accounting-software-img">
        </div>
    </div>
  </section> <!-- end of videoBg -->
  
  <!-- home content end -->
  <section class="graybg graybg-reporting  homeContent" id="feature">
  <div class="container">
    <div class="row">
        <div class="col-sm-12">
          <h2 class="center_heading">Switch from old accounting software or excel to giddh</h2>
          <div class="width-900"><p>You might have started your accounting with Excel, but it’s time you to bring your numbers to a Giddh accounting software which minimizes the clutter of spreadsheets & confusion of mismanaged accounting books.</p></div>
          <a class="btn btn-primary btn-lg m-t-70" data-toggle="modal" data-target="#talkToSales_dialog">Talk to Sales</a>
        </div>
    </div>
      
    </div>
      
  </section> 
  <section class="whitebg left-text">
  <div class="container">
    <div class="row financial-services">
    <div class="col-sm-6">
    <h2>Excel isn’t a long term solution</h2>
    <p>Excel is simply not built to be your accounting mate. Not only is it prone to errors, but it’s also complicated and doesn’t offer a higher level of accessibility. Giddh Online Accounting software, on the other hand, takes away the hassles of adding and manipulating data manually and instead offers you the chance to focus on what that data is saying.</p>
  </div>
  
  <div class="col-sm-6 text-center">
    <img src="../assets/images/import-data/import-data-feature-1.png" alt="">
  </div>
  </div>
  
  <div class="row financial-services">
  <div class="col-sm-6 text-center">
   <img src="../assets/images/import-data/import-data-feature-2.svg" width="360" alt="">
  </div>
  <div class="col-sm-6">
  <h2>Simple transition to powerful alternative.</h2>
  <p>Giddh is a powerful alternative to your old accounting software, offline or online. Just export all the data of your company from your previous accounting software in CSV(comma-separated values) or excel format, and jump on the Giddh accounting cloud.</p>
  </div>
  </div>
  

  <div class="row financial-services">
   
  <div class="col-sm-6">
  <h2 class="collab">No data category left behind</h2>
  <p>With Data Import facility, you can import streams of data of every single accounting category such as accounts, groups, trial balance, entries and even inventory within minutes into Giddh accounting software.</p>
  </div>
  
  <div class="col-sm-6 text-center">
   <img src="../assets/images/import-data/import-data-feature-3.svg" width="360" alt="">
  </div>
 </div>
 
 <div class="row financial-services">
   <div class="col-sm-6 text-center">
   <img src="../assets/images/import-data/import-data-feature-4.svg" width="470" alt="">
  </div>
   
  <div class="col-sm-6">
  <h2 class="collab">Prepare your data with a little help</h2>
  <p>To ensure that your data is imported to Giddh without hassles, we’ve created XLSX(Microsoft Excel) template files for trial balance, entries, inventory and more. Just download the template and format your existing files accordingly.</p>
  </div>
 </div>

 <div class="row financial-services">
   <div class="col-sm-6">
   <h2 class="collab">Stuck somewhere? Help us help you!</h2>
   <p>We know transitioning can often be confusing. To make the process of transition simple, we have some incredibly easy to implement support articles just for you. Still need some help? Simply contact your Giddh account manager and make your transition today.</p>
   </div>
   
   <div class="col-sm-6 text-center">
    <img src="../assets/images/import-data/import-data-feature-5.svg" width="360" alt="">
   </div>
  </div>

  </div>
  </section> 
  
  <section class="graybg p-t-70">
    <div class="container area-flex  blog_center_new">
          <div class="center-divbox"><div class="pioneer blog_center_new"><img src="../assets/images/import-data/import-data-blog.png" width="200" alt=""></div>
          <span class="blog-reporting">Why you need freedom from the clutter of <br>spreadsheets.<br>

          <a href="https://blog.giddh.com/why-you-need-freedom-from-the-clutter-of-spreadsheets-97a31cdcd146" target="_blank">Read more...</a>
          </span>
          </div>
    </div>
</section>
  
  <section class="whitebg know p-t-80">
<div class="container">
<div class="row p-tb-0">
    <div class="col-sm-12">
      <div class="text-center">
        <img src="../assets/images/reporting/footer.svg" class="peopel-img" alt="">
          <div class="reporting-blog-text">
          <h2>People interested in <span>Import-data</span> also looked at</h2>
          <ul class="reporting-blog-menu">
              <li><a href="invoice-software.php">Invoicing</a></li>
              <li><a href="multi-currency-accounting-software.php">Multi-Currency</a></li>
              <li><a href="security.php">Security</a></li>
              <li><a href="features.php">All features</a></li>
            </ul>
          </div>
        </div>
    </div>
  </div>
</div>

</section>
  
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
                <p>Choose your preferred time to schedule<br>
                   a demo with an expert. </p>
                <button class="btn btn-primary">Click Here</button>
         </div>
       </div>
       
     </div>
 </div> -->
  <!-- end of page -->
  <?php include 'footScript.php';?>
  <?php include 'footer.php';?> 
  <script>
  function detectBrowser(x, y, z) {
    z = z || y;
    if (navigator[x] && navigator[x].indexOf(y) !== -1) {
        osName = z;
    }
}

/*   navigator     value     download  */
detectBrowser( "appVersion", "Mac",    "MacOS"   );
detectBrowser( "appVersion", "Linux"             );
detectBrowser( "userAgent",  "Linux"             );
detectBrowser( "platform",   "Linux"             );
detectBrowser( "appVersion", "Win",    "Windows" );
detectBrowser( "userAgent",  "Windows"           );
detectBrowser( "platform",   "Win",    "Windows" );
detectBrowser( "oscpu",      "Windows"           );
document.getElementById("download"+osName).className = "btn btn-primary knownOS";

  </script>
</body>
</html>
