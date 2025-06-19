function add(a,b){
    return a+b;
}

const mul = (a,b)=>{
    return a*b;
}

const obj={
    name:"John",
    age:20,
    message:function(){
        let name = obj.name;
        let age = obj.age;
        return `hello! ${name} and your age is ${age}`;
    }
}

const numbers=[1,6,4,55,23,-26];

const mappednum = numbers.map((n)=>n*3);

const posNum = numbers.filter((n)=>n>0);

const total  = numbers.reduce((sum,n)=>sum+n,0);

const products=[
    {name:'tv',price:8000},
    {name:'phone',price:5000},
    {name:'laptop',price:10000},
    {name:'watch',price:2000}]
   const Tprice = products.reduce((sum,n)=>sum+n.price,0);
    const tr = products.filter((n) => n.price > 5000);


console.log(add(12,11));
console.log(mul(10,10));
console.log(obj.name);
console.log(obj.message());
console.log(mappednum);
console.log(posNum);
console.log(total);
console.log(Tprice);
console.log(tr);

const num = [1,2,3,4,5,6];
const [first,second,third,...spread]=num
console.log(third);
const user ={Uname:'CR7',password:'12345'}
const {uname,password}=user
console.log(password);
console.log(spread);

function add2(...arguments){
    //return arguments;
    return arguments.reduce((sum,n)=>sum+n,0);
}
console.log(add2(1,2,3,4,5))
function function1(){
    console.log(`from inside callback`)
}
    function fun(name,callback){
    callback()
    return  `${name} from outside callback`
}
console.log(fun(`function`,()=>{console.log(`from inside callback`) }));

  