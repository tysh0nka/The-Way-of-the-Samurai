 import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '806c8a08-1234-4569-9286-e0b28a075abb'
    }
})




 export const getUsers = (currentPage: number = 1, pageSize: number = 10 ) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(r => {
            return r.data
    })
}

export const getFriends = () => {
    return instance.get(`users?friend=${true}`).then(r => {
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