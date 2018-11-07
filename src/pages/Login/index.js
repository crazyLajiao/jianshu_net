import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect,Link} from 'react-router-dom'
import {actionCreators} from './store'
import {
    LoginWrapper,
    Logo,
    LoginBox,
    Title,
    Input,
    Button
} from './style'

class Login extends PureComponent{
    render() {
        const {loginStatus} = this.props
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <Link to="/">
                        <Logo>
                            <img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt=""/>
                        </Logo>
                    </Link>
                    <LoginBox>
                        <Title>登录</Title>
                        <i className="iconfont">&#xec52;</i><Input placeholder="账号" ref={(input)=>{this.account=input}}/>
                        <i className="iconfont">&#xe600;</i><Input type="password" placeholder="密码" ref={(input)=>{this.password=input}}/>
                        <Button onClick={()=>this.props.login(this.account,this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to="/" />
        }
    }
}

const mapState = (state)=>({
    loginStatus:state.getIn(['login','login'])
})
const mapDispatch = (dispatch)=>({
    login(account,password){
        dispatch(actionCreators.login(account.value,password.value))
    }
})


export default connect(mapState,mapDispatch)(Login)