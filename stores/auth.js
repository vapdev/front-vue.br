export const useAuth = defineStore('auth', () => {
    const user = ref(null);
    const tokenCookie = useCookie('token');

    const setUser = (newUser) => {
        user.value = newUser;
    };

    const setToken = (newToken) => {
        tokenCookie.value = newToken;
    };    

    const logout = () => {
        tokenCookie.value = null;
        user.value = null;
    };

    return {
        tokenCookie,
        user,
        setUser,
        setToken,
        logout
    };
});