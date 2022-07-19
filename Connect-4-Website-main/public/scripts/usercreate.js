// create account stuff

const createForm = document.querySelector('.create-acc-form');
const createFormReal = document.querySelector('.real')
const createPassword = document.querySelector('#password-field');
const checkPassword = document.querySelector('#password-field2');
const fakeButton = document.querySelector('.fakebutton');
const symbCond = document.querySelector('#symb-cond');
const charCond = document.querySelector('#char-cond');
const numCond = document.querySelector('#num-cond');
const capCond = document.querySelector('#cap-cond');
const nomatch = document.querySelector('#nomatch');
const passreq = document.querySelector('#passreq');
const usernamePattern1 = /.*[\]!@#$%^&*({}|:"<>?/.,';{[=-_+)\\].*$/
const usernamePattern2 = /.*\d.*/
const usernamePattern3 = /.*[A-z].*/


const elo = 0;
createFormReal.style.display = 'none'

createPassword.addEventListener('keyup', function(e){
   if (usernamePattern1.test(e.target.value)){
       symbCond.style.display = "none";
   } else{
       symbCond.style.display = "block";
   }
   if (usernamePattern2.test(e.target.value)){
        numCond.style.display = "none";
    } else{
        numCond.style.display = "block";
    }
    if (usernamePattern3.test(e.target.value)){
        capCond.style.display = "none";
    } else{
        capCond.style.display = "block";
    }
    if (e.target.value.length >= 6){
        charCond.style.display = 'none';
    } else{
        charCond.style.display = "block";
    }
    
    

});

checkPassword.addEventListener('keyup', function(e){
    if (createPassword.value == checkPassword.value){
        nomatch.style.display = "none";
    } else {
        nomatch.style.display = "block";
    }
    if ((usernamePattern1.test(createPassword.value) + usernamePattern2.test(createPassword.value) + usernamePattern3.test(createPassword.value))==3 && createPassword.value.length >= 6 && createPassword.value == checkPassword.value){
        createFormReal.style.display = 'block'
        fakeButton.style.display = 'none'
    } else {
        createFormReal.style.display = 'none'
        fakeButton.style.display = 'block'
    }
})

passreq.style.display = "none";

function errfake(){
    passreq.style.display = "block";
};