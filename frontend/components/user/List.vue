<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="users"
    >
      <template #[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="openEditingUserFormDialog(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deletionConfirmation(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      headers: [
        { text: 'ID', value: 'id', sortable: false },
        { text: 'Name', value: 'name', sortable: false },
        { text: 'Email Address', value: 'email_address', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState('user', ['users'])
  },
  methods: {
    async deletionConfirmation (user) {
      if (!window.confirm('本当に削除しますか？')) { return }

      await this.deleteUser(user.id)
    },
    ...mapActions('user', ['openEditingUserFormDialog', 'deleteUser'])
  }
}
</script>
