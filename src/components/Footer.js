import Nav from "./Nav"
export default function Footer ({ data }){
    return (
        <footer>
        <section>
            <Nav navDataF = { data }/>
            <h2><span style={{color: "lightgrey"}} >&copy;</span> 2013 Valet Industries, Inc</h2>
        </section>
    </footer>
    )
}