<template>
  <div>Home
    <div>
      Board List:
      Api result : {{boards}}
      <v-container grid-list-xl fluid>
        <v-layout row wrap>
          <v-flex v-for="b in boards" :key="b.id" xs12 sm3>
            <router-link :to="`/b/${b.id}`">
              <v-card :color="`blue`" :data-bgcolor="b.bgColor" ref="boardItem">
                <v-img
                  class="white--text"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline">{{b.title}}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div>
                    <span class="grey--text">Number 10</span>
                    <br>
                    <span>{{b.id}}</span>
                    <br>
                    <span>Whitsunday Island, Whitsunday Islands</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <router-link :to="`/b/${b.id}`">
                    <v-btn flat color="orange">Board</v-btn>
                  </router-link>
                  <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions>
              </v-card>
            </router-link>
          </v-flex>

          <!-- create card -->
          <v-flex xs12 sm3>
            <a href="#" @click="addBoard">
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                    <div>sss</div>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <v-btn flat color="orange">Create</v-btn>
                  <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions>
              </v-card>
            </a>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
import { board } from "../api";

export default {
  data() {
    return {
      loading: false,
      boards: [],
      error: ""
    };
  },
  created() {
    this.fetchData();
  },
  updated() {
    this.$refs.boardItem.forEach(el => {
      console.log(el);
      //el.style.backgroundColor = el.dataset.bgColor;
      //el.color = el.$attrs['data-bgcolor'];
    });
  },
  methods: {
    fetchData() {
      this.loading = true;
      board
        .fetch()
        .then(data => {
          this.boards = data.list;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    addBoard() {
      console.log("addBoard");
    }
  }
};
</script>

<style>
</style>
