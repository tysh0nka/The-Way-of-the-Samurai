 import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '02966c83-5746-408b-bcc9-587459491eff'
    }
})



export const getUsers = (currentPage: number = 1, pageSize: number = 10 ) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(r => {
            return r.data
    })
}

export const followUsers = (id: number) => {
    return  instance.post(`follow/${id}`, {}).then(r => {
        return r.data
        }
    )
}

export const UnfollowUsers = (id: number) => {
    return  instance.delete(`follow/${id}`).then(r => {
        return r.data
    })
}

export const authApi = () => {
    return  instance.get(`auth/me`).then(r => {
        return r.data
    })
}


export const getProfile = (userId: string) => {
    return instance.get(`profile/${userId}`).then(r => {
        debugger
        return r
    })
}