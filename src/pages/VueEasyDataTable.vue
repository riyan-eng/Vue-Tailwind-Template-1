<template>
    <PrivateLayout>
        <button @click="toggleModalInsertOne"
            class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm mb-2">
            Open large modal
        </button>
        <ModalInsertOne @emtToggleModalInsertOne="toggleModalInsertOne" :showModalInsertOne="showModalInsertOne"/>
        <ModalDeleteOne @emtToggleModalDeleteOne="toggleModalDeleteOne" :showModalDeleteOne="showModalDeleteOne" :idItem="idItem"/>
        <ModalUpdateOne @emtToggleModalUpdateOne="toggleModalUpdateOne" :showModalUpdateOne="showModalUpdateOne" :idItem="idItem"/>
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

export default {
    components: {
        ModalInsertOne, ModalFindOne, ModalUpdateOne, ModalDeleteOne, PrivateLayout, Vue3EasyDataTable, TrashIcon, PencilSquareIcon, EyeIcon, XMarkIcon
    },
    created() {
        this.findTodo()
    },
    data() {
        return {
            showModalInsertOne: false,
            showModalDeleteOne: false,
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
            item: {}
        }
    },
    methods: {
        async findTodo() {
            const { data } = await axios.get("http://localhost:3000/todos")
            this.items = data
        },
        async findOneTodo(id) {
            const { data } = await axios.get(`http://localhost:3000/todos/${id}`)
            this.item = data
        },
        toggleModalInsertOne() {
            this.showModalInsertOne = !this.showModalInsertOne;
        },
        toggleModalDeleteOne(id) {
            this.showModalDeleteOne = !this.showModalDeleteOne;
            this.idItem = null
            this.idItem = id
        },
        toggleModalUpdateOne(id){
            this.showModalUpdateOne = !this.showModalUpdateOne
            this.idItem = null
            this.idItem = id
        },
        toggleModalFindOne(id){
            this.showModalFindOne = !this.showModalFindOne
            this.findOneTodo(id)
        },
        closeModalFindOne(){
            this.showModalFindOne = !this.showModalFindOne
        }
    },
}

</script>