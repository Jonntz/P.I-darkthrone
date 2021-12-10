<template>
  <div>
    <SectionsHeroAlt :hero-alt="heroAlt" />
    <div style="display: flex">
      <v-form
        ref="form"
        v-model="valid"
        class="col-lg-7 col-md-12"
        lazy-validation
        style="margin: 40px 20px"
      >
        <h2 style="font-size: 40px; line-height: 42px">Entre com sua conta</h2>
        <br />
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Senha"
          hint="A senha deve ter 8 caracteres"
          outlined
          @click:append="show1 = !show1"
        ></v-text-field>
        <p class="text-muted">
          <strong>*</strong> Todos os campos são obrigatórios
        </p>
        <v-btn
          :disabled="!valid"
          class="mr-4"
          style="background: #fe4157"
          @click="validate"
        >
          Entrar
        </v-btn>

        <!-- <v-btn color="error" class="mr-4" @click="reset"> Cadastre-se </v-btn> -->

        <div class="col-md-12" style="padding-left: 0">
          <p class="text-muted">
            <NuxtLink to="/signup"
              >Não é cadastrado? Faça o cadastro agora</NuxtLink
            >
          </p>
        </div>
      </v-form>
      <v-divider vertical></v-divider>

      <div class="col-xs-12 col-lg-3 mbl-mar-top" style="margin: 50px 20px">
        <div class="feature-5">
          <div class="media">
            <div class="media-left">
              <div class="icon">
                <i class="fa fa-map-marker"></i>
              </div>
            </div>
            <div class="media-body">
              <a
                href="#"
                style="
                  margin-bottom: 25px;
                  font-size: 22px;
                  line-height: 22px;
                  font-weight: 400;
                  -webkit-transition: 0.4s;
                  transition: 0.4s;
                  text-transform: uppercase;
                  text-decoration: none;
                  letter-spacing: 1px;
                  margin: 0;
                  padding: 0;
                  color: #fe4157;
                "
              >
                <h4>
                  <span style="margin-left: -7px; color: #fe4157"
                    ><v-icon color="#fe4157"> mdi-map-marker </v-icon></span
                  >
                  Endereço
                </h4>
              </a>
              <div class="feature-text">
                <p>Av. Paulista 2500, São Paulo SP, Brasil</p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <div class="feature-5">
          <div class="media">
            <div class="media-left">
              <div class="icon">
                <i class="fa fa-envelope"></i>
              </div>
            </div>
            <div class="media-body">
              <a
                href="#"
                style="
                  margin-bottom: 25px;
                  font-size: 22px;
                  line-height: 22px;
                  font-weight: 400;
                  -webkit-transition: 0.4s;
                  transition: 0.4s;
                  text-transform: uppercase;
                  text-decoration: none;
                  letter-spacing: 1px;
                  margin: 0;
                  padding: 0;
                  color: #fe4157;
                "
              >
                <h4>
                  <span style="margin-left: -7px; margin-right: 8px"
                    ><v-icon color="#fe4157"> mdi-email </v-icon></span
                  >E-mail
                </h4>
              </a>
              <div class="feature-text">
                <p>contato@darkthrone.com</p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <div class="feature-5">
          <div class="media">
            <div class="media-left">
              <div class="icon">
                <i class="fa fa-phone"></i>
              </div>
            </div>
            <div class="media-body">
              <a
                href="#"
                style="
                  margin-bottom: 25px;
                  font-size: 22px;
                  line-height: 22px;
                  font-weight: 400;
                  -webkit-transition: 0.4s;
                  transition: 0.4s;
                  text-transform: uppercase;
                  text-decoration: none;
                  letter-spacing: 1px;
                  margin: 0;
                  padding: 0;
                  color: #fe4157;
                "
              >
                <h4>
                  <span
                    style="
                      margin-left: -7px;
                      color: #fe4157 !important;
                      margin-right: 5px;
                    "
                    ><v-icon color="#fe4157"> mdi-phone </v-icon></span
                  >Telefone
                </h4>
              </a>
              <div class="feature-text">
                <p>+55 11 96943-4837</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    heroAlt: [
      {
        src: 'pexels-moose-photos-1036641.jpg',
        heading: ' Login ',
      },
    ],
    valid: true,
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],

    show1: false,
    show2: true,
    show3: false,
    show4: false,
    password: '',
    rules: {
      required: (value) => !!value || 'Required.',
      min: (v) => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
