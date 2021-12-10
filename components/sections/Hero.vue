<template>
  <section id="hero">
    <v-carousel
      height="calc(100vh - 64px)"
      dark
      cycle
      show-arrows-on-hover
      draggable="true"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(carousel, carindex) in carouselsData"
        :key="carindex"
        :src="carousel.src"
        class="gradient-fill"
      >
        <v-container fill-height>
          <div style="max-width: 600px">
            <div class="text-md-h2 mb-3 text-sm-h3 text-h5 font-weight-black">
              {{ carousel.heading.toUpperCase() }}
            </div>
            <p class="mb-5">{{ carousel.subHeading }}</p>
            <v-btn
              to="about"
              :x-large="$vuetify.breakpoint.smAndUp"
              class="my-3"
              style="background: rgb(254, 65, 87)"
              >Conheça já</v-btn
            >
            <span class="mx-2 my-4"></span>
          </div>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      carouselsData: [
        {
          src: 'slider-9.jpg',
          heading: ' CONHEÇA AGORA ',
          subHeading:
            'Conheça agora nossa super infraestrutura que está pronta para te receber e proporcionar uma experiencia única!',
        },
        {
          src: 'slider-10.jpg',
          heading: 'EVENTOS MAIS SURPREENDENTES',
          subHeading:
            'Temos uma gama de eventos de tirar o folego, se você está afim de paquerar, curtir com as amigas, entrar em uma personagem totalmente diferente você está no lugar certo.',
        },
        {
          src: 'slider-11.jpg',
          heading: 'ALGUMA DÚVIDA?',
          subHeading:
            'Para nós o cliente vem em primeiro lugar qualquer dúvida ou sugestão nós mande uma mensagem que responderemos o mais rápido e da melhor maneira possível!',
        },
      ],
    }
  },
}
</script>

<style>
.gradient-fill .v-responsive__content {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    to right,
    rgba(3, 12, 41, 0.75),
    rgba(5, 11, 31, 0.65)
  );
}
</style>
