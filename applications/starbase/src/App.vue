<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <h3 class="card-title-header"> {{ title }} </h3>
        <p>Build your favorite Star Wars team by clicking on a card</p>
      </div>
    </div>
   <div class="row">
      <div class="col-md-12">
    <Character 
    v-for="(id, index) in initial_ids" 
    :id="id"
    :key="index"/>
      </div>
   </div> 
  </div>
</template>

<script>
import Character from './components/Character.vue'
export default {
  name: 'app',
  data () {
    return {
      title: 'Generate Your Team',
      initial_ids: [1, 13, 14]
    }
  },
  components: {
    Character
  }
}
</script>

<style>

</style>
