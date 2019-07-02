import { shallowMount, mount, create, createLocalVue } from "@vue/test-utils"
import AuthPage from "@/views/AuthPage"
import Router from "vue-router"
import UserLogin from "@/components/UserLogin"
import UserRegister from "@/components/UserRegister"
import Vuetify from "vuetify";
import router from "@/router.js"

const localVue = createLocalVue()
localVue.use(Vuetify, Router)

describe('AuthPage', () => {
  const build = () => {
    const wrapper = shallowMount(AuthPage, { localVue })

    return {
      wrapper,
      userLogin: () => wrapper.find(UserLogin),
      userRegister: () => wrapper.find(UserRegister)
    }
  }

  it('renders the component', () => {
    const { wrapper } = build()

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders a child component via routing', () => {
    const router = new Router({
          path: '/login',
          component: UserLogin
        })
    const wrapper = mount(AuthPage, { localVue, router })
    router.push("/login")

    expect(wrapper.find(UserLogin).exists()).toBe(true)
  })

})
