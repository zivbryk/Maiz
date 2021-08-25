import { EmailPreview } from "../cmps/email-preview.jsx";

export function EmailList({ emails }) {
    return <section className="book-list">

        {emails.map(email =>
            <EmailPreview key={email.id} email={email} />
        )}
    </section>
}

