/* let animal = {
    jumps: null
};

let rabbit = {
    __proto__: animal,
    jumps: true
};

alert( rabbit.jumps ); // true, берётся из rabbit.

delete rabbit.jumps;

alert( rabbit.jumps ); // null, берётся из animal.

delete animal.jumps;

alert( rabbit.jumps ); // undefined, такого свойства больше нет. */

/* let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

alert( pockets.pen ); // 3
alert( bed.glasses ); // 1
alert( table.money ); // undefined */

/* let hamster = {
    stomach: [],

    eat(food) {
    this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster,
    stomach: []
};

let lazy = {
    __proto__: hamster,
    stomach: []
};

speedy.eat("apple");
alert( speedy.stomach );

alert( lazy.stomach ); */