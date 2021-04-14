import Vue from 'vue';

//A preloader gets executed when we log in y we make a query to the API
export async function signIn(context, user) {
    try {
        //(mutation, true (execute), setLoading belongs to the root of the store)
        context.commit('setLoading', true, {root: true});
        await Vue.axios({
            method: 'POST',
            url: '/login',
            data: user
        })
        //(module/mutation, 2parameter of that mutation)
        context.commit('authentication/setUser', user);
    } catch(e) {
        //(module/mutation, 2parameter of that mutation)
        context.commit('authentication/authError', e.message);
    } finally {
        //disable spinner (loader):
        //(mutation, true (execute), setLoading belongs to the root of the store)
        context.commit('setLoading', false, {root: true});
    }
}