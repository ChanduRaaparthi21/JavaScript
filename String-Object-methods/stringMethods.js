let c = "Hello namsthe"

//1.charAt
console.log(c.charAt(0)) //H

//2.charCodeAt

console.log(c.charCodeAt(0)) // 72
console.log(c.charCodeAt(1)) // 101
console.log(c.charCodeAt(2)) // 108
console.log(c.charCodeAt(3)) // 108
console.log(c.charCodeAt(4)) // 111

//3.indexOf

console.log(c.indexOf('e')) // 1
console.log(c.indexOf('e', 2)) // 4
console.log(c.indexOf('e', 5)) // -1
console.log(c.indexOf('e', 6)) // -1
console.log(c.indexOf('e', 7)) // -1

//4.lastIndexOf

console.log(c.lastIndexOf('e')) // 4
console.log(c.lastIndexOf('e', 2)) // 1
console.log(c.lastIndexOf('e', 5)) // -1
console.log(c.lastIndexOf('e', 6)) // -1
console.log(c.lastIndexOf('e', 7)) // -1

//5.search

console.log(c.search('e')) // 1
console.log(c.search('e', 2)) // 4
console.log(c.search('e', 5)) // -1
console.log(c.search('e', 6)) // -1
console.log(c.search('e', 7)) // -1

//6.slice

console.log(c.slice(0, 4)) // Hello
console.log(c.slice(0, 5)) // Hello
console.log(c.slice(0, 6)) // Hello
console.log(c.slice(0, 7)) // Hello
console.log(c.slice(0, 8)) // Hello

//7.substring

console.log(c.substring(0, 4)) // Hello
console.log(c.substring(0, 5)) // Hello
console.log(c.substring(0, 6)) // Hello
console.log(c.substring(0, 7)) // Hello
console.log(c.substring(0, 8)) // Hello

//8.substr

console.log(c.substr(0, 4)) // Hello
console.log(c.substr(0, 5)) // Hello
console.log(c.substr(0, 6)) // Hello
console.log(c.substr(0, 7)) // Hello
console.log(c.substr(0, 8)) // Hello

//9.toLowerCase

console.log(c.toLowerCase()) // hello namsthe

//10.toUpperCase

console.log(c.toUpperCase()) // HELLO NAMSTHE

//11.trim

console.log(c.trim()) // Hello namsthe

//12.trimStart

console.log(c.trimStart()) // namsthe

//13.trimEnd

console.log(c.trimEnd()) // Hello namsthe

//14.includes

console.log(c.includes('e')) // true
console.log(c.includes('e', 2)) // true
console.log(c.includes('e', 5)) // false
console.log(c.includes('e', 6)) // false
console.log(c.includes('e', 7)) // false

//15.startsWith

console.log(c.startsWith('e')) // false
console.log(c.startsWith('e', 2)) // true
console.log(c.startsWith('e', 5)) // false
console.log(c.startsWith('e', 6)) // false
console.log(c.startsWith('e', 7)) // false

//16.endsWith

console.log(c.endsWith('e')) // false
console.log(c.endsWith('e', 2)) // true
console.log(c.endsWith('e', 5)) // false
console.log(c.endsWith('e', 6)) // false
console.log(c.endsWith('e', 7)) // false

//17.repeat

console.log(c.repeat(2)) // Hello namstheHello namsthe

//18.match

console.log(c.match('e')) // [ 'e', index: 1, input: 'Hello namsthe', groups: undefined ]
console.log(c.match('e', 2)) // [ 'e', index: 4, input: 'Hello namsthe', groups: undefined ]
console.log(c.match('e', 5)) // null
console.log(c.match('e', 6)) // null
console.log(c.match('e', 7)) // null

//19.split

console.log(c.split(' ')) // [ 'Hello', 'namsthe' ]
console.log(c.split(' ', 2)) // [ 'Hello', 'namsthe' ]
console.log(c.split(' ', 5)) // [ 'Hello', 'namsthe' ]
console.log(c.split(' ', 6)) // [ 'Hello', 'namsthe' ]
console.log(c.split(' ', 7)) // [ 'Hello', 'namsthe' ]

//20.replace

console.log(c.replace('Hello', 'Namsthe')) // Namsthe namsthe


/* 
console.log(c.charAt(6)); // Output: n
console.log(c.length)
console.log(c.lastIndexOf('e'));
console.log(c.charCodeAt('o')) */
