import styled from 'styled-components'

export const DownloadWrapper = styled.div`
    z-index:0;
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    top:56px;
    background:#eee;
`
export const BoxItem = styled.div`
    position:relative;
    margin-top:50px;
    text-align:center;
    .top{
        margin-bottom:40px;
        .logo{
            width:100px;
            height:100px;
        }
        .info{
            display:inline-block;
            margin-left:20px;
            text-align:left;
            .title{
                font-size:30px;
            }
            .slogan{
                font-size:24px;
                font-weight:300;
            }
        }
    }
    .bg-img{
        margin-top:-100px;
        width:765px;
        height:172px;
        position:absolute;
        left:50%;
        margin-left:-380px;
        z-index:-1;
    }
    .ph-img{
        width:410px;
        height:314px;
    }
    .bottom{
        display:inline-block;
        margin:0 0 40px 40px;
        vertical-align:bottom;
        text-align:left;
        .qrcode{
            margin-left:-2px;
            width:140px;
            height:140px;
        }
        .title{
            margin-top:4px;
            font-size:24px;
        }
        .desc{
            margin-top:4px;
            font-size:16px;
            font-weight:300;
        }
    }
`
