import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {WriterWrapper,WriterItem} from '../style'

class Writer extends PureComponent{
    render() {
        const {list} = this.props
        return (
            <WriterWrapper>
                <div>
                    <span className="title-left">推荐作者</span>
                    <span className="title-right">换一批</span>
                </div>
                {
                    list.map((item)=>(
                        <WriterItem key={item.get('id')}>
                            <a className="itemwrapper" href="#">
                                <img className="avatar" src={item.get('avatar')} alt=""/>
                            </a>
                            <a className="follow" href="#">+关注</a>
                            <span className="writer">{item.get('writer')}</span>
                            <p className="detail">写了{item.get('words')}字·{item.get('liker')}喜欢</p>
                        </WriterItem>
                    ))
                }
            </WriterWrapper>
        )
    }
}

const mapState = (state)=>({
    list:state.getIn(['home','writerList'])
})

export default connect(mapState,null)(Writer)