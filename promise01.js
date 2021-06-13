/*
 *
 */
let person = {
  name: "Feng",
  age: 29,
};
// const name = person.name;
// const age = person.age;
const { name, age } = person;
console.log(name);
console.log(age);

/*
ajax('get','/xxx',{
    success(response{

    }),
     fail: (request, status)=>{

    }
})
改写成 Promise, 开始感受一下 Promise
ajax('get','/xxx')
    .then(response=>{}, request=>{})
*/

// return new Promise((resolve, reject) => {});

// *
