
import SummaryApi from './../common/index';

const fetchCategoryWiseProduct=async({category})=>{
    // console.log(category)
    const response=await fetch(SummaryApi.categorywiseproduct.url,{
        method:SummaryApi.categorywiseproduct.method,
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            category:category
        })
    })
    const dataResponse= await response.json()

  

    return dataResponse
}
export default fetchCategoryWiseProduct