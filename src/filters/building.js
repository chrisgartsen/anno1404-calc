import Vue from 'vue'

Vue.filter('building', (value) =>{
  return Math.ceil(value)
})