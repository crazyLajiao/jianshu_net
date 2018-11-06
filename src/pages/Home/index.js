import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import Banner from './components/Banner'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {actionCreators} from './store'
import {
    HomeWrapper,
    HomeRight,
    HomeLeft,
    BackTop
} from "./style";

class Home extends PureComponent{
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Banner/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}><i className="iconfont">&#xe67f;</i></BackTop> : null
                }
            </HomeWrapper>
        )
    }
    componentDidMount() {

        this.props.changeHomeData()
        this.bindEvents()
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    bindEvents() {
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
    handleScrollTop() {
        window.scrollTo(0,0)
    }
}

const mapState = (state)=>({
    showScroll: state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch)=>({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow() {
        if(document.documentElement.scrollTop>400) {
            dispatch(actionCreators.toggleShow(true))
        }else{
            dispatch(actionCreators.toggleShow(false))
        }
    }
})
export default connect(mapState,mapDispatch)(Home)