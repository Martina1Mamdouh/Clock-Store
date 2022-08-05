/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');


toggle.addEventListener('click',function (){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.backgroundColor ='white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
})