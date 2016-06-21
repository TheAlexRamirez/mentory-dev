(function(){
  'use strict';

  angular.module('mentory')
    .controller('homeCtrl',homeCtrl)
	.controller('discoverCtrl',discoverCtrl)
	.controller('searchCtrl',searchCtrl);

 //Controller for /home
 homeCtrl.$inject=['currentAuth','users','categories','Mentory','Category','Person','$http','tagsService','$location','alertify','ngDialog'];
	
  function homeCtrl(currentAuth,users,categories,Mentory,Category,Person,$http,tagsService,$location,alertify,ngDialog){
    var home = this;
    
	
	  
	users.$promise.then(function(response){
		//console.log(response);	
		
		home.users=response;
	});
	  
	  
	categories.$promise.then(function(response){
		//console.log(response);	
		
		home.categories=response;


	});
	  
	  home.goTo = function()
	  {
		  $location.path("/search/"+home.name);
	  }
	    
	 home.goToProfile = function(iduser){
		 $location.path("/profile/"+iduser);
		 //console.log(idmentory);
	 }
	 

	  
  }
	
	
//Controller for /discover/:category
 discoverCtrl.$inject=['mentories','Mentory','Category','Person','$routeParams'];
	
  function discoverCtrl(mentories,Mentory,Category,Person,$routeParams){
    var discover = this;
    discover.mentoriesToShow=true;
	
	mentories.$promise.then(function(response){
		//console.log(response);	
		
		discover.mentories=response;
		
	});
	  
	  
	  discover.category=$routeParams.category;
	  discover.categoryToShow=discover.category;
	  discover.category=discover.category.toLowerCase();
	  
	  //Find out if the category belongs to mentories
	  discover.hasThisCategory= function(categories)
	  {	
		  for(var i=0; i < categories.length ; i++)
		  {
			  categories[i].name= categories[i].name.toLowerCase();
			  if(categories[i].name == discover.category)
			  {
				  return true;
				  discover.mentoriesToShow=false;
			  }
		  }
		  
		  return false;
	  }
	  
	 discover.goToMentory = function(idmentory){
		 $location.path("/mentory/"+idmentory);
		 //console.log(idmentory);
	 }
	  	  
  }//discoverCtrl
	
	
 //Controller for /search/:mentory
 searchCtrl.$inject=['mentories','Mentory','Category','Person','$routeParams','$location'];
	
  function searchCtrl(mentories,Mentory,Category,Person,$routeParams,$location){
    var search = this;
    search.search=$routeParams.mentory;
	
	mentories.$promise.then(function(response){
		console.log(response);	
		
		search.mentories=response;
		
	});
	  
	  search.goTo = function()
	  {
		  $location.path("/search/"+search.name);
	  }
	  
	  search.goToMentory = function(idmentory){
		 $location.path("/mentory/"+idmentory);
		 //console.log(idmentory);
	 	}
	  	
	  
  }//searchCtrl
	

})();