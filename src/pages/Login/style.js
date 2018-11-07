import styled from 'styled-components'

export const LoginWrapper = styled.div`
    z-index:1;
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    background:#eee;
`
export const Logo = styled.div`
    position:absolute;
    width:100px;
    top:56px;
    margin-left:50px;
`
export const LoginBox = styled.div`
    width: 400px;
    height: 280px;
    margin: 200px auto;
    padding-top: 20px;
    border-radius:20px;
    background: #fff;
    box-shadow:0 0 8px rgba(0,0,0,.1);
    .iconfont{
        position:absolute;
        left:50%;
        margin-left:-125px;
        color:#969696;
        font-size:18px;
    }
`
export const Title = styled.div`
    width: 100px;
    height: 40px;
    margin:20px auto;
    padding-bottom:5px;
    text-align:center;
    color:#ea6f5a;
    font-size:20px;
    font-weight:700;
    border-bottom:2px solid #ea6f5a;
`
export const Input = styled.input`
    display: block;
    width: 200px;
    height: 30px;
    border-radius:10px;
    line-height:30px;
    padding: 0 10px;
    margin: 25px auto;
`
export const Button = styled.div`
    width:220px;
    height:40px;
    line-height:40px;
    color:#fff;
    font-size:20px;
    background: #3194d0;
    border-radius:15px;
    margin:10px auto;
    text-align: center;
`