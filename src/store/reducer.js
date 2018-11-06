import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../common/Header/store'
import {reducer as loginReducer} from '../pages/Login/store'
import {reducer as homeReducer} from '../pages/Home/store'
import {reducer as detailReducer} from '../pages/Detail/store'

const reducer = combineReducers({
    header:headerReducer,
    login:loginReducer,
    home:homeReducer,
    detail:detailReducer
})

export default reducer