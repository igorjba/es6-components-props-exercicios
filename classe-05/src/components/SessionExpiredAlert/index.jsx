import './style.css';
import AlertImage from '../../assets/alert.svg';
import CloseImage from '../../assets/close.svg';

export default function SessionExpiredAlert() {
    return (
        <div className="alert-card">
            <img className='alert-img' src={AlertImage} alt="Alert" />
            <img className='close-img alert-close' src={CloseImage} alt="Close" />
            <p>Você será descolgado imediatamente!</p>
            <button className='btn-extend-login' >Extender login</button>


        </div>
    );
}

