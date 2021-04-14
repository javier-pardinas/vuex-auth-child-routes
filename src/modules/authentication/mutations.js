//This gets executed once the user logs in
export function setUser(state, user) {
    state.user = user,
    state.isLogged = true,
    state.error = false,
    state.errorMessage = ''
}

//!!user : cast an object to a boolean. if user exist: true, if not: false

//This gets executed when the user logs out
export function logout(state) {
    state.user = null,
    state.isLogged = false
}

//In case there is an error when the user tries to log in
export function authError(state, error) {
    state.error = true,
    state.errorMessage = error,
    state.user = null,
    state.isLogged = false
}