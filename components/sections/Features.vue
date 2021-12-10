<template>
  <section class="darken-1 py-16" style="background-color: white; color: black">
    <v-container>
      <v-row>
        <v-col class="text-center">
          <h2 class="text-h4 text-md-h3 text-center font-weight-black">
            Últimos Eventos
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(card, index) in cards"
          :key="index"
          cols="12"
          sm="4"
          class="text-center"
        >
          <v-avatar
            size="300"
            class="display-1 white font-weight-bold primary--text mb-5"
            style="opacity: 1.15"
            ><img :src="`/${card.src}`" :lazy-src="`${card.src}`" alt="event"
          /></v-avatar>
          <div class="title text-uppercase mt-1 mb-4" v-text="card.title"></div>

          <p style="font-weight: 300" v-text="card.text"></p>
          <v-row no-gutters>
            <v-col cols="12"> </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  async asyncData({ store }) {
    const events = await store.dispatch('events/getEvents')
    return { events }
  },
  data() {
    return {
      cards: [
        {
          src: 'blog1.jpg',
          title: 'Festa das cores',
          text: 'Prepare sua roupa branca, porque hoje é dia de colorir!',
        },
        {
          src: 'blog4.jpg',
          title: 'Semáforo',
          text: 'Dia de paquerar, sempre respeitando o sinal vermelho ein!',
        },
        {
          src: 'blog2.jpg',
          title: 'Natal chegou mais cedo',
          text:
            'O Papai Noel chegou mais cedo aqui na DarkThrone venha conferir!',
        },
      ],
    }
  },
}
</script>
