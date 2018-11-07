import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {actionCreators} from '../store'
import {ListItem,ListInfo,Addition,LoadMore} from '../style'

class List extends PureComponent{
    render() {
        const {list,page,getMoreList} = this.props
        return (
            <div>
                {
                    list.map((item)=>{
                        return (
                            <Link key={item.get('id')} to={"/detail/"+item.get('id')}>
                                <ListItem>
                                    <img className="pic" alt="" src={item.get('imgUrl')}/>
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                    <Addition>
                                        <span>{item.get('writer')}</span>
                                        <span><i className="iconfont">&#xe633;</i>{item.get('comments')}</span>
                                        <span><i className="iconfont">&#xe62a;</i>{item.get('likers')}</span>
                                        <span><i className="iconfont">&#xe62b;</i>{item.get('money')}</span>
                                    </Addition>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={()=>getMoreList(page)}>加载更多</LoadMore>
            </div>
        )
    }
}

const mapState = (state)=>({
    list:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage'])
})
const mapDispatch = (dispatch)=>({
    getMoreList(page){
        dispatch(actionCreators.getHomeList(page))
    }
})

export default connect(mapState,mapDispatch)(List)