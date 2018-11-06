import styled from 'styled-components'

export const HomeWrapper = styled.div`
    // overflow:hidden;
    width: 960px;
    margin: 0 auto;
`
export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
`
export const HomeRight = styled.div`
    float:right;
    width:280px;
`
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom:1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    float:left;
    height: 32px;
    line-height: 32px;
    margin-left:18px;
    margin-bottom: 18px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic{
        display:block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right:10px;
    }
`
export const ListItem = styled.div`
    overflow: hidden;
    padding:20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display: block;
        width: 125px;
        height: 100px;
        float:right;
        border-radius:10px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight:bold;
        color: #333;
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`
export const RecommendWrapper = styled.div`
    margin:30px 0;
    width: 280px;
`
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin-bottom:6px;
    background:url(${(props)=>props.imgUrl});
    background-size:contain;
    
`
export const WriterWrapper = styled.div`
    position:relative;
    width:278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    padding:5px;
    .title-left{
        position:absolute;
        top:0;
        left:0;
        margin:5px;
        font-size:14px;
        color:#969696;
    }
    .title-right{
        position:absolute;
        top:0;
        right:0;
        margin:5px;
        font-size:14px;
        color:#969696;
    }
`
export const WriterItem = styled.div`
    margin-top:25px;
    line-height:20px;
    box-sizing:border-box;
    .itemwrapper{
        float:left;
        width:48px;
        height:48px;
        margin-right:10px;
        cursor:pointer;
    }
    .follow{
        float:right;
        display:inline-block;
        margin-top:5px;
        font-size:13px;
        color:#42c02e;
    }
    .avatar{
        width:48px;
        height:48px;
        border:1px solid #ddd;
        border-radius:50%;
    }
    .writer{
        font-size:14px;
        color:#333;
        cursor:pointer;
        margin-left:5px;
    }
    .detail{
        color:#969696;
        font-size:13px;
    }
`
export const LoadMore = styled.div`
    width:100%;
    height: 40px;
    line-height: 40px;
    margin:30px 0;
    background: #42C02E;
    text-align:center;
    border-radius:20px;
    color:#fff;
    cursor:pointer;    
`
export const BackTop = styled.div`
    position:fixed;
    width:60px;
    height: 60px;
    line-height:60px;
    text-align:center;
    bottom:30px;
    right:30px;
    border:1px solid #ccc;
    font-size:30px;
    font-weight:bold;
    color:#2f2f2f;
    cursor:pointer;
`

export const CarouselWrapper = styled.div`
   position:relative;
   padding-top:5px;
   padding-right:0;
   margin-bottom:35px;
   border-radius:15px;
   overflow:hidden;
   z-index:1000;
   .banner-img{
        width: 625px;
        height: 270px;
   }
`
export const ArrowLeft = styled.div`
    position:absolute;
    width:40px;
    height:50px;
    top:40%;
    left:auto;
    right:0;
    color:#fff;
    text-align:center;
    vertical-align:center;
    text-shadow:0 1px 2px rgba(0,0,0,.6);
    background-color:rgba(0,0,0,.4);
    cursor:pointer;
     .iconfont{
        font-size:30px;
        font-weight:bold;
    }
`
export const ArrowRight = styled.div`
    position:absolute;
    width:40px;
    height:50px;
    top:40%;
    left:0;
    color:#fff;
    text-align:center;
    vertical-align:center;
    text-shadow:0 1px 2px rgba(0,0,0,.6);
    background-color:rgba(0,0,0,.4);
    cursor:pointer;
    .iconfont{
        font-size:25px;
        font-weight:bold;
    }
`
