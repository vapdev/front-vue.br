export const useUserStore = defineStore('user', () => {
		const logedIn = ref(false)
		return { logedIn }
	}
)