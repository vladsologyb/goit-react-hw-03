export default function Contact({contact,onDelete}) {
    const { name, number, id } = contact;
    return (
        <div>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )

}