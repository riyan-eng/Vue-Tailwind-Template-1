<template>
    <PrivateLayout>
        <h1>Ini Role Permission</h1>
        <Vue3EasyDataTable buttons-pagination show-index :theme-color="'#f48225'" v-model:items-selected="itemsSelected"
            :headers="headers" :items="items" :rows-items="[10, 25, 50, 100]" :rows-per-page="10">
            <template #item-action="item">
                <div class="flex">
                    <div @click="toggleModalFindOne(item.accessId)" class="h-7 w-7 p-1 cursor-pointer text-green-500">
                        <EyeIcon />
                    </div>
                    <div @click="toggleModalUpdateOne(item.accessId)" class="h-7 w-7 p-1 cursor-pointer text-yellow-500">
                        <PencilSquareIcon />
                    </div>
                    <div @click="toggleModalDeleteOne(item.accessId)" class="h-7 w-7 p-1 cursor-pointer text-red-500">
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

export default{
    components:{
        PrivateLayout, TrashIcon, PencilSquareIcon, EyeIcon, Vue3EasyDataTable
    },
    created() {
        this.findAllRolePermission()
    },
    data(){
        return{
            idItem: null,
            headers: [
                { text: "Role", value: "roleName" },
                { text: "Permission", value: "permissionName" },
                { text: "Status", value: "isActive" },
                { text: "Action", value: "action" },

            ],
            items: [],
            itemsSelected: [],
            item: {},
            btnDeleteMany: true
        }
    },
    methods:{
        async findAllRolePermission(){
            const { data } = await axios.get("/manajemen/rolePermission/findAll",{
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.user.accessToken}`
                }
            })
            this.items = data.data
        }
    }
}
</script>