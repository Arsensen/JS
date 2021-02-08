/* Реализовать Person class который имеет
name: string
getName: () => string */

function Person(str){
    let obj = {};
    obj.name = str;
    obj.getName = function(){
        return obj.name;
    };
    return obj;
}

/* Реализовать Man class который наследуется от Person
name: string
faialHair: boolean
getName: () => string
getFacialHair: () => boolean */

function Man(str, bool){
    let obj = Person(str);
    obj.facialHair = bool;
    obj.getFacialHair = function(){
        return obj.facialHair;
    };
    return obj;
}