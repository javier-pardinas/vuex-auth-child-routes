<template>
    <div>
        <login-form :user="user"></login-form>
    </div>
</template>

<script>
import LoginForm from '@/components/Authentication/Login';

export default {
    components: {
        LoginForm
    },
    data() {
        return {
            user: {
                email:'',
                password: ''
            }
        }
    }
}
</script>
