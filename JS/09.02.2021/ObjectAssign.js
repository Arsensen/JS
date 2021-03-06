Object.prototype.assign2 = function(target){
    var sources = Array.from(arguments).splice(1, arguments.length-1);
    for(var i = 0; i < sources.length; i++){
        var keys = Object.keys(sources[i]);
        for(var j = 0; j < keys.length; j++){
            target[keys[j]] = sources[i][keys[j]];
        }
    }
    return target;
}