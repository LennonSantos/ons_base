import Vue from 'vue'
import Vuex from 'vuex'
import Splash from './pages/Splash.vue'
//import Chat from './pages/Chat.vue'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    navigator: {
      state: {
        stack: [Splash],
        options: {}
      },
      mutations: {
        push (state, page) {
          state.stack.push(page);
        },
        pop (state) {
          state.stack.pop();
        },
        replace (state, page) {
          state.stack.pop();
          state.stack.push(page);
        },
        setOptions (state, options) {
          state.options = options;
        }
      },
      actions: {

      }
    }
  }
})
