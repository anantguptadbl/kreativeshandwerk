'use strict';
//var App = angular.module('App', ['ngRoute','ngMaterial', 'ngMessages','material.svgAssetsCache']);
var App = angular.module('App', ['ngRoute'])
.service('currentProduct', function () {
		var curProduct=''
        return {
            getCurProduct:function () 
            {
				return curProduct
            },
            alterCurProduct:function (curProductArg) 
            {
				curProduct=curProductArg
            }
        };
    })
