export const state = () => ({
  userId: '',
  userName: '',
  token: '',
})

export const mutations = {
  SETLOGIN(state, payload) {
    state.userId = payload.userId
    state.userName = payload.userName
    state.token = payload.token
  },
  LOGINCHECK: function (state) {
    if (!state.token) {
      this.$router.push('/').catch((err) => {
        console.log(err)
      })
    }
  },
}

export const actions = {
  
}
