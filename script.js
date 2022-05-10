console.log('test');
let count = document.querySelector('.count');
let capsLock = true;
let btnShift = false;
let lang = 'en';

function input(e) {
   let inputArea = document.getElementById('inputScreen');
   if(e.matches('.symbol')){
      inputArea.value = inputArea.value + e.value;   
      //count.innerHTML = inputArea.value.length;
      if(btnShift){
         load(false, lang);
         btnShift = false;
      };
   };
}

function tab(){
   let inputArea = document.getElementById('inputScreen');
   inputArea.value = inputArea.value + '     ';
}

function backspace() {
   let inputArea = document.getElementById("inputScreen");
   inputArea.value = inputArea.value.substr(0, inputArea.value.length - 1);
   //count.innerHTML = inputArea.value.length;
}

function enter() {
   let inputArea = document.getElementById('inputScreen');
   inputArea.value = inputArea.value + '\r\n';
}

function shift() {
   console.log('Shift');
   btnShift = true;
   load(true, lang);
}

function caps() {
   console.log('capsLOck');
   let button = document.querySelector('.caps');
   button.classList.toggle('active');

   if (capsLock){
      load(true, lang);
      capsLock = false;
   } else { 
      load(false, lang);
      capsLock = true;
   }
}

function win(){
   console.log(lang);
   if (lang == 'en'){
      load(false,'by');
      return lang='by';
   };
   if (lang == 'by'){
      load(false,'en');
      return lang='en';
   };
}

function load(capsLock2 = false, lang2='en') {
   
   let offCaps = [
      '`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
      'Tab','q','w','e','r','t','y','u','i','o','p','[',']','/','DEL',
      'Caps Lock','a','s','d','f','g','h','j','k','l',';','\'','ENTER',
      'Shift','\\','z','x','c','v','b','n','m',',','.','/','^','Shift',
      'Ctrl','Win','Alt',' ','Alt','Ctrl','<','v','>'
   ];

   let onCaps = [
      '`','!','@','#','$','%','^','&','*','(',')','_','+','Backspace',
      'Tab','Q','W','E','R','T','Y','U','I','O','P','[',']','/','DEL',
      'Caps Lock','A','S','D','F','G','H','J','K','L',';','\'','ENTER',
      'Shift','\\','Z','X','C','V','B','N','M',',','.','/','^','Shift',
      'Ctrl','Win','Alt',' ','Alt','Ctrl','<','v','>'
   ];

   let onCapsBy = [
      'Ё','!','"','№',';','%',':','?','*','(',')','_','+','Backspace',
      'Tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','/','DEL',
      'Caps Lock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','ENTER',
      'Shift','Я','Ч','С','М','И','Т','Ь','Б','Ю','.','/','^','Shift',
      'Ctrl','Win','Alt',' ','Alt','Ctrl','<','v','>'
   ];

   let offCapsBy = [
      'ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
      'Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','/','DEL',
      'Caps Lock','ф','ы','в','а','п','р','о','л','д','ж','э','ENTER',
      'Shift','я','ч','с','м','и','т','ь','б','ю','.','/','^','Shift',
      'Ctrl','Win','Alt',' ','Alt','Ctrl','<','v','>'
   ];

   let buttonArray;

   if (capsLock2 && lang2=='en'){buttonArray = onCaps;};
   if (capsLock2 && lang2=='by'){buttonArray = onCapsBy;};
   if (!capsLock2 && lang2=='en'){buttonArray = offCaps;};
   if (!capsLock2 && lang2=='by'){buttonArray = offCapsBy;};

   console.log(capsLock2 && lang2=='en');
   console.log(capsLock2 && lang2=='by');
   console.log(!capsLock2 && lang2=='en');
   console.log(!capsLock2 && lang2=='by');
   // if (capsLock2){ 
   //    if(lang2 == 'en'){buttonArray = onCaps;};
   //    if(lang2 == 'by'){buttonArray = onCapsBy;};
      
   // } else {
   //    if(lang2 == 'en') {buttonArray = offCaps;};
   //    if(lang2 == 'by') {buttonArray = offCapsBy;};
   // }

   for(i = 0; i < buttonArray.length; i++) {
           let btn = document.querySelectorAll('[type="button"]');;
           btn[i].value = buttonArray[i];
       }

}