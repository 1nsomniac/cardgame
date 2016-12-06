"use strict";

angular.module("app", []);
"use strict";

angular.module("app").controller("controller", function ($scope, service, $sce) {
  $scope.thisAppIsBroken = "This angular app is working!";

  $scope.string = "hello world";

  $scope.refresh = service.getQuote().then(function (result) {
    $scope.string = $sce.trustAsHtml(result);shortString = result.substring(0, 20);$scope.avatar = "https://api.adorable.io/avatars/245/" + shortString + ".png";
  });
});
"use strict";

angular.module("app").service("service", function ($http) {

  this.getQuote = function () {
    return $http.get("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1").then(function (result) {
      return result.data[0].content;
    });
  };

  this.getAvatar = function (first20) {
    console.log('fired');
    return $http.get("https://api.adorable.io/avatars/245/" + first20 + ".png").then(function (result) {
      console.log(result);
      return result;
    });
  };
});
//# sourceMappingURL=maps/bundle.js.map
