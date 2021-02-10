/* Реализовать Person class который имеет
name: string
getName: () => string */

function Person(str){
    this.name = str;
}

Person.prototype.getName = function() {
    return this.name
}

/* Реализовать Man class который наследуется от Person
name: string
faialHair: boolean
getName: () => string
getFacialHair: () => boolean */

function Man(str, bool){
    Person.call(this, str);
    this.facialHair = bool;
    this.getFacialHair = () => this.facialHair;
}

Man.prototype = Object.create(Person.prototype);
Man.prototype.constructor = Man;