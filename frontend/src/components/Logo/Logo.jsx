import { MdPushPin } from "react-icons/md";

import './Logo.scss';

const Logo = () => {
    return (
        <h1 className="logo">
            <MdPushPin className="pushPin pushPin_green"></MdPushPin>
            <MdPushPin className="pushPin pushPin_yellow"></MdPushPin>
            <MdPushPin className="pushPin pushPin_red"></MdPushPin>
        </h1>
    );
};

export default Logo;