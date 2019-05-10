import Vue from 'vue'

Vue.filter('percentage', (value) =>{
  return (value).toFixed(2)
})