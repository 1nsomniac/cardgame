angular.module("app").controller("controller", function($scope, service, $sce) {
  $scope.thisAppIsBroken = "This angular app is working!"

  $scope.string = "hello world"

  $scope.refresh = service.getQuote().then(function (result) {$scope.string = $sce.trustAsHtml(result); shortString = result.substring(0, 20); $scope.avatar = "https://api.adorable.io/avatars/245/" + shortString + ".png" })

});
