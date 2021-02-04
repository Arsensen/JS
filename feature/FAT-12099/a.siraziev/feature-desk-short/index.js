/* 1. Реализовать цепочку вызовов add - увеличивает на 1 dec - уменьшает на 1
(пример object.dec().dec().add(); ) */

let object = {
    count: 0,
    dec(){
        this.count--;
        return this;
    },
    add(){
        this.count++;
        return this;
    }
}
//console.log("1st task: ", object.dec().add().add().add().count);



/* 2. Реализовать функцию sum(1)(2)(3) */

function sum(a){
    let currentValue = a;
    
    function sumUp(b){
        if(b === undefined) return sumUp;
        currentValue += b;
        return sumUp;
    }
    
    sumUp.valueOf = ()=>currentValue;

    return sumUp;
}

console.log('2nd task: ' + sum(1)(2)(6)());



/* 3. Реализовать функцию, принимающую строку “a.b.c.d” и возвращающая объект со свойством объектом- a, 
со свойством объектом - b, со свойством объектом - с, со свойством d, равным null. Можнопередать любую 
строку в указанном формате х.х.х.х.х.х…, и получить объект с вложенными объектами
и завершающим null. */

function objectCreator(str){
    let arr = str.split('.');
    let obj = {};
    arr.reduce((acc, current, index)=>index === arr.length-1 ? acc[current] = null : acc[current] = {}, obj)
    return obj;
}

let obj3 = objectCreator('a.b.c.d');
//console.log('3rd task: ', obj3.a.b.c.d);



/* 4. Реализовать функции объединения, пересечения, разности элементов двух массивов:
Объединение - union(a, b)
Пересечение - intersection(a, b)
Разность - difference(a, b) */

    /* Объединение массивов */

    let a = [1, 5, 56, 5, 7, 10];
    let b = [7, 2, 76, 22, 43, 1, 4];

    function union(a, b){
        return [...a, ...b];
    }
    //console.log('UNION: ', union(a, b));

    /* Пересечение массивов */

    function intersection(a, b){
        return a.filter(el=>b.includes(el));
    }
    //console.log('INTERSECTION: ', intersection(a, b));


    /* Разность массивов */

    function difference(a, b){
        return [...a.filter(el=>!b.includes(el)), ...b.filter(el=>!a.includes(el))]
    }
    //console.log('DIFFERENCE: ', difference(a, b));