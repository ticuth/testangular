/*jslint devel:true*/
/*jslint browser:true*/
/*jslint node:true*/
/*global BasicDOMElement*/
/*global process*/
/*global $*/



var fs = require('fs');

var docH = {
    getById: function (id) {
        'use strict';
        return document.getElementById(id);
    },
    getByClass: function (className) {
        'use strict';
        return document.getElementsByClassName(className);
    },
    getElement: function (id) {
        'use strict';
        return new BasicDOMElement(document.querySelector(id));
    }
};

var app = {
    scroller: null,
    initialize: function () {
        'use strict';
        var o = docH.getElement('#content');
        app.scroller = $('#scroller');
        app.bindEvents();
        //o.html('Hello world');
    },
    bindEvents: function () {
        'use strict';
        $("#navbar li a").click(function (event) {
            // check if window is small enough so dropdown is created
            $("#nav-collapse").removeClass("in").addClass("collapse");
        });
    },
    getPage: function (url) {
        'use strict';
		$.ajax({
			dataType: 'text',
			url: url
        }).success(function (data) {
            $('#scroller').html(data);
        });
        
    }
};


var fancyerror = function (message, url, linenumber) {
    'use strict';
    //alert(message);
    console.log(message);
	return false;
};

window.onerror = function (message, url, linenumber) {
    'use strict';
	return fancyerror(message, url, linenumber);
};

if (window.hasOwnProperty('process')) {
    process.on('uncaughtException', function (err) {
        'use strict';
        // handle the error safely
        //console.log(err);
    });
}

var fs = require('fs');

// function to encode file data to base64 encoded string
function base64_encode(file) {
    'use strict';
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

// function to create file from base64 encoded string
function base64_decode(base64str, file) {
    'use strict';
    // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
    var bitmap = new Buffer(base64str, 'base64');
    // write buffer to file
    fs.writeFileSync(file, bitmap);
    console.log('******** File created from base64 encoded string ********');
}

/*
try {
    var base64str = base64_encode('/home/gustavo/Documents/WEBTIC/BasicOS/apps/minidesk/src/images/icon.png');
    
} catch (ex) {
    alert(ex.message);
}*/

window.onload = function () {
    'use strict';
    app.initialize();
    //$('#scroller').html('TEXTO<img src="data:image/png;base64,' + base64str + '">');
};
