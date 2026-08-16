const getName =()=>{
    return "Shakib Abdullah" ;
}

const getAge =()=>{
    return  "22" ;
}

const cgpa = 3.92;

// exports.name = getName;
// exports.age = getAge;
// exports.result = cgpa;

//! sob gula eksathe export kora : 

// module.exports = {
//     getAge,
//     getName,
//     cgpa,
// }

module.exports = {
  getAge: getAge,
  getName: getName,
  result: cgpa
};