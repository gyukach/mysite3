import { useState, useEffect, useMemo } from "react";
import Ronaldo from '../../assets/images/ronaldo.png'
import Messi from '../../assets/images/messi.png'
import Neymar from '../../assets/images/neymar.png'
import Suarez from '../../assets/images/suarez.png'

function useHome() {
    const allProjects = useMemo(() => [
        {
            id: 1,
            title: "Weather App",
            description: "React 기반 날씨 앱 프로젝트",
            image: Ronaldo,
            category: "Web",
            link: "https://example.com/weather-app"
        },
        {
            id: 2,
            title: "Todo List",
            description: "리액트 상태관리를 배운 TODO 리스트",
            image: Messi,
            category: "Web",
            link: "https://example.com/weather-app"
        },
        {
            id: 3,
            title: "Portfolio Site",
            description: "나의 작업을 보여주는 포트폴리오",
            image: Neymar,
            category: "Web",
            link: "https://example.com/weather-app"
        },
        {
            id: 4,
            title: "Mobile UI Design",
            description: "모바일 앱 UI/UX 디자인",
            image: Suarez,
            category: "Design",
            link: "https://example.com/weather-app"
        }
    ], []);

    const [projects, setProjects] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProjects(allProjects);
        }, 500);

        return () => clearTimeout(timer);
    }, [allProjects]);

    useEffect(() => {
        if (activeCategory === 'All') {
            setProjects(allProjects);
        } else {
            const filtered = allProjects.filter(project => project.category === activeCategory);
            setProjects(filtered);
        }
    }, [activeCategory, allProjects]);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return {
        projects,
        activeCategory,
        handleCategoryChange,
        isDarkMode,
        toggleDarkMode
    };
}

export default useHome;