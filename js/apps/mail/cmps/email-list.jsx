import { EmailPreview } from "../cmps/email-preview.jsx";

export function EmailList({ emails, onChangeEmailStatus }) {
    return <section className="email-list">
            
<table>
    <tbody>

        {emails.map(email =>
            <tr className="email-preview-tr" key={email.id}> 
                <EmailPreview email={email} onChangeEmailStatus = {onChangeEmailStatus} />
                </tr>
        )}
  </tbody>
</table>

    </section>
}

