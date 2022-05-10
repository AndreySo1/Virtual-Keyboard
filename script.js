console.log('test');

let capsLock = false;

function input(e) {
   let inputArea = document.getElementById('inputScreen');
   if(e.matches('.symbol')){
      inputArea.value = inputArea.value + e.value;
   }
}

function del() {
   let inputArea = document.getElementById("inputScreen");
   inputArea.value = inputArea.value.substr(0, inputArea.value.length - 1);
}

function caps() {
   console.log('capsLOck');
   let button = document.querySelector('.caps');
   button.classList.toggle('active');

   if (capsLock){
      load(true);
      capsLock = false;
   } else { 
      load(false);
      capsLock = true;
   }
}

function load(caps = true) {
   let offCaps = [
      '`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
      'Tab','q','w','e','r','t','y','u','i','o','p','[',']','/','DEL',
      'Caps Lock','a','s','d','f','g','h','j','k','l',';','\'','ENTER',
      'Shift','\\','z','x','c','v','b','n','m',',','.','/','^','Shift',
      'Ctrl','Win','Alt',' ','Alt','Ctrl','<','v','>'
   ];

   let onCaps = [
      '`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
      'Tab','Q','W','E','R','T','Y','U','I','O','P','[',']','/','DEL',
      'Caps Lock','A','S','D','F','G','H','J','K','L',';','\'','ENTER',
      'Shift','\\','Z','X','C','V','B','N','M',',','.','/','^','Shift',
      'Ctrl','Win','Alt',' ','Alt','Ctrl','<','v','>'
   ];

   let buttonArray;
   if (caps){ buttonArray = onCaps;
   } else buttonArray = offCaps;

   for(i = 0; i < buttonArray.length; i++) {
           let btn = document.querySelectorAll('[type="button"]');;
           btn[i].value = buttonArray[i];
       }

}