angular
    .module('SmartHome.Common')
    .controller('MenuController', MenuController);

function MenuController($rootScope, $element, $scope, $timeout, authService) {
    let menuVm = this;
    menuVm.$postLink = $postLink;
    menuVm.logout = logout;

    function logout() {
        authService.logout().then(() => {
            $rootScope.message = 'You are logged out';
        })
    }

    function $postLink() {
        $element.mmenu({
            navbar: {
                title: 'SmartHome'
            },
            offCanvas: {
                position: 'right'
            }
        });
        $('body').delegate('#menu-btn', 'click', () => {
            $scope.$apply(api.open())
        });

        let api = $element.data('mmenu');

        //todo: add separate directive for menu-btn

        api.bind("open:start", () => {
            $timeout(() => {
                $('#menu-btn').addClass( "is-active" );
            }, 100);
        }).bind("close:start", () => {
            $timeout(() => {
                $('#menu-btn').removeClass( "is-active" );
            }, 100);
        });
    }
}