Array.prototype.forEach2 = function(callback, thisArg){
    var callbackee = callback.bind(thisArg) //bind можно вставить из файла bind.js, который я ранее реализовывал
    for(var i = 0; i < this.length; i++){
        callbackee(this[i], i, this)
    }
}