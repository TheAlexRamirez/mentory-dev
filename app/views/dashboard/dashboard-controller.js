(function(){
  'use strict';
	
 angular.module('mentory')
    .controller('dashCtrl',dashCtrl);	

 //Controller for /dashboard
 dashCtrl.$inject=['$rootScope','Person','$location','alertify','ngDialog','authEvents'];
	
  function dashCtrl($rootScope,Person,$location,alertify,ngDialog,authEvents){
    var main = this;
	  
	 main.logOut = function(){
		 
		 Person.logout(
					function(value,responseHeaders){
						
						$rootScope.$broadcast(authEvents.LOGOUT_SUCCESS);
						$rootScope.currentUser=null;
						localStorage.clear();
						alertify.delay(3000).success("¡Esperamos verte pronto !");
						$location.path('/');
						window.location.reload();
				},
					function(error){
						console.log(error);
				});
			
	 }
	
	  
  }
  
	
})();
