import React,{PureComponent} from 'react'
import {DownloadWrapper,BoxItem} from './style'


class Download extends PureComponent{
    render() {
        return (
            <DownloadWrapper>
                <BoxItem>
                    <div className="top">
                        <img className="logo" src="//cdn2.jianshu.io/assets/web/misc-logo-805143ddec2e594416e891df316a73a7.png" alt=""/>
                        <div className="info">
                            <div className="title">创作你的创作</div>
                            <div className="slogan">一个优质创作社区</div>
                        </div>
                    </div>
                    <img className="bg-img" src="//cdn2.jianshu.io/assets/web/misc-background-2bd0f42d30ede727ef60751e6572e740.png" alt="" />
                    <img className="ph-img" src="//cdn2.jianshu.io/assets/web/misc-phone-69b812fa6eb049ce4a32ec03ab30416c.png" alt="" />
                    <div className="bottom">
                        <img className="qrcode" src="//cdn2.jianshu.io/assets/web/download-apps-page-top-qrcode-92108f625f507613863b730c74ebf235.png" alt="" />
                        <div className="title">扫码下载简书App</div>
                        <div className="desc">随时随地发现和创作内容</div>
                    </div>
                </BoxItem>
            </DownloadWrapper>
        )
    }
}

export default Download