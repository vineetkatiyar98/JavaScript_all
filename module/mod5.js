function calc(...x)
{
    // //x=[10,20,30]
    // var s=0
    // x.forEach(function(data){
    //     s=s+data
    // })
    // return s
    var s=x.reduce((total,data)=>{
        total=total+data
        return total
    })
    return s


}

var name="RAHUL"
var age=30

// calc(10)
calc(10,20,30)
// calc(10,203,45,56,778)

// var arr=[1,2,3,4,5]
// var arr1=[10,20,30,40,45]
// //var arr2=arr1.concat(arr,arr1)//[1,2,3,4,5,10,20,30,40,45]
// var arr2=[...arr,...arr1]//[1,2,3,4,5,10,20,30,40,45]

export {name,age,calc}



