import React from 'react';
import '../../assets/style/pages/aboutMe/AboutMePage.css';
import AboutMe from '../../components/aboutMe/AboutMe';

const AboutMePage = () => {
    return (
        <div className="introduce-page">
            <div className="introduce-header">
                <h1>About Me</h1>
                <p className="subtitle">개발자의 꿈을 향해 나아가는 여정</p>
            </div>
            <AboutMe />
        </div>
    );
};

export default AboutMePage;