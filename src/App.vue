<script>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import NavbarVue from './components/layout/Navbar.vue'
import SidebarVue from './components/layout/Sidebar.vue'

export default {
  components: {
    NavbarVue, SidebarVue
  },
  setup() {
    const router = useRouter()

    const isShow = ref(false)
    const expand = ref(true)
    const menus = reactive([
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
    ])

    const listMenu = computed(() => {
      for (var menu of menus) {
        if (menu.menuPath == router.currentRoute.value.path) {
          menu.active = true
        } else {
          menu.active = false
        }
      }
      return menus
    })

    function onOpen() {
      isShow.value = !isShow.value
      expand.value = true
    }

    function onClose() {
      isShow.value = false
    }

    function onExpand() {
      expand.value = !expand.value
    }
    return {
      onExpand, onOpen, onClose, listMenu, expand, isShow
    }
  }
}
</script>

<template>
  <div>
    <NavbarVue @emitOnExpand="onExpand" @emitOnOpen="onOpen" />
    <div class="flex flex-row bg-white h-screen" @click="onClose">
      <div :class="isShow ? '' : 'hidden md:flex'">
        <SidebarVue :isShow="isShow" :listMenu="listMenu" :expand="expand" />
      </div>
  
      <div>
        <main id="scroll-bar-2" class="h-screen overflow-auto mt-10">
          <div class="p-4 flex flex-col justify-items-center">
            <router-view>
            </router-view>
          </div>
        </main>
      </div>
    </div>

  </div>
  <!-- <div class="flex flex-col">
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
  <div class="flex">
    <aside class="h-screen sticky top-0">
      <SidebarVue :isShow="isShow" :listMenu="listMenu" :expand="expand" />
    </aside>

    <main>
      <router-view>
      </router-view>
    </main>
  </div> -->

  <!-- <div class="grid grid-rows-3 grid-flow-col h-screen">
    <div class="col-span-3 bg-cyan-600 shadow-md sticky">
      <header>
        <NavbarVue @emitOnExpand="onExpand" @emitOnOpen="onOpen" />
      </header>
    </div>
    <div class="row-span-2 bg-blue-400 w-64">
      <aside class="sticky top-0">
        <SidebarVue :isShow="isShow" :listMenu="listMenu" :expand="expand" />
      </aside>
    </div>
    <div class="row-span-2 bg-slate-400 col-span-2 overflow-auto">
      <router-view>
      </router-view>
    </div>
  </div> -->

  <!-- <div class="flex w-screen min-h-screen flex-col bg-slate-400 grow">
    <div class="flex h-16 w-screen bg-red-400">Title</div>
    <div class="flex h-auto w-screen flex-row grow">
      <div class="flex w-64 bg-yellow-300">Nav</div>
      <div class="flex w-full bg-blue-400">Content</div>
    </div>
    <div class="flex h-32 w-screen bg-green-400">Footer</div>
  </div> -->




</template>

<style scoped>

</style>
