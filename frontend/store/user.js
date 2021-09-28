export const state = () => ({
  users: [],
  formTargetUser: {},
  userFormDialogVisible: false
})

export const mutations = {
  setUsers (state, users) {
    state.users = users
  },
  addUser (state, user) {
    state.users.push(user)
  },
  updateUser (state, updatedUser) {
    const index = state.users.findIndex(user => user.id === updatedUser.id)

    state.users.splice(index, 1, updatedUser)
  },
  deleteUser (state, userId) {
    const index = state.users.findIndex(user => user.id === userId)

    state.users.splice(index, 1)
  },
  setFormTargetUser (state, user) {
    state.formTargetUser = user
  },
  setUserFormDialogVisible (state, visible) {
    state.userFormDialogVisible = visible
  }
}

export const actions = {
  async loadUsers ({ commit }) {
    const response = await this.$axios.$get('users')

    commit('setUsers', response.users)
  },
  async createUser ({ commit }, requestData) {
    const response = await this.$axios.$post('/users', requestData)

    commit('addUser', response.user)
  },
  async updateUser ({ commit }, { userId, requestData }) {
    const response = await this.$axios.$patch(`/users/${userId}`, requestData)

    commit('updateUser', response.user)
  },
  async deleteUser ({ commit }, userId) {
    const response = await this.$axios.$delete(`/users/${userId}`)

    commit('deleteUser', userId)
  },
  openCreatingUserFormDialog ({ commit }) {
    commit('setFormTargetUser', {})
    commit('setUserFormDialogVisible', true)
  },
  openEditingUserFormDialog ({ commit }, targetUser) {
    commit('setFormTargetUser', targetUser)
    commit('setUserFormDialogVisible', true)
  },
  closeUserFormDialog ({ commit }) {
    commit('setUserFormDialogVisible', false)
  }
}
