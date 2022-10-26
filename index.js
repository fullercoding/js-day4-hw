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

const cat_get = async (cancelToken) => {
    const {error, categories} = await apiCat.get(cancelToken)
    console.log(error)
    console.log(categories)
}
//cat_get(source.token)

const cat_post = async (cancelToken) =>{
    const {error} = await apiCat.post(token,"Calming",source.token)
    console.log(error)
}
//cat_post(source.token)

const cat_put = async (cancelToken) =>{
    const {error} = await apiCat.put(token, 3,"This catergory has been changed for the better", source.token)
    console.log(error) }

const cat_del = async (cancelToken) =>{
    const {error} = await apiCat.del(token, 3, source.token)
    console.log(error)
}
