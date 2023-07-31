console.log('Hello from Nerdbord!')


const newArray =['red', 'blue', 'white', 'black','purple','gray','green']
let currentIndex = 0;
function changeBorderColor(){
  document.getElementById('box').style.borderColor = newArray[currentIndex];
  currentIndex =(currentIndex+1 ) % newArray.length
}
setInterval(changeBorderColor,3000)
