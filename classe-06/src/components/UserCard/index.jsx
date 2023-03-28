import './style.css';


export default function UserCard({ name, nickname, followed, following, children }) {
    return (
        <div className="user-card">
            <div className="user-card__avatar">
                {children}
            </div>
            <div className="user-card__info">
                <h1 className="user-card__name">{name}</h1>
                <div className="user-card__nickname">{nickname}</div>
                <div className="user-card__follow">
                    <div className="user-card__followed">{followed} seguidores</div>
                    <div className="user-card__following">{following} seguindo</div>
                </div>
            </div>
        </div>
    )
}

