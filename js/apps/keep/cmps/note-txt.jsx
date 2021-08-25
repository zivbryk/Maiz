export function NoteTxt({ note }) {
    return (
        <article className="note-txt">
            <h1>Note Txt</h1>
            <h4>{note.info.txt}</h4>
        </article>
    )
}