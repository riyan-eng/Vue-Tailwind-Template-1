import axios from "axios";
import store from "../store";

axios.defaults.baseURL = `https://api.devel.103.81.246.51.sslip.io`

var refresh = false
axios.interceptors.response.use(resp=>resp, async error => {
    if(error.response.status === 401 && !refresh){
        refresh = true
        const {status, data} = await axios.get('/manajemen/session/generate',{
            headers:{
                'Authorization': `Bearer ${store.getters.user.refreshToken}`
            }
        })

        if (status === 200){
            store.dispatch('updateAccessToken', data.data)
            return axios(error.config)
        }else{
            store.dispatch('signOut')
        }
    }
    refresh = false
    return error
})