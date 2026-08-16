const fs = require('fs');
// console.log(fs);


//! demo1 name txt file thakle oita access korbe. 
//! na thakle crate kore nibe and ei lekha ta override korbe 
fs.writeFile('demo1.txt', "My name is shakib abdullah" , function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("SUccessful");
    }
})


fs.appendFile('demo1.txt', "  I'm 23 years Old ." , (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("append SUccessfull")
    }
})


fs.readFile('demo1.txt' , 'utf-8' , (err , data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
});

fs.rename('demo1.txt' , 'demo2.txt' , (err)=>{
    if(err){
        console.log(err);
    }
    else(
        console.log("successful")
    )
})
//! to delete a file : 
// fs.unlink('demo2.txt' ,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("successfully deletd")
//     }
// })

//!  updated syntaxt ashche eta evabe akho r kaj korna 
fs.exists('demo2.txt' , (result)=>{
    if(result){
        console.log("found")
    }
    else{
        console.log("NOt Found")
    }
})