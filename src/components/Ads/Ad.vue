<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card>
                    <v-card-media
                      src="https://vuetifyjs.com/static/doc-images/carousel/sky.jpg"
                      height="300px"
                    ></v-card-media>
                    <v-card-text>
                        <h1 class="text--primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint eius cum corporis. Neque quidem, enim ipsum, voluptates architecto soluta magnam dolores aut quis dolor hic tempore repellat! Corporis, sunt!</h1>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat class="warning">Edit</v-btn>
                        <v-btn class="success">Buy</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
