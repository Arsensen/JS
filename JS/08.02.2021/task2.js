/* Реализовать Person class который имеет
name: string
getName: () => string */

function Person(str){
    var that = {};
    that.name = str;
    that.getName = function(){
        return that.name;
    };
    return that;
}

/* Реализовать Man class который наследуется от Person
name: string
faialHair: boolean
getName: () => string
getFacialHair: () => boolean */

function Man(str, bool){
    var that = Person(str);
    that.facialHair = bool;
    that.getFacialHair = function(){
        return that.facialHair;
    };
    return that;
}