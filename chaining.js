

/*
let p = new Promise((hello, goodbye) => {
    setTimeout(() => {

        hello(slowMath.add(6,2));
    }, 1000)
})
p.then(data => {  
    console.log(data); 
    return slowMath.multiply(data, 2);  
}).then(data => {console.log(data); return slowMath.divide(data, 4);} ).then(split => {
console.log(split);
return slowMath.subtract(split, 3);
}).then(split => {console.log(split); return slowMath.add(split, 98);}).then(remain => {
console.log(remain);
return slowMath.remainder(remain, 2);
}).then(remain => {
    console.log(remain);
    return slowMath.multiply(remain, 50);
}).then(same => {
    console.log(same);
    return slowMath.remainder(same, 40);
}).then(same => {
    console.log(same);
    return slowMath.add(same, 32);
}).then(final => {
    console.log(`the final result is ${final}`);
}).catch(new Error('Oh Snap!'));
*/


async function h1() {
    let wait = await slowMath.add(6,2);
    console.log('wait',wait);
    wait = await slowMath.multiply(wait, 2);
    console.log('wait',wait);
    wait = await slowMath.divide(wait,4);
    console.log('the final answer is 42');
}

h1();

