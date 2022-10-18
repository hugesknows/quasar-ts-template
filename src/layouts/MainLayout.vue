<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title align="center">
          Title
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer"/>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay behavior="mobile" bordered>
      <!-- drawer content -->
      put <br> things <br> here
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>

</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';


export default defineComponent({
  name: 'MainLayout',


  setup() {
    const rightDrawerOpen = ref(false)

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
});
</script>
