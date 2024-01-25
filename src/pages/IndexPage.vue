<template>
  <div>
    <div class="q-pa-md">
      <q-card v-if="this.mostPlayed" bordered>
        <q-img :src="this.mostPlayed.image" :fit="cover" />
        <div class="absolute-bottom text-center q-pa-md q-gutter-md">
          <q-btn color="secondary" icon="fa-solid fa-play" label="Alugar" />
          <q-btn color="primary" icon="fa-solid fa-plus" label="Minha lista" />
        </div>
      </q-card>
    </div>

    <q-space />

    <div class="q-pa-md">
      <carousel-boardgames :boardgames="games" :title="popularTitle" />
      <carousel-boardgames :boardgames="games" :title="parecidosCatanTitle" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import CarouselBoardgames from "src/components/CarouselBoardgames.vue";

import axios from "axios";

export default defineComponent({
  name: "IndexPage",
  components: {
    CarouselBoardgames,
  },
  setup() {
    let games = ref([]);
    let mostPlayed = ref();
    let popularTitle = "Popular no Lends Club";
    let parecidosCatanTitle = "Parecidos com Catan";

    return {
      games,
      mostPlayed,
      popularTitle,
      parecidosCatanTitle,
    };
  },
  methods: {
    getBoardgames() {
      axios.get("https://bgg-json.azurewebsites.net/hot").then((response) => {
        this.games = response.data.slice(0, 10);
      });
    },
    getMostPlayed() {
      axios
        .get("https://bgg-json.azurewebsites.net/thing/230802")
        .then((response) => {
          this.mostPlayed = response.data;
          console.log(this.mostPlayed);
        });
    },
  },
  mounted() {
    this.getBoardgames();
    this.getMostPlayed();
  },
});
</script>
