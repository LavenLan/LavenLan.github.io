/*let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myVariable = '李雷';
myVariable = '韩梅梅';

myVariable = 10;
myVariable = true;//布尔值（真 / 假）： true/false 是 JS 里的特殊关键字，无需引号。
myVariable = [1, '李雷', '韩梅梅', 10];
*/


/*元素引用方法：myVariable[0], myVariable[1] ……*/

/*对象：JavaScript 里一切皆对象，一切皆可储存在变量里。这一点要牢记于心。
let myVariable = document.querySelector('h1');
以及上面所有示例都是对象。*/

/*运算实例
6+9;
"Hello"+"world" ;
9 - 3;
8 * 2; //乘法在 JS 中是一个星号
9 / 3;

测试两个值是否相等，并返回一个 true/false （布尔）值。	===	
let myVariable = 3;
myVariable === 4; // false

和等于运算符相反，测试两个值是否不相等，并返回一个 true/false （布尔）值。	!==	
let myVariable = 3;
myVariable !== 3; // false

返回逻辑相反的值，比如当前值为真，则返回 false。	!	原式为真，但经取非后值为 false：
let myVariable = 3;
!(myVariable === 3); // false
*/

/*
条件语句示例

let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('我最喜欢巧克力冰激淋了。');
} else {
  alert('但是巧克力才是我的最爱呀……');
}
*/

/*
multiply(4, 7);
function multiply(num1,num2){
    let result = num1 * num2;
    return result;
  }
  */

  /*
  这段是点击弹窗示例
  document.querySelector("html").addEventListener("click",function(){
    alert("别戳我，我怕疼！")
  })

  document.querySelector('html').addEventListener('click',()=>{
alert('别戳我，我怕疼！');
  })

  */

  //下面是点击切换图片的示例
  let myImage = document.querySelector('img');

  myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lawball.png'){
        myImage.setAttribute('src','images/envelop.png');
    }else{
        myImage.setAttribute('src','images/lawball.png');
    }
  }

  //输入弹窗示例
  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h1');
  function setUserName(){
    let myName = prompt('请输入你的名字：');
    if(!myName){
      setUserName();
    }else{
      localStorage.setItem('name',myName);
      myHeading.textContent = myName + '你真棒！'
    }
  }
  if(!localStorage.getItem('name')){
    setUserName();
  }else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + '你真棒！'
  }
  myButton.onclick = function(){
    setUserName();
  }