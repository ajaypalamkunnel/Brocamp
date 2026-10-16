// //Enum
// enum Browser{
//     Chrome=8,
//     FireFox,
//     Brave,
//     Edge
// }
// console.log(Browser.Chrome);//0
// console.log(Browser[0]);//chrome
// console.log(Browser[5]);//undefined
// console.log(Browser);
// //String enum
// enum environment{
//     DEV = 'dev',
//     QA = 'qa',
//     STAGE = 'stage',
//     PROD = 'prod'
// }
// console.log(environment);
// //heterogenius enum
// enum stat{
//     ACTIVE = 'active',
//     DEACTIVE = 1,
//     PENDING 
// }
// console.log(stat.DEACTIVE);
// console.log(stat.PENDING);
var Month;
(function (Month) {
    Month[Month["jan"] = 6] = "jan";
    Month[Month["fed"] = 7] = "fed";
    Month[Month["mar"] = 8] = "mar";
})(Month || (Month = {}));
console.log(Month[6]);
console.log(typeof Month);
