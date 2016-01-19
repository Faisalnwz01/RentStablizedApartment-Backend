'use strict';

(function() {

    class MainController {

        constructor($http) {
            this.$http = $http;
            this.awesomeThings = [];
            // var param = {
            //     url: '/api/zillows',
            //     method: "GET",
            //     params: JSON.stringify({
            //         address: "2512 Mapleton Ave.",
            //         city: 'Boulder',
            //         state: 'CO',
            //         zip: '80304'
            //     })
            // }
            //  var par = JSON.stringify({
            //         address: "766 east 9 street",
            //         city: '',
            //         state: 'NY',
            //         zip: '11230'
            //     })
            // console.log(par)
            // $http.get('/api/zillows?param='+ par).then(response => {
            //     this.awesomeThings = response.data;
            //     console.log(response)
            // });
        }
    }

    angular.module('rentBackendApp')
        .controller('MainController', MainController);

})();
