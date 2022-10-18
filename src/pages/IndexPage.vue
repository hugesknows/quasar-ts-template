<template>
  <q-page class="row items-center justify-evenly">
<q-btn label="Do GET Request" @click="getExample"/>
  </q-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {getRequestNormal} from 'src/service/template/example-service';
import {showSuccessMessage} from 'src/util/alert-message';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {};
  },
  methods: {
    async getExample() {
      const res = await getRequestNormal();
      showSuccessMessage(res);
    }
  }
});
</script>
