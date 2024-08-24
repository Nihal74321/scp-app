import "./styles/inf-style.css"
import {SCPS} from '../assets/scp-json/scp-inf'
export default function information(props) {

    const {name} = props;

    const entity = SCPS.find(e => e.name === name);

    return(
        <div className="wrapper-main">
            <div className="information-container">
                <h1>Description</h1>
                {entity.description.map(p => (
                    <p>{p}</p>
                ))}

                <h1>Containment Procedures</h1>
                {entity.containment_procedures.map(c => (
                    <p>{c}</p>
                ))}
                </div>
        </div>
    )
}