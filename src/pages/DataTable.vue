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

<template>
    <table class="table-fixed">
        <thead>
            <tr>
                <th width="40">#</th>
                <th v-for="(col, ind) of columns" :key="ind">
                    <div class="flex justify-between">
                        <div>{{ col.text }}</div>
                        <div>
                            <ChevronUpIcon @click="sort = { column: col.name, by: 'desc' }"
                                class="h-3 w-3 text-blue-500" />
                            <ChevronDownIcon class="h-3 w-3 text-blue-500" />
                        </div>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(entry, ind) of filteredEntries" :key="ind">
                <td>{{ entry.id }}</td>
                <td>{{ entry.userId }}</td>
                <td>{{ entry.title }}</td>
                <td>{{ entry.completed }}</td>
            </tr>
        </tbody>
    </table>
    {{ selectPage() }}
    {{ data }}
</template>
<script setup>
import { computed, ref, reactive } from 'vue'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'
import { getTodo } from '../service/todo'

// data
const page = ref(1)
const data = reactive([])
const columns = [
    {
        name: 'userId',
        text: 'User Id'
    },
    {
        name: 'title',
        text: 'Title'
    },
    {
        name: 'completed',
        text: 'Completed'
    }
]

// computed
const filteredEntries = computed(() => {
    var newEntries = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        }
    ]
    return newEntries
})

// function
function selectPage() {
    return 'halo'
}

async function fetchTasks() {
    const res = await fetch('https://dummyjson.com/todos?limit=3&skip=10')
    const data = await res.json()
    return data
}

// fetch('https://dummyjson.com/todos?limit=3&skip=10')
//     .then(res => res.json())
//     .then(console.log);

</script>