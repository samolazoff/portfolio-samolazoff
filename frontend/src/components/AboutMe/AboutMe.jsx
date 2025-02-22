import './AboutMe.scss';

import BigUserImg from '../BigUserImg/BigUserImg';

import { useNavigate } from 'react-router-dom';

const AboutMe = () => {
    const navigate = useNavigate();
    return (
        <section className='about-me'>
            <div className="block-user">
                <BigUserImg/>
                <div className="block-user-btn-wrap">
                    <button type='button' className='button_accent' onClick={() => navigate('/contacts')}>Go for it</button>
                    <button type='button' onClick={() => navigate('/portfolio')}>My project</button>
                </div>
            </div>
            <div className="about-me-content-wrap">
                <div className="about-me-content">
                    <h2 className="title-box">About Me</h2>
                    <p className="about-me-content__txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime sint quisquam delectus. Esse, ipsam repellendus nam incidunt consequatur vero consequuntur beatae corporis veritatis possimus architecto amet. Earum obcaecati ipsa fuga?</p>
                </div>
                <div className="about-me-content">
                    <p className="about-me-content__txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime sint quisquam delectus. Esse, ipsam repellendus nam incidunt consequatur vero consequuntur beatae corporis veritatis possimus architecto amet. Earum obcaecati ipsa fuga?</p>
                </div> 
            </div>
        </section>
    );
};

export default AboutMe;