import React,{Component} from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import {actionCreators} from './store'
import {actionCreators as loginActionCreators} from '../../pages/Login/store'
import {Link} from 'react-router-dom'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from "./style";


class Header extends Component{
    render() {
        const {focused,list,login,handleInputFocus,handleInputBlur,logout} = this.props
        console.log(this.props)
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo/>
                </Link>
                <Nav>
                    <Link to="/"><NavItem className="left active">首页</NavItem></Link>
                    <Link to="/download"><NavItem className="left">下载</NavItem></Link>
                    {
                        login ? <NavItem onClick={logout} className="right">退出</NavItem> :
                            <Link to="/login"><NavItem className="right">登录</NavItem></Link>
                    }
                    <NavItem className="right">
                        <i className="iconfont Aa">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused?'focused':''}
                                onFocus={()=>handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={focused?'focused iconfont zoom':'iconfont zoom'}>&#xe614;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to="/write">
                        <Button className="writting">
                            <i className="iconfont">&#xe615;</i>写文章
                        </Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    getListArea() {
        const {focused,list,page,totalPage,mouseIn,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props
        const newList = list.toJS()   //immutable对象装换成js对象
        const pageList = []
        //ajax请求发送获取数据之后再显示，保证key值得有效
        if(newList.length){
            for(let i=(page-1)*10;i<page*10;i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
                            <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe851;</i>
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null
        }
    }
}

const mapState = (state)=>{
    return {
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn']),
        login:state.getIn(['login','login'])
    }
}
const mapDispatch = (dispatch)=>{
    return {
        handleInputFocus(list) {
            (list.size===0) && dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page,totalPage,spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
            if(originAngle) {
                originAngle = parseInt(originAngle,10)
            }else {
                originAngle = 0
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)'

            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1))
            }else {
                dispatch(actionCreators.changePage(1))
            }
        },
        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapState,mapDispatch)(Header)