<template>
    <!--emit(): emit an event called login-->
    <b-form @submit.prevent="$emit('login')">
        <b-form-group label="Email" description="Private Info">
            <b-form-input type="email" autocomplete="off" 
            v-model="user.email" v-validate="'required|email'" 
            name="email" placeholder="Introduce the email: admin@vue.com">
            </b-form-input>
            <!--here we show the errors that may happen. errors comes from vee-validate-->
            <b-form-invalid-feedback>
            {{errors.first('email')}}
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label="Password">
            <b-form-input type="password" autocomplete="off" 
            v-model="user.password" v-validate="'required|min:6'" 
            name="password" placeholder="Introduce the password: @Password1">
            </b-form-input>
            <!--here we show the errors that may happen. errors comes from vee-validate-->
            <b-form-invalid-feedback>
            {{errors.first('password')}}
            </b-form-invalid-feedback>
        </b-form-group>
        <b-button :disabled="errors.any() || !user.password" type="submit" variant="primary">
        Log In
        </b-button>
    </b-form>
</template>

<script>

export default {
    props: {
        user: {
            type: Object,
            required: true ,
            validator: user => {
                if (!user.hasOwnProperty('email') || !user.hasOwnProperty('password')) {
                    console.warn('Not valid User');
                    return false;
                }
                return true;
            }
        }
    }
}
</script>
