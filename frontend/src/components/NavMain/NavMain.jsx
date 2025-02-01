import './NavMain.scss';

import { useEffect } from 'react';

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

export const NavMain = (props) => {
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