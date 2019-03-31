import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash,faPencilRuler,faSave,faWindowClose} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'


library.add(faTrash)
library.add(faPencilRuler)
library.add(faSave)
library.add(faWindowClose)

Vue.component('font-awesome-icon', FontAwesomeIcon)

window.eventBus = new Vue()

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')