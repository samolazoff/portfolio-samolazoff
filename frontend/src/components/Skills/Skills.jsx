import './Skills.scss';

import imgHtml from '../../assets/svg/html-5.svg';
import imgJs from '../../assets/svg/js.svg';
import imgCss from '../../assets/svg/css-3-svgrepo-com.svg';
import imgReact from '../../assets/svg/react-svgrepo-com.svg';
import imgNode from '../../assets/svg/nodejs-svgrepo-com.svg';
import imgRedux from '../../assets/svg/redux-svgrepo-com.svg';
import imgFigma from '../../assets/svg/figma-svgrepo-com.svg';
import imgSass from '../../assets/svg/sass-svgrepo-com.svg';
import imgPug from '../../assets/svg/pug-svgrepo-com.svg';
import imgNpm from '../../assets/svg/npm-svgrepo-com.svg';
import imgMongo from '../../assets/svg/mongo-svgrepo-com.svg';
import imgBoots from '../../assets/svg/bootstrap-svgrepo-com.svg';
import imgTail from '../../assets/svg/tailwind-svgrepo-com.svg';
import imgGit from '../../assets/svg/git-svgrepo-com.svg';

function itemskills(name, img) {
    return(
        <li className="item" key={name}>
            <img src={img} alt={name} title={name}/>
        </li>
    )
};

const Skills = () => {
    
    const imgArr = [
        {
            name: 'Html5',
            img: imgHtml
        },
        {
            name: 'CSS3',
            img: imgCss
        },
        {
            name: 'JS',
            img: imgJs
        },
        {
            name: 'ReactJs',
            img: imgReact
        },
        {
            name: 'NodeJs',
            img: imgNode
        },
        {
            name: 'Redux',
            img: imgRedux
        },
        {
            name: 'Figma',
            img: imgFigma
        },
        {
            name: 'Sass',
            img: imgSass
        },
        {
            name: 'Pug',
            img: imgPug
        },
        {
            name: 'npm',
            img: imgNpm
        },
        {
            name: 'MongoDB',
            img: imgMongo
        },
        {
            name: 'Bootstrap',
            img: imgBoots
        },
        {
            name: 'Tailwind',
            img: imgTail
        },
        {
            name: 'Git',
            img: imgGit
        },
    ];

    return (
        <section className='skills'>
        <h2 className="title-box">Skills</h2>
        <ul className="skills-items">
            {
                imgArr.map((item) => {
                    return (
                        itemskills(item.name, item.img)
                    )
                })
            }
            
        </ul>

    </section>
    );
};

export default Skills;