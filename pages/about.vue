<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <v-container>
          <v-row class="py-16">
            <v-col cols="12">
              <h2
                class="text-h4 text-md-h3 text-center font-weight-black text-capitalize"
              >
                Quem somos?
              </h2>
            </v-col>
            <div style="display: flex; flex-direction: row">
              <div class="col-xl-6">
                <img
                  src="../assets/img-1.jpg"
                  alt="empresa"
                  style="width: 100%"
                />
              </div>

              <div class="col-xl-6">
                <h2>DARKTHRONE</h2>
                <br />
                <h3>Sobre nossa empresa</h3>
                <p style="font-weight: 300">
                  Somos a Darkthrone, uma Casa Noturna temática. Nosso intuito é
                  tornar a vida mais divertida. Por isso, realizamos festas
                  temáticas todos os meses para que assim vocês possam desfrutar
                  do que há de melhor da vida. Durante as nossas festas, além de
                  toda a diversão, proporcionamos um vasto cardápio de comidas e
                  bebidas para todos os gostos. E para quem deseja mais
                  conforto, temos o nosso camarote com um serviço VIP e um
                  cardápio exclusivo.
                </p>
                <br />
                <img src="../assets/sign.png" alt="assinatura" />
              </div>
            </div>
          </v-row>
        </v-container>

        <section
          class="pad80 call-to-action-2 parallax"
          style="background-image: url(assets/images/bg/breadcrumb4.png)"
        >
          <div class="container">
            <div class="row">
              <div
                class="row"
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-around;
                "
              >
                <div class="col-md-8">
                  <h3
                    style="
                      text-transform: uppercase;
                      margin: 0;
                      padding: 0;
                      font-weight: 600;
                      font-size: 40px;
                    "
                  >
                    Ficou interessado em nos
                    <span style="color: #fe4157">VISITAR</span> ?
                  </h3>
                </div>
                <div class="col-md-4">
                  <v-btn
                    to="events"
                    style="
                      background: #fe4157;
                      color: #ffffff !important;
                      padding: 22px;
                    "
                    >Eventos</v-btn
                  >
                </div>
              </div>

              <div class="col-10" style="padding-left: 0">
                <p style="font-size: 16px; font-weight: 300">
                  Veja agora mesmo nosso catálogo de eventos para os próximos
                  dias e escolha o que você mais se identificar, temos uma
                  grande variedade de festas!
                </p>
              </div>
            </div>
          </div>
        </section>
        <SectionsTeam :our-team="ourTeam" />

        <SectionsTestimonials />
        <!-- <v-row no-gutters>
          <v-col cols="12" md="6" align-self="center">
            <v-img
              max-height="800"
              src="pexels-canva-studio-3277806.jpg"
              lazy-src="pexels-canva-studio-3277806.jpg"
            >
            </v-img>
          </v-col>
          <v-col cols="12" md="6" align-self="center">
            <div class="pa-lg-16 pa-md-10 px-4 py-16">
              <h2 class="text-h3 text-center font-weight-black">Our Vision</h2>
              <h3
                class="text-h5 text-uppercase font-weight-thin text-center my-8"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium. Doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </v-col>
        </v-row> -->
        <!-- <v-row no-gutters class="flex-row-reverse">
          <v-col cols="12" md="6" align-self="center">
            <v-img
              max-height="800"
              src="pexels-rfstudio-3810792.jpg"
              lazy-src="pexels-rfstudio-3810792.jpg"
            >
            </v-img>
          </v-col>
          <v-col cols="12" md="6" align-self="center">
            <div class="pa-lg-16 pa-md-10 px-4 py-16">
              <h2 class="text-h3 text-center font-weight-black">Our Mission</h2>
              <h3
                class="text-h5 text-uppercase font-weight-thin text-center my-8"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </h3>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium. Doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. emo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                quia consequuntur magni dolores eos
              </p>
            </div>
          </v-col>
        </v-row> -->
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
          src: 'pexels-moose-photos-1036641.jpg',
          heading: ' About Us ',
        },
      ],
      ourTeam: [
        {
          name: 'Jonatas S. Monteiro',
          position: 'Desenvolvedor back-end',
          description:
            'Responsável por manter o funcionamento dos websites, coordena todas as tarefas relacionadas com códigos e linguagens de programação.',
          photo: 'team3.jpg',
        },
        {
          name: 'Iris Moraes',
          position: 'Scrum master',
          description:
            'Responsável por potencializar o trabalho da equipe e garantir que todos entendam e apliquem os princípios do Agile Coach.',
          photo: 'team1.jpg',
        },
        {
          name: 'Alessandra Silva',
          position: 'Product Owner',
          description:
            'Representa os interesses de todos os envolvidos, define as funcionalidades do produto e prioriza os itens do PB.',
          photo: 'team2.jpg',
        },
        {
          name: 'Ismael Sancon',
          position: 'Desenvolvedor Front-end',
          description:
            'Responsável pela experiência do usuário dentro de uma aplicação web, é ele quem vai desenhar e desenvolver as páginas com as quais os usuários irão interagir.',
          photo: 'team4.jpg',
        },
      ],
    }
  },
  head() {
    return {
      title: 'About Us',
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
