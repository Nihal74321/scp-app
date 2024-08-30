import Card from "./card"
import Page from "./inf-container"
import ExploreMenu from "./explore-section"
import ScrollRestoration from "./ScrollRestoration"
import "./styles/extras.css"
import "./styles/home-section.css"
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom"


function ParseDetail() {
    const {name} = useParams();
    return <Page name={name}/>
}
export default function HomeComponent() {
    return (
        <>
        <div className="circle-container">
            <div className="circle"></div>
        </div>
        <div className="overlay-container"></div>
        <Router>
        <ScrollRestoration />
        <ExploreMenu className="explore-section" />
            <div className="wrapper">
                <Routes>
                    <Route className="Home-page" path="/" element={<Card/>}/>
                    <Route path="/scps/:name"  element={<ParseDetail />}/>
                </Routes>
            </div>
        </Router>
        </>
    )
}