Array.prototype.map2 = function(callback, thisArg){
    var callbackee = callback.bind(thisArg); //bind можно вставить из файла bind.js, который я ранее реализовывал
    var mapArray = [];
    for(var i = 0; i < this.length; i++){
        var mapElement = callbackee(this[i], i, this);
        mapArray.push(mapElement);
    }
    return mapArray;
}