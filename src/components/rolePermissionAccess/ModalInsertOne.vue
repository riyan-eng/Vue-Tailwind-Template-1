<template>
    <div v-if="showModalInsertOne"
        class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
        <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                <div class="w-full flex justify-start text-gray-600 mb-3">
                    <DocumentPlusIcon class="w-14" />
                </div>
                <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Insert Role Permission Access
                </h1>
                <form @submit.prevent="onSubmit">

                    <label for="role" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                        Menu</label>
                    <select v-model="item.roleId"
                        class="mb-5 mt-2 bg-white text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border">
                        <option value="" selected>Choose a role</option>
                        <option v-for="(role, index) in roles" :key="index" :value="role.roleId">
                            <span>{{role.roleName}}</span>
                        </option>
                    </select>
                    <label for="name" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                        Permission</label>
                    <select v-model="item.permissionAccessId"
                        class="mb-5 mt-2 bg-white text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border">
                        <option value="" selected>Choose a permission</option>
                        <option v-for="(permissionAccess, index) in permissionsAccess" :key="index" :value="permissionAccess.permissionAccessId">
                            <span>{{permissionAccess.accessName}}</span>
                            <span> - </span>
                            <span>{{permissionAccess.permissionName}}</span>
                        </option>
                    </select>
                    <div class="flex items-center justify-start w-full">
                        <button type="submit"
                            class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>
                        <button
                            class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                            @click="closeModalInsertOne">Cancel</button>
                    </div>
                    
                </form>
                <button
                    class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                    @click="closeModalInsertOne" aria-label="close modal" role="button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20"
                        height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div v-if="showModalInsertOne" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
</template>

<script>
import { DocumentPlusIcon } from "@heroicons/vue/24/outline"

export default {
    components: {
        DocumentPlusIcon
    },
    data() {
        return {
            item: {
                roleId: '',
                permissionAccessId: ''
            },
        }
    },
    emits: ["emtCloseModalInsertOne", "emtOnSubmitInsertOne"],
    props: ['showModalInsertOne', 'roles', 'permissionsAccess'],
    methods: {
        closeModalInsertOne() {
            this.$emit('emtCloseModalInsertOne')
        },
        onSubmit() {
            if (this.item.permissionAccessId === '' && this.item.roleId === ''){
                alert('tidak boleh kosing')
                return
            }
            this.$emit('emtOnSubmitInsertOne', this.item)
            this.item.accessId = ''
            this.item.permissionAccessId = ''
            this.closeModalInsertOne()
        },
        
    }
}
</script>