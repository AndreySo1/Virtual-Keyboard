console.log('test');

function input(e) {
   let inputArea = document.getElementById('inputScreen');
   inputArea.value = inputArea.value + e.value;
}

function del() {
   let inputArea = document.getElementById("inputScreen");
   inputArea.value = inputArea.value.substr(0, inputArea.value.length - 1);
}

function load() {
   //let array = new Array();

   // while (array.length < 10) {
   //     let temp = Math.round(Math.random() * 9);
   //     if (!contain(array, temp)) {
   //         array.push(temp);
   //     }
   // }
   let buttonArray = [
      '`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
      'Tab','Q','W','E','R','T','Y','U','I','O','P','[',']','/','DEL',
      'Caps Lock','A','S','D','F','G','H','J','K','L',';','\'','ENTER',
      'Shift','\\','Z','X','C','V','B','N','M','.',',','/','^','Shift',
      'Ctrl','Win','Alt',' ','Alt','Ctrl','<','v','>'
   ];

   for (i = 0; i < buttonArray.length; i++) {
           let btn = document.querySelectorAll('[type="button"]');;
           btn[i].value = buttonArray[i];
       }

   // for (i = 0; i < 10; i++) {
   //     let btn = document.getElementById("btn" + i);
   //     btn.value = [i];
   // }
}