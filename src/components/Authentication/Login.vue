<template>
    
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
