import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'5173cf05d9914ae08cfb716bd9a1a755'
    }
})