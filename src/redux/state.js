const initState = {
	posts: [],
}

export const LOCAL_STORAGE_KEY = 'posts'


const getInitState = () => {
	const dataFormLS = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY))
	return dataFormLS || initState
}

export default getInitState
