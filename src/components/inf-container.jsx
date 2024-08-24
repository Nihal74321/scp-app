import {SCPS} from '../assets/scp-json/scp-inf'
export default function information(props) {

    const {id} = props;

    const entity = SCPS.find(e => e.id === parseInt(id));

    return(
        <div className="wrapper">
            {entity.description.map(p => (
                <p>{p}</p>
            ))}
        </div>
    )
}