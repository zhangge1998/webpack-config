//入口文件
import fn from './1';
import  './1.css'
let a = 7;
let b = 8;
console.log(a + fn() + 10 + b);

if (module.hot) {
    module.hot.accept();
}