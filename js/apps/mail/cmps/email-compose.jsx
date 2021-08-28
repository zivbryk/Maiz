

export class EmailCompose extends React.Component {
    state = {
        newEmail: {
            to: '',
            subject: '',
            body: '',
        },

    }

    inputRef = React.createRef()

    componentDidMount() {
        this.inputRef.current.focus()
    }

    handleChange = (ev) => {
        ev.preventDefault();
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState({ newEmail: { ...this.state.newEmail, [field]: value } })
    }

    sendEmail = (ev) => {
        const { to, subject, body } = this.state.newEmail;
        console.log('sendEmail activated')
        const value = ev.target.value;
        this.props.onSaveEmail(value, to, subject, body)
    }

    sendDraft = () => {
        const { to, subject, body } = this.state.newEmail;
        console.log('sendDraft activated')
        if (to === '' && subject === '' && body === '') {
            this.props.onCloseCompose()
        } else {
            this.props.onSaveEmail('draft', to, subject, body)
        }
    }

    render() {
        const { to, subject, body } = this.state.newEmail;

        return (
            <section className="email-compose">
                <div className="compose-header">
                    <span>New Message</span> <button className="exit-compose" onClick={this.sendDraft}><span className=" fas fa-times"></span></button>
                </div>
                <form className="email-compose-form" >
                    <label htmlFor='email-to'>To </label>
                    <input
                        ref={this.inputRef}
                        name='to'
                        id='email-to'
                        type='text'
                        value={to}
                        onChange={this.handleChange}
                    />

                    <label htmlFor='email-subject'>Subject </label>
                    <input
                        name='subject'
                        id='email-subject'
                        type='text'
                        value={subject}
                        onChange={this.handleChange}
                    />

                    {/* <label htmlFor='email-body'> </label> */}
                    <textarea name='body'
                        id='email-body' cols="30" rows="10" value={body}
                        onChange={this.handleChange}></textarea>

                    <button hidden></button>
                </form>
                <button className="send-email-btn" value="sent" onClick={this.sendEmail}>Send Message</button>
            </section>
        )
    }

}

