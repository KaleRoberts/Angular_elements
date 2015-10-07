(function main() {
	"use strict";

	var app = angular.module("myApp", []);

	app.directive("dumbpassword", function() {
		var validElement = angular.element("<div>{{model.input}}</div>");

		return {
			restrict: "E",
			replace: true, 
			template: "<div>\n	<input type=\"text\" ng-model=\"model.input\"\n		\n 		\n</div>",
			compile: function(tElem) {
				tElem.append(validElement);

				return function(scope) {
						scope.$watch("model.input", function (value) {
							if(value === "password") {
								validElement.toggleClass("alert-danger bg-warning btn btn-primary");
							}
						});
					};
			}
		}
	});

	app.config(function($logProvider){
		$logProvider.debugEnabled(true);
	});

	app.run(function($rootScope, $log) {
		$rootScope.$log = $log;
	});

}());