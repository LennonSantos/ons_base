<template>
  <v-ons-page id="chat">
    <div class="background">
      <img src="../assets/img/background.jpg" alt="">
    </div>
    <div class="content">
      <div class="text-message">
        <div class="text w-75 m-2">
          <textarea class="p-2 b-none" @keydown="autoResize" v-model="message" placeholder="Digite sua mensagem"></textarea>
        </div>
        <v-ons-fab class="m-1" @click="send">
          <i class="fas fa-paper-plane"></i>
        </v-ons-fab>
      </div>
      <div class="messages">
        <div v-for="messages in stackMessages" :class="messages.sender">
          {{ messages.message }}
        </div>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
  import { HubConnectionBuilder } from "@aspnet/signalr";

  export default {
    name: 'chat',
    data() {
      return {
        message: '',
        stackMessages: []
      };
    },
    methods: {
      autoResize (el) {
        let obj = el.srcElement;
        while (obj.scrollHeight > obj.offsetHeight) {
            obj.rows += 1;
        }
      },
      send() {
        this.stackMessages.push({
          "person": "vinicius",
          "message": this.message,
          "sender": "sended"
        });
        console.log(this.stackMessages);
        this.connection.invoke('Send', {
          "person": "vinicius",
          "message": this.message
        });
        this.message = '';
      }
    },
    mounted() {
      this.connection = new HubConnectionBuilder()
        .withUrl("https://rolinder.azurewebsites.net/api/v1/chat")
        .build();

      this.connection.start().then(() => {
        console.log("Connected");
        this.connection.on("Received", (data) => {
          this.stackMessages.push(Object.assign(data, {
            "sender": "received"
          }));
        });
      });
    }
  }
</script>

<style scoped>
  .background img {
    width: 100%;
    height: 100%;
  }

  .text-message {
    position: fixed;
    bottom: 0px;
    width: 100%;
    min-height: 50px;
    display: flex;
    justify-content: space-around;
    align-content: center;
    background: #BEBEBE;
  }

  .text-message > .text {
    background-color: white;
    border-radius: 20px;
    position: relative;
    left: 10px;
    display: flex;
    align-content: center;
    justify-content: space-around;
  }

  .text-message > ons-fab {
    height: 50px;
    width: 50px;
  }

  .messages {
    margin-bottom: 60px;
    width: 100%;
    height: auto;
    min-height: 300px;
    /* clear: both; */
    display: flex;
    flex-direction: column;
  }

  .messages > *{
    padding: 10px;
    margin: 10px;
    width: 70%;
    border-radius: 10px;
    color: white;
  }

  .messages .received {
    background-color: blue;
    margin-left: auto;
  }

  .messages .sended {
    background-color: orange;
    margin-right: auto;
  }
</style>
