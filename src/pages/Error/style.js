import styled from 'styled-components'
import logoPic from '../../static/error_logo.png'
import errImg from '../../static/404.png'
export const ErrorWrapper = styled.div`
    z-index:999;
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    top:0px;
    background:#eee;
`
export const ErrorLogo = styled.div`
    position:absolute;
    left:40px;
    top:40px;
    width:300px;
    height:41px;
    background:url(${logoPic});
    background-size:contain;
    cursor:pointer;
`
export const ErrorBox = styled.div`
    padding-top:80px;
    padding:bottom:20px;
    margin:0 auto;
    text-align:center;
`
export const Img = styled.div`
    display:inline-block;
    width:220px;
    height:198px;
    background:url(${errImg});
    background-size:contain;
`
export const Title = styled.h3`
    margin:40px 0 20px 0;
    font-weight:bold;
    display:block;
    font-size:1.17em;
`
export const Reason = styled.div`
    margin:10px 0 30px 0;
    font-size:14px;
`
export const Button = styled.div`
    padding:13px 0;
    width:160px;
    border-radius:40px;
    color:#fff;
    background-color:#42C02E;
    border-color:#42C02E;
    display:inline-block;
    text-align:center;
    vertical-align:center;
    cursor:pointer;
    border:1px solid transparent;
    white-space:nowrap;
`