import Nav from "./Nav";

export default function Header ({ data }) {
    return (
        <header>
        <h1>Sartre's List</h1>
        <h4>Better-Dressed People</h4>
        <Nav navData={ data }/>
    </header>
    )
}