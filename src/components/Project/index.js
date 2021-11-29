import React, { useState } from 'react';
import { Cheese, Branch, StarMap, Radio } from '../../images';
import { Lines } from '../Lines';

export const Project = ({projectName, copy, codeUrl, liveUrl}) => {

    const [isOpen, setIsOpen] = useState(false);
    const images = {
        wavy: <Radio />,
        mousetrap: <Cheese />,
        starchart: <StarMap />,
        romanholiday: <Branch />,
        lines: <Lines strokeColor="black"/>
    }

    const trimmedName = projectName.replace(' ', '');

    return (
        <div className={`project ${trimmedName} ${isOpen ? 'open': ''}`}
             onClick={() => { setIsOpen(!isOpen)}} 
        >
            <div className="project-image" id={trimmedName}>
                { images[trimmedName]}
            </div>
            <div className="project-text-box">
                <p>
                    <span className="project-name">{projectName}</span>
                    {` ${copy}`}
                </p>
                <div className="link-container">
                    <a className="button" href={liveUrl}>live</a>
                    <a className="button" href={codeUrl}>code</a>
                </div>
            </div>
        </div>
    )
}