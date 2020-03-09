import { shallowMount, mount, create, createLocalVue } from "@vue/test-utils"
import AuthPage from "@/views/AuthPage"
import Router from "vue-router"
import UserLogin from "@/views/UserLogin"
import UserRegister from "@/views/UserRegister"
import TheFooter from "@/components/TheFooter.vue"
import Vuetify from "vuetify";
import router from "@/router.js"

const localVue = createLocalVue()
localVue.use(Vuetify, Router)

describe('AuthPage', () => {
  it('renders view'), () => {
    const wrapper = shallowMount(AuthPage)
    expect(wrapper.html()).toMatchSnapshot()
  })

})
