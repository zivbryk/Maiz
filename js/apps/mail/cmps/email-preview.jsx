const { Link } = ReactRouterDOM

export function EmailPreview({ email, onChangeEmailStatus, onChangeEmailReadStatus }) {

    return (
        <React.Fragment > 
            <td>
            {email.isRead ?  <div className = "email-read fas fa-check-square"></div> : <div className = "email-unread far fa-square"></div>}
           
            </td>

            <td> 
            <button className="email-list-btn fas fa-star" onClick={() => onChangeEmailStatus(email.id,'starred')}></button> 
            </td>

            <td>
        <Link to={`/zmail/${email.id}`} onClick = {() => onChangeEmailReadStatus(email.id, true)}>     
                           <h2>{email.subject}</h2>
        </Link >
            </td>

            <td>
        <Link to={`/zmail/${email.id}`} onClick = {() => onChangeEmailReadStatus(email.id, true)}>
                           <h3>{email.body.slice(0,25)}...</h3>
        </Link >
            </td>
            <td>
            <button className="email-list-hover-btn fas fa-trash" onClick={() => onChangeEmailStatus(email.id,'trash')}></button>
            </td>

            <td>
            <h3>{new Date(email.sentAt).toLocaleString()}</h3>
            </td>

            </React.Fragment>

    )
}