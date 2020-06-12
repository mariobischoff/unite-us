<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
    scrollable
  >
    <v-card>
      <v-card-title>
        <p class="content-title">
          Alterar Perfil
        </p>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="user.name" label="Nome Completo" color="#952597" />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field v-model="user.email" label="Email" disabled color="#952597" />
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                v-model="user.expertise"
                label="Especialidade"
                color="#952597"
                :items="expertiseOptions"
                item-color="purple"
                attach
                chip
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model="user.lastGraduation" label="Ultima Formação Academica" color="#952597" />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model="user.city" label="Cidade" color="#952597" />
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                v-model="user.workAt"
                label="Forma de trabalho"
                :items="workAtOptions"
                color="#952597"
                item-color="purple"
              />
            </v-col>
            <v-col cols="12" class="ma-0">
              <v-select
                v-model="user.skills"
                :items="skillsOptions"
                attach
                label="Habilidades"
                chips
                counter="5"
                append-icon
                multiple
                color="#952597"
                item-color="purple"
              />
            </v-col>
            <v-col cols="12">
              <v-range-slider
                v-model="user.pretension"
                label="Pretenção Salarial"
                max="50000"
                min="1000"
                step="1000"
                thumb-label="always"
                thumb-color="#952597"
                color="#952597"
                track-color="#cdd1ce"
                thumb-size="38"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <button
          class="button-any"
          text
          @click="$emit('handleForm')"
        >
          Cancelar
        </button>
        <v-spacer />
        <button
          class="button-accept"
          depressed
          @click="submit"
        >
          Salvar
        </button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    dialog: {
      type: Boolean
    },
    user: {
      type: Object,
      default () {
        return {
          name: String,
          email: String,
          skills: Array,
          city: String,
          expertise: String,
          lastGraduation: String,
          pretension: Array,
          vip: Boolean,
          workAt: String
        }
      }
    }
  },
  data () {
    return {
      expertiseOptions: [
        'Design',
        'Developer',
        'RH'
      ],
      skillsOptions: [
        'HTML',
        'Python',
        'Testando',
        'Outra Skill Foda',
        'Outra',
        'Javascript',
        'Ruby'
      ],
      workAtOptions: [
        {
          text: 'Remoto',
          value: 'remote'
        },
        {
          text: 'Local',
          value: 'local'
        },
        {
          text: 'Remoto e Local',
          value: 'remote/local'
        }
      ]
    }
  },
  methods: {
    ...mapActions({
      updateUser: 'user/update'
    }),
    submit () {
      const { name, email, city, expertise, lastGraduation, pretension, workAt, skills } = this.user
      this.updateUser({ name, email, city, expertise, lastGraduation, pretension, workAt, skills })
        .then((res) => {
          this.$emit('handleForm')
        })
    }
  }
}
</script>
