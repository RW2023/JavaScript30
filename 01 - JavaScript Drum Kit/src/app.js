function playSound(e){
    const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key= "${e.keyCode}"]`)
    console.log(audio);
    audio.currentTime = 0;
    if (!audio) return; //Stop function from running if no associated audio element
    audio.play();
    key.classList.add('playing');
  }

function removeTransitions(e){
  if(e.propertyName !== 'transform')return; //skip if it's not a transform
  this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key=> key.addEventListener('transitionend', removeTransitions));

window.addEventListener('keydown', playSound);
