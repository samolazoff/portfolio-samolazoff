import './Portfolio.scss';

import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';

const Portfolio = () => {

    const dataPortfolio =  [
        {
            title: 'test',
            link: 'nttp://test.com',
            description: "Jkjldkfm jlyf pfsdasda sdsdsa dd sdasddsddasdd asd ds ddsdd dda ddsddasd f dsfsdf dsfsf dfdsfdfsdfdsf fsf dfg gfgs fgs fgsfg sfg sfg sfgsfdg sdgfg gfdgdfgsfgs gfgsgsfg ff gfgf fsfgff fdfdfdfd dgfh sg hs m,fdf gfkmys d hjn lf dtctksq cdbn. Ghjrfnbkfcm lehyfz ckfdf xnj gj[f,ys z crfylfkbcn",
            img: '',
            note: 'learning',
            id: 'dadas'
        },
        {
            title: 'test',
            link: 'nttp://test.com',
            description: "Jkjldkfm jlyf pfm,fdf gfkmys d hjn lf dtctksq cdbn. Ghjrfnbkfcm lehyfz ckfdf xnj gj[f,ys z crfylfkbcn",
            img: '',
            note: 'comertial',
            id: 'dadas'
        },
        {
            title: 'test',
            link: 'nttp://test.com',
            description: "Jkjldkfm jlyf pfm,fdf gfkmys d hjn lf dtctksq cdbn. Ghjrfnbkfcm lehyfz ckfdf xnj gj[f,ys z crfylfkbcn",
            img: '',
            note: 'learning',
            id: 'dadas'
        },
        {
            title: 'test',
            link: 'nttp://test.com',
            description: "Jkjldkfm jlyf pfm,fdf gfkmys d hjn lf dtctksq cdbn. Ghjrfnbkfcm lehyfz ckfdf xnj gj[f,ys z crfylfkbcn",
            img: '',
            note: 'learning',
            id: 'dadas'
        }
    ]
    
    return (
        <section className='portfolio'>
            <h2 className="title-box">Portfolio</h2>
            <ul className="portfolio-content">
                {
                    dataPortfolio.map((card,index) => (
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