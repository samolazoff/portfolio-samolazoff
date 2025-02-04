import './NavMain.scss';

import {useSelector} from 'react-redux';

import NavItem from '../NavItem/NavItem';

export const NavMain = (props) => {
    const data = useSelector((state) => state.language.dataLanguage.navMain);
    const {widthWindow} = props;
return (
    <ul className={
        (!widthWindow)?('nav-main nav-main_big'):('nav-main nav-main_small')
    }
    >
        {
            data.map((item, index) => {
                const {title, path} = item;
                return (
                    <NavItem title={title} path={path} key={index}/>
                )
            })
        }
    </ul>
)
};