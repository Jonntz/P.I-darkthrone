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
        <h2 style="font-size: 40px; line-height: 42px">
          Registre sua conta gratuitamente
        </h2>
        <br />
        <v-text-field
          v-model="name"
          :counter="25"
          :rules="nameRules"
          label="Nome"
          required
          outlined
        ></v-text-field>

        <v-text-field
          v-model="cpf"
          :counter="25"
          :rules="cpfRules"
          label="CPF"
          required
          outlined
        ></v-text-field>

        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Data de nascimento"
              readonly
              v-bind="attrs"
              outlined
              :rules="dateRules"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            scrollable
            :max="
              new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10)
            "
            min="1950-01-01"
            @change="save"
          ></v-date-picker>
        </v-menu>

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

        <v-text-field
          v-model="phoneNumber"
          :counter="9"
          :error-messages="errors"
          label="Telefone"
          required
          outlined
        ></v-text-field>

        <v-text-field
          v-model="cep"
          :counter="8"
          :error-messages="errors"
          label="CEP"
          required
          outlined
          :rules="cepRules"
          @change="getCep"
        ></v-text-field>

        <v-text-field
          v-model="logradouro"
          :counter="50"
          :error-messages="errors"
          label="Rua"
          required
          outlined
          disabled
        ></v-text-field>

        <v-text-field
          v-model="numero"
          :counter="4"
          :error-messages="errors"
          label="Número"
          required
          outlined
        ></v-text-field>

        <v-text-field
          v-model="complemento"
          :counter="5"
          :error-messages="errors"
          label="Complemento"
          required
          outlined
        ></v-text-field>

        <v-text-field
          v-model="bairro"
          :counter="25"
          :error-messages="errors"
          label="Bairro"
          required
          outlined
          disabled
        ></v-text-field>

        <v-text-field
          v-model="cidade"
          :counter="50"
          :error-messages="errors"
          label="Cidade"
          required
          outlined
          disabled
        ></v-text-field>

        <v-text-field
          v-model="estado"
          :counter="25"
          :error-messages="errors"
          label="Estado"
          required
          outlined
          disabled
        ></v-text-field>

        <v-file-input
          label="File input"
          outlined
          dense
          @change="onFileSelected"
        ></v-file-input>
        <p class="text-muted">
          <strong>*</strong> Todos os campos são obrigatórios
        </p>
        <v-btn
          :disabled="!valid"
          class="mr-4"
          style="background: #fe4157"
          @click="submit"
        >
          Cadastar-se
        </v-btn>

        <!-- <v-btn color="error" class="mr-4" @click="reset"> Cadastre-se </v-btn> -->

        <div class="col-md-12" style="padding-left: 0">
          <p class="text-muted">
            <NuxtLink to="/login"
              >Já é cadastrado? Faça o login com a sua conta!</NuxtLink
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
        heading: ' Cadastre-se ',
      },
    ],
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 25) || 'Name must be less than 10 characters',
    ],

    cpf: '',
    cpfRules: [(v) => !!v || 'CPF is required'],

    date: null,
    dateRules: [(v) => !!v || 'Data is required'],

    menu: false,

    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],

    phoneNumber: '',

    cep: null,
    cepRules: [(v) => !!v || 'CEP is required'],

    logradouro: null,
    numero: null,
    complemento: null,
    bairro: null,
    cidade: null,
    estado: null,

    selectedFile: null,

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
    onFileSelected(event) {
      // this.selectedFile = event.target.files[0]
      // eslint-disable-next-line no-console
      console.log(event)
    },

    async submit() {
      const dados = {
        email: this.email,
        name: this.name,
        cpf: this.cpf,
        dtNascimento: this.date,
        cep: this.cep,
        logradouro: this.logradouro,
        numero: this.numero,
        bairro: this.bairro,
        cidade: this.cidade,
        estado: this.estado,
        complemento: this.complemento,
        foto: this.foto,
      }

      await this.$axios
        .post('/user', dados)
        .then((response) => {
          // eslint-disable-next-line no-console
          console.table(response)
          return response
        })
        .bind(this)
      // eslint-disable-next-line no-console
    },
    getCep() {
      const cep = this.cep
      const url = `https://viacep.com.br/ws/${cep}/json/`

      this.$axios.$get(url).then((response) => {
        this.logradouro = response.logradouro
        this.bairro = response.bairro
        this.cidade = response.localidade
        this.estado = response.uf
        this.logradouro = response.logradouro
        // eslint-disable-next-line no-console
        console.log(response)
      })
    },
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
