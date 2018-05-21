//init app with modules dependent
angular
	.module("giddhWebsite", [
		"ngVidBg",
		"fullPage.js", 
		"vcRecaptcha",
		"satellizer",
		"LocalStorageModule",
		"ui.bootstrap",
    "toastr",
    "razor-pay"
	])
	.directive('validNumber', ValidNumber)
	.config(config)
	.run(runBlock);

// "ui.bootstrap", "LocalStorageModule", "toastr", "satellizer"
//directives
function ValidNumber() {

	function isNullOrEmptyOrUndefined(value) {
    return !value
  }

	return {
	  require: '?ngModel',
	  link: function(scope, element, attrs, ngModelCtrl) {
	    if (!ngModelCtrl) {
	      return;
	    }
	    ngModelCtrl.$parsers.push(function(val) {
	      var clean, decimalCheck;
	      if (angular.isUndefined(val)) {
	        val = '';
	      }
	      if (isNullOrEmptyOrUndefined(val)) {
	        val = '';
	      }
	      clean = val.replace(/[^0-9\.]/g, '');
	      decimalCheck = clean.split('.');
	      if (!angular.isUndefined(decimalCheck[1])) {
	        decimalCheck[1] = decimalCheck[1].slice(0, 2);
	        clean = decimalCheck[0] + '.' + decimalCheck[1];
	      }
	      if (val !== clean) {
	        ngModelCtrl.$setViewValue(clean);
	        ngModelCtrl.$render();
	      }
	      return clean;
	    });
	    element.on('keypress', function(event) {
	      if (event.keyCode === 32) {
	        event.preventDefault();
	      }
	    });
	  }
	};
}


//config
config.$inject = ['vcRecaptchaServiceProvider', '$httpProvider', '$authProvider', 'localStorageServiceProvider'];
function config(vcRecaptchaServiceProvider, $httpProvider, $authProvider, localStorageServiceProvider) {

	$httpProvider.defaults.withCredentials = true;

	delete $httpProvider.defaults.headers.common["X-Requested-With"];

	vcRecaptchaServiceProvider.setDefaults({
    	key: '6LcgBiATAAAAAMhNd_HyerpTvCHXtHG6BG-rtcmi'
  	});

  	$authProvider.google({
        clientId: '641015054140-3cl9c3kh18vctdjlrt9c8v0vs85dorv2.apps.googleusercontent.com',
        url: 'https://app.giddh.com/app/auth/google'
      });
      $authProvider.twitter({
        clientId: 'w64afk3ZflEsdFxd6jyB9wt5j',
        url: 'https://app.giddh.com/app/auth/twitter'
      });
      $authProvider.linkedin({
        clientId: '75urm0g3386r26',
        url: 'https://app.giddh.com/app/auth/linkedin'
      });
      $authProvider.linkedin({
        url: 'https://app.giddh.com/app/auth/linkedin',
        authorizationEndpoint: 'https://www.linkedin.com/uas/oauth2/authorization',
        redirectUri: window.location.origin + "/login/",
        requiredUrlParams: ['state'],
        scope: ['r_emailaddress'],
        scopeDelimiter: ' ',
        state: 'STATE',
        type: '2.0',
        popupOptions: {
          width: 527,
          height: 582
        }
      });
    $authProvider.httpInterceptor = false;
    localStorageServiceProvider.setPrefix('giddh');
}

