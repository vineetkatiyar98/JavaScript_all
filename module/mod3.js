import { firstname,lastname,age,fun1,fun2 } from "./mod1.js";
import {a,b,fun3} from './mod2.js'

console.log(
    `
    Name : ${firstname}
    LastName : ${lastname}
    Age  : ${age}
    `
)

fun1()
var res=fun2(30,40)
console.log("RESULT IS : "+res)

console.log(a+" and "+b)

var res1=fun3()
console.log(
    `
    First Value : ${res1[0]}
    Second Value : ${res1[1]}
    Third Value : ${res1[2]}
    `
)