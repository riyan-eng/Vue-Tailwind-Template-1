<template>
  <PrivateLayout>
    <h1>Ini dash</h1>
    <div>{{auth}}</div>
  </PrivateLayout>
</template>
<script>
import PrivateLayout from '../components/layout/PrivateLayout.vue';
import axios from 'axios';

export default{
  components:{
    PrivateLayout
  },
  data(){
    return{
      auth: axios.defaults.headers.common['Authorization']
    }
  }
}
</script>