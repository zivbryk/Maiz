import { EmailPreview } from "../cmps/email-preview.jsx";

export function EmailList({ emails, onChangeEmailStatus }) {
    return <section className="book-list">
            
<ul >
        {emails.map(email =>
            <li className="clean-list" key={email.id}> 
                <EmailPreview email={email} onChangeEmailStatus = {onChangeEmailStatus} />
                </li>
        )}
</ul>
    </section>
}

