import axios from "axios";

axios.defaults.baseURL = `https://api.devel.103.81.246.51.sslip.io`

var refresh = false
axios.interceptors.response.use(resp=>resp, async error => {
    if(error.response.status === 401 && !refresh){
        refresh = true
        const {status, data} = await axios.get('/auth/token/refresh',{
            withCredentials: true
        })

        if (status === 200){
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.data.accessToken}`

            return axios(error.config)
        }
    }
    refresh = false
    console.log(error.response.status)
    return error
})