const { Link } = ReactRouterDOM

export function NotePreview({ note }) {
    return (
        <article className="note-preview">
            <h4>Note id - {note.id}</h4>
            <h4>Note type - {note.type}</h4>
        </article>
    )
}