// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function handleHeartClick(){
  const heart = document.querySelector(".like-glyph");

  if (heart.classList.contains('empty')){
    mimicServerCall()
    .then(response => {
      if(response.status === 'success'){
        heart.classList.remove('empty');
        heart.classList.add('activated');
      }else{
        showErrorModal(response.message);
      }
    })
    .catch(error => {
      showErrorModal(error.message);
    })
  }else{
    heart.classList.remove('activated');
    heart.classList.add('empty');
  }
}

function showErrorModal(errorMessage){
  const errorModal = document.querySelector('.errorModal');
  const errorText = document.querySelector('.error-text');

  errorText.textContent = errorMessage;
  errorModal.classList.remove('hidden');

  setTimeout(()=>{
    errorModal.classList.add('hidden');
  }, 3000);
}

for (const glyph of hearts){
  glyph.addEventListener("click" , handleHeartClick);
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
