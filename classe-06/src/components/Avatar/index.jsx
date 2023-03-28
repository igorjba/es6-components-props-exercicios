import './style.css';

export default function Avatar({ avatar }) {
    return (
        <div
            className="avatar"
            style={{ backgroundImage: `url(${avatar})` }}

        />

    )
}