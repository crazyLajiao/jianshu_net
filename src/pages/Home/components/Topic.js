import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {TopicWrapper,TopicItem} from '../style'

class Topic extends PureComponent{
    render() {
        const {list} = this.props
        return (
            <TopicWrapper>
                {
                    list.map((item,index)=>(
                        // (index<7) ? (
                            <TopicItem key={item.get('id')}>
                            <img className="topic-pic" src={item.get('imgUrl')} alt=""/>
                            {item.get('title')}
                            </TopicItem>
                        // ) : null
                    ))
                }
                <Link to="/topic">
                    <TopicItem className="loadMore">
                        更多热门专题<i className="iconfont">&#xe6c6;</i>
                    </TopicItem>
                </Link>
            </TopicWrapper>
        )
    }
}

const mapState = (state)=>({
    list:state.getIn(['home','topicList'])
})
export default connect(mapState,null)(Topic)