// code your solution here
function saturdayFun(fun='roller-skate'){
    return `This Saturday, I want to ${fun}!`

}
const mondayWork=function(work='go to the office'){
    return `This Monday, I will ${work}.`
}
function wrapAdjective(flair='*'){
    return function(happy="special"){
        return `You are ${flair}${happy}${flair}!`

    }
}