App.config(function($routeProvider) {
  $routeProvider
	.when('/', {
	templateUrl: 'static/views/collection.html',
	controller: 'collectionController'
	})
	.when('/about', {
	templateUrl: 'static/views/about.html',
	controller: 'aboutController'
	})
	.when('/collection', {
	templateUrl: 'static/views/collection.html',
	controller: 'collectionController'
	})
	.when('/singularProduct', {
	templateUrl: 'static/views/singularProduct.html',
	controller: 'singularProductController'
	})
	.when('/contact', {
	templateUrl: 'static/views/contact.html',
	controller: 'contactController'
	})
    .otherwise({
      redirectTo: '/404'
    });
});
