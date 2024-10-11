// сумма чисел от 1 до n
console.log('Task 1');
const n = 4;
function sumNum (numCount) {
    let sum = 0;
    for (let i=1; i<=numCount; i++) 
        { sum = sum + i }
return sum;
}
console.log ('сумма чисел от 1 до', n, 'равна', sumNum(n), '\n')

// факториал числа n
console.log ('Task 2');
const nf = 7;
function factNum(num) {
    let fkt = 1;
    for ( let i=1; i<=num; i++) 
    { fkt = fkt * i }
return fkt 
}   
console.log ('Факториал числа', nf, '=', factNum(nf), '\n');

// четные и нечетные числа от 1 до 100
console.log ('Task 3');
const noe = 100;
function oddEven (num) {
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
}
oddEven (noe);    

//проверка на простое число
console.log ('Task 4');
const simpleNum = 18;
function simpleCheck (num) {        
    let count = 0;
    for (let j = 2; j<=num*0.5; j++)
        { 
            if (num%j===0) { count = count + 1}
        }
return count;
}            
console.log(simpleNum, simpleCheck(simpleNum)? 'составное число': 'простое число','\n')

//таблица умножения для n
console.log ('Task 5');
const mn = 8;
function multNum(num) {
    let mult = 1;
    for (let i = 1; i<=num; i++)
        {console.log(num, '*', i, '=', mult = i*num)}
    console.log ('\n');    
}
multNum(mn);

//Сумма цифр числа
console.log ('Task 6');
const numSum = 336644
444555;
function summaNum(num) {    
    let summa = 0;
    sumStr = num.toString();
    console.log (sumStr)
    for (i=0; i<sumStr.length; i++)

         {
            //console.log(sumStr[i])
            summa = summa + Number(sumStr[i])
            console.log(summa)
        }
return summa;
}
console.log('сумма цифр числа ', numSum, 'равна', summaNum(numSum), '\n')

// получить обратное число
console.log ('Task 7');
const convNum = 123456789;
function converseNum(num) {
   let newStr = '';
   converseStr = num.toString();
   l = converseStr.length 
   for (i=0; i<l; i++)
      {
        (newStr = converseStr[i] + newStr)
    }
return Number(newStr)
}    
console.log('число, обратное ', convNum, ' равно', converseNum(convNum), '\n')

//Количество цифр в числе n
console.log ('Task 8');
const longNum = 12345678987456321;
function countDigit(num) 
{
    countStr = num.toString();
return countStr.length   
}
console.log('количество цифр в числе', longNum, ' равно', countDigit(longNum),'\n')

//Проверка палиндрома
console.log ('Task 9');
const palNum = 1234567654321;
function palindrom(num) {
   palStr = num.toString();
   l = palStr.length;
   let result = 0;
   for (let i=0; i<l/2; i++)
    { 
       if (palStr[i] !== palStr[l-i-1]) { result = result + 1}
    }  
return result 
}     
console.log(palNum, palindrom(palNum)? 'не палиндром': 'палиндром','\n')

       
//Сумма квадратов чисел от 1 до n
console.log ('Task 10');
const numSqrt = 10;
function sumSqrtNum(num) 
{    
   let sumSqrt = 0;
    strSqrt = ' ';
    for (i=1; i<=num; i++)
    { 
        sumSqrt = sumSqrt + i**2;
       // strSqrt = strSqrt + i + '**2 + ';
    }
 return sumSqrt
}    
 console.log ('Сумма квадратов чисел от 1 до ', numSqrt, '=', sumSqrtNum(numSqrt)) 