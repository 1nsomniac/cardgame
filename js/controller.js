angular.module("app").controller("controller", function($scope, service, $sce) {
  $scope.thisAppIsBroken = "This angular app is working!"

  $scope.string = "hello world"
  $scope.author = "sam hakala"

  $scope.refresh = service.getQuote().then(function (result) {
    $scope.string = $sce.trustAsHtml(result[0].content);
    $scope.author = result[0].title;
    shortString = result[0].content.substring(0, 20);
    console.log(shortString)
    console.log($scope.author);
    $scope.avatar = "https://api.adorable.io/avatars/245/" + shortString + ".png"
  })

});
