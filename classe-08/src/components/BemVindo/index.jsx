import './style.css';

export default function BemVindo({ nome, children }) {
    return (
        <div className="bem-vindo">
            <h1>Bem-vindo(a) {nome}</h1>
            <p>{children}</p>
        </div>
    );
}