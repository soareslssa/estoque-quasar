<template>
  <q-card v-if="this.boardgame" bordered>
    <q-img :src="this.boardgame.image" :fit="cover" />
    <div class="absolute-bottom text-center q-pa-md q-gutter-md">
      <q-chip
        v-for="(artist, i) in this.boardgame.artists"
        :key="i"
        size="sm"
        dense
        >{{ artist }}</q-chip
      >
      <br />
      <q-btn color="secondary" icon="fa-solid fa-play" label="Alugar" />
      <q-btn color="primary" icon="fa-solid fa-plus" label="Minha lista" />
    </div>
  </q-card>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoardgameCard",
  props: ["boardgame"],
  setup() {},
});
</script>
