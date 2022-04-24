

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sehun.jpg.png') {
      myImage.setAttribute('src','images/oh.jpeg');
    } else {
      myImage.setAttribute('src','images/sehun.jpg.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'annyeong! this is sehunnie, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'annyeong! this is sehunnie, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  
  
  