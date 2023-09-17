import { getPosts } from '@/api'

export const state = () => ({
  posts: [],
})

export const mutations = {
    SETPOSTS(state, payload) {
        state.posts.push(payload)
    },
}

export const actions = {
  async fetchPost(context) {
    const { data } = await getPosts()
    // eslint-disable-next-line array-callback-return , no-console
    const postlist = data.map((item, idx) => ({
        ...item,
    }))
    context.commit('SETPOSTS', postlist)
  },
}
