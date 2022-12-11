<template>
    <router-link v-for="(menu, index) of menus" :key="index" :to="menu.menuPath"
        class="px-10 py-2 flex items-center text-indigo-700 hover:text-white hover:rounded-md hover:bg-indigo-700 sm:px-4 sm:text-base">
        <component :is="menu.menuIcon" class="h-5 w-5 hover:text-white"></component>
        <div class="ml-6 flex-1 sm:ml-4 text-sm capitalize">{{ menu.menuName }}</div>
    </router-link>
</template>

<script>
import { HomeIcon, InformationCircleIcon, BookOpenIcon, UserCircleIcon, UserIcon } from '@heroicons/vue/24/outline'

export default {
    name: 'SideNav',
    components: {
        HomeIcon, InformationCircleIcon, BookOpenIcon, UserCircleIcon, UserIcon
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
                    menuName: 'access',
                    menuPath: '/access',
                    menuIcon: 'UserCircleIcon',
                    active: false,
                },
                {
                    menuName: 'permission',
                    menuPath: '/permission',
                    menuIcon: 'InformationCircleIcon',
                    active: false,
                },
                {
                    menuName: 'role',
                    menuPath: '/role',
                    menuIcon: 'BookOpenIcon',
                    active: false,
                },
                {
                    menuName: 'role permission',
                    menuPath: '/role_permission',
                    menuIcon: 'BookOpenIcon',
                    active: false,
                },
                {
                    menuName: 'permission access',
                    menuPath: '/permission_access',
                    menuIcon: 'UserIcon',
                    active: false,
                },
                {
                    menuName: 'vue easy data table',
                    menuPath: '/easy_data_table',
                    menuIcon: 'UserIcon',
                    active: false,
                },
                
            ]
        }
    }
}
</script>