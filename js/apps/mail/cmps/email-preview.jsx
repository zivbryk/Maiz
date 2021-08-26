const { Link } = ReactRouterDOM

export function EmailPreview({ email, onChangeEmailStatus }) {

    return (
        <section className="email-preview-line ">
            {/* <button className="email-list-btn fas fa-book-open"></button>  */}
            <button className="email-list-btn fas fa-star" onClick={() => onChangeEmailStatus(email.id,'starred')}></button> 
                   <Link to={`/email/${email.id}`}>
           
                       < article className="email-preview" >
                           <h2>{email.subject}</h2>
                       </article >
           
     </Link >
            <button className="email-list-hover-btn fas fa-trash" onClick={() => onChangeEmailStatus(email.id,'trash')}></button>
            {/* <button className="email-list-hover-btn fas fa-book-open"></button>  */}

        </section>

    )
}