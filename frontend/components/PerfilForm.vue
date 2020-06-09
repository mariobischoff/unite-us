<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field v-model="user.name" label="Nome Completo" required />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field v-model="user.email" label="Email" disabled />
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="user.workAt"
                  label="Forma de trabalho"
                  :items="workAtOptions"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required />
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                />
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
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
          value: 'remoto'
        },
        {
          text: 'Local',
          value: 'local'
        },
        {
          text: 'Remoto e Local',
          value: 'remoto/local'
        }
      ]
    }
  }
}
</script>

<style>

</style>
