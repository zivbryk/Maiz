export function NoteImg({ note }) {
    return (
        <article className="note-img">
            <img src={note.info.url} alt="" />
            <h1>{note.info.title}</h1>
        </article>
    )
}