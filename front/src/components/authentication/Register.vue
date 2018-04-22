<template>
    <div class="col-sm-4 col-sm-offset-4" id="l-register">
      <h2>Register</h2>
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
      <div class="form-group">
        <input
            v-model="confirmPassword"
            type="password"
            class="form-control"
            placeholder="Confirm password"
        >
      </div>
      <button class="btn btn-primary" >Access</button>
      <pre>{{ $data }}</pre>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                email: '',
                password: '',
                confirmPassword: ''
            }
        }
    }
</script>

<style >

    #l-register {
        margin: auto;
    }
</style>