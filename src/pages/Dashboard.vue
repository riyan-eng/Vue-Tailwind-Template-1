<template>
  <PrivateLayout>
    <h1>Ini dash</h1>
    <div>{{auth}}</div>
    <div>{{user}}</div>
  </PrivateLayout>
</template>
<script>
import PrivateLayout from '../layouts/PrivateLayout.vue';
import axios from 'axios';

export default{
  components:{
    PrivateLayout
  },
  data(){
    return{
      auth: axios.defaults.headers.common['Authorization']
    }
  },
  computed:{
    user(){
      return this.$store.state.user
    }
  }
}
</script>