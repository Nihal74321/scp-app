import { Link } from "react-router-dom"
import {SCPS} from "../assets/scp-json/scp-inf"
import "./styles/main-file.css"
export default function Card(scp) {
    return(
        <div className="main-wrapper">
            <h1 className="header">Explore now</h1>
            <div className="card-container">
                {
                    SCPS.map(e=> (
                        <div className="entry-container" key={e.id}>
                            <Link to={`/scps/${e.id}`} className="link-container">
                                <img src={e.img} alt={e.name} />
                                <div className="text-container">
                                    <p className="name">{e.name} &#8226; SCP-{e.id}</p>
                                    <p className="id">{e.scp_class}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}