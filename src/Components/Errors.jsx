import { Link } from "react-router-dom"
import Articles from "./Articles"

const Errors = ({ err }) => {
    return (
        <div className="error-page-container">
            <h2 className="error-page-header"> { err ? err :`Oops... something has gone wrong 👀 `}</h2>
            <Link id="error-redirection" to="/">Back to the latest news</Link>
        </div>
    )
}

export default Errors;