<template>
  <v-card>
    <v-card-title>ユーザー情報</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="submit">
        <v-text-field
          v-model="user.name"
          label="名前"
          required
        />
        <v-text-field
          v-model="user.email_address"
          label="メールアドレス"
          required
        />
        <div class="d-flex justify-end">
          <v-btn
            type="submit"
            color="indigo"
            outlined
          >
            保存
          </v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      user: {}
    }
  },
  computed: {
    ...mapState('user', ['formTargetUser'])
  },
  watch: {
    formTargetUser: {
      immediate: true,
      handler (newUser) {
        this.user = { ...newUser }
      }
    }
  },
  methods: {
    buildRequestData () {
      return {
        user: this.user
      }
    },
    async submit () {
      const userId = this.user.id
      const requestData = this.buildRequestData()

      if (userId) {
        await this.updateUser({ userId, requestData })
      } else {
        await this.createUser(this.buildRequestData())
      }

      this.closeUserFormDialog()
    },
    ...mapActions('user', ['createUser', 'updateUser', 'closeUserFormDialog'])
  }
}
</script>
