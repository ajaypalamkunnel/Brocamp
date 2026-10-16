var romanToInt = function(s) {

    let rom = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    let str = s.split("")
    console.log(str)
    let res = 0
    for(let j = 0 ; j < str.length ; j++){
        for(let i in rom){
            if(i==str[j]){
               res = rom[i]+res;
              
            }
        }
    }

    console.log(res)
    
};
romanToInt("LVIII")
