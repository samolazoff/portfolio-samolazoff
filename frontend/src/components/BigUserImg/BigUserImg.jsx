import './BigUserImg.scss';

import userImg from '../../assets/svg/users-avatar-svgrepo-com.svg'

const BigUserImg = () => {
    return (
        <div className='big-user-wrap'>
            <img src={userImg} alt="user img" />    
        </div>
    );
};

export default BigUserImg;