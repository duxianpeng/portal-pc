'use strict';

/**
 * @ngdoc overview
 * @name yuewenApp
 * @description
 * # yuewenApp
 *
 * Main module of the application.
 */
angular
    .module('yuewenApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/classic', '/classic/weekly')
                          .when('/category', '/category/mars')
                          .when('/login', '/login/login')
                          .when('/register', '/register/register')
                          .otherwise('/main');
        $stateProvider.state('main', {
            url: '/main',
            views: {
                '': {
                    templateUrl: 'views/main/layout.html'
                },
                'header@main': {
                    templateUrl: 'views/header.html'
                },
                'footer@main': {
                    templateUrl: 'views/footer.html'
                },
                'category@main': {
                    templateUrl: 'views/main/category.html'
                },
                'rank@main': {
                    templateUrl: 'views/main/rank.html'
                },
                'banner@main': {
                    templateUrl: 'views/main/banner.html'
                },
                'recommend@main': {
                    templateUrl: 'views/main/recommend.html'
                },
                'classic@main': {
                    templateUrl: 'views/main/classic.html'
                },
                'advert@main': {
                    templateUrl: 'views/main/advert.html'
                },
                'new@main': {
                    templateUrl: 'views/main/new.html'
                },
                'complete@main': {
                    templateUrl: 'views/main/complete.html'
                }
            }
        }).state(
            'classic', {
                url: '/classic',
                views: {
                    '': {
                        templateUrl: 'views/classic/layout.html'
                    },
                    'header@classic': {
                        templateUrl: 'views/header.html'
                    },
                    'footer@classic': {
                        templateUrl: 'views/footer.html'
                    },
                    'side@classic': {
                        templateUrl: 'views/classic/side.html'
                    }
                }
            }).state(
                'classic.weekly', {
                    url : '/weekly',
                    templateUrl:'views/classic/weekly.html'
                }
            ).state(
                'classic.publish', {
                    url : '/publish',
                    templateUrl:'views/classic/publish.html'
                }
            ).state(
                'classic.mars', {
                    url : '/mars',
                    templateUrl:'views/classic/mars.html'
                }
            ).state(
                'classic.venus', {
                    url : '/venus',
                    templateUrl:'views/classic/venus.html'
                }
            ).state(
                'classic.new-mars', {
                    url : '/new-mars',
                    templateUrl:'views/classic/new-mars.html'
                }
            ).state(
                'classic.new-venus', {
                    url : '/new-venus',
                    templateUrl:'views/classic/new-venus.html'
                }
            ).state(
                'classic.complete-mars', {
                    url : '/complete-mars',
                    templateUrl:'views/classic/complete-mars.html'
                }
            ).state(
                'classic.complete-venus', {
                    url : '/complete-venus',
                    templateUrl:'views/classic/complete-venus.html'
                }
            ).state(
            'category', {
                url: '/category',
                views: {
                    '': {
                        templateUrl: 'views/category/layout.html'
                    },
                    'header@category': {
                        templateUrl: 'views/header.html'
                    },
                    'footer@category': {
                        templateUrl: 'views/footer.html'
                    },
                    'side@category': {
                        templateUrl: 'views/category/side.html'
                    }
                }
            }).state(
                'category.mars', {
                    url : '/mars',
                    templateUrl : 'views/category/mars.html'
                }
            ).state(
                'category.venus', {
                    url : '/venus',
                    templateUrl : 'views/category/venus.html'
                }
            ).state(
                'category.publish', {
                    url : '/publish',
                    templateUrl : 'views/category/publish.html'
                }
            ).state(
                'login', {
                    url: '/login',
                    views: {
                        '': {
                            templateUrl: 'views/login/layout.html'
                        },
                        'header@login': {
                            templateUrl: 'views/login/header.html'
                        },
                        'footer@login': {
                            templateUrl: 'views/login/footer.html'
                        }
                    }
                }).state(
                    'login.login', {
                        url : '/login',
                        templateUrl : 'views/login/login.html'
                    }
                ).state(
                    'login.register', {
                        url : '/register',
                        templateUrl : 'views/login/register.html'
                    }
                );
    });
