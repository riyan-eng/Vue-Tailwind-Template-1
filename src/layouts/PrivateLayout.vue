<script>
import SideNav from './SideNav.vue'
import { ChevronDownIcon } from "@heroicons/vue/24/outline"


export default {
    components: {
        SideNav, ChevronDownIcon
    },

    data() {
        return {
            isNotificationsOpen: false,
            isMenuOpen: false,
            breadcrumbList: this.$route.meta.breadcrumb
        }
    },
    methods: {
        toggleNotifications() {
            this.$refs.notifications.scrollTo(0, 0)
            this.isNotificationsOpen = !this.isNotificationsOpen;
        },
        toggleMenu() {
            this.$refs.menu.scrollTo(0, 0)
            this.isMenuOpen = !this.isMenuOpen;
        },
        logout() {
            this.$store.dispatch('signOut')
            this.$router.push('/login')
        }
    },
    watch: {
        isNotificationsOpen: isOpen => {
            if (isOpen) {
                document.body.style.setProperty("overflow", "hidden");
            } else {
                document.body.style.removeProperty("overflow");
            }
        },
        isMenuOpen: isOpen => {
            if (isOpen) {
                document.body.style.setProperty("overflow", "hidden");
                document.body.style.setProperty("position", "relative");
            } else {
                document.body.style.removeProperty("overflow");
                document.body.style.removeProperty("position");
            }
        }
    }
}
</script>

