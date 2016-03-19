var nameApp = angular.module('nameApp', []);
      nameApp.controller('NameCtrl', function ($scope,$http){


            
                  var refresh=function(){
                  $http.get('/comment').success(function(response){
                  console.log(response);
                  $scope.comments=response;
                  });  
                  };
      		refresh();

                $scope.submit=function(){
                  var title={"title":$scope.title};
                  $http.post('/comment',title).success(function(response){
                         $scope.title="";
                        refresh();

                  });
                };


            $scope.upvote_increment=function(id){

            $http.put('/comment/upvotes/'+id).success(function(response){
                  $scope.comment=response;
                  console.log(response);
                  refresh();
                  });
                  };
                  $scope.downvote_increment=function(id){

            $http.put('/comment/downvotes/'+id).success(function(response){
                  $scope.comment=response;
                  console.log(response);
                  refresh();
                  });
                  };
        });