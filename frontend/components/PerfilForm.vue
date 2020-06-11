<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Alterar Perfil</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field v-model="user.name" label="Nome Completo" />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field v-model="user.email" label="Email" disabled />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="user.expertise" label="Especialidade" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="user.lastGraduation" label="Ultima Formação Academica" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="user.city" label="Cidade" />
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="user.workAt"
                  label="Forma de trabalho"
                  :items="workAtOptions"
                />
              </v-col>
              <v-col cols="12" class="ma-0">
                <v-combobox
                  v-model="user.skills"
                  label="Habilidades"
                  chips
                  counter="5"
                  append-icon
                  multiple
                />
              </v-col>
              <v-col cols="12">
                <v-range-slider
                  v-model="user.pretension"
                  label="Pretenção Salarial"
                  max="50000"
                  min="1000"
                  step="1000"
                  thumb-label
                  thumb-color="green"
                  thumb-size="38"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="red darken-1" text @click="$emit('handleForm')">
            Voltar
          </v-btn>
          <v-btn color="green darken-1" text @click="submit">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
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
