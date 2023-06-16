let newSub1 = 0;

//how many has Subscribed
function newSub(){
  newSub1 ++; // same to newSub + 1
  console.log( `Got a subscriber! : ${newSub1}`)
};

//Subscribed
function submitted(){
  const buttonElement = document.querySelector('.submit-button')

  if (buttonElement.innerText === 'SUBSCRIBE') {
    buttonElement.innerHTML = 'Subscribed'.toUpperCase()
  } else {
    buttonElement.innerHTML = 'SUBSCRIBE'
  }
};

