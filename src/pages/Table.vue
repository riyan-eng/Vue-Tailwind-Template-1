<template>
    <PrivateLayout>
        <h2>HTML Table</h2>
        <div class="flex justify-between">
            <div class="mb-3">
                <select v-model="perPage" class="form-select appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example">
                    <option selected>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                </select>
            </div>
            <div class="mb-3 xl:w-96">
                <input type="text" class="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  " id="exampleText0" placeholder="Text input" />
            </div>
        </div>
    
        <table class="table-fixed">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Todo</th>
                    <th>Comppleted</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, index) in compData" :key="index">
                    <td>{{ data.id }}</td>
                    <td>{{ data.todo }}</td>
                    <td>{{ data.completed }}</td>
                </tr>
            </tbody>
        </table>
        <div class="items-center justify-items-center grid grid-cols-3 gap-4 content-around mt-4">
            <div>
                <!-- <span class="text-sm text-gray-700 dark:text-gray-400">
                    Showing <span class="font-semibold text-gray-900 dark:text-white">1</span> to <span
                        class="font-semibold text-gray-900 dark:text-white">10</span> of <span
                        class="font-semibold text-gray-900 dark:text-white">100</span> Entries
                </span> -->
            </div>
            <div>
    
                <nav aria-label="Page navigation example">
                    <ul class="flex list-style-none">
                        <li class="page-item disabled"><a
                                class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
                                href="#" tabindex="-1" aria-disabled="true">Prev</a></li>
    
                        <li style="padding-left: 2px; padding-right:2px" class="page-item cursor-pointer"
                            @click="selectPage(page)" v-for="(page, index) in pagination" :key="index"><span
                                :class="(page == activePage ? 'page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md' : 'page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none')">{{
                                        page
                                }}</span>
                        </li>
    
                        <li class="page-item"><a
                                class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <!-- <div class="flex space-x-2 justify-center">
                    <button type="button"
                        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div> -->
            </div>
        </div>
        <div>
            <!-- page aktif: {{ activePage }} -->
            per page: {{ perPage }}
            offset: {{ compOffset }}
        </div>
        <!-- <div>{{ compData }}</div> -->

    </PrivateLayout>
</template>

<script>
import PrivateLayout from '../components/layout/PrivateLayout.vue';
import { ref, reactive, computed } from 'vue'
import axios from 'axios'
export default {
    components:{
        PrivateLayout
    },
    data() {
        return {
            todos: [],
            activePage: 1,
            listPages: [],
            perPage: 10,
            totalPage: 0,
            offset: 0,
            totalData: 30
        }
    },

    computed: {
        pagination() {
            this.listPages = []
            this.activePage = 1
            var pages = Math.ceil(this.totalData / this.perPage)
            this.totalPage = pages
            for (var i = 1; i <= this.totalPage; i++) {
                this.listPages.push(i)
            }
            return this.listPages
        },
        compOffset() {
            this.offset = (this.activePage - 1) * this.perPage;
            return this.offset
        },

        compData() {
            console.log(this.activePage)
            // this.fetchData(this.offset, this.perPage)
            return this.todos
        }
    },
    created() {
        // this.getTotal()
        this.fetchData(this.offset, this.perPage)
    },
    methods: {
        selectPage(page) {
            this.activePage = page
            console.log(this.offset)
            console.log(this.perPage)
            this.fetchData(this.offset, this.perPage)
        },
        fetchData(offset, perPage) {
            axios.get(`http://localhost:3000/todos?_start=${offset}&_limit=${perPage}`)
                .then(response => {
                    // console.log(response)
                    this.todos = response.data
                })
        },
    },


    // offset = page * itemsPerPage + 1

}
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