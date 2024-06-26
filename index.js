// code your solution here

function saturdayFun(fun = "roller-skate"){
    return `This Saturday, I want to ${fun}!`;
}

saturdayFun("bathe my dog");

const mondayWork = function(doList = "go to the office"){
    return `This Monday, I will ${doList}.`;
}

mondayWork("work from home");

function wrapAdjective(flair = "*") {
    return (function(myParam = "special"){
        return `You are ${flair}${myParam}${flair}!`;
    })
}

wrapAdjective()();