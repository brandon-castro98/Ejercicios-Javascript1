console.log('---------------Parte 1');

function f(x, y = 2, z = 7) {

    return x + y + z;
}

console.log(f(5, undefined));


console.log('---------------Parte 2');

function animal() {
    var animal = 'kitty';
    var result = (animal === 'kitty') ? 'cute' : 'still nice';
    return result;

}
console.log(animal());

console.log('------------------Parte 3');

function animal2() {

    let animal = 'kitty';
    let result = '';
    if (animal === 'kitty') {
        result = 'cute';
        return result;
    } else {
        result = 'still nice'
        return result;
    }
}
console.log(animal2());


console.log('-------------Parte 4');

function funcion1() {
    let a = 0;
    var str = 'not a ';
    var b = '';
    b = a === 0 ? (a = 1, str += 'test') : (a = 2);
    return a + ' y ' + b;
}

console.log(funcion1());


console.log('------------------Parte 5');

function funcion2() {
    let a = 2;
    a === 1 ? alert('Hey, it is a 1!') : 0;
    return a;
}
console.log(funcion2());
console.log('---------------Parte 6');



function funcion3() {
    let a = 2;
    a === 1 ? alert('Hey, it is 1!') : alert('weird, what could it be?');
    if (a === 1) alert('Hey, it is 1!')
    else alert('weird, what could it be?');
    return a;
}

console.log(funcion3());

console.log('---------------------------Parte 7')

/*function funcion4() {
    let animal = 'kityy';
    for (let i = 0; i < 5; ++i) {
        (animal === 'kitty') ?
        break : console.log(i);
    }
}
console.log(funcion4());*/

console.log('-----------------------------Parte 8');

function funcion5() {
    let value = 2;
    switch (value) {
        case 1:
            console.log('I will always run');
            break;
        case 2:
            console.log('I will never run');
            break;
        default:
            console.log('Repite');
    }
}
console.log(funcion5());
console.log('--------------------Parte 9')

function funcion6() {
    let animal = 'Dog';
    switch (animal) {
        case 'Dog':
            console.log('I will not run since animal !== "Dog"');
            break;
        case 'Cat':
            console.log('I will noit run since animal !== "Cat"');
            break;
        default:
            console.log('I will run since animal does not match any other case');
    }
}

console.log(funcion6());
console.log('--------------------Parte 10')

function john() {
    return 'John';
}

function jacob() {
    return 'Jacob';
}

var a = john() + '' + jacob() + 'Jnglheimer Schmidt';
console.log(funcion7(a));

function funcion7(name) {
    switch (name) {
        case john():
            console.log('I will run if name === "John"');
            break;
        case 'Ja' + 'ne':
            console.log('I will run if name === "Jane"');
            break;
        case john() + '' + jacob() + 'Jnglheimer Schmidt':
            console.log('His name is equal to name too');
            break;
    }
}

console.log('----------------------------Parte 11')

function funcion8() {
    let x = 'x';
    switch (x) {
        case 'a':
        case 'b':
        case 'c':
            console.log('Either a,b, or c was selected');
            break;
        case 'd':
            console.log('Only d was selected');
            break;
        default:
            console.log('No case was matched');
            break;
    }
}
console.log(funcion8());

console.log('-----------------------Parte 12');

function funcion9() {
    let x = 5 + 7;
    console.log(x);
    x = 5 + '7';
    console.log(x);
    x = '5' + 7;
    console.log(x);
    x = 5 - 7;
    console.log(x);
    x = 5 - '7';
    console.log(x);
    x = '5' - 7;
    console.log(x);
    x = 5 - 'x';
    console.log(x);
}

console.log(funcion9());

console.log('---------------------------Parte 13');

function funcion10() {
    let a = 'hello' || '';
    console.log(a)
    let b = '' || [];
    console.log(b)
    let c = '' || undefined;
    console.log(c)
    let d = 1 || 5;
    console.log(d)
    let e = 0 || {};
    console.log(e)
    let f = 0 || '' || 5;
    console.log(f)
    let g = '' || 'yay' || 'boo';
    console.log(g)
}

console.log(funcion10());

console.log('--------------------Parte 14');

function funcion11() {
    var a = 'hello' && '';
    console.log(a);
    var b = '' && [];
    console.log(b);
    var c = undefined && 0;
    console.log(c);
    var d = 1 && 5;
    console.log(d);
    var e = 0 && {};
    console.log(e);
    var f = 'hi' && [] && 'done';
    console.log(f);
    var g = 'bye' && undefined && 'adios';
    console.log(g);
}

console.log(funcion11());

console.log('---------------------Parte 15')

let foo = function(val) {
    return val || 'default';
}

console.log(foo('burger'));
console.log(foo(100));
console.log(foo([]));
console.log(foo(0));
console.log(foo(undefined));

console.log('-----------------------------Parte 16');

function funcion12(age, status, height) {
    let isLegal = age >= 18;
    console.log(isLegal);
    let tall = height >= 5.11;
    console.log(tall);
    let suitable = isLegal && tall;
    console.log(suitable);
    let isRoyalty = status === 'royalty';
    console.log(isRoyalty);
    let specialCase = isRoyalty && hasInvitation;
    console.log(specialCase);
    let canEnterOurBar = suitable || specialCase;
    console.log(canEnterOurBar);
}

console.log(funcion12());

console.log('--------------------------Parte 17')

function funcion13() {
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            continue;
        }
        console.log(i);
    }
}
console.log(funcion13());

console.log('-------------------------------Parte 18')

function funcion14() {
    let i = 0;
    while (i < 3) {
        if (i === 1) {
            i = 2;
            continue;
        }
        console.log(i);
        i++;
    }
}
console.log(funcion14());

console.log('------------------------Parte 19')

function funcion15() {
    for (let i = 0; i < 5; i++) {
        nextLoop2Iteration: for (let j = 0; j < 5; j++) {
            if (i == j) break nextLoop2Iteration;
            console.log(i, j);
        }
    }
}
console.log(funcion15());

console.log('------------------------------Parte 20');

function funcion16() {
    let a = [1, 2, 3, 8, 9, 10];
    a.slice(0, 3).concat([4, 5, 6, 7], a.slice(3, 6));
    console.log(a);


    a = [1, 2, 3, 8, 9, 10];
    a.splice(3, 0, ...[4, 5, 6, 7]);
    console.log(a);
}
console.log(funcion16());

console.log('--------------------------Parte 21');

function funcion17() {
    let array = ['a', 'b', 'c'];


    console.log(array.join('->'));


    console.log(array.join('.'));


    console.log('a.b.c'.split('.'));

    console.log('5.4.3.2.1'.split('.'));
}

console.log(funcion17());

console.log('------------------------------Parte 22')

function funcion18() {
    let array = [5, 10, 15, 20, 25];
    console.log(Array.isArray(array));

    console.log(array.includes(10));
    console.log(array.includes(10, 2));
    console.log(array.indexOf(25));
    console.log(array.lastIndexOf(10, 0));
}
console.log(funcion18());

console.log('------------------------Parte 23');

function funcion19() {
    let array = ['a', 'b', 'c', 'd', 'e', 'f'];

    console.log(array.copyWithin(5, 0, 1));
    console.log(array.copyWithin(3, 0, 3));
    console.log(array.fill('Z', 0, 5));
}
console.log(funcion19());

console.log('-----------------------------------Parte 24');

function funcion20() {
    let array = ['Alberto', 'Ana', 'Mauricio', 'Bernardo', 'Zoe'];
    console.log(array.sort());
    console.log(array.reverse());
}
console.log(funcion20());