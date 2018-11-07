import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {ListWrapper,ListItem,ItemDesc,ItemFollow,ItemCount} from '../style'

class CityList extends PureComponent {
    render() {
        const {cityList}  = this.props
        return (
            <ListWrapper>
                {
                    cityList.map((item)=>(
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
    cityList:state.getIn(['topic','cityList'])
})
export default connect(mapState,null)(CityList)