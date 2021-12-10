<template>
  <section>
    <!-- <pre>{{ $store.state.events.events }}</pre> -->
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <section class="darken-1 py-16">
          <v-container>
            <v-row
              v-if="
                $store.state.events.events != [] ||
                $store.state.events.events != undefined ||
                $store.state.events.events != null
              "
            >
              <v-col
                v-for="(card, index) in $store.state.events.events"
                :key="index"
                cols="12"
                sm="4"
                class="text-center"
                style="
                  border: thin solid silver;
                  border-radius: 8px;
                  margin-bottom: 8px;
                "
              >
                <v-avatar
                  size="180"
                  class="display-1 white font-weight-bold primary--text mb-5"
                  style="opacity: 1.15"
                  ><img
                    :src="`${card.foto.url}`"
                    :lazy-src="`${card.foto.url}`"
                    alt="event"
                /></v-avatar>
                <div
                  class="title text-uppercase mt-1 mb-4"
                  style="font-weight: bold"
                  v-text="card.titulo"
                ></div>

                <p style="font-weight: 300" v-text="card.descricao"></p>
                <div style="display: flex; margin-top: 8px">
                  <p
                    style="
                      font-weight: 400;
                      font-size: 18px;
                      color: rgb(254, 65, 87);
                    "
                  >
                    Data:
                    <span
                      style="font-size: 16px; color: white"
                      v-text="card.data"
                    ></span>
                  </p>
                </div>
                <div style="display: flex">
                  <p
                    style="
                      font-weight: 400;
                      font-size: 18px;
                      color: rgb(254, 65, 87);
                    "
                  >
                    Horário:
                    <span
                      style="font-size: 16px; color: white"
                      v-text="card.hora"
                    ></span>
                  </p>
                </div>
                <hr />
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 8px;
                  "
                >
                  <div
                    style="font-weight: 400; font-size: 22px"
                    v-text="'R$' + card.preco.toFixed(2)"
                  ></div>
                  <!-- <v-btn style="background: #fe4157" @click="edit(card.id)"
                    >Detalhes</v-btn
                  > -->
                </div>
                <v-row no-gutters>
                  <v-col cols="12"> </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row
              v-if="
                $store.state.events.events == [] ||
                $store.state.events.events == undefined ||
                $store.state.events.events == null
              "
            >
              <div><h4>Não há eventos disponiveis</h4></div>
            </v-row>
          </v-container>
        </section>
      </v-col>
    </v-row>
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
      heroAlt: [
        {
          src: 'pexels-andrea-piacquadio-3830745.jpg',
          heading: ' Eventos ',
        },
      ],
      cards: [
        {
          src: 'blog1.jpg',
          title: 'Festa das cores',
          text: 'Prepare sua roupa branca, porque hoje é dia de colorir!',
          preco: '$90.00',
        },
        {
          src: 'blog4.jpg',
          title: 'Semáforo',
          text: 'Dia de paquerar, sempre respeitando o sinal vermelho ein!',
          preco: '$90.00',
        },
        {
          src: 'blog2.jpg',
          title: 'Natal chegou mais cedo',
          text:
            'O Papai Noel chegou mais cedo aqui na DarkThrone venha conferir!',
          preco: '$90.00',
        },
        {
          src: 'blog3.jpg',
          title: 'Halloween',
          text:
            'Venha para nossa festa de Halloween lua crescente, traga sua fantasia para esta noite orripilante!',
          preco: '$90.00',
        },
        {
          src: 'blog6.jpg',
          title: 'Baile das máscaras',
          text: 'Baile no estilo clássico, o famigerado baile das máscaras.',
          preco: '$90.00',
        },
        {
          src: 'blog7.jpg',
          title: 'Festa da realeza',
          text:
            'Chegou nossa principal atração, vista sua melhor roupa e concorra ao título de Rei e Rainha!',
          preco: '$90.00',
        },
        {
          src: 'blog9.jpg',
          title: 'Festa Neon!',
          text:
            'As luzes se apagam e o neon se acente. Venha participar desse show deluzes no nosso baile de neon!',
          preco: '$90.00',
        },
      ],
    }
  },

  methods: {
    edit(id) {
      this.$router.push('/events/' + id)
    },
  },
  head() {
    return {
      title: 'Contact Us',
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

<style scoped>
#footer-top {
  display: none !important;
}
</style>
