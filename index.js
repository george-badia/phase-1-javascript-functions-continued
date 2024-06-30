// code your solution here
function saturdayFun(activity = "roller-skate") {
   return `This Saturday, I want to ${activity}!`;
  
}
/*const saturdayOutput = saturdayFun();
console.log(saturdayOutput);*/

function mondayWork (activity = "go to the office") {
   return `This Monday, I will ${activity}.`;
 }
 /*const mondayOutput = mondayWork("work from home");
 console.log(mondayOutput);*/
function wrapAdjective(symbol = "*") {
   return function(adjective) {
     return `You are ${symbol}${adjective}${symbol}!`;
   };
 }
 /*const wrapAdjectiveOutput1 = wrapAdjective("*")("a hard worker");
 console.log(wrapAdjectiveOutput1);
 const wrapAdjectiveOutput2 = wrapAdjective("||")("a dedicated programmer");
console.log(wrapAdjectiveOutput2);*/


// while calling my functions received this message [Function (anonymous)] then immediately when did the last one and did node index.js it disappeared,kindly help understand why.