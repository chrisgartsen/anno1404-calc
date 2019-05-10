<template>
  <div class="container">
    <div class="columns">
      <div class="column is-2 is-offset-3">
        <b-field label="Beggars">
          <b-input v-model="beggarCount"></b-input>
        </b-field>
      </div>
      <div class="column is-5 is-offset-1">
        <ul class="item-list">
          <li v-for="(value, name) in beggars" :key="name"> {{ value | building }} ({{ value | percentage }}) {{ name }} </li>
        </ul>
      </div>
    </div>

    <div class="columns">
      <div class="column is-2 is-offset-3">
        <b-field label="Peasants">
          <b-input v-model="peasantCount"></b-input>
        </b-field>
      </div>
      <div class="column is-5 is-offset-1">
        <ul class="item-list">
          <li v-for="(value, name) in peasants" :key="name"> {{ value | building }} ({{ value | percentage }}) {{ name }} </li>
        </ul>
      </div>
    </div>

    <div class="columns">
      <div class="column is-2 is-offset-3">
        <b-field label="Citizens">
          <b-input v-model="citizenCount"></b-input>
        </b-field>
      </div>
      <div class="column is-5 is-offset-1">
        <ul class="item-list">
          <li v-for="(value, name) in citizens" :key="name"> {{ value | building }} ({{ value | percentage }}) {{ name }} </li>
        </ul>
      </div>
    </div>

    <div class="columns">
      <div class="column is-2 is-offset-3">
        <h4 class="has-text-weight-semibold">Totals</h4>
      </div>
      <div class="column is-5 is-offset-1">
        <ul class="item-list">          
          <li v-for="(value, name) in totals" :key="name"> {{ value | building }} ({{ value | percentage }}) {{ name }} </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'main-page',
  data() {
    return {
      beggarCount: 0,
      peasantCount: 0,
      citizenCount: 0,
    }
  },
  computed: {
    beggars() {
      return {
        "Fish": this.beggarCount * 0.0035,
        "Cider": this.beggarCount * 0.0020
      }
    },
    peasants() {
      return {
        "Fish": this.peasantCount * 0.0050,
        "Cider": this.peasantCount * 0.0029
      }
    },
    citizens() {
      return {
        "Fish": this.citizenCount * 0.0020,
        "Cider": this.citizenCount * 0.0029,
        "Spice": this.citizenCount * 0.0020,
        "Linnen Garments": this.citizenCount * 0.0021
      }
    },
    totals() {
      return {
        "Fish": this.beggars["Fish"] + this.peasants["Fish"] + this.citizens["Fish"],
        "Cider": this.beggars["Cider"] + this.peasants["Cider"] + this.citizens["Cider"],
        "Spice": this.citizens["Spice"],
        "Linnen Garments": this.citizens["Linnen Garments"]
      }
    }
  }
}
</script>

<style>
.item-list {
  margin-top: 1.5rem;
}
</style>
