import "./styles/explore-section.css"
import { SCPS } from "../assets/scp-json/scp-inf"
import { Link } from "react-router-dom"
export default function ExploreMenu() {
    return (
        <div className="container">
            <nav>
                <p>
                    <Link to={`/`} className="link">Home</Link>
                </p>
                {SCPS.map(e => (
                    <p key={e.id}>
                        <Link to={`/scps/${e.name}`} className="link">{e.name}</Link>
                    </p>
                ))}
            </nav>
        </div>
    )
}