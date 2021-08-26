
import { utilService } from '../../../services/util.service.js'

export class NoteTodos extends React.Component {
    state = {
        //
    }

    componentDidMount() {
        console.log('note-todos mounted');
    }

    render() {
        const { note, onToggleTodoStrike } = this.props

        return (
            <article className="note-todos">
                <h1>Note todos</h1>
                <h2>{note.info.label}</h2>
                <div className="todos-container">
                    {note.info.todos.map((todo, idx) => {
                        return (
                            <div key={idx}>
                                <input type="checkbox"
                                    id={idx}
                                    name="note"
                                    value=""
                                    checked={note.info.todos[idx].doneAt !== null}
                                    onChange={() => onToggleTodoStrike(idx, note.id, event)} />
                                <label className={note.info.todos[idx].doneAt && "strike-through"} htmlFor={idx}>{todo.txt}</label>
                            </div>
                        )
                    })}
                </div>
            </article>
        )
    }

}