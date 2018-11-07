import {fromJS} from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    recommendList:[],
    hotList:[],
    cityList:[],
    schoolList:[],
    recommendActive:true,
    hotActive:false,
    cityActive:false,
    schoolActive:false
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_LIST:
            return state.merge({
                recommendList:fromJS(action.recommendList),
                hotList:fromJS(action.hotList),
                cityList:fromJS(action.cityList),
                schoolList:fromJS(action.schoolList)
            })
        case constants.CHANGE_RECOMMEND_ACTIVE:
            return state.merge({
                'recommendActive':true,
                'hotActive':false,
                'cityActive':false,
                'schoolActive':false
            })
        case constants.CHANGE_HOT_ACTIVE:
            return state.merge({
                'recommendActive':false,
                'hotActive':true,
                'cityActive':false,
                'schoolActive':false
            })
        case constants.CHANGE_CITY_ACTIVE:
            return state.merge({
                'recommendActive':false,
                'hotActive':false,
                'cityActive':true,
                'schoolActive':false
            })
        case constants.CHANGE_SCHOOL_ACTIVE:
            return state.merge({
                'recommendActive':false,
                'hotActive':false,
                'cityActive':false,
                'schoolActive':true
            })
        default:
            return state
    }
}