<template>
    <PrivateLayout>
        <div class="flex">
            <div class="px-1">
                <button @click="toggleModalInsertOne"
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm mb-2">
                    Insert One
                </button>
            </div>
            <div class="px-1">
                <button :disabled="currentbtnDeleteMany" @click="toggleModalDeleteMany"
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm mb-2 disabled:cursor-not-allowed disabled:bg-indigo-300">
                    Delete
                </button>
            </div>
        </div>
        <ModalDeleteMany @emtOnDeleteMany="onDeleteMany" @emtCloseModalDeleteMany="closeModalDeleteMany" :showModalDeleteMany="showModalDeleteMany" :items="itemsSelected"/>
        <ModalInsertOne @emtToggleModalInsertOne="toggleModalInsertOne" :showModalInsertOne="showModalInsertOne"/>
        <ModalDeleteOne @emtOnDeleteOne="onDeleteOne" @emtCloseModalDeleteOne="closeModalDeleteOne" :showModalDeleteOne="showModalDeleteOne" :idItem="idItem"/>
        <ModalUpdateOne @emtSubmitUpdate="onSubmitUpdate" @emtCloseModalUpdateOne="closeModalUpdateOne" :showModalUpdateOne="showModalUpdateOne" :item="item"/>
        <ModalFindOne @emtCloseModalFindOne="closeModalFindOne"  :showModalFindOne="showModalFindOne" :item="item"/>
        <Vue3EasyDataTable buttons-pagination show-index :theme-color="'#f48225'" v-model:items-selected="itemsSelected"
            :headers="headers" :items="items" :rows-items="[10, 25, 50, 100]" :rows-per-page="10">
            <template #item-action="item">
                <div class="flex">
                    <div @click="toggleModalFindOne(item.id)" class="h-7 w-7 p-1 cursor-pointer text-green-500">
                        <EyeIcon />
                    </div>
                    <div @click="toggleModalUpdateOne(item.id)" class="h-7 w-7 p-1 cursor-pointer text-yellow-500">
                        <PencilSquareIcon />
                    </div>
                    <div @click="toggleModalDeleteOne(item.id)" class="h-7 w-7 p-1 cursor-pointer text-red-500">
                        <TrashIcon />
                    </div>
                </div>
                <!-- <div class="flex justify-center">
            </div> -->
            </template>
        </Vue3EasyDataTable>
        items selected:<br />
        {{ itemsSelected }}
        <br>
    </PrivateLayout>
</template>

<script>
import PrivateLayout from '../layouts/PrivateLayout.vue';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import axios from 'axios';
import { TrashIcon, PencilSquareIcon, EyeIcon, XMarkIcon } from "@heroicons/vue/24/outline"
import ModalInsertOne from '../components/vueEasyDataTable/ModalInsertOne.vue';
import ModalDeleteOne from '../components/vueEasyDataTable/ModalDeleteOne.vue';
import ModalUpdateOne from '../components/vueEasyDataTable/ModalUpdateOne.vue';
import ModalFindOne from '../components/vueEasyDataTable/ModalFindOne.vue'
import ModalDeleteMany from '../components/vueEasyDataTable/ModalDeleteMany.vue'


export default {
    components: {
        ModalInsertOne, ModalDeleteMany, ModalFindOne, ModalUpdateOne, ModalDeleteOne, PrivateLayout, Vue3EasyDataTable, TrashIcon, PencilSquareIcon, EyeIcon, XMarkIcon
    },
    created() {
        this.findAllTodo()
    },
    data() {
        return {
            showModalInsertOne: false,
            showModalDeleteOne: false,
            showModalDeleteMany: false,
            showModalUpdateOne: false,
            showModalFindOne:false,
            idItem: null,
            headers: [
                { text: "Name", value: "todo" },
                { text: "Completed", value: "completed" },
                { text: "Action", value: "action" },

            ],
            items: [],
            itemsSelected: [],
            item: {},
            btnDeleteMany: true
        }
    },
    methods: {
        async findAllTodo() {
            const { data } = await axios.get("http://localhost:3000/todos")
            this.items = data
        },
        async findOneTodo(id) {
            const { data } = await axios.get(`http://localhost:3000/todos/${id}`)
            this.item = data
        },
        async updateOneTodo(payload) {
            const { status } = await axios.put(`http://localhost:3000/todos/${payload.id}`,{
                todo: payload.todo,
                completed: payload.completed
            })
            this.findAllTodo()
        },
        async deleteOneTodo(id) {
            const { data } = await axios.delete(`http://localhost:3000/todos/${id}`)
            this.findAllTodo()
        },
        toggleModalInsertOne() {
            this.showModalInsertOne = !this.showModalInsertOne;
        },
        toggleModalDeleteMany() {
            this.showModalDeleteMany = !this.showModalDeleteMany;
        },
        toggleModalDeleteOne(id) {
            this.showModalDeleteOne = !this.showModalDeleteOne;
            this.idItem = null
            this.idItem = id
        },
        toggleModalUpdateOne(id){
            this.showModalUpdateOne = !this.showModalUpdateOne
            this.findOneTodo(id)
        },
        toggleModalFindOne(id){
            this.showModalFindOne = !this.showModalFindOne
            this.findOneTodo(id)
        },
        closeModalFindOne(){
            this.showModalFindOne = !this.showModalFindOne
        },
        closeModalUpdateOne(){
            this.showModalUpdateOne = !this.showModalUpdateOne
        },
        closeModalDeleteOne(){
            this.showModalDeleteOne = !this.showModalDeleteOne
        },
        closeModalDeleteMany(){
            this.showModalDeleteMany = !this.showModalDeleteMany
        },
        onSubmitUpdate(payload){
            this.updateOneTodo(payload)
        },
        onDeleteOne(id){
            this.deleteOneTodo(id)
        },
        onDeleteMany(items){
            console.log(items)
        }
    },
    computed:{
        currentbtnDeleteMany: function () {

            if (this.itemsSelected.length > 0){
                this.btnDeleteMany = false
            }else{
                this.btnDeleteMany = true
            }
            return this.btnDeleteMany
        }
    }
}

</script>