import { getUser } from './api/apiBasicAuth.js'
import { CancelToken } from 'apisauce'
import apiCat from './api/apiCategory.js'
const source = CancelToken.source()
//source.token return the cancel token

const login = async (cancelToken) => {
    const { user, error} = await getUser('kevinb@codingtemple.com', '1234', cancelToken)
    console.log(error?error:"Let there be light!")
    console.log(user?user:"Who turned the lights off?!")
}

//login(source.token)

const user_get = async (cancelToken) => {
    const {error, categories} = await apiUser.get(cancelToken)
    console.log(error)
    console.log(categories)
}
//cat_get(source.token)

const user_post = async (cancelToken) =>{
    const {error} = await apiUser.post(token,source.token)
    console.log(error)
}
//cat_post(source.token)

const user_put = async (cancelToken) =>{
    const {error} = await apiUser.put(token, 3,"User has been updated successfully", source.token)
    console.log(error) }

const user_del = async (cancelToken) =>{
    const {error} = await apiUser.del(token, 3, source.token)
    console.log(error)
}
