const data = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];
findTypes(null, 5, "hello");
executeforEach([1,2,3], function(el) {
    console.log(el);
});
mapArray([2, 5, 8], function(el) {
    return el + 3;
});
filterArray([2, 5, 8], function(el) {
    return el > 3;
});
getAmountOfAdultPeople(data);
getGreenAdultBananaLovers(data);
keys({keyOne: 1, keyTwo: 2, keyThree: 3});
values({keyOne: 1, keyTwo: 2, keyThree: 3});
showFormattedDate(new Date('2019-01-27T01:10:00'));
isEvenYear(new Date('2019-01-27T01:10:00'));
isEvenMonth(new Date('2019-02-27T01:10:00'));
function findTypes(...args) {
    let array = [];
    for (let i = 0; i < args.length; i++) {
        array.push(typeof args[i]);
    }
    return array;
}
function executeforEach(array, func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
}
function mapArray(array, func) {
    let newArray = [];
    executeforEach(array, function(el) {
        newArray.push(func(el));
    });
    return newArray;
}
function filterArray(array, func) {
    let newArray = [];
    executeforEach(array, function(el) {
        if (func(el)) {
            newArray.push(el);
        }
    });
    return newArray;
}
function getAmountOfAdultPeople(data) {
    return filterArray(data, function (el) {
        return el.age > 18;
    }).length;
}
function getGreenAdultBananaLovers(data) {
    let array = [];
    filterArray(data, function (el) {
        if (el.age > 18 && el.favoriteFruit === 'banana' && el.eyeColor === 'green') {
            array.push(el.name); 
        }
    });
    return array;
}
function keys(obj) {
    let newArray = [];
    for (let key in obj) {
        newArray.push(key);
    }
    return newArray;
}
function values(obj) {
    let newArray = [];
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newArray.push(obj[key]);
        }
    }
    return newArray;
}
function showFormattedDate(date) {
    return `Date: ${date.getDate()} of ${date.toLocaleString('en-US', { month: 'short' })}, ${date.getFullYear()}`
}
function isEvenYear(date) {
    let year = date.getFullYear();
    return year % 2 === 0;   
}
function isEvenMonth(date) {
    let month = date.getMonth();
    return month % 2 !== 0;
}

