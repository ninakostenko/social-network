import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1120da82-1ee2-4648-b717-7e3d59bbcb5d"
    }
})

export const userAPI = {
    getUsers(currentPage: any = 1, pageSize: any = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: any) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: any) {
        return instance.delete(`unfollow/${userId}`)
    },
    getProfile(userId: any) {
        console.warn('profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: any) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: any) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: any) {
        return instance.put(`profile/status `, {status: status})
    },
    savePhoto(file: any) {
        const formData = new FormData()
        formData.append("image", file)

        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: any) {
        return instance.put(`profile`, profile)
    }

}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email: string | number, password: string | number, rememberMe: boolean = false, captcha: null) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete('auth/login')
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}
