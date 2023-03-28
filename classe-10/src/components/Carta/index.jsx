export default function Carta({ titulo, conteudo }) {
    return (
        <div className="carta">
            <h2>{titulo}</h2>
            <p>{conteudo}</p>
        </div>
    )
}