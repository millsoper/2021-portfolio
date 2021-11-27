import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Lines } from '../components/Lines'

class Home extends React.Component {
    render() {
        return (
            <div className="home-wrapper">
                <Lines />
                <div className="title-block">
                    <div className="text-block">
                        <p>Hi, I'm Mill</p>
                    </div>
                    <div className="button-wrapper">
                    <Link className="button" to="/projects">projects</Link>
                    <Link className="button" to="/about">about</Link>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;