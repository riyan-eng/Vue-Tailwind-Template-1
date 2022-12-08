<template>
    <PrivateLayout>
        <h1>CRUD</h1>
        <div class="block py-6 bg-white">
            <form @submit.prevent="createBarang">
                <div class="form-group mb-6">
                    <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-gray-700">Todo</label>
                    <input v-model="todo" type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInputPassword1" placeholder="Todo" />
                </div>
                <button type="submit"
                    class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Submit
                </button>
            </form>
        </div>
        <table class="table-fixed">
            <thead>
                <tr>
                    <th class="w-10">ID</th>
                    <th>Todo</th>
                    <th style="width: 100px;">Completed</th>
                    <th style="width: 200px;">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, index) in datas" :key="index">
                    <td>{{ data.id }}</td>
                    <td>{{ data.todo }}</td>
                    <td>{{ data.completed }}</td>
                    <td class="flex justify-center">
                        <div class="flex">
                            <div class="h-7 w-7 p-1 cursor-pointer text-green-500">
                                <EyeIcon />
                            </div>
                            <div class="h-7 w-7 p-1 cursor-pointer text-yellow-500">
                                <PencilSquareIcon />
                            </div>
                            <div @click="deleteBarang(data.id)" class="h-7 w-7 p-1 cursor-pointer text-red-500">
                                <TrashIcon />
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

    </PrivateLayout>
</template>

<script>
import axios from "axios";
import { TrashIcon, PencilSquareIcon, EyeIcon } from "@heroicons/vue/24/outline"
import PrivateLayout from '../layouts/PrivateLayout.vue';

export default {
    components: {
        TrashIcon, PencilSquareIcon, EyeIcon, PrivateLayout
    },
    data() {
        return {
            datas: [],
            todo: ''
        };
    },
    created() {
        this.selectBarang();
    },
    methods: {
        selectBarang() {
            axios
                .get("http://localhost:3000/todos")
                .then((response) => (this.datas = response.data))
                .catch((err) => {
                    console.log(err);
                });
        },
        createBarang() {
            axios.post("http://localhost:3000/todos", {
                todo: this.todo,
                completed: false,
                userId: 2
            })
                .then(response => {
                    this.selectBarang()
                    this.todo = ''
                })
                .catch(err => {
                    console.log(err)
                })
        },
        deleteBarang(id) {
            axios.delete(`http://localhost:3000/todos/${id}`)
                .then(response => {
                    this.selectBarang()
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
};
</script>

<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td,
th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>
