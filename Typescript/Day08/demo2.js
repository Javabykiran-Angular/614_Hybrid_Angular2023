"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var demo1_1 = require("./demo1");
var obj = new demo1_1.Myclass(6, 'Kiran', 'Raohande');
obj.display();
console.log("Addition is " + (0, demo1_1.add)(10, 2));
console.log("\n    PI :: ".concat(demo1_1.pi, "\n"));
console.log("\n        ID :: ".concat(demo1_1.jsonObj.id, "\n"));
