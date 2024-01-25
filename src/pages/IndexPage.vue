<template>
  <div>
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
    let popularTitle = "Popular no Lends Club";
    let parecidosCatanTitle = "Parecidos com Catan";

    return {
      games,
      popularTitle,
      parecidosCatanTitle,
    };
  },
  mounted() {
    axios.get("https://bgg-json.azurewebsites.net/hot").then((response) => {
      this.games = response.data.slice(0, 10);
    });
  },
});
</script>
