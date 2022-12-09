<template>
    <PrivateLayout>
        <Vue3EasyDataTable :headers="headers" :items="items"/>
        
    </PrivateLayout>
</template>

<script>
import PrivateLayout from '../layouts/PrivateLayout.vue';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import axios from 'axios';
export default{
    components:{
        PrivateLayout, Vue3EasyDataTable
    },
    created(){
        this.fetchTodo()
    },
    data () {
      return {
        headers: [
          { text: "Name", value: "todo" },
          { text: "Completed", value: "completed"},
          
        ],
        items: [],
        
      }
    },
    methods:{
        async fetchTodo() {
            const {data} = await axios.get("http://localhost:3000/todos")
            this.items = data
        },
    }
}

</script>