//run block
runBlock.$inject = ['$rootScope', '$window', '$http', 'localStorageService', '$anchorScroll'];  //, '$q'
function runBlock($rootScope, $window, $http, localStorageService, $anchorScroll) {     // $q,
  $rootScope.magicLinkPage = false;
  $rootScope.whiteLinks = false;
  $rootScope.loginPage = false;
  $rootScope.signupPage = false;
  $rootScope.fixedHeader = false;
  $rootScope.showBlack = false;
  $rootScope.isNavCollapsed = true;
  $rootScope.isUae = false;
  $anchorScroll.yOffset = 216;
  
  // ----------------------------------------------------------

  function isUae() {
    var VRinUAE = false;
    var userCountry = localStorageService.get('country_code');
    // console.log(userCountry);


    if (userCountry) {
      checkUserCountry(userCountry)
    } else {
      // console.log('hello');
      $http.get('https://freegeoip.net/json/').then(function(response){
        localStorageService.set('country_code', response.data.country_code);
        checkUserCountry(userCountry);
      },function(error){
      console.log("failed to locate users location");
      });
    }
    return VRinUAE;
  }

  function checkUserCountry(cc) {
    var userPath = window.location.pathname;    
    // console.log(userPath);
    userPath = userPath.split('/');
    userPath = userPath[1];
    if (cc === ("AE" || "QA" || "BH" || "OM" || "SA" || "KW")) {
      if (userPath == 'ae') {
        return false;
      } else {
        return window.location.pathname="/ae";
      }
    }
    else if (userPath != 'ae') {
      return false;
      // return window.location.pathname="/";
    }
    else {
      return window.location.pathname="/";
    }
  }


  if(isUae()){
    $rootScope.isUae = true;
  }

  // ----------------------------------------------------------

  function isMagicPage() {
    var magicPageIdx = window.location.href.indexOf('/magic?id=');
    return (magicPageIdx !==  -1) ? true : false;
  }

  if (!isMagicPage()) {
    function isIE() {
      var is_ie, ua;
      ua = navigator.userAgent;
      /* MSIE used to detect old browsers and Trident used to newer ones */
      is_ie = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
      return is_ie;
    };
    
    $rootScope.browserIE = false;
  
    var ieInStorage = localStorageService.get('isIE');

    if (!ieInStorage) {
      if (isIE()) {
        $rootScope.browserIE = true;
        return window.location.pathname = '/incompatible-browser.html';
        localStorageService.set('isIE', true);
      }    
    }

  }

    



  loc = window.location.pathname;
  if (loc === "/index" || loc === "/" || loc === "/ae/") {
    $rootScope.whiteLinks = true;
  }
  if (loc === "security.php") {
    $rootScope.whiteLinks = true;
  }

  $rootScope.goTo = function (page) {
  	// if(type == "state") {window.location = state}else {window.open(state)}
  }

  $rootScope.toggleNavbar = function (){
    $rootScope.isNavCollapsed = !$rootScope.isNavCollapsed;
    if (!$rootScope.isNavCollapsed){
      $rootScope.whiteLinks = false;
    }else{
      $rootScope.whiteLinks = true;
    }
    
  }
  // console.log($rootScope.);

}

angular.module('razor-pay', []).directive('razorPay', [
  '$compile', '$filter', '$document', '$parse', '$rootScope', '$timeout', 'toastr', function($compile, $filter, $document, $parse, $rootScope, $timeout, toastr) {
    return {
      restrict: 'A',
      scope: false,
      transclude: false,
      controller: "paymentCtrl",
      link: function(scope, element, attrs) {
        scope.proceedToPay = function(e, amount) {
          var options, rzp1;
          options = {
            key: scope.wlt.razorPayKey,
            amount: scope.wlt.amount * 100,
            name: scope.wlt.company.name,
            description: "Invoice payment for " + scope.wlt.company.name,
            handler: function(response) {
              console.log(response, "response after success");
              return scope.successPayment(response);
            },
            prefill: {
              name: scope.wlt.consumer.name,
              email: scope.wlt.consumer.email,
              contact: scope.wlt.consumer.contactNo
            },
            // notes: {
            //   address: 'Address of the user'
            // },
            // theme: {
            //   color: "#449d44"
            // }
          };
          rzp1 = new Razorpay(options);
          rzp1.open();
          return e.preventDefault();
        };
        return element.on('click', function(e) {
          var diff;
          if (scope.isHaveCoupon && !_.isEmpty(scope.coupRes)) {
            if (scope.amount > scope.discount) {
              diff = scope.amount - scope.discount;
              return scope.proceedToPay(e, diff * 100);
            } else {
              toastr.warning("Actual amount cannot be less than discount amount", "Warning");
              return false;
            }
          } else {
            diff = scope.removeDotFromString(scope.wlt.Amnt);
            return scope.proceedToPay(e, diff * 100);
          }
        });
      }
    };
  }
]);


/*
  "ui.bootstrap"
  "LocalStorageModule"
  "toastr"
	"satellizer"
  "ngResource"
  "razor-pay"
  "ngFileSaver"
*/
