//find factorial

const factorial=(num)=>{
    let res = 1;
    for(let i=1; i<=num;i++){
        res = res * i
        console.log(res)
    }
    return res
}
console.log(factorial(4))

const table = (num) =>{
    let table = 0 ;
    for (let i = 1; i <= 10; i++){
        table = num * i
        console.log(table);
    }
    return table
}
console.log(table(9));

let a = 3
let b = 2
a = a ^ b
b = b ^ a
a = b ^ a
console.log(`a:${a} b:${b}`)

const tab = [1,2,3,4,5,6,7,8,9,10].map((i)=>{
    return i * 5
})
console.log(tab)

