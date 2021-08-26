export function NoteTodos({ note }) {
    return (
        <article className="note-todos">
            <h1>Note todos</h1>
            <h2>{note.info.label}</h2>
            <div className="todos-container">
                {note.info.todos.map((todo) => {
                    return <h3 key={note.id}>{todo.txt} {todo.doneAt && <span>{todo.doneAt}</span>}</h3>
                })}
            </div>
        </article>
    )
}