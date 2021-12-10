<template>
  <section id="intro" class="py-16">
    <v-container>
      <v-responsive class="max-auto mx-auto text-center" max-width="100%">
        <div style="display: flex; flex-direction: row">
          <div class="col-xl-6">
            <img src="../../assets/1.png" alt="darkthrone" width="60%" />
          </div>

          <div class="col-xl-6">
            <h2 class="text-h4 text-md-h3 text-center font-weight-black mb-7">
              CADASTRE-SE NA <span style="color: #fe4157">DARKTHRONE</span> CO.
            </h2>
            <p class="title font-weight-light text-justify">
              Cadastre-se Faça o cadastro agora e comece sua jornada no nosso
              mundo da diversão. Conheça nossos eventos, aperitivos e drinks
              exclusivos, ambiente personalizado e fique atento nos nossos
              descontos especiais. Caso já tenha cadastro no nosso site, acesse
              sua conta agora e veja todas as novidades no cardápio e nos nossos
              eventos que estão por vir!
            </p>

            <div
              style="
                display: flex;
                flex-direction: row;
                gap: 10px;
                justify-content: center;
              "
            >
              <v-btn to="signup" style="background-color: #fe4157"
                >Cadastre-se</v-btn
              >
              <v-btn to="login" style="background-color: #24252a">Login</v-btn>
            </div>
          </div>
        </div>
      </v-responsive>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'Best Productivity',
          subtitle: 'Professionally developed',
          text:
            'All components and features are developed using the most up-to-date coding practices.',
          callout: '01',
        },
        {
          title: 'Fast & optimized',
          subtitle: 'Performance',
          text:
            'Themes are designed for maximum performance and are semantically structured to maximize SEO.',
          callout: '02',
        },
        {
          title: 'Built on Vuetify',
          subtitle: 'Material Design',
          text:
            "Being developed with Vuetify means you have access to all of the framework's available features.",
          callout: '03',
        },
      ],
    }
  },
}
</script>
