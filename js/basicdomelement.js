function BasicDOMElement(obj) {
    'use strict';
    var wrap = {
        element: obj,
        val: function (text) {
            obj.value = text;
        },
        html: function (text) {
            obj.innerHTML = text;
        }
    };
    return wrap;
}
