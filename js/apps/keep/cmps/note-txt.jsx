
export class NoteTxt extends React.Component {
    state = {
        isLongTxtShown: false
    }

    getTextToShow = (txt) => {
        if (this.state.isLongTxtShown) return txt
        return txt.substring(0, 100)
    }

    onToggleTxt = () => {
        console.log('toggling');
        this.setState((prevState) => ({ isLongTxtShown: !prevState.isLongTxtShown }))
    }

    render() {
        const { header, body } = this.props.note.info
        // console.log(header, this.props.note.info.body);
        return (
            <article className="note-txt">
                <h2>{header}</h2>
                <h3>
                    {body && this.getTextToShow(body)}
                    {body && (body.length > 100 &&
                        <span className="toggle-txt" onClick={() => { this.onToggleTxt() }}>
                            {this.state.isLongTxtShown ? '.Less' : '...More'}
                        </span>
                    )}
                </h3>
            </article>
        )
    }
}