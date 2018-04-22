  <template>
    <div class="col-sm-4 col-sm-offset-4 " id="l-login">
      <h2>Log In</h2>
      <p>Log in to your account to get some great quotes.</p>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your email"
          v-model="email"
        >
      </div>
      <div class="form-group">
        <input
            v-model="password"
            type="password"
            class="form-control"
            placeholder="Enter your password"
        >
      </div>
      <button @click="login" class="btn btn-primary" >Access</button>
      <pre>{{ $data }}</pre>
    </div>
</template>


<script>
    export default {
        data () {
            return {
                email: '',
                password: ''
            }
        },

        methods: {
            login () {
                var data = {
                    client_id: 2,
                    client_secret: 'G7nBlrtNFrHOhbQjzyJamgck9xC7B2S0qBkrliPi',
                    grant_type: 'password',
                    username: this.email,
                    password: this.password
                }
                this.$http.post("http://localhost:8000/oauth/token",data)
                    .then(response => {
                        console.log(response);
                        this.$auth.setToken(response.data.access_token, response.data.expires_in + Date.now())
                        this.$router.push("/feed");
                    })
                    // .then(function (response) {
                    //     console.log(response);
                    // })
            }
        }
    }
    
</script>

<style lang="css" >

    #l-login {
        margin: auto;
    }
</style>