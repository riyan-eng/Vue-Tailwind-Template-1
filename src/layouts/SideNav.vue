<template>
    <router-link v-for="(menu, index) of listMenu" :key="index" :to="menu.menuPath"
        class="px-10 py-2 flex items-center   hover:rounded-md hover:bg-gray-800 sm:px-4 sm:text-base" :class="menu.active? 'text-indigo-400' : 'text-gray-200'">
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
                    menuName: 'menu',
                    menuPath: '/menu',
                    menuIcon: 'UserIcon',
                    active: false,
                },
                {
                    menuName: 'menu permission access',
                    menuPath: '/menu_permission_access',
                    menuIcon: 'UserIcon',
                    active: false,
                },
                {
                    menuName: 'role permission access',
                    menuPath: '/role_permission_access',
                    menuIcon: 'UserIcon',
                    active: false,
                },
                // {
                //     menuName: 'vue easy data table',
                //     menuPath: '/easy_data_table',
                //     menuIcon: 'UserIcon',
                //     active: false,
                // },

            ]
        }
    },
    computed: {
        listMenu: function () {
            for (var menu of this.menus) {
                if (menu.menuPath == this.$route.path) {
                    menu.active = true
                } else {
                    menu.active = false
                }
            }
            return this.menus
        }
    }
}
</script>