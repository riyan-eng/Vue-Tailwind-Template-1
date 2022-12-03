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
        menuName: 'test 2',
        menuPath: '/text',
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
  <NavbarVue @emitOnExpand="onExpand" @emitOnOpen="onOpen" />
  <div class="flex flex-row" @click="onClose">
    <div :class="isShow ? '' : 'hidden md:flex'">
      <SidebarVue :isShow="isShow" :listMenu="listMenu" :expand="expand" />
    </div>
    <div>
      <main id="scroll-bar-2" class="h-screen overflow-auto ">
        <div class="mt-12 p-4 flex flex-col justify-items-center">
          <router-view>
          </router-view>
        </div>
      </main>
    </div>
  </div>

  <!-- <div class="grid grid-rows-3 grid-flow-col gap-4 min-h-screen">
    <div class="col-span-3 bg-orange-400">02</div>
    <div class="row-span-2 bg-blue-400">01</div>
    <div class="row-span-2 bg-slate-400 col-span-2">
      <router-view>
      </router-view>
    </div>
  </div> -->
</template>

<style scoped>

</style>
