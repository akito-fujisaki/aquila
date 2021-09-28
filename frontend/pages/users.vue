<template>
  <v-container>
    <div class="d-flex justify-end">
      <v-btn outlined @click="openCreatingUserFormDialog()">
        ユーザー作成
      </v-btn>
    </div>
    <UserList />

    <v-dialog
      :value="userFormDialogVisible"
      width="40%"
      @click:outside="closeUserFormDialog()"
    >
      <UserForm />
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      dialog: false
    }
  },
  async fetch () {
    await this.loadUsers()
  },
  computed: {
    ...mapState('user', ['users', 'userFormDialogVisible'])
  },
  methods: {
    ...mapActions('user', ['loadUsers', 'openCreatingUserFormDialog', 'closeUserFormDialog'])
  }
}
</script>
