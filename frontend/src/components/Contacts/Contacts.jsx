import './Contacts.scss';

import FormConnect from '../FormConnect/FormConnect';

import mobileImg from '../../assets/svg/mobile-phone-signal-svgrepo-com.svg';
import mailImg from '../../assets/svg/email-opened-svgrepo-com.svg';
import skypeImg from '../../assets/svg/skype-color-svgrepo-com.svg';
import telegImg from '../../assets/svg/telegram-svgrepo-com.svg';

const Contacts = () => {
    return (
        <section className='contacts'>
            <h2 className="title-box">Contacts</h2>
            <div className="contacts-wrap">
                <div className="block-addresses">
                    <h3 className='subtitle-block'>Connect with Me</h3>
                    <div className='address'>
                        <img src={mobileImg} alt="svg" />
                        <span className="address_title">Mobile:</span>
                        <address> +375445576259</address>
                    </div>
                    <div className='address'>
                        <img src={mailImg} alt="svg" />
                        <span className="address_title">Email:</span>
                        <address>samolazov.roman.alex@gmail.com</address>
                    </div>
                    <div className='address'>
                        <img src={skypeImg} alt="svg" />
                        <span className="address_title">Skype:</span>
                        <address>samolazov.roman.alex</address>
                    </div>
                    <div className='address'>
                        <img src={telegImg} alt="svg" />
                        <span className="address_title">Telegrame:</span>
                        <address>@samolazoff</address>
                    </div>
                    <div className="block-social-media">
                    </div>
                </div>
                <div className="form-connect-wrap">
                    <h3 className='subtitle-block'>Connect with Your</h3>
                    <FormConnect/> 
                </div>
            </div>
        </section>
    );
};

export default Contacts;