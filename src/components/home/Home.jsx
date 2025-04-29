import '../../assets/style/components/home/Home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import useHome from '../../hooks/home/useHome';

const Home = () => {
	// hook에서 함수를 가져와서 사용
	const {
		projects,
		activeCategory,
		handleCategoryChange,
		isDarkMode,
		toggleDarkMode
	} = useHome();

	return (
		<div className={`home-container ${isDarkMode ? 'dark' : ''}`}>
			<section className="intro-preview">
				<div className="theme-toggle">
					<button onClick={toggleDarkMode}>
						{isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
					</button>
				</div>
				<h2>Hello, I'm [Yoo Young Su]</h2>
				<p>웹 개발과 디자인에 관심이 많은 학생입니다.
					창의적인 솔루션을 통해 사용자 경험을 개선하는 것을 좋아합니다.</p>
				<Link to="/about-me" className="read-more">더 알아보기 →</Link>
			</section>

			<section className="projects-section">
				<h2>Featured Projects</h2>
				<div className="project-filters">
					<button
						className={activeCategory === 'All' ? 'active' : ''}
						onClick={() => handleCategoryChange('All')}
					>
						All
					</button>
					<button
						className={activeCategory === 'Web' ? 'active' : ''}
						onClick={() => handleCategoryChange('Web')}
					>
						Web
					</button>
					<button
						className={activeCategory === 'Design' ? 'active' : ''}
						onClick={() => handleCategoryChange('Design')}
					>
						Design
					</button>
				</div>
				<div className="project-cards">
					{projects.length > 0 ? (
						projects.map(project => (
							<div className="project-card" key={project.id}>
								<div className="project-image">
									<img src={project.image} alt={project.title} />
								</div>
								<div className="project-info">
									<h3>{project.title}</h3>
									<p>{project.description}</p>
									<Link to={project.link} target="_blank"
										rel="noopener noreferrer" className="view-button">
										View Project Link
									</Link>
								</div>
							</div>
						))
					) : (
						<p className="loading-message">프로젝트를 로딩 중입니다...</p>
					)}
				</div>
				<Link to="/gallery" className="see-all">모든 프로젝트 보기 →</Link>
			</section>

			<section className="latest-posts">
				<h2>Latest Posts</h2>
				<div className="post-preview">
					<h3>React 학습기</h3>
					<p>리액트를 배우면서 겪은 시행착오와 배운 점들을 공유합니다.</p>
					<Link to="/blog" className="read-post">읽어보기 →</Link>
				</div>
			</section>
		</div>
	);
}

export default Home;