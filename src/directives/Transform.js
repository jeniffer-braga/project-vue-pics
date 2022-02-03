export default {

   bind(el, binding, vnode) {
      let current = 0; 

      el.addEventListener('click', function() {

         let i = binding.value || 90;
         let effect; 

         if (!binding.arg || binding.arg == 'rotate') {

            if (binding.modifiers.reverse) current-=i; 
            else current+=i; 
            effect = `rotate(${current}deg)`;

         } else if (binding.arg == 'scale') 
            effect = `scale(${i})`;
            
         el.style.transform = effect; 

         if (binding.modifiers.animate) el.style.transition = `transform 0.5s`;
      });
   }
};