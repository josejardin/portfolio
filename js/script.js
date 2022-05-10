let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

// ------------------------- Typing Effect
class Typings {
    constructor(txtElement, words, wait = 1000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      const current = this.wordIndex % this.words.length;
      const fullTxt = this.words[current];
  
      if(this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
      // -------- Control Speed
      let typeSpeed = 100;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
      if(!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 100;
      }
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  document.addEventListener('DOMContentLoaded', init);
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new Typings(txtElement, words, wait);
} // ------------------------- End Typing Effect

// ---------------- Web Share API
const shareButton = document.querySelector('.handwritten');
const shareDialog = document.querySelector('.share-dialog');

shareButton.addEventListener('click', event => {
  if (navigator.share) { 
   navigator.share({
      title: 'Handwritten Digit Recognition',
      url: 'https://github.com/josejardin/Handwritten-Digit-Recognition'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
});

const shareButton_1 = document.querySelector('.live-object');
const shareDialog_1 = document.querySelector('.share-dialog');

shareButton_1.addEventListener('click', event => {
  if (navigator.share) { 
   navigator.share({
      title: 'Live Object Detection',
      url: 'https://github.com/josejardin/Simple-Live-Object-Detection'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
});

const shareButton_2 = document.querySelector('.counting-face');
const shareDialog_2 = document.querySelector('.share-dialog');

shareButton_2.addEventListener('click', event => {
  if (navigator.share) { 
   navigator.share({
      title: 'Counting Face Detection',
      url: 'https://github.com/josejardin/Simple-Counting-Face-Detection'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
});

const shareButton_3 = document.querySelector('.flappy-capu');
const shareDialog_3 = document.querySelector('.share-dialog');

shareButton_3.addEventListener('click', event => {
  if (navigator.share) { 
   navigator.share({
      title: 'Flappy Capu Game',
      url: 'https://github.com/josejardin/Flappy-Capu'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
});

const shareButton_4 = document.querySelector('.soul-wanderer');
const shareDialog_4 = document.querySelector('.share-dialog');

shareButton_4.addEventListener('click', event => {
  if (navigator.share) { 
   navigator.share({
      title: 'Soul Wanderer Game',
      url: 'https://github.com/josejardin/Soul-Wanderer'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
});

// --------------------- Email JS
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_br3w87g';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});