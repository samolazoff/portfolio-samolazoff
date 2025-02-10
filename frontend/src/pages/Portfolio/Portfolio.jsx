import './Portfolio.scss';

import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';

import dataProjects from '../../data/projects.json'

const Portfolio = () => {

    const {projects} = dataProjects;
    
    return (
        <section className='portfolio'>
            <h2 className="title-box">Portfolio</h2>
            <ul className="portfolio-content">
                {
                    projects.map((card,index) => (
                        <li key={index}>
                            <PortfolioCard card={card}></PortfolioCard>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

export default Portfolio;