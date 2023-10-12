//json Object
// Java script Object Notation 
// It store key & value format 
var jsonObj = {
    id: 9,
    "fname": 'Sumit',
    lname: 'Raokhande'
};
// 1 dot operator
// 2 square operator
// 1 dot operator
// console.log(`
//     Id          ::${jsonObj.id}
//     First name  ::${jsonObj.fname}
//     Last Name   ::${jsonObj.lname}
// `);
// 2 square operator
console.log("\n----------------\n    Id          ::".concat(jsonObj["id"], "\n    First name  ::").concat(jsonObj['fname'], "\n    Last Name   ::").concat(jsonObj['lname'], "\n"));
