App.controller('singularProductController', ['$scope','$http','currentProduct', function($scope,$http,currentProduct) 
{
	$scope.getCurrentProduct= function()
	{
		// We will set all the metadata related to the product
		
		// First we get the current Production from the Angular Service
		$scope.curProduct=currentProduct.curProduct;
		
		// We now send a post message to get the metadata related to the product
		$http({url:'/getProductDetails',method:"POST",params:{productName:$scope.curProduct}}).
				then(function successCallback(response) 
				{
					$scope.curProductDescription=response.data[0][1];
					$scope.curProductPrice=response.data[0][2];
					$scope.curProductDetails=response.data[0][3];
					$scope.curProductImages=response.data[0][4].split(":");
					
				} // End of then function
				,function errorCallback(response) 
				{
						alert("Product Details not found");
				}); // End of the error function
	
	} // End of the getCurrentProduct function

} // End of the singularProductController 
])
