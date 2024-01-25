<template>
  <div class="text-h6">{{ title }}</div>
  <Carousel :breakpoints="breakpoints" :wrap-around="true">
    <Slide v-for="(game, i) in boardgames" :key="i">
      <q-img
        class="carousel__item"
        :max-width="{ xs: '50%', sm: '30%', md: '20%', lg: '10%' }"
        :src="game.thumbnail"
      />
    </Slide>
  </Carousel>
</template>
<script>
import { defineComponent, ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "CarouselBoardgames",
  components: {
    Carousel,
    Slide,
  },
  props: ["boardgames", "title"],
  setup() {
    return {
      breakpoints: {
        /** reponsividade */
        200: { itemsToShow: 2.5, snapAlign: "start" },
        1024: { itemsToShow: 8, snapAlign: "start" },
      },
    };
  },
});
</script>
<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  width: 50%;
  height: auto;
}

.carousel__item {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0);
}
</style>
