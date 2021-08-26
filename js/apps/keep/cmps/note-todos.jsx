
import { utilService } from '../../../services/util.service.js'

export class NoteTodos extends React.Component {
    state = {
        //
    }

    onToggleTodo = (idx, noteId) => { //move to note app
        this.props.note.info.todos[idx].doneAt ?
            this.props.note.info.todos[idx].doneAt = null :
            this.props.note.info.todos[idx].doneAt = Date.now()

        console.log(idx, this.props.note.info.todos[idx].doneAt);
        this.setState() //find note by id and change its todo[idx]
    }

    render() {
        const { note } = this.props

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
                                    onChange={() => this.onToggleTodo(idx, note.id)} />
                                <label className={note.info.todos[idx].doneAt && "strike-through"} htmlFor={idx}>{todo.txt}</label>
                            </div>
                        )
                    })}
                </div>
            </article>
        )
    }

}