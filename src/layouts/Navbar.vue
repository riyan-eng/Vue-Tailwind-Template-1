<template>
    <nav class="fixed bg-cyan-600 shadow-md z-50 top-0 w-full px-4 py-2 flex justify-between items-center">
        <div class="inline-flex items-center">
          <div @click="$emit('emitOnExpand')" class="hover:bg-gray-400 p-1 rounded-full hidden md:block" style="cursor: pointer">
            <Bars3Icon class="h-5 w-5 text-white" />
          </div>
          <div @click="$emit('emitOnOpen')" class="hover:bg-gray-400 p-1 rounded-full md:hidden" style="cursor: pointer">
            <Bars3Icon class="h-5 w-5 text-white" />
          </div>
          <router-link to="/" class="ml-3 text-2xl text-white">My App</router-link>
        </div>
        <div>
          <div>
            <img class="w-8 h-8 rounded-full border border-white cursor-pointer" src="src/assets/vue.svg"
              alt="Rounded avatar" />
          </div>
        </div>
      </nav>
</template>

<script>
import { Bars3Icon} from '@heroicons/vue/24/outline'
export default{
    components:{
        Bars3Icon
    }
}
</script>