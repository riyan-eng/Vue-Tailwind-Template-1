<template>
    <div v-if="showModalFindOne"
        class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
        <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                <div class="w-full flex justify-start text-gray-600 mb-3">
                    <EyeIcon class="w-14"/>
                </div>
                <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Detail
                </h1>
                <label for="name" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Owner
                    Name</label>
                <input id="name" v-model="item.todo" readonly
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="James" />
                
                <div class="flex items-center mb-4">
                    <input disabled v-model="item.completed" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="completed" class="ml-2 text-gray-800 text-sm font-bold leading-tight tracking-normal">Completed</label>
                </div>
                
                <button
                    class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                    @click="closeModalFindOne" aria-label="close modal" role="button">
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
    <div v-if="showModalFindOne" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
</template>

<script>
import { EyeIcon } from "@heroicons/vue/24/outline"


export default {
    components:{
        EyeIcon
    },
    emits: ["emtCloseModalFindOne"],
    props: ['showModalFindOne', 'item'],
    methods: {
        closeModalFindOne() {
            this.$emit('emtCloseModalFindOne')
        }
    },
}
</script>