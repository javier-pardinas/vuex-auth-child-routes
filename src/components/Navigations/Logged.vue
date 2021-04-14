<template>
    <b-nav tabs>
        <b-nav-item exact to="/secret">Secret Page</b-nav-item>
        <b-nav-item exact to="/secret/notes">Secret Notes</b-nav-item>
        <b-nav-item @click="_logout">Log out</b-nav-item>
    </b-nav>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
    methods: {
        ...mapMutations('authentication', ['logout']),
        _logout() {
            this.logout();
            this.$router.push('/login');
        }
    }
}

</script>