<template>
    <div id="app">
        <nav
            class="fixed top-0 inset-x-0 z-50 h-12 text-white bg-indigo-800 font-medium flex justify-between items-center shadow-lg">
            <!-- Extract: MobileMenu Vue component -->
            <div class="w-10 h-10 flex justify-center items-center text-gray-600 sm:hidden">
                <button class="p-1 hover:text-white" :class="{ 'text-white': isMenuOpen }" @click="toggleMenu">
                    <svg class="fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path v-if="!isMenuOpen"
                            d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
                        <path v-else
                            d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
                    </svg>
                </button>
                <transition enter-active-class="transition duration-200 ease-in-out transform"
                    enter-class="-translate-x-full opacity-0"
                    leave-active-class="transition duration-200 ease-in-out transform"
                    leave-to-class="-translate-x-full opacity-0">
                    <div v-show="isMenuOpen" class="fixed inset-0 h-screen" @click.self="toggleMenu">
                        <div ref="menu" class="mt-16 absolute inset-0 z-40 overflow-y-auto">
                            <div class="py-6 w-full min-h-full bg-gray-700">
                                <!-- Extract: user_info blade partial -->
                                <div class="px-6 pb-6 flex items-center border-b border-gray-100 sm:flex-col">
                                    <div class="hidden px-3 text-white text-base rounded-full border sm:block">Username
                                    </div>
                                    <div
                                        class="mr-auto text-white flex-shrink-0 flex justify-center items-center rounded-full border-4 sm:mt-4 sm:mx-auto">
                                        <svg class="fill-current w-24 h-24 sm:w-32 sm:h-32" viewBox="0 0 24 24">
                                            <path
                                                d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z" />
                                        </svg>
                                    </div>
                                    <div class="ml-4 flex-1 flex flex-col sm:mt-4 sm:ml-0 sm:items-center">
                                        <div class="text-white text-2xl sm:hidden">Username</div>
                                        <div class="text-yellow-500 text-xl sm:text-sm">10.000 BET</div>
                                    </div>
                                </div>

                                <!-- Extract: menu_items -->
                                <div class="mt-4">
                                    <!-- TODO: add group here and group-hover to the shevron icon to show it only when the group is hovered -->
                                    <a v-for="i in Array(14).keys()" href="#"
                                        class="px-10 py-2 flex items-center text-xl text-gray-100 hover:text-orange-500 sm:px-4 sm:text-base">
                                        <div>
                                            <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 72 71">
                                                <path
                                                    d="M28.559 5.848c2.665-6.75 12.217-6.75 14.882 0l.691 1.751a8 8 0 009.784 4.712l1.8-.551c6.938-2.125 12.895 5.343 9.279 11.635l-.938 1.632a8 8 0 002.416 10.587l1.553 1.063c5.988 4.1 3.862 13.413-3.311 14.51l-1.86.284a8 8 0 00-6.771 8.49l.136 1.877c.528 7.238-8.079 11.382-13.408 6.457l-1.382-1.277a8 8 0 00-10.86 0l-1.382 1.277c-5.33 4.925-13.936.78-13.408-6.457l.136-1.877a8 8 0 00-6.77-8.49l-1.86-.285c-7.174-1.096-9.3-10.409-3.312-14.509l1.553-1.063a8 8 0 002.416-10.587l-.938-1.632c-3.616-6.292 2.34-13.76 9.28-11.635l1.799.55a8 8 0 009.784-4.71l.69-1.752z"
                                                    fill="none" />
                                            </svg>
                                        </div>
                                        <div class="ml-6 flex-1 sm:ml-4">Item #{{ i + 1 }}</div>
                                        <div>
                                            <svg class="fill-current w-6 h-6 hover:block"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M9.3 8.7a1 1 0 011.4-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.4-1.4l3.29-3.3-3.3-3.3z" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>

            <div class="p-4 sm:w-64">
                <a href="#" class="block w-7 h-7 mx-auto text-orange-500 hover:text-yellow-500">
                    <svg class="fill-current w-7 h-7" viewBox="0 0 24 24">
                        <path
                            d="M11.83,1.73C8.43,1.79 6.23,3.32 6.23,3.32C5.95,3.5 5.88,3.91 6.07,4.19C6.27,4.5 6.66,4.55 6.96,4.34C6.96,4.34 11.27,1.15 17.46,4.38C17.75,4.55 18.14,4.45 18.31,4.15C18.5,3.85 18.37,3.47 18.03,3.28C16.36,2.4 14.78,1.96 13.36,1.8C12.83,1.74 12.32,1.72 11.83,1.73M12.22,4.34C6.26,4.26 3.41,9.05 3.41,9.05C3.22,9.34 3.3,9.72 3.58,9.91C3.87,10.1 4.26,10 4.5,9.68C4.5,9.68 6.92,5.5 12.2,5.59C17.5,5.66 19.82,9.65 19.82,9.65C20,9.94 20.38,10.04 20.68,9.87C21,9.69 21.07,9.31 20.9,9C20.9,9 18.15,4.42 12.22,4.34M11.5,6.82C9.82,6.94 8.21,7.55 7,8.56C4.62,10.53 3.1,14.14 4.77,19C4.88,19.33 5.24,19.5 5.57,19.39C5.89,19.28 6.07,18.92 5.95,18.6V18.6C4.41,14.13 5.78,11.2 7.8,9.5C9.77,7.89 13.25,7.5 15.84,9.1C17.11,9.9 18.1,11.28 18.6,12.64C19.11,14 19.08,15.32 18.67,15.94C18.25,16.59 17.4,16.83 16.65,16.64C15.9,16.45 15.29,15.91 15.26,14.77C15.23,13.06 13.89,12 12.5,11.84C11.16,11.68 9.61,12.4 9.21,14C8.45,16.92 10.36,21.07 14.78,22.45C15.11,22.55 15.46,22.37 15.57,22.04C15.67,21.71 15.5,21.35 15.15,21.25C11.32,20.06 9.87,16.43 10.42,14.29C10.66,13.33 11.5,13 12.38,13.08C13.25,13.18 14,13.7 14,14.79C14.05,16.43 15.12,17.54 16.34,17.85C17.56,18.16 18.97,17.77 19.72,16.62C20.5,15.45 20.37,13.8 19.78,12.21C19.18,10.61 18.07,9.03 16.5,8.04C14.96,7.08 13.19,6.7 11.5,6.82M11.86,9.25V9.26C10.08,9.32 8.3,10.24 7.28,12.18C5.96,14.67 6.56,17.21 7.44,19.04C8.33,20.88 9.54,22.1 9.54,22.1C9.78,22.35 10.17,22.35 10.42,22.11C10.67,21.87 10.67,21.5 10.43,21.23C10.43,21.23 9.36,20.13 8.57,18.5C7.78,16.87 7.3,14.81 8.38,12.77C9.5,10.67 11.5,10.16 13.26,10.67C15.04,11.19 16.53,12.74 16.5,15.03C16.46,15.38 16.71,15.68 17.06,15.7C17.4,15.73 17.7,15.47 17.73,15.06C17.79,12.2 15.87,10.13 13.61,9.47C13.04,9.31 12.45,9.23 11.86,9.25M12.08,14.25C11.73,14.26 11.46,14.55 11.47,14.89C11.47,14.89 11.5,16.37 12.31,17.8C13.15,19.23 14.93,20.59 18.03,20.3C18.37,20.28 18.64,20 18.62,19.64C18.6,19.29 18.3,19.03 17.91,19.06C15.19,19.31 14.04,18.28 13.39,17.17C12.74,16.07 12.72,14.88 12.72,14.88C12.72,14.53 12.44,14.25 12.08,14.25Z">
                        </path>
                    </svg>
                </a>
            </div>

            <!-- Extract: Notifications Vue component -->
            <div class="w-40 h-12 flex justify-end items-center text-gray-600 mr-2">
                <button
                    class="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-800 rounded text-white px-1 py-1 text-xs sm:text-sm"
                    :class="{ 'text-white': isNotificationsOpen }" @click="toggleNotifications">
                    <!-- <svg class="fill-current w-7 h-7" viewBox="0 0 24 24">
                        <path
                            d="M11.5,22C11.64,22 11.77,22 11.9,21.96C12.55,21.82 13.09,21.38 13.34,20.78C13.44,20.54 13.5,20.27 13.5,20H9.5A2,2 0 0,0 11.5,22M18,10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18L18,16M19.97,10H21.97C21.82,6.79 20.24,3.97 17.85,2.15L16.42,3.58C18.46,5 19.82,7.35 19.97,10M6.58,3.58L5.15,2.15C2.76,3.97 1.18,6.79 1,10H3C3.18,7.35 4.54,5 6.58,3.58Z">
                        </path>
                    </svg> -->
                    <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown"
                        data-dropdown-placement="bottom-start" class="w-6 h-6 rounded-full cursor-pointer"
                        src="https://kincirimage.s3-ap-southeast-1.amazonaws.com/production/2021-09/16by9/fakta-baryon-mode-naruto-anime-boruto~5a63cc0b-cfab-41f7-9cce-a1323c321d93.jpg"
                        alt="User dropdown">
                    <ChevronDownIcon class="w-4 h-4 ml-1" />
                </button>

                <transition enter-active-class="transition duration-200 ease-in-out" enter-class="opacity-0">
                    <div v-show="isNotificationsOpen" class="absolute inset-0 z-30 min-h-screen  focus:outline-none"
                        @click="toggleNotifications" tabindex="-1">
                    </div>
                </transition>

                <transition enter-active-class="transition duration-200 ease-in-out transform"
                    enter-class="translate-x-full" leave-active-class="transition duration-200 ease-in-out transform"
                    leave-to-class="translate-x-full">
                    <div v-show="isNotificationsOpen" class="pt-12 fixed inset-0 h-full" @click="toggleNotifications">
                        <div ref="notifications"
                            class="mt-14 mr-2 absolute right-0 inset-y-0 w-64 max-w-sm overflow-y-auto">
                            <div class="relative rounded z-40 py-2 text-gray-700 bg-white border  shadow">
                                <div class="py-3 px-4 text-sm text-gray-900 dark:text-white hover:bg-gray-100">
                                    <router-link to="/profile" >
                                        <div>Bonnie Green</div>
                                        <div class="font-medium truncate">name@flowbite.com</div>
                                    </router-link>
                                </div>
                                <hr>
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="avatarButton">
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <hr>
                                <div class="py-1">
                                    <div @click="logout"
                                        class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer">Sign
                                        out</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </nav>

        <aside class="hidden pt-12 w-64 text-white bg-[url('/src/assets/bg-11.jpg')] fixed inset-y-0 overflow-x-hidden overflow-y-auto sm:block"
            style="border-right: solid 1px rgba(8, 145, 178, 0.1)">
            <div class="p-2 min-h-full">
                <div class="">
                    <SideNav />
                </div>
            </div>
        </aside>

        <main class="pt-12 sm:pl-64">
            <div class="p-4">
                <nav class="bg-gray-100 py-1 rounded mb-2">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li aria-current="page" v-for="(breadcrumb, index) in breadcrumbList" :key="index">
                            <div class="flex items-center">
                                <!-- <ChevronRightIcon class="h-4 w-4" /> -->
                                <span style="font-size:small" class="ml-1 text-gray-500 md:ml-2 dark:text-gray-400">{{breadcrumb.name}}</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <hr>
                <slot></slot>
            </div>
        </main>

        <NotificationGroup group="foo">
            <div class="fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none">
                <div class="w-full max-w-sm">
                    <Notification v-slot="{ notifications }" enter="transform ease-out duration-300 transition"
                        enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
                        enter-to="translate-y-0 opacity-100 sm:translate-x-0" leave="transition ease-in duration-500"
                        leave-from="opacity-100" leave-to="opacity-0" move="transition duration-500"
                        move-delay="delay-300">
                        <div v-for="notification in notifications" :key="notification.id">
                            <div v-if="notification.type === 'info'"
                                class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md">
                                <div class="flex items-center justify-center w-12 bg-blue-500">
                                    <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
                                    </svg>
                                </div>

                                <div class="px-4 py-2 -mx-3">
                                    <div class="mx-3">
                                        <span class="font-semibold text-blue-500">{{ notification.title }}</span>
                                        <p class="text-sm text-gray-600">T{{ notification.text }}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
                                v-if="notification.type === 'warning'">
                                <div class="flex items-center justify-center w-12 bg-yellow-500">
                                    <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
                                    </svg>
                                </div>

                                <div class="px-4 py-2 -mx-3">
                                    <div class="mx-3">
                                        <span class="font-semibold text-yellow-500">{{ notification.title }}</span>
                                        <p class="text-sm text-gray-600">{{ notification.text }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Notification>
                </div>
            </div>
        </NotificationGroup>
    </div>
</template>

<style scoped>
.h-screen {
    height: 100vh;
    height: -webkit-fill-available;
}

.min-h-screen {
    min-height: 100vh;
    min-height: -webkit-fill-available;
}

.max-h-screen {
    max-height: 100vh;
    max-height: -webkit-fill-available;
}
</style>
