import styled from 'styled-components'

export const TopicWrapper = styled.div`
    z-index:0;
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    top:56px;
`
export const BoxTop = styled.div`
    position:relative;
    margin:0 auto;
    padding-top:30px;
    padding-bottom:50px;
    width:960px;
    height:100px;
    border-radius:6px;
    .banner{
        width:100%;
        min-height:100px;
    }
    .help{
        position:absolute;
        top:68px;
        right:30px;
        width:174px;
        height:25px;
        font-size:17px;
        font-weight:400px;
        color:#fff;
        cursor:pointer;
    }
`
export const TitleWrapper = styled.ul`
    width:960px;
    height:46px;
    margin:50px auto;
    margin-bottom:20px;
    overflow:hidden;
    text-align:left;
    border-bottom:1px solid #f0f0f0;
`
export const ListTittle = styled.li`
    position:relative;
    display:inline-block;
    padding:8px 0;
    line-height:20px;
    margin-bottom:-1px;
    list-style:none;
    color:#646464;
    .title{
        padding:13px 20px;
        font-size:15px;
        font-weight:700;
        color:#969696;
        line-height:25px;
        cursor:pointer;
        .iconfont{
            margin-right:5px;
            font-size:17px;
        }
    }
    &.active{
        border-bottom:2px solid #646464;
        .title{
            color:#646464;
        }
    }
`
export const ListWrapper = styled.div`
    width:990px;
    margin: 60px auto;
`
export const ListItem = styled.div`
    width:30%;
    height: 280px;
    float:left;
    position:relative;
    margin-right:3%;
    margin-bottom:7%;
    padding:0 15px;
    text-align:center;
    background:#eee;
    border:1px solid #eee;
    hr{
        border-color:#eaeaea;
        margin-top:20px;
        margin-bottom:20px;
        border:0;
        border-top:1px solid #eee;
    }
`
export const ItemDesc = styled.div`
    cursor:pointer;
    color:#333;
    .avatar{
        width:80px;
        height:80px;
        margin:-40px 0 10px;
        display:inline-block;
        border-radius:8px;
        border:1px solid #ddd;
        background-color:#fff;
    }
    .name{
        font-size:21px;
        font-weight:700;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        margin-top:10px;
        margin-bottom:10px;
    }
    .desc{
        min-height:55px;
        font-size:13px;
        line-height:25px;
        margin:0 0 10px;
    }
    .
`
export const ItemFollow = styled.div`
    width:100px;
    padding:8px 0;
    border-color:#42C02E;
    font-size:16px;
    font-weight:400px;
    border-radius:40px;
    color:#fff;
    background-color:#42C02E;
    display:inline-block;
    cursor:pointer;
`
export const ItemCount = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-bottom:20px;
`