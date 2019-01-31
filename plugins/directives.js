// Register a global custom directive called `v-focus`
import Vue from 'vue';
Vue.directive('focus', {
    // When the bound element is inserted into the DOM...
    inserted: function (el) {
      // Focus the element
      el.focus()
    }
  })

Vue.directive('color-swatch', function (el, binding) {
    el.style.backgroundColor = binding.value
  })

  Vue.directive('demo', function (el, binding) {
    console.log(binding.value.color) // => "white"
    console.log(binding.value.text)  // => "hello!"
    el.style.color = binding.value.color
    el.innerHTML = binding.value.text;
  })