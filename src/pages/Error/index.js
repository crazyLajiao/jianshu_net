import React,{PureComponent} from 'react'
import {Link} from 'react-router-dom'
import {ErrorWrapper,ErrorLogo,ErrorBox,Img,Title,Reason,Button} from './style'

class Error extends PureComponent{
    render() {
        return (
            <ErrorWrapper>
                <Link to="/">
                    <ErrorLogo/>
                </Link>
                <ErrorBox>
                    <Img/>
                    <Title>您要找的页面不存在</Title>
                    <Reason>可能是因为您的链接地址有误、该文章已经被作者删除或转为私密状态。</Reason>
                    <Button>返回「简书」首页</Button>
                </ErrorBox>
            </ErrorWrapper>
        )
    }
}

export default Error