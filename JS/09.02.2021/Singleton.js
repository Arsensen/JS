//Singleton реализованый на классах

class Singleton{
    constructor(){
        if(typeof Singleton.instance === 'object') return Singleton.instance;
        this.count = 0;
        return Singleton.instance = this;
    }

    increaseCount(){
        return ++this.count;
    }
}

//Singleton ES5

var SingletonFunction = (function(){
    var instance;

    var increaseCount = function(){
        return ++this.count;
    }

    return {
        getInstance(){
            return instance || (instance = { increaseCount: increaseCount, count: 0 });
        }
    }
})()