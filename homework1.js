// сумма чисел от 1 до n
console.log('Task 1');
let n = 5;
let sum = 0;
for (let i=1; i<=n; i++) 
    { sum = sum + i }
console.log ('Сумма чисел от 1 до ', n, '=', sum, '\n');

// факториал числа n
console.log ('Task 2');
let fkt = 1;
for ( let i=1; i<=n; i++) 
    { fkt = fkt * i }
console.log ('Факториал числа ', n, '=', fkt, '\n');

// четные и нечетные числа от 1 до 100
console.log ('Task 3');
let evenStr = 'четные числа ';
let oddStr = 'нечетные числа ';
for ( let i=1; i<=100; i++)
    { 
        if (i%2===0 ) 
            { evenStr = evenStr + i + ' '}
        else {oddStr = oddStr + i + ' '}
    }
console.log (evenStr);
console.log (oddStr,'\n');

//проверка на простое число
console.log ('Task 4');
let simpleNum = 17;
let count = 0;
for (let j = 2; j<=simpleNum*0.5; j++)
    { if (simpleNum%j===0) { count = count + 1}
    }    
console.log(simpleNum, count? 'составное число': 'простое число','\n')

//таблица умножения для n
console.log ('Task 5');
let multNum = 11;
let mult = 1;
for (let i = 1; i<=multNum; i++)
    {console.log(multNum, '*', i, '=', mult = i*multNum)}
console.log ('\n');

//Сумма цифр числа
console.log ('Task 6');
const numSum = 333444555;
let summa = 0;
sumStr = numSum.toString();
for (i=0; i<sumStr.length; i++)
    {summa = summa + Number(sumStr[i])}
console.log('сумма цифр числа ', numSum, 'равна', summa, '\n')


//Обратное число
console.log ('Task 7');
const converseNum = 123456789;
let newStr = '';
converseStr = converseNum.toString();
l = converseStr.length 
for (i=0; i<l; i++)
   {(newStr = converseStr[i] + newStr)}
console.log('число, обратное ', converseNum, ' равно', Number(newStr), '\n')

//Количество цифр в числе n
console.log ('Task 8');
const countNum = 12345678987456321;
countStr = countNum.toString();
console.log('количество цифр в числе', countNum, ' равно', countStr.length,'\n')

//Проверка палиндрома
console.log ('Task 9');
const palNum = 12345676543210;
palStr = palNum.toString();
l = palStr.length;
let result = 0;
for (let i=0; i<l/2; i++)
   { 
    if (palStr[i] !== palStr[l-i-1]) { result = result + 1}
   }    
console.log(palNum, result? 'не палиндром': 'палиндром','\n')
       
//Сумма квадратов чисел от 1 до n
console.log ('Task 10');
const numSqrt = 10;
let sumSqrt = 0;
strSqrt = ' ';
for (i=1; i<=numSqrt; i++)
   { sumSqrt = sumSqrt + i**2;
    strSqrt = strSqrt + i + '**2 + ';
   }
 console.log (strSqrt, '=', sumSqrt) 