import './NavMain.scss';

import NavItem from '../NavItem/NavItem';

const data = [
    {
        title: 'home',
        path: ''
    },
    {
        title: 'portfolio',
        path: 'portfolio'
    },
    {
        title: 'blog',
        path: 'blog'
    },
    {
        title: 'skills',
        path: 'skills'
    },
    {
        title: 'contscts',
        path: 'contscts'
    }
];

    export const NavMain = () => {
    return (
        <ul className="nav-main">
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