
import { utilService } from '../../../services/util.service.js'

export class NoteTodos extends React.Component {
    state = {
        //
    }


    render() {
        const { note, onToggleTodoStrike } = this.props

        return (
            <article className="note-todos">
                <h1>Note todos</h1>
                <h2>{note.info.label}</h2>
                <div className="todos-container">
                    {note.info.todos.map((todo, idx) => {
                        // return <h3 key={utilService.makeId()}>{todo.txt} {todo.doneAt && <span>{todo.doneAt}</span>}</h3>
                        return (
                            <div key={idx}>
                                <input type="checkbox"
                                    id={idx}
                                    name="note"
                                    value=""
                                    // {note.info.todos[idx].doneAt && checked}
                                    onChange={() => onToggleTodoStrike(idx, note.id)} />
                                <label className={note.info.todos[idx].doneAt && "strike-through"} htmlFor={idx}>{todo.txt}</label>
                            </div>
                        )
                    })}
                </div>
            </article>
        )
    }

}