Object.prototype.create2 = function(proto, properties){
    function createObject(){}
    createObject.prototype = proto;
    var object = new createObject();
    properties && Object.defineProperties(object, properties);
    return object;
}