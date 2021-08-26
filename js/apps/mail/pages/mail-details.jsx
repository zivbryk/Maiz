import { emailService } from '../services/email-service.js'
import { Loading } from '../../../cmps/Loading.jsx'

export class EmailDetails extends React.Component {

    state = {
        email: null,
    }

    componentDidMount() {
        const id = this.props.match.params.emailId
        emailService.getEmailById(id)
            .then(email => {
                this.setState({ email })

            })
    }

    onGoBack = () => {
        this.props.history.push('/zmail')
    }

    onChangeEmailStatus = () => {
        const emailId = this.state.email.id
        emailService.changeEmailStatus(emailId, 'trash')
            .then(
                this.onGoBack
                );
    }


    render() {

        const { email } = this.state
        if (!email) return <Loading />
        return (
            <section className="email-details">
                <div className = "email-details-btns">
                  <button onClick={this.onGoBack}>Go Back</button>
                  <button className = "fas fa-trash" onClick={this.onChangeEmailStatus}></button>
                </div>
              <table>
                  <tbody>
                      <tr>
                        <td>
                        <h2>{email.subject}</h2> 
                        </td>
                      </tr>
                      <tr>
                        <td>
                            <h4> From: {email.from} to: {email.to}</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <h3>{email.body}</h3>
                        </td>
                      </tr>
                  </tbody>
              </table>
              
            </section >
        )
    }
}


