import './style.css';
import CookieImage from '../../assets/cookie.svg';
import CloseImage from '../../assets/close.svg';

export default function CookieAlert() {
    return (
        <div className="cookie-card">
            <img className='cookie-img' src={CookieImage} alt="Cookie" />
            <img className='close-img cookie-close' src={CloseImage} alt="Close" />
            <p>Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.</p>
            <button className='btn-accept-cookies'>Tudo bem!</button>

        </div>
    );
}

