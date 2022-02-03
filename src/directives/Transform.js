import Vue from 'vue'; 

Vue.directive('my-transform', {

   bind(el, binding, vnode) {
      let current = 0; 
      el.addEventListener('click', function() {
         current+=90; 
         this.style.transform = `rotate(${current}deg)`; 
      }); 
   }

});