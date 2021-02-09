Function.prototype.bind2 = function(object){
    var func = this;
    var args = Array.from(arguments).splice(1, arguments.length - 1)
    return function(){
        var args2 = Array.from(arguments)
        var context = object ? JSON.parse(JSON.stringify(object)) : {}; // клонируем object, или на случай если object = null, создаем пустой объект
        Object.defineProperty(context, 'func', {    // создаем метод в объекте, который равен привязанной функции
            value: func,
            enumerable: false
        })

        var argsConcated = args.concat(args2);      // этот кусок кода с циклом и eval как альтернатива для spread или apply при вызове функции; он создает текст с аргументами массива для вызова в eval
        function evaluate(){
            var arrayOfIndexes = [];
            for(var i = 0; i < argsConcated.length; i++){
                arrayOfIndexes.push('argsConcated[' + i + ']')
            }
            return 'context.func(' + arrayOfIndexes + ')'
        }
        return argsConcated.length ? eval(evaluate()) : context.func() //??? как сделать полифил для spread, как из массива передать в функцию значения, извлеченные из массива без Apply и Spread
    }
}