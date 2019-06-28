import { shallowMount, createLocalVue } from "@vue/test-utils"
import Vuex from "vuex"
import AuthPage from "@/views/AuthPage"
import UserLogin from "@/components/UserLogin"
import UserRegister from "@/components/UserRegister"
// import initialState from "@/store/state"
// import userFixture from "./fixtures/user"

const localVue = createLocalVue()
localVue.use(Vuex)

describe('AuthPage', () => {
  let state

  const build = () => {
    const wrapper = shallowMount(AuthPage, {
      localVue,
      store: new Vuex.Store({ state })
    })

    return {
      wrapper,
      userLogin: () => wrapper.find(UserLogin),
      userRegister: () => wrapper.find(UserRegister)
    }
  }

  beforeEach(() => {
    state = { ...initialState }
  })

  it('renders the component', () => {
    const { wrapper } = build()

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders main child components', () => {
    const { userLogin, userRegister } = build()

    expect(userLogin().exists()).toBe(true)
    expect(userRegister().exists()).toBe(true)
  })

  // it('passes a binded userdata prop to UserLogin component', () => {
  //   state.user = userFixture
  //   const { userLogin } = build()
  //
  //   expect(userLogin().vm.user).toBe(state.user)
  // })
})
