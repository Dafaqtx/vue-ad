<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Create new ad</h1>
                <v-form v-model="valid" ref="form" validation class="mb-3">
                  <v-text-field
                    name="title" 
                    label="Ad title" 
                    type="text"
                    v-model="title"
                    required
                    :rules="[v => !!v || 'Title is required']"
                  ></v-text-field>
                  <v-text-field
                    name="description" 
                    label="Ad description" 
                    type="text"
                    v-model="description"
                    multi-line
                    no-resize
                    required
                    :rules="[v => !!v || 'Description is required']"
                  ></v-text-field>
                </v-form>
                <v-layout row class="mb-3">
                    <v-flex xs12>
                      <v-btn
                        >
                        Upload
                      <v-icon right dark>cloud_upload</v-icon>
                      </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <img src="" height="100">
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-switch
                          label="Add to promo?"
                          color="indigo"
                          v-model="promo"
                        ></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                            <v-btn class="success"
                              :loading="loading"
                              @click="createAd"
                              :disabled="!valid || loading"
                            >
                                Create ad
                            </v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imageSrc: 'data:image/jpeg;base64,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'
        }
        this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
    }
  }
}
</script>
