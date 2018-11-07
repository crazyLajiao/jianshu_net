import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {actionCreators} from './store'
import {TopicWrapper,BoxTop,BoxList,TitleWrapper,ListTittle} from './style'
import RecommendList from './components/RecommendList'
import HotList from './components/HotList'
import CityList from './components/CityList'
import SchoolList from './components/SchoolList'

class Topic extends PureComponent{
    render() {
        const {
            recommendActive,
            hotActive,
            cityActive,
            schoolActive,
            changeRecommendActive,
            changeHotActive,
            changeCityActive,
            changeSchoolActive} = this.props
        console.log(this.props)
        return (
            <Router>
              <TopicWrapper>
                <BoxTop>
                    <img className="banner" src="//cdn2.jianshu.io/assets/web/recommend-collection-58f8968955ecbeb8f8f3b4cd95ec76be.png" alt=""/>
                    <p className="help">
                        <i className="iconfont">&#xe615; 如何创建并玩转专题</i>
                    </p>
                </BoxTop>
                <TitleWrapper>
                    <Link to="/topic">
                        <ListTittle onClick={changeRecommendActive} className={recommendActive ? "active" : null}>
                            <span className="title">
                                <i className="iconfont">&#xe633;</i>推荐
                            </span>
                        </ListTittle>
                    </Link>
                    <Link to="/topic/hottopic">
                        <ListTittle onClick={changeHotActive} className={hotActive ? "active" : null}>
                            <span className="title">
                                <i className="iconfont">&#xe633;</i>热门
                            </span>
                        </ListTittle>
                    </Link>
                    <Link to="/topic/citytopic">
                        <ListTittle onClick={changeCityActive} className={cityActive ? "active" : null}>
                            <span className="title">
                                <i className="iconfont">&#xe633;</i>城市
                            </span>
                        </ListTittle>
                    </Link>
                    <Link to="/topic/schooltopic">
                        <ListTittle onClick={changeSchoolActive} className={schoolActive ? "active" : null}>
                            <span className="title">
                                <i className="iconfont">&#xe633;</i>校园
                            </span>
                        </ListTittle>
                    </Link>
                </TitleWrapper>
                <Route path="/topic" exact component={RecommendList}/>
                <Route path="/topic/hottopic" component={HotList}/>
                <Route path="/topic/citytopic" component={CityList}/>
                <Route path="/topic/schooltopic" component={SchoolList}/>
              </TopicWrapper>

            </Router>
        )
    }
    componentDidMount() {
        this.props.getTopicList()
    }
}

const mapState = (state)=>({
    recommendActive:state.getIn(['topic','recommendActive']),
    hotActive:state.getIn(['topic','hotActive']),
    cityActive:state.getIn(['topic','cityActive']),
    schoolActive:state.getIn(['topic','schoolActive']),
})
const mapDispatch = (dispatch)=>({
    getTopicList(){
        dispatch(actionCreators.getTopicList())
    },
    changeRecommendActive() {
        dispatch(actionCreators.changeRecommendActive())
    },
    changeHotActive() {
        dispatch(actionCreators.changeHotActive())
    },
    changeCityActive() {
        dispatch(actionCreators.changeCityActive())
    },
    changeSchoolActive() {
        dispatch(actionCreators.changeSchoolActive())
    },

})

export default connect(mapState,mapDispatch)(Topic)