import './Contacts.scss';

import FormConnect from '../FormConnect/FormConnect';

const Contacts = () => {
    return (
        <section className='contacts'>
            <h2 className="title-box">Contacts</h2>
            <div className="contacts-wrap">
                <div className="block-addresses">
                    <h3 className='subtitle-block'>Connect with Me</h3>
                    <div className='address'>
                        <span className="address_title">Mobile:</span>
                        <address> +375445576259</address>
                    </div>
                    <div className='address'>
                        <span className="address_title">Email:</span>
                        <address>samolazov.roman.alex@gmail.com</address>
                    </div>
                    <div className='address'>
                        <span className="address_title">Skype:</span>
                        <address>samolazov.roman.alex</address>
                    </div>
                    <div className='address'>
                        <span className="address_title">Telegrame:</span>
                        <address>@samolazoff</address>
                    </div>
                    <div className="block-social-media">

                    </div>
                </div>
                <FormConnect/> 
            </div>
        </section>
    );
};

export default Contacts;