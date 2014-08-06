/*global angular*/
/*jslint browser:true*/
/*jslint devel:true*/





(function () {
    'use strict';
    var app, gems;
    app = angular.module('store', ['store-products']);
    app.controller('StoreController', ['$http', function ($http) {
        var store = this;
        //this.products = gems;
        store.isReady = false;
        document.addEventListener('deviceready', function () {
            store.isReady = true;
        }, false);
        
        store.produts = [];
        $http.get('http://tic-uth.net/gflores/testservices/gemsjson.php').success(function (data) {
            store.products = data;
        });
    }]);
    app.controller('ReviewController', function () {
        this.review = {};
        this.addReview = function (product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });
    /*gems = [
        {
            name: 'Demo',
            price: 12.5,
            description: 'demo',
            canPurchase: false,
            soldOut: false,
            images: [
                {
                    full: 'images/gems/gem1.png'
                },
                {
                    full: 'images/gems/gem3.jpg'
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: "ok",
                    author: "gflores@uthermosillo.edu.mx",
                    createdOn: Date.now()
                }
            ]
        },
        {
            name: 'Other',
            price: 44.5,
            description: 'Other one',
            canPurchase: true,
            soldOut: false,
            images: [
            ],
            reviews: []
        }
    ];*/
})();