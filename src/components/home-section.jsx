import Card from "./card"
import Doctor from "../assets/the-doctor.png"
import ExploreMenu from "./explore-section"
import "./styles/extras.css"
import "./styles/home-section.css"
export default function HomeComponent() {
    return (
        <div className="wrapper">
            <ExploreMenu className="explore-section" />
            <div className="content-wrapper">
                <h1 className="header">Explore now</h1>
                <div className="card-container">
                    <Card img = {Doctor}></Card>
                    <Card img = {Doctor}></Card>
                    <Card img = {Doctor}></Card>
                    <Card img = {Doctor}></Card>
                    <Card img = {Doctor}></Card>
                    <Card img = {Doctor}></Card>
                </div>
            </div>
        </div>
    )
}