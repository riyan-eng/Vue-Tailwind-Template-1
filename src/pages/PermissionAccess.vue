<template>
    <PrivateLayout>
        <div class="flex justify-between items-center my-2">
            <div>
                <h1>Permission Access</h1>
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
            :showModalInsertOne="showModalInsertOne" :access="access" :permissions="permissions" />
        <ModalDeleteOne @emtOnDeleteOne="onDeleteOne" @emtCloseModalDeleteOne="closeModalDeleteOne"
            :showModalDeleteOne="showModalDeleteOne" :idItem="idItem" />
        <hr style="border-top: 3px double #8c8b8b" />
        <Vue3EasyDataTable table-class-name="customize-table" buttons-pagination show-index :theme-color="'#f48225'"
            v-model:items-selected="itemsSelected" :headers="headers" :items="items" :rows-items="[15, 25, 50, 100]"
            :rows-per-page="15">
            <template #item-action="item">
                <div class="flex">
                    <div @click="toggleModalFindOne(item.permissionAccessId)" class="h-7 w-7 p-1 cursor-pointer text-green-500">
                        <EyeIcon />
                    </div>
                    <div @click="toggleModalUpdateOne(item.permissionAccessId)"
                        class="h-7 w-7 p-1 cursor-pointer text-yellow-500">
                        <PencilSquareIcon />
                    </div>
                    <div @click="toggleModalDeleteOne(item.permissionAccessId)" class="h-7 w-7 p-1 cursor-pointer text-red-500">
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
import PrivateLayout from '../layouts/PrivateLayout.vue';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import axios from 'axios';
import { TrashIcon, PencilSquareIcon, EyeIcon, XMarkIcon } from "@heroicons/vue/24/outline"
import ModalInsertOne from '../components/permissionAccess/ModalInsertOne.vue';
import ModalDeleteOne from '../components/permissionAccess/ModalDeleteOne.vue'

export default {
    components: {
        PrivateLayout, ModalInsertOne, ModalDeleteOne, TrashIcon, PencilSquareIcon, EyeIcon, Vue3EasyDataTable
    },
    created() {
        this.findAllPermissionAccess()
    },
    data() {
        return {
            idItem: null,
            headers: [
                { text: 'Permission Name', value: "permissionName" },
                { text: 'Path', value: "permissionPath" },
                { text: "Name", value: "accessName" },
                { text: "Status", value: "isActive" },
                { text: "Action", value: "action" },

            ],
            items: [],
            itemsSelected: [],
            item: {},
            btnDeleteMany: true,
            showModalInsertOne: false,
            showModalDeleteOne: false,
            permissions: [],
            access: []
        }
    },
    methods: {
        async insertOnePermissionAccess(payload) {
            const { data } = await axios.post("/manajemen/permissionAccess/insertOne", {
                'accessId': payload.accessId,
                'permissionId': payload.permissionId
            }, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.user.accessToken}`
                }
            })
            this.findAllPermissionAccess()
        },
        async findAllPermissionAccess() {
            const { data } = await axios.get("/manajemen/permissionAccess/findAll", {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.user.accessToken}`
                }
            })
            this.items = data.data
        },
        async findAllPermission() {
            const { data } = await axios.get("/manajemen/permission/findAll", {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.user.accessToken}`
                }
            })
            this.permissions = data.data
        },
        async findAllAccess() {
            const { data } = await axios.get("/manajemen/access/findAll", {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.user.accessToken}`
                }
            })
            this.access = data.data
        },
        toggleModalInsertOne() {
            this.findAllAccess()
            this.findAllPermission()
            this.showModalInsertOne = !this.showModalInsertOne;
        },
        onSubmitInsertOne(payload) {
            this.insertOnePermissionAccess(payload)
            console.log(payload)
        },
        closeModalInsertOne() {
            this.showModalInsertOne = !this.showModalInsertOne
        },

        async deleteOnePermissionAccess(id) {
            const { data } = await axios.delete(`/manajemen/permissionAccess/deleteOne?permissionAccessId=${id}`, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.user.accessToken}`
                }
            })
            this.findAllPermissionAccess()
        },
        toggleModalDeleteOne(id) {
            this.showModalDeleteOne = !this.showModalDeleteOne;
            this.idItem = null
            this.idItem = id
        },
        onDeleteOne(id) {
            console.log(id)
            this.deleteOnePermissionAccess(id)
        },
        closeModalDeleteOne() {
            this.showModalDeleteOne = !this.showModalDeleteOne
        },
    }
}
</script>
<style scoped>
.customize-table {
    --easy-table-border: 0px;
}
</style>
