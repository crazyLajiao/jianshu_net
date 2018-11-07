import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {ListWrapper,ListItem,ItemDesc,ItemFollow,ItemCount} from '../style'

class RecommendList extends PureComponent {
    render() {
        const {recommendList}  = this.props
        return (
            <ListWrapper>
                {
                    recommendList.map((item)=>(
                        <ListItem key={item.get('id')}>
                            <ItemDesc>
                                <img className="avatar" src={item.get('avatar')} alt=""/>
                                <h4 className="name">{item.get('name')}</h4>
                                <p className="desc">{item.get('desc')}</p>
                            </ItemDesc>
                            <ItemFollow className="follow">
                                <i className="iconfont">+</i>
                                <span>关注</span>
                            </ItemFollow>
                            <hr />
                            <ItemCount className="count">
                                <span>{item.get('count')}</span>
                            </ItemCount>
                        </ListItem>
                    ))
                }
            </ListWrapper>
        )
    }
}

const mapState = (state)=>({
    recommendList:state.getIn(['topic','recommendList'])
})
export default connect(mapState,null)(RecommendList)