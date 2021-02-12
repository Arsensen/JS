/* 1 Написать функции проверки анаграм */

var input = [ "вертикаль", "кильватер", "апельсин", "спаниель",
"австралопитек", "ватерполистка", "кластер", "сталкер", "стрелка"];

function anagramm(arr){
    let obj = {}
    arr.forEach((el)=>{
        let sortedElement = el.toLowerCase().split('').sort().join('')
        console.log(sortedElement)
        if(obj[sortedElement]) obj[sortedElement].push(el)
        else {
            obj[sortedElement] = [el]
        }
    })
    return Object.values(obj)
}

console.log(anagramm(input))