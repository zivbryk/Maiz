import { EmailPreview } from "../cmps/email-preview.jsx";

export function EmailList({ emails, onChangeEmailStatus, onChangeEmailReadStatus }) {
    function onHoverIn() {
        console.log('mouse enter')
    }
    function onHoverOut() {
        console.log('mouse leave')
    }
    return (
    <section className="email-list">
            
<table >
    <tbody>

        {emails.map(email =>
            <tr className="email-preview-tr" 
            key={email.id} 
            onMouseEnter = {() => onHoverIn()}
            onMouseLeave = {() => onHoverOut()}
            > 
                <EmailPreview email={email} 
                onChangeEmailStatus = {onChangeEmailStatus} 
                onChangeEmailReadStatus = {onChangeEmailReadStatus}/>
            </tr>
        )}
  </tbody>
</table>

    </section>
    )
}

