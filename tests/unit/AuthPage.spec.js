import { shallowMount } from "@vue/test-utils"
import AuthPage from "@/views/AuthPage"
import UserLogin from "@/components/UserLogin"
import UserRegister from "@/components/UserRegister"

describe('AuthPage', () => {
  const build = () => {
    const wrapper = shallowMount(AuthPage)

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

  it('renders main child components', () => {
    const { userLogin, userRegister } = build()

    expect(userLogin().exists()).toBe(true)
    expect(userRegister().exists()).toBe(true)
  })

  it('passes a binded userdata prop to UserLogin component', () => {
    const { wrapper, userLogin } = build()
    wrapper.setData({
      userData: {
        username: 'Test',
        password: '123'
      }
    })

    expect(userLogin().vm.userData).toBe(wrapper.vm.userData)
  })
})
