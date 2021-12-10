<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <section class="darken-1 py-16">
          <v-container>
            <v-row>
              <v-col
                v-for="(card, index) in $store.state.products.products"
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
                  size="220"
                  class="display-1 white font-weight-bold primary--text mb-5"
                  style="opacity: 1.15"
                  ><img
                    :src="`${card.foto.url}?tpl=big:box`"
                    :lazy-src="`${card.foto.url}?tpl=big:box`"
                    alt="event"
                /></v-avatar>
                <div
                  class="title text-uppercase mt-1 mb-4"
                  style="font-weight: bold"
                  v-text="card.titulo"
                ></div>

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
                  <v-btn style="background: #fe4157">Comprar</v-btn>
                </div>
                <v-row no-gutters>
                  <v-col cols="12"> </v-col>
                </v-row>
              </v-col>
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
    const products = await store.dispatch('products/getProducts')
    return { products }
  },
  data() {
    return {
      heroAlt: [
        {
          src: ' pexels-andrea-piacquadio-3795295.jpg ',
          heading: ' Cardápio ',
        },
      ],
      cards: [
        {
          src: 'menu/1.jpg',
          title: 'Hamburguer completo',
          text: 'Carne, Queijo, Salada, molho especial e bacon',
          preco: '$35.00',
        },
        {
          src: 'menu/2.jpg',
          title: 'Coquetel colorido',
          text: 'Limão, vodka, leite condensado e corante',
          preco: '$40.00',
        },
        {
          src: 'menu/3.jpg',
          title: 'Lãmpada surpresa',
          text: 'Bebida surpresa em um copo em formato de lâmpada',
          preco: '$30.00',
        },
        {
          src: 'menu/4.jpg',
          title: 'Hamburguer simples',
          text: 'Pão, carne e queijo',
          preco: '$25.00',
        },
        {
          src: 'menu/5.jpg',
          title: 'Hamburguer artesanal',
          text:
            'Hamburguer Angus, pão tostado na manteira, queijo nobre, bacon, molho especial e mini tomates.',
          preco: '$60.00',
        },
        {
          src: 'menu/6.jpg',
          title: 'Porção de churrasco',
          text:
            'Porção com coração, picanha, linguiça, pão de alho e cebolha roxa. Acompanha vinagrete e molho especial.',
          preco: '$40.99',
        },
      ],
    }
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
