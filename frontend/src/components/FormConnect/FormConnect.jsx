import './FormConnect.scss';

import { useState } from 'react';

function FormConnect() {

    const [value, setValue] = useState('');

    const options = [
        {label: "Mobile Phone", value: "phone", placeholder: 'Enter your phone number'},
        {label: "Email", value: "email", placeholder: 'Enter your email'},
        {label: "Skype", value: "skype", placeholder: 'Enter your skype'},
        {label: "Another way", value: "anotherWay", placeholder: 'Enter your another way'}
    ];

    function handelSelect(event){
        setValue(event.target.value)
    };

    function chouseInput(value){
        switch (value) {
            case 'phone':
               return(
                    <div className="box-input">
                        <label htmlFor="contactPhone">Your contact phone number</label>
                        <input type="phone" name="contactPhone" id="contactPhone" required placeholder='Enter your phone number'/>
                    </div>
                    );
            case 'email':
                return(
                    <div className="box-input">
                        <label htmlFor="contactMail">Your contact email</label>
                        <input type="email" name="contactMail" id="contactMail" placeholder='Enter your email'required />
                    </div>
                );
            case 'skype':
                return(
                    <div className="box-input">
                        <label htmlFor="contactSkype">Your contact Skype</label>
                        <input type="text" name="contactSkype" id="contactSkype" placeholder='Enter your skype' required/>
                    </div>
                );
            case 'anotherWay':
                return(
                    <div className="box-input">
                        <label htmlFor="contactPhone">Specify another way</label>
                        <input type="text" name="contactPhone" id="contactPhone" placeholder='Enter your another way' required />
                    </div>
                )
            default:
                return(
                    <div className="box-input">
                        <label htmlFor="contactPhone">Your contact phone number</label>
                        <input type="phone" name="contactPhone" id="contactPhone" placeholder='Enter your email'required/>
                    </div>
                )
        }
    };

    return(
   
        <form className='form-connection' method="post">
            <div className="box-input">
                <label htmlFor="contactName">Contact's name</label>
                <input type="text" name="contactName" id="contactName" required placeholder='What is your name?'/>
            </div>
            <div className="box-input">
                <label htmlFor="bestContact">The best way for contact with you</label>
                <select name="bestContact" id="bestContact" onChange={handelSelect}>
                    {
                        options.map (option => 
                            (
                                <option value={option.value} key={option.value}>{option.label}</option>
                            )
                        )
                    }
                    
                </select>
                
            </div>
            {
                chouseInput(value)
            }
            <button type="submit">Sent</button>
        </form>
    )
};

export default FormConnect;