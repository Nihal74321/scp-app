import "./styles/main-file.css"
export default function Card(element) {
    return(
        <div className="card-container">
            <img src={element.img} alt="" />
        </div>
    )
}