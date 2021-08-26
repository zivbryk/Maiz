

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
           
    sendEmail =(ev) => {
        const { to, subject, body } = this.state.newEmail;
        console.log('sendEmail activated')
        const value = ev.target.value;
        this.props.onSaveEmail(value, to, subject, body)
    }

    render() {
        const { to, subject, body } = this.state.newEmail;
        
        return(
             <section className="email-compose">
                    <div className="exit-compose">
                        <button onClick = {this.props.onCloseCompose}>X</button>
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
        <input
          name='body'
          id='email-body'
          type='text'
          value={body}
          onChange={this.handleChange}
        />

        <button hidden></button>
        </form>
        <button value="sent" onClick = {this.sendEmail}>Send Message</button>
            </section>
        )
    }
        
}

