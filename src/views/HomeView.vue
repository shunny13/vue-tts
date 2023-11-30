<template>
  <div class="home">
    <div><h1 class="text-center">Convert text to sound</h1></div>
    <v-container>
      <v-textarea
        v-model="text"
        label="Description"
        placeholder="Enter text here"
        outlined
        clearable
        filled
        no-resize
        rows="10"
        hint="Maximum 1000 characters"
        persistent-hint
        counter="1000"
        :max-length="1000"
      ></v-textarea>
    </v-container>
    <v-container>
      <v-layout row justify-center>
        <v-flex xs4>
          <v-btn color="primary" block @click="checkText">
            <v-icon left>mdi-bullhorn-variant-outline</v-icon>Convert</v-btn
          >
        </v-flex>
        <v-flex xs4 class="ml-2">
          <!-- Adding a margin left (ml-2) for space -->
          <v-btn
            color="primary"
            prepend-icon="mdi-export-variant"
            block
            :loading="loadingDownload"
            @click="download"
          >
            <v-icon left>mdi-download</v-icon>Download</v-btn
          >
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-alert
        v-if="text.length > 1000"
        color="error"
        icon="$error"
        title="Alert title"
        >Max 1000 characters !</v-alert
      >
    </v-container>
    <v-snackbar v-model="snackbar" :timeout="3000" multi-line>
      The sound isn't ready yet !
    </v-snackbar>

    <v-snackbar v-model="isEmpty" :timeout="3000" multi-line>
      No text !
    </v-snackbar>

    <v-snackbar v-model="tooMany" :timeout="3000" multi-line>
      Too many characters ! ( max 1000 )
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TTSService from "@/service/TTSService";

export default Vue.extend({
  name: "HomeVue",
  data() {
    return {
      text: "",
      idAnswer: "",
      loadingDownload: false,
      snackbar: false,
      isEmpty: false,
      tooMany: false,
    };
  },
  methods: {
    checkText() {
      if (this.text.length === 0) this.isEmpty = true;
      else if (this.text.length <= 1000) {
        this.loadingDownload = true;

        TTSService.scrape(this.text).then((Response) => {
          if (Response) {
            this.idAnswer = Response.data.id;
            this.loadingDownload = false;
          }
        });
      } else {
        this.tooMany = true;
      }
    },
    download() {
      TTSService.downloadVideo(this.idAnswer).then((Response: any) => {
        if (Response) {
          if (Response.data.url) window.open(Response.data.url, "_blank");
          else {
            this.snackbar = true;
          }
        }
      });
    },
  },
  components: {},
});
</script>
