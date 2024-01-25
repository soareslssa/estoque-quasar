<template>
  <div class="q-pa-md">
    <div class="q-pa-md">
      <q-chip
        v-for="(categoria, i) in categorias"
        :key="i"
        outline
        size="sm"
        color="white"
        >{{ categoria }}</q-chip
      >
    </div>

    <boardgame-card :boardgame="this.mostPlayed" />

    <br />

    <div>
      <carousel-boardgames :boardgames="games" :title="popularTitle" />
      <carousel-boardgames :boardgames="games" :title="parecidosCatanTitle" />
      <carousel-boardgames :boardgames="games" :title="parecidosCatanTitle" />
      <carousel-boardgames :boardgames="games" :title="parecidosCatanTitle" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import CarouselBoardgames from "src/components/CarouselBoardgames.vue";

import axios from "axios";
import BoardgameCard from "src/components/BoardgameCard.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    CarouselBoardgames,
    BoardgameCard,
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
      categorias: ["Festivo", "Miniaturas", "Jogo de Cartas", "Estratégia"],
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
