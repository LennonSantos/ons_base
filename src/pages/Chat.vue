<template>
  <v-ons-page id="chat">
    <div class="background">
      <img src="../assets/img/background.jpg" alt="">
    </div>
    <div class="content">
      <div class="text-message">
        <div class="text w-75 m-2">
          <textarea class="p-2 b-none" @keydown="autoResize" placeholder="Digite sua mensagem"></textarea>
        </div>
        <v-ons-fab class="m-1">
          <i class="fas fa-paper-plane"></i>
        </v-ons-fab>
      </div>
      <div class="messages">
        <div class="recived">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div class="sended">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div class="sended">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div class="sended">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div class="recived">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
  export default {
    name: 'chat',
    data() {
      return {
        message: ''
      };
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
    clear: both;
    display: flex;
    flex-direction: column;
    position: relative;
    /* position: relative;
    display: table;
    clear: both;
    padding: 0 16px;
  margin-bottom: 5px;
  overflow: hidden;
  height: 50%; */
  }

  .messages > *{
    padding: 10px;
    margin: 10px;
    width: 70%;
    border-radius: 10px;
    position: relative;
  }

  .messages .recived {
    background-color: blue;
    margin-left: auto;
  }

  .messages .sended {
    background-color: orange;
    margin-right: auto;
  }
</style>
