Function.prototype.bind2 = function(context){
    var func = this;
    var args = Array.from(arguments).splice(1, arguments.length - 1);
    return function(){
        var arg = Array.from(arguments).concat(args);
        func.apply(context, arg);
    }
}