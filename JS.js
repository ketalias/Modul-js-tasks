let a = parseInt(prompt("Введіть мінімальне число а "));
let b = parseInt(prompt("Введіть максимальне число b "));
randomNum = (a,b)=>(Math.floor((Math.random()*(b-a+1)+a)));
let number = randomNum(a,b);
alert(number)

arrayWords = ['monkey', 'key', 'puppy', 'ok'];
let maxLen = parseInt(prompt("Введіть максимальну довжину слова "));

function filterArray(array, maxlen){
    let filterArr = [];
    for (let el of array){
        if(el.length>maxLen){
            filterArr.push(el);
        }
    }
    return filterArr;
}

let filteredArray = filterArray(arrayWords, maxLen);
alert(`Масив слів коротших за ${maxLen} символів: ${filteredArray}`);