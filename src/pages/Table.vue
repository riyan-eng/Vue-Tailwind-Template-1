<template>
    <h2>HTML Table</h2>
    <table class="table-fixed">
        <thead>
            <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
            </tr>
            <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
            </tr>
            <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
            </tr>
        </tbody>
    </table>
    <div class="items-center justify-items-center grid grid-cols-3 gap-4 content-around ...">
        <div>
            <span class="text-sm text-gray-700 dark:text-gray-400">
                Showing <span class="font-semibold text-gray-900 dark:text-white">1</span> to <span
                    class="font-semibold text-gray-900 dark:text-white">10</span> of <span
                    class="font-semibold text-gray-900 dark:text-white">100</span> Entries
            </span>
        </div>
        <div>
            <nav aria-label="Page navigation example">
                <ul class="flex list-style-none">
                    <li class="page-item"><a
                            class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 focus:shadow-none"
                            href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a></li>
                    <li class="page-item"><a
                            class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#">1</a></li>
                    <li class="page-item"><a
                            class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#">2</a></li>
                    <li class="page-item"><a
                            class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#">3</a></li>
                    <li class="page-item"><a
                            class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#">4</a></li>
                    <li class="page-item"><a
                            class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#">5</a></li>
                    <li class="page-item"><a
                            class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#">6</a></li>
                    <li class="page-item"><a
                            class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a></li>
                </ul>
            </nav>
        </div>
        <div>
            <div class="flex space-x-2 justify-center">
                <button type="button"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
        </div>
    </div>



</template>
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