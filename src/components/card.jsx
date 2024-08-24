import { Link } from "react-router-dom"
import {SCPS} from "../assets/scp-json/scp-inf"
import "./styles/main-file.css"
export default function Card(scp) {
    return(
        <div className="main-wrapper">
            <div className="title-container">
                <h1 className="header">Explore now</h1>
            </div>
            <div className="card-container">
                {
                    SCPS.map(e=> (
                        <Link to={`/scps/${e.name}`} className="link-container">
                            <div className="entry-container" key={e.id}>
                                    <img src={e.img} alt={e.name} />
                                    <div className="text-container">
                                        <p className="name">SCP-{e.id}</p>
                                    </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}