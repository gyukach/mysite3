import { useState, useEffect, useMemo } from "react";

function useAboutMe() {
    const [isDarkMode, setIsDark] = useState(false);

    const [profileInfo, setProfileInfo] = useState({
        name: "홍길동",
        title: "프론트앤드 개발자 지망생",
        email: "example@email.com",
        location: "서울시 OO구"
    });

    const education = useMemo(() => [
        {
            id: 1,
            school: "OO고등학교",
            period: "2022 - 현재",
            description: "정보통신 특성화 전공"
        },
        {
            id: 2,
            school: "OO중학교",
            period: "2019 - 2022",
            description: "코딩 동아리 활동"
        }
    ], []);

    const skills = useMemo(() => [
        { id: 1, name:"HTML", level: 90},
        { id: 2, name:"CSS", level: 85},
        { id: 3, name:"JavaScript", level: 80},
        { id: 4, name:"React", level: 75},
        { id: 5, name:"UI/UX Design", level: 70}
    ], []);

    const interests = useMemo(() => [
        {
            id: 1,
            title: "웹 개발",
            description: "반응형 웹사이트 및 웹 애플리케이션 개발"
        },
        {
            id: 2,
            title: "UI/UX 디자인",
            description: "사용자 중심의 직관적인 인터페이스 설계"
        },
        {
            id: 3,
            title: "프론트엔드 프레임워크",
            description: "React, Vue 등의 최신 프레임워크 학습"
        }
    ], []);

    useEffect(() => {
        if(isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const UpdateProfileInfo = (newInfo) => {
        setProfileInfo({...profileInfo, ...newInfo});
    };

    return {
        isDarkMode,
        toggleDarkMode,
        profileInfo,
        UpdateProfileInfo,
        education,
        skills,
        interests
    };
}

export default useAboutMe;