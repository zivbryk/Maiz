export function NoteVideo({ note }) {
    return (
        <article className="note-video">
            <div>
                <video className="vid-player" controls>
                    <source src={note.info.url} type="video/mp4" />
                </video>
            </div>

            <h1>{note.info.title}</h1>
        </article>
    )
}
