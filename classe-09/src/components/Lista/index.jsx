export default function Lista(props) {
    return (
        <ul>
            {props.itens.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}

