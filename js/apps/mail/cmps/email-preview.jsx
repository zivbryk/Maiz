const { Link } = ReactRouterDOM

export function EmailPreview({ email, onChangeEmailStatus, onChangeEmailReadStatus }) {

    return (
        <React.Fragment >
            <td>
                {email.isRead ? <div className="email-preview-btn email-read fas fa-check-square"></div> : <div className="email-preview-btn email-unread far fa-square"></div>}

            </td>

            <td>
                {email.status === 'starred' ?
                    <button className="email-preview-btn email-list-btn fas fa-star" onClick={() => onChangeEmailStatus(email.id, 'starred')}></button> :
                    <button className="email-preview-btn email-list-btn far fa-star" onClick={() => onChangeEmailStatus(email.id, 'starred')}></button>
                }
            </td>

            <td>
                <Link to={`/zmail/${email.id}`} onClick={() => onChangeEmailReadStatus(email.id, true)} >
                    <h2 className="email-subject">{email.subject}</h2>
                </Link >
            </td>

            <td>
                <Link to={`/zmail/${email.id}`} onClick={() => onChangeEmailReadStatus(email.id, true)} >
                    <h3 className="email-body">{email.body.slice(0, 25)}...</h3>
                </Link >
            </td>
            <td>

                <h3 className="email-body">{new Date(email.sentAt).toLocaleString()}</h3>
            </td>

            <td>
                {/* <button className="email-preview-btn email-list-hover-btn" onClick={() => onChangeEmailStatus(email.id, 'trash')}></button> */}
                <button className="email-preview-btn email-list-hover-btn fas fa-trash" onClick={() => onChangeEmailStatus(email.id, 'trash')}></button>
            </td>

        </React.Fragment >

    )
}