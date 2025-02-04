import './PanelLaguage.scss';

import {useDispatch, useSelector} from 'react-redux';

import {isRU, isEN} from '../../slices/languageSlice';

const PanelLaguage = () => {
    const dispatch = useDispatch();
    
    return (
        <div className='panel-language'>
            <button type="button" onClick={()=>dispatch(isRU())}>RU</button>
            <button type="button" onClick={()=>dispatch(isEN())}>EN</button>
        </div>
    );
};

export default PanelLaguage;