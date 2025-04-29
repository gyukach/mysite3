import '../../assets/style/components/aboutMe/AboutMe.css';
import React from 'react';
import useAboutMe from '../../hooks/aboutMe/useAboutMe';

const AboutMe = () => {
    // 커스텀 훅 사용
    const {
        isDarkMode,
        toggleDarkMode,
        profileInfo,
        education,
        skills,
        interests
    } = useAboutMe();

    return (
        <div className={`introduce-container ${isDarkMode ? 'dark' : ''}`}>
            <div className="theme-toggle">
                <button onClick={toggleDarkMode}>
                    {isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
                </button>
            </div>
            
            <section className="profile-section">
                <div className="profile-image">
                    <div className="image-placeholder"></div>
                </div>
                <div className="profile-info">
                    <h2>{profileInfo.name}</h2>
                    <p className="profile-title">{profileInfo.title}</p>
                    <p className="profile-description">
                        안녕하세요! 저는 웹 개발에 열정을 가진 고등학생입니다. 
                        사용자 친화적인 웹 애플리케이션을 만드는 것이 제 목표입니다. 
                        새로운 기술을 배우는 것을 좋아하며, 특히 React와 같은 
                        프론트엔드 프레임워크에 관심이 많습니다.
                    </p>
                    <p className="profile-description">
                        학교에서 배운 지식을 바탕으로 여러 개인 프로젝트를 진행하며 실력을 쌓고 있습니다.
                        다양한 프로젝트를 통해 문제 해결 능력과 창의적 사고를 키우고 있습니다.
                    </p>
                    <div className="contact-info">
                        <p><strong>이메일:</strong> {profileInfo.email}</p>
                        <p><strong>위치:</strong> {profileInfo.location}</p>
                    </div>
                </div>
            </section>

            <section className="education-section">
                <h2>교육</h2>
                <div className="education-list">
                    {education.map(item => (
                        <div className="education-item" key={item.id}>
                            <div className="education-period">{item.period}</div>
                            <div className="education-details">
                                <h3>{item.school}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="skills-section">
                <h2>기술 스택</h2>
                <div className="skills-list">
                    {skills.map(skill => (
                        <div className="skill-item" key={skill.id}>
                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percentage">{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="interests-section">
                <h2>관심 분야</h2>
                <div className="interests-list">
                    {interests.map(interest => (
                        <div className="interest-item" key={interest.id}>
                            <h3>{interest.title}</h3>
                            <p>{interest.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default AboutMe;