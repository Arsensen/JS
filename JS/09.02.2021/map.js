Array.prototype.map2 = function(callback, thisArg){
    var callbackee = callback.bind(thisArg);
    var mapArray = [];
    for(var i = 0; i < this.length; i++){
        var mapElement = callbackee(this[i], i, this);
        mapArray.push(mapElement);
    }
    return mapArray;
}