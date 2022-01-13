import React, { Component } from 'react'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div className="home_container">                                                                       
                <div className="content">
                    <p>Chào mừng đến với TinkerGarden</p>
                    <p>Mở cửa các ngày trong tuần</p>
                    <p>trừ các ngày lễ</p>
                </div>
                <div className="news_event">
                    <div className="news">
                        <p>Tin tức</p>                     
                        <div className='part'>
                            <div className='tt'><a href="##">Tiêu đề 1</a></div>
                            <div className='time'>comingsoon</div>
                        </div>
                        <div className='part'>
                            <div className='tt'><a href="##">Tiêu đề 2</a></div>
                            <div className='time'>comingsoon</div>
                        </div>
                        <div className='part'>
                            <div className='tt'><a href="##">Tiêu đề 3</a></div>
                            <div className='time'>comingsoon</div>
                        </div>
                    </div>
                    <div className="news">
                        <p>Sự kiện mới</p> 
                        <div className='part'>
                            <div className='tt'><a href="##">sự kiện 1</a></div>
                            <div className='time'>comingsoon</div>
                        </div>
                        <div className='part'>
                            <div className='tt'><a href="##">sự kiện 2</a></div>
                            <div className='time'>comingsoon</div>
                        </div>
                        <div className='part'>
                            <div className='tt'><a href="##">sự kiện 3</a></div>
                            <div className='time'>comingsoon</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
