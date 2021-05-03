let cmButtons = document.querySelectorAll('.cm-btn'), masker;
for(cmButton of cmButtons){
   cmButton.addEventListener('mouseover', function(){
      masker = this.childNodes[3];
      masker.style.height = '100%';
   });
   cmButton.addEventListener('mouseout', function(){
      masker = this.childNodes[3];
      masker.style.height = '0%';
   });
}