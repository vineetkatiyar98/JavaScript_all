var name="ROHAN"
var age=50
function calc(...y)
{
    //y=[20,30,40]
    var m=y.reduce((t,data)=>{

        t=t*data
        return t
    })
    return m

}
var company="TECHPILE"
export default function()
{
console.log("I am from demo1 function present in mod4 ")
}

export {name,age,calc,company}
//export default demo1



//calc(20,30,40)