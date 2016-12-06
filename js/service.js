angular.module("app").service("service", function($http) {

this.getQuote = function() {
  return $http.get("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1").then(function(result){
    return result.data[0].content
  })
}

this.getAvatar = function(first20) {
  console.log('fired')
  return $http.get("https://api.adorable.io/avatars/245/"+first20+".png").then(function(result){
    console.log(result)
    return result
  })
}
});
