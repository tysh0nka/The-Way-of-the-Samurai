 import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '21fed3ff-1630-4aad-9b93-973d8a8cc097'
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

export const authLogin = (email: string, password: string, rememberMe: boolean) => {
    return instance.post(`auth/login`,{email, password, rememberMe} )
}

export const authLogout = () => {
    return instance.delete('auth/login')
}


export const getProfile = (userId: string) => {
    return instance.get(`profile/${userId}`).then(r => {
        return r
    })
}

export const getStatus = (userId: string) => {
    return instance.get(`profile/status/${userId}`).then(r => r.data)
}

export const changeStatus = (status: string) => {
    return instance.put(`profile/status`, {status})
}