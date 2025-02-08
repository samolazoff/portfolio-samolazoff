import './SocialMedia.scss';

import {Link} from 'react-router-dom';

import gitSvg from '../../assets/svg/github.svg';
import lnSvg from '../../assets/svg/linkedin.svg';
import instSvg from '../../assets/svg/instagram.svg';
import vkSvg from '../../assets/svg/vk-svgrepo-com.svg';

const SocialMedia = () => {

    const dataSvg = [
        {
            svg: gitSvg,
            link: 'https://github.com/samolazoff'
        },
        {
            svg: lnSvg,
            link: 'https://www.linkedin.com/in/raman-samalazau-a191a9285/'
        }, 
        {
            svg: instSvg,
            link: 'https://www.instagram.com/'
        }, 
        {
            svg: vkSvg,
            link: 'https://vk.com/'
        }
    ];

    return (
        <ul className='social-media'>
            {
                dataSvg.map((item, index) => (
                    <li key={index}>
                        <Link to={item.link}>
                            <img src={item.svg} alt="svg" />
                        </Link>
                    </li>
                    
                ))
            }
        </ul>
    );
};

export default SocialMedia;