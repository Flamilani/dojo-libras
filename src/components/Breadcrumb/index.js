import { Link } from 'react-router-dom';
import { BsArrowLeftSquareFill } from 'react-icons/bs';
import './style.css';

export function Breadcrumb(props) {
    return (
        <div className={props.styles}>
            <Link className="linkTop" to={props.link}>
                <BsArrowLeftSquareFill />
            </Link>
            <span>{props.title}</span>
        </div>
    )
}