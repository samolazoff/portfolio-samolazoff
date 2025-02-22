import './PortfolioCard.scss';

import { Link } from 'react-router-dom';

const PortfolioCard = (props) => {

    const {title, link, description, note, id} = props.card;

    return (
        <div className='portfolio-card' id={id}>
                <iframe src={link}></iframe>
                <Link className="portfolio-card-review" to={link}>
                    <span className="title">{title}</span>
                    <span className="txt">{description}</span>
                    <span className="commit">{`Notes: ${note}`}</span>
                </Link>
                
        </div>
    );
};

export default PortfolioCard;