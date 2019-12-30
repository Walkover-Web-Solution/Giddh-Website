</main>

<?php 

	/*Footer Options */

	$footer_in_grid = get_option('footer_in_grid');

	$footer_bg_img = get_option('footer_bg_img');

	$footer_style = get_option('footer_style');

?>

<?php

	if (!empty($footer_bg_img) ){

		$footer_bg_class = 'footer_bg';	

	}

?>

	<footer class="<?php echo $footer_style; ?> <?php echo $footer_bg_class; ?>">

		<?php if ($footer_style == 'style_1' ){

			require_once(Mute_root_path.'/framework/view/footer/style_1.php');

		} elseif ($footer_style == 'style_2' ){

			require_once(Mute_root_path.'/framework/view/footer/style_2.php');

		}?>

	</footer>

    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/intlTelInput.js"></script>

<?php wp_footer(); ?>

<script type='text/javascript'>
/* <![CDATA[ */
var wpcf7 = {"apiSettings":{"root":"https:\/\/giddh.com\/wp-json\/contact-form-7\/v1","namespace":"contact-form-7\/v1"}};
/* ]]> */
</script>
<script type='text/javascript' src='https://giddh.com/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=5.1.4'></script>
<script type="text/javascript">	
	
	jQuery(".featuredpopup").click(function(){
		jQuery("#featuredHeading").html(jQuery(this).attr("data-heading"));
		jQuery("#featuredContent").html(jQuery(this).attr("data-body"));
		jQuery("#datalink").attr("href",jQuery(this).attr("data-link"));
		
		jQuery('#exampleModal').modal('show'); 		
	})	 

	// wpcf7-form
	document.addEventListener( 'wpcf7submit', function( event ) {
    console.log( "Fire!" );
	}, false );

</script>

<!-- Modal start -->
<div class="modal fade" id="downloadModal" tabindex="-1" role="dialog" aria-labelledby="downloadModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
			<div class="modal-header">
      	<h4>Downloads</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"><img src="https://giddh.com/wp-content/themes/muteweb/assets/images/close.svg"></span>
        </button>
      </div>
      <div class="modal-body">
      <div class="list-group">
				<!-- <a href="javascript:void(0)" class="list-group-item list-group-item-action">Download for mac</a> -->
				<a href="https://s3-ap-south-1.amazonaws.com/giddh-app-builds/giddh%20Setup%206.6.8.exe" class="list-group-item list-group-item-action">Download for windows</a>
			</div>
      </div>
    </div>
  </div>
</div>
<!-- Modal ends -->
	
<?php if ( is_front_page()) { ?>
	<!-- Modal start -->
	<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
      	<h4 id="featuredHeading"></h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"><img src="https://staginglabs.in/giddh/wp-content/themes/muteweb/assets/images/close.svg"></span>
        </button>
      </div>
      <div class="modal-body pt-0">
				<div id="featuredContent"></div>
				<a id="datalink" href="javascript:void(0);">More details</a>
			</div>
     <!-- dynamic data will be inserted -->
    </div>
  </div>
</div>
<!-- Modal ends -->
<!-- 
	https://s3-ap-south-1.amazonaws.com/giddh-app-builds/giddh%20Setup%20{{apkVersion}}.exe
<figure class="figure">
  <img src="https://giddh.com/wp-content/uploads/2019/11/home-page-banner.jpg" class="figure-img img-fluid" alt="Dubai Expo">
</figure>
<script type="text/javascript">
window.onload = function() {
  setTimeout(function(){
    jQuery('#dubaiBannerModal').modal('show');
  }, 5000)
}
</script>
 -->
<?php } ?>
</body>

<script type="text/javascript">
function myFunction(x) {
  x.classList.toggle("change");
}

var input = document.querySelector("#phone");
if (input) {
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
    utilsScript: ""
  });
  jQuery("#phone").on("change",function(){
    jQuery("#phone_number_change").val(this.value);
  });
}


window.addEventListener('load', function() {
	jQuery('#media_image-6 a').attr('target','_blank');
	jQuery('#media_image-7 a').attr('target','_blank');
	jQuery(document).on("click",".__downloadAppBtn",function() {
		console.log('clicked on __downloadAppBtn');
		jQuery('#downloadModal').modal('show');
	});
})
</script>


<script>

// Cache selectors
var topMenu = jQuery("#scroll-spy"),
    topMenuHeight = 250,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = jQuery(jQuery(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind to scroll
jQuery(window).scroll(function(){
   // Get container scroll position
   var fromTop = jQuery(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if (jQuery(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   // Set/remove active class
   menuItems
     .parent().removeClass("active")
     .end().filter("[href='#"+id+"']").parent().addClass("active");
})


var leftSticky = document.querySelector("#left-sticky-template"); 

if (leftSticky !== null) {
jQuery(document).scroll(function() {
    checkOffset();
});

function checkOffset() {
    if(jQuery('#left-sticky-template').offset().top + jQuery('#left-sticky-template').height() 
                                           >= jQuery('#mob-app').offset().top - 10)
        jQuery('#left-sticky-template').css('position', 'absolute');
    if(jQuery(document).scrollTop() + window.innerHeight < jQuery('#mob-app').offset().top)
        jQuery('#left-sticky-template').css('position', 'fixed'); // restore when you scroll up
}
}
</script>

<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
</html>