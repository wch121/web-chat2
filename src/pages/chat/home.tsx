import "./home.less"
import React from 'react'
import Sidebar from './components/Siderbar'
import Chat from './components/Chat'


const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default Home