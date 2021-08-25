const { Link } = ReactRouterDOM

export function EmailPreview({ email }) {
    return (
        // <Link to={`/email/${email.id}`}>

            < article className="email-preview" >
                
                <h2>{email.subject}</h2>

            </article >

        // </Link >
    )
}