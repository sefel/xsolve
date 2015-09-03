angular.module('modules.post', ['api.post'])
        .config(['$stateProvider',
            function($stateProvider) {
                $stateProvider

                        .state('post', {
                            url: '/post',
                            controller: 'PostCtrl',
                            templateUrl: 'app/modules/post/post.tpl.html', 
                            resolve: {
                                Post: function(Post) {
                                    return Post.getPost().then(function(post) {
                                        return (post);
                                    }).catch(function(err) {
                                        console.log(err);
                                        console.log(err.status);
                                    });
                                }
                            }

                        });


            }]).controller('PostCtrl', function($scope, Post) {
            console.log(Post);
                $scope.post = Post;
});