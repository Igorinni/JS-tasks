"use strict"

const arr1 = [-2, 1, 2, 2, 3, 4];


//       - Сделайте из него массив, состоящий из квадратов этих чисел.
function arraySquare(array) {
    return array.map(elem => elem = Math.pow(elem, 2))
}
// console.log(arraySquare(arr1))


// сделать в одну строку----------------------------
//     - Верните массив, состоящий только из уникальных значений(убрать все дубликаты,
//          число в новом массиве не должно повторяться)
function noRepeat(array) {

    /* Было:
    const set = new Set(array);
    const newA = [];
    for (let value of set) {
        newA.push(value)
    }
    return newA 
    */

    return Array.from( new Set(array) )

}
// console.log(noRepeat(arr1))


// в одну строку без фор ич----------------------------
//     - Проверьте то, что все элементы в массиве больше нуля (результат - true/false).
function largerZero(array) {
    /* Было:
    let result = true;
    array.forEach(elem => elem > 0 ? '' : result = false);
    return result 
    */
    return array.includes(0, 0)
    
}
// console.log(largerZero(arr1))



//     - Оставьте в массиве только отрицательные числа.
function onlyNegativeNumber(array) {
    return array.filter(elem => elem < 0)
}
// console.log(onlyNegativeNumber(arr1))



//    - Найдите сумму элементов массива
const arr2 = [1, 3]

// reduce -----------------------------------
function sumTotal(array) {

    /*  Было:
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum 
    */
    return array.reduce((sum, item) => sum + item, 0)
    
}
// console.log(sumTotal(arr2))



//        Дан массив, в нем могут быть обычные элементы и подмассивы
//              (например [1, 2, [3, 4], 5, {a: 7}]). 
//            Оставьте в нем только подмассивы.
const arr3 = [1, 2, [3, 4], 5, { a: 7 }];

function subarrays(array) {
    return array.filter(elem => Array.isArray(elem))
}
// console.log(subarrays(arr3))




//   - Верните количество слов в строке, длина которых больше 4 символов.
const words = 'Сегодня первый день в компании Альпака'

// filter
function largerFour(text) {
    const newAr = text.split(' ');
    let number = 0;
    newAr.forEach(elem => elem.length > 4 ? number += 1 : '')
    return number
}
// console.log(largerFour(words))




//    - Если в строке имеется шестизначное число(ни больше, ни меньше) - 
//          верните его, как результат функции. 
//         Число может быть не отделено от других символов пробелами. 
//         Кейсы (строка - результат):

const arrayString = ["abcd123456ef5234", "abcef12345678ghi654321klm", "abcdef", "abc1234567asd", "abc12345asd"]

// регулярные выражения
function sixNumber(str) {
    let result = '';
    let largerSix = false;

    for (let char of str) {
        if (Number(char)) {
            result += char
        } else {
            result = ''
        }
        if (result.length >= 6) {
            largerSix = result
        }
        if (largerSix.length > 6) {
            largerSix = false
        }
    }

    return largerSix
}
arrayString.forEach(item => console.log(sixNumber(item)))

