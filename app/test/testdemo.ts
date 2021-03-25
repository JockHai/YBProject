// // [Symbol.iterator]() {
//     //     return {
//     //         next() {
//     //             return { value: 1, done: false }
//     //         },
//     //         return() {
//     //             return {value:2,done:true}
//     //         }
//     //     }
//     // }

//     timeout(ms?: any) {
//         return new Promise((resolve, reject) => {
//             setTimeout(resolve, ms, 'done233');
//         });
//     }

//     testDemo() {
//         let promise = new Promise(function (resolve, reject) {
//             console.log('Promise');
//             resolve(1);
//         });

//         promise.then(function () {
//             console.log('resolved.');
//         });

//         console.log('Hi!');

//         // this.timeout(500).then(value=>console.log(value))
//         // setTimeout(() => {
//         //     console.log("666")
//         // }, 1000);
//         // this.testDemo()
//     }

//     getJSON(url: string) {
//         const promise = new Promise(function (resolve, reject) {
//             const handler = function (this:XMLHttpRequest) {
//                 if (this.readyState !== 4) {
//                     return;
//                 }
//                 if (this.status === 200) {
//                     resolve(url);
//                 } else {
//                     reject(new NetworkConnectionException(this.statusText as string, "111", "222"));
//                 }
//             };
//             const client = new XMLHttpRequest();
//             client.open("GET", url);
//             client.onreadystatechange = handler;
//             client.responseType = "json";
//             client.setRequestHeader("Accept", "application/json");
//             client.send();
//         });
//         return promise;

//         // 基础模式
//         // this.getJSON("https://mobile-service-v3.yummybazaar-qa.com/_sys/api").then(function(json) {
//         //     console.log('Contents: ' + json);
//         //   }, function(error) {
//         //     console.error('出错了', error);
//         //   });

//         // then递推模式
//         // this.getJSON("https://mobile-service-v3.yummybazaar-qa.com/_sys/api").then(
//         //     post => {
//         //         console.log(post);
//         //         return this.getJSON(post as string)
//         //     }
//         // ).then(
//         //     comments => console.log("resolved: ", comments),
//         //     err => console.log("rejected: ", err, "9999")
//         // )
//     };

//     demoThrow() {
//         const promise = new Promise(function (resolve, reject) {
//             throw new Error('test');
//             // reject(new Error('test')); //一样的结果
//         });
//         promise.catch(function (error) {
//             console.log(error);
//         });
//     }

//     // demoErrorCatch() {
//     //     ///吞并异常错误
//     //     const someAsyncThing = function () {
//     //         return new Promise(function (resolve, reject) {
//     //             // 下面一行会报错，因为x没有声明
//     //             resolve(x + 2);
//     //         });
//     //     };

//     //     someAsyncThing().then(function () {
//     //         console.log('everything is great');
//     //     });

//     //     setTimeout(() => { console.log(123) }, 2000);
//     // }

//     catchError2() {
//         const promise = new Promise(function (resolve, reject) {
//             resolve('ok');
//             // throw new Error('test')  //不执行
//             // setTimeout(function () { throw new Error('test') }, 0)   //执行异常
//         });
//         promise.then(function (value) { console.log(value) });
//         // Promise.resolve('2').then(value=>console.log(value))
//     }

//     testDemo2() {
//         const p1 = new Promise(function (resolve, reject) {
//             setTimeout(() => reject(new Error('fail')), 3000)
//             console.log('222')
//             // setTimeout(()=>resolve('333'),1000)
//         })
//         const p2 = new Promise(function (resolve, reject) {
//             console.log("111")
//             setTimeout(() => resolve(p1), 3000)
//         })
//         p2
//             .then(result => console.log(result + '777')).catch(error => console.log(error)).then(result => console.log(result + '8888'))
//     }

//     testGenerator(){
//         function* foo(x:number) : any{
//             var y = 2 * (yield (x + 1));
//             var z = yield (y / 3);
//             return (x + y + z);
//           }

//           var a = foo(5);
//           console.log(a.next())// Object{value:6, done:false}
//           console.log(a.next()) // Object{value:NaN, done:false}
//           console.log(a.next()) // Object{value:NaN, done:true}

//           var b = foo(5);
//           console.log(b.next()) // { value:6, done:false }
//           console.log(b.next(12)) // { value:8, done:false }
//           console.log(b.next(13)) // { value:42, done:true }
//     }

//     * foo() {
//         yield 2;
//         yield 3;
//         let v2 = yield * this.foo2()
//         console.log("v",v2)
//         return "foo";
//     }

//     * foo2(){
//         yield 4
//         yield 5
//         return '666';
//     }