// import {calc as c,name as n,age as a} from './mod4.js'
// import {calc as c1,name as n1,age as a1} from './mod5.js'
import * as mod from './mod4.js'
import * as mod1 from './mod5.js'
console.log(`
Name: ${mod.name}
Age : ${mod.age} Present in mod 4
`)

console.log(`
Name: ${mod1.name}
Age : ${mod1.age} Present in mod 5
`)

var res=mod1.calc(10,20,30,40,4,2,3,4,5,6,72,21)
console.log("Result of calc function present in mod 5 : "+res)

var res1=mod.calc(10,20,30,40,50,60)
console.log("Result of calc function present in mod 4 : "+res1)

console.log(mod.default)





