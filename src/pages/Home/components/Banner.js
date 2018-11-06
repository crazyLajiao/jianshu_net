import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {Carousel} from 'antd'
import {CarouselWrapper,ArrowLeft,ArrowRight} from '../style'


class Banner extends PureComponent{
    render() {
        const {list} = this.props
        return (
            <CarouselWrapper>
                <Carousel autoplay class="carousel_img">
                    {
                        list.map((item)=>(
                            <div key={item.get('id')}><img className="banner-img" name={item.get('name')} alt="" src={item.get('img_url')} /></div>
                        ))
                    }
                </Carousel>
                <ArrowLeft><i className="iconfont">&#xe6c6;</i></ArrowLeft>
                <ArrowRight><i className="iconfont">&#xe696;</i></ArrowRight>
            </CarouselWrapper>
        )
    }
}

const mapState = (state)=>({
    list:state.getIn(['home','carouselList'])
})
export default connect(mapState,null)(Banner)