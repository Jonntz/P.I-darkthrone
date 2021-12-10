<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <v-container class="py-16">
          <v-row>
            <v-col
              v-for="(n, index) in cards"
              :key="index"
              class="d-flex child-flex"
              cols="4"
              xl="3"
            >
              <v-img
                :src="`/${n.src}`"
                :lazy-src="`${n.src}`"
                aspect-ratio="1"
                class="grey lighten-2 rounded-lg"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      heroAlt: [
        {
          src: 'pexels-andrea-piacquadio-3884440.jpg',
          heading: ' Nosso ambiente ',
        },
      ],
      cards: [
        {
          src: 'enviroments/1.jpg',
          title: 'Festa das cores',
          text: 'Prepare sua roupa branca, porque hoje é dia de colorir!',
        },
        {
          src: 'enviroments/2.jpg',
          title: 'Semáforo',
          text: 'Dia de paquerar, sempre respeitando o sinal vermelho ein!',
        },
        {
          src: 'enviroments/3.jpg',
          title: 'Natal chegou mais cedo',
          text:
            'O Papai Noel chegou mais cedo aqui na DarkThrone venha conferir!',
        },
        {
          src: 'enviroments/4.jpg',
          title: 'Festa das cores',
          text: 'Prepare sua roupa branca, porque hoje é dia de colorir!',
        },
        {
          src: 'enviroments/5.jpg',
          title: 'Semáforo',
          text: 'Dia de paquerar, sempre respeitando o sinal vermelho ein!',
        },
        {
          src: 'enviroments/6.jpg',
          title: 'Natal chegou mais cedo',
          text:
            'O Papai Noel chegou mais cedo aqui na DarkThrone venha conferir!',
        },
        {
          src: 'enviroments/7.jpg',
          title: 'Festa das cores',
          text: 'Prepare sua roupa branca, porque hoje é dia de colorir!',
        },
        {
          src: 'enviroments/8.jpg',
          title: 'Semáforo',
          text: 'Dia de paquerar, sempre respeitando o sinal vermelho ein!',
        },
        {
          src: 'enviroments/9.jpg',
          title: 'Natal chegou mais cedo',
          text:
            'O Papai Noel chegou mais cedo aqui na DarkThrone venha conferir!',
        },
        {
          src: 'enviroments/10.jpg',
          title: 'Natal chegou mais cedo',
          text:
            'O Papai Noel chegou mais cedo aqui na DarkThrone venha conferir!',
        },
        {
          src: 'enviroments/11.jpg',
          title: 'Natal chegou mais cedo',
          text:
            'O Papai Noel chegou mais cedo aqui na DarkThrone venha conferir!',
        },
        {
          src: 'enviroments/12.jpg',
          title: 'Natal chegou mais cedo',
          text:
            'O Papai Noel chegou mais cedo aqui na DarkThrone venha conferir!',
        },
        {
          src: 'enviroments/13.jpg',
          title: 'Natal chegou mais cedo',
          text:
            'O Papai Noel chegou mais cedo aqui na DarkThrone venha conferir!',
        },
        {
          src: 'enviroments/14.jpg',
          title: 'Natal chegou mais cedo',
          text:
            'O Papai Noel chegou mais cedo aqui na DarkThrone venha conferir!',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Nosso ambiente',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
        },
      ],
    }
  },
}
</script>
