<template>
    <PrivateLayout>
        <div class="flex justify-between items-center my-2">
            <div>
                <h1>Menu</h1>
            </div>
            <div class="flex justify-end">
                <div class="px-1">
                    <button
                        class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm">
                        Delete
                    </button>
                </div>
                <div class="px-1">
                    <button @click="toggleModalInsertOne"
                        class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm">
                        Add
                    </button>
                </div>
            </div>
        </div>
        <ModalInsertOne @emtOnSubmitInsertOne="onSubmitInsertOne" @emtCloseModalInsertOne="closeModalInsertOne"
            :showModalInsertOne="showModalInsertOne" />
        <ModalDeleteOne @emtOnDeleteOne="onDeleteOne" @emtCloseModalDeleteOne="closeModalDeleteOne"
            :showModalDeleteOne="showModalDeleteOne" :idItem="idItem" />
        <hr style="border-top: 3px double #8c8b8b" />
        <Vue3EasyDataTable table-class-name="customize-table" buttons-pagination show-index :theme-color="'#4338ca'"
            v-model:items-selected="itemsSelected" :headers="headers" :items="items" :rows-items="[15, 25, 50, 100]"
            :rows-per-page="15" fixed-checkbox :checkbox-column-width="25" fixed-index :index-column-width="20">
            <template #item-action="item">
                <div class="flex">
                    <div @click="toggleModalFindOne(item.menuId)" class="h-7 w-7 p-1 cursor-pointer text-green-500">
                        <EyeIcon />
                    </div>
                    <div @click="toggleModalUpdateOne(item.menuId)"
                        class="h-7 w-7 p-1 cursor-pointer text-yellow-500">
                        <PencilSquareIcon />
                    </div>
                    <div @click="toggleModalDeleteOne(item.menuId)" class="h-7 w-7 p-1 cursor-pointer text-red-500">
                        <TrashIcon />
                    </div>
                </div>
                <!-- <div class="flex justify-center">
            </div> -->
            </template>
        </Vue3EasyDataTable>
    </PrivateLayout>
</template>
<script>
import PrivateLayout from "../layouts/PrivateLayout.vue";
import Vue3EasyDataTable from "vue3-easy-data-table";
import axios from "axios";
import {
    TrashIcon,
    PencilSquareIcon,
    EyeIcon,
    ChevronRightIcon,
} from "@heroicons/vue/24/outline";
import ModalInsertOne from "../components/menu/ModalInsertOne.vue";
import ModalDeleteOne from "../components/menu/ModalDeleteOne.vue";

export default {
    components: {
        PrivateLayout,
        ModalInsertOne,
        ModalDeleteOne,
        TrashIcon,
        PencilSquareIcon,
        EyeIcon,
        Vue3EasyDataTable,
        ChevronRightIcon,
    },
    created() {
        this.findAllMenu();
    },
    data() {
        return {
            idItem: null,
            headers: [
                { text: "Name", value: "menuName" },
                { text: "Status", value: "isActive", width: 50 },
                { text: "Action", value: "action", width: 80 },
            ],
            items: [],
            itemsSelected: [],
            item: {},
            btnDeleteMany: true,
            showModalInsertOne: false,
            showModalDeleteOne: false
        };
    },
    methods: {
        async findAllMenu() {
            const { data } = await axios.get("/manajemen/menu/findAll", {
                headers: {
                    Authorization: `Bearer ${this.$store.getters.user.accessToken}`,
                },
            });
            this.items = data.data;
        },

        async insertOneMenu(payload) {
            const { data } = await axios.post("/manajemen/menu/insertOne", {
                'menuName': payload.menuName,
            }, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.user.accessToken}`
                }
            })
            this.findAllMenu()
        },
        toggleModalInsertOne() {
            this.showModalInsertOne = !this.showModalInsertOne;
        },
        onSubmitInsertOne(payload) {
            this.insertOneMenu(payload)
            console.log(payload)
        },
        closeModalInsertOne() {
            this.showModalInsertOne = !this.showModalInsertOne
        },

        async deleteOneMenu(id) {
            const { data } = await axios.delete(`/manajemen/menu/deleteOne?menuId=${id}`, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.user.accessToken}`
                }
            })
            this.findAllMenu()
        },
        toggleModalDeleteOne(id) {
            this.showModalDeleteOne = !this.showModalDeleteOne;
            this.idItem = null
            this.idItem = id
        },
        onDeleteOne(id) {
            console.log(id)
            this.deleteOneMenu(id)
        },
        closeModalDeleteOne() {
            this.showModalDeleteOne = !this.showModalDeleteOne
        },
    },
};
</script>
<style scoped>
.customize-table {
    --easy-table-border: 0px;
}
</style>
