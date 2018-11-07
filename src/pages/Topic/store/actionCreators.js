import axios from 'axios'
import * as constants from './constants'

const changeList = (result)=>({
    type:constants.CHANGE_LIST,
    recommendList:result.recommendList,
    hotList:result.hotList,
    cityList:result.cityList,
    schoolList:result.schoolList
})
export const getTopicList = ()=>{
    return (dispatch)=>{
        axios.get('/api/topic.json').then((res)=>{
            const result=res.data.data
            if(result) {
                dispatch(changeList(result))
            }else{
                alert('登录失败')
            }
        })
    }
}

export const changeRecommendActive = ()=>({
    type:constants.CHANGE_RECOMMEND_ACTIVE
})
export const changeHotActive = ()=>({
    type:constants.CHANGE_HOT_ACTIVE
})
export const changeCityActive = ()=>({
    type:constants.CHANGE_CITY_ACTIVE
})
export const changeSchoolActive = ()=>({
    type:constants.CHANGE_SCHOOL_ACTIVE
})