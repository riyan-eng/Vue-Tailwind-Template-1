<template>
    
        <!-- <div class="bg-orange-500"> -->
        <!-- <aside class="w-64 h-screen fixed top-0 overflow-auto" aria-label="Sidebar"> -->
        <aside id="scroll-bar-1" style="border-right: solid 1px rgba(8, 145, 178, 0.1)"
          :class="isShow ? 'w-64 bg-white h-screen fixed overflow-auto' : 'w-64 bg-white h-screen sticky overflow-auto' && expand ? 'w-64' : 'w-18'"
          aria-label="Sidebar">
          <div class="mt-12 py-2">
            <div v-for="menu of listMenu">
              <div class="flex flex-col text-left px-3" style="padding-bottom: 2px;">
                <router-link :to="menu.menuPath"
                  :class="menu.active ? 'hover:bg-gray-400 bg-gray-200 text-blue-500 px-2 py-2 rounded inline-flex' : 'hover:bg-gray-400 px-2 py-2 rounded inline-flex'">
                  <component :is="menu.menuIcon" class="h-5 w-5 text-blue-500"></component>
                  <span v-if="expand" class="ml-4 text-sm capitalize">{{ menu.menuName }}</span>
                </router-link>
              </div>
            </div>
          </div>
        </aside>
      
</template>
<script>
import { HomeIcon, InformationCircleIcon, BookOpenIcon, UserCircleIcon } from '@heroicons/vue/24/outline'

export default{
    components:{
        HomeIcon, InformationCircleIcon, BookOpenIcon, UserCircleIcon
    },
    props:['isShow', 'listMenu', 'expand']
}
</script>