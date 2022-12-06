<template>
    <router-link v-for="(menu, index) of menus" :key="index" :to="menu.menuPath"
        class="px-10 py-2 flex items-center text-xl text-cyan-600 hover:text-orange-500 sm:px-4 sm:text-base">
        <component :is="menu.menuIcon" class="h-5 w-5 text-cyan-500"></component>
        <div class="ml-6 flex-1 sm:ml-4 capitalize">{{ menu.menuName }}</div>
    </router-link>
</template>

<script>
import { HomeIcon, InformationCircleIcon, BookOpenIcon, UserCircleIcon } from '@heroicons/vue/24/outline'

export default {
    name: 'SideNav',
    components: {
        HomeIcon, InformationCircleIcon, BookOpenIcon, UserCircleIcon
    },
    data() {
        return {
            menus: [
                {
                    menuName: 'dashboard',
                    menuPath: '/',
                    menuIcon: 'HomeIcon',
                    active: false,
                },
                {
                    menuName: 'text',
                    menuPath: '/text',
                    menuIcon: 'UserCircleIcon',
                    active: false,
                },
                {
                    menuName: 'table',
                    menuPath: '/table',
                    menuIcon: 'InformationCircleIcon',
                    active: false,
                },
                {
                    menuName: 'data table',
                    menuPath: '/data_table',
                    menuIcon: 'BookOpenIcon',
                    active: false,
                },
                {
                    menuName: 'crud',
                    menuPath: '/crud',
                    menuIcon: 'BookOpenIcon',
                    active: false,
                },
            ]
        }
    }
}
</script>