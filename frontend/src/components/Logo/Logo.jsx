import { MdPushPin } from "react-icons/md";
import { AiFillPushpin } from "react-icons/ai";

import './Logo.scss';

const Logo = () => {
    return (
        <h1 className="logo">
            <AiFillPushpin className="pushPin pushPin_green"></AiFillPushpin>
            <MdPushPin className="pushPin pushPin_yellow"></MdPushPin>
            <MdPushPin className="pushPin pushPin_red"></MdPushPin>
        </h1>
    );
};

export default Logo;