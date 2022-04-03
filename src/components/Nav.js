export default function Nav ( props ) {
 

    if (props.navDataH) console.log(props, "ey yo")

    return (
        <nav aria-label="Main Navigation" role="navigation">
            <ul>

                {
                    props.navDataH && props.navDataH.headerList.map((item, idx) => {
                                    return (
                                        <a href="#"><li key={ idx }>{ item }</li></a>
                                        )
                    })
                
                } 
            </ul>
        </nav>
    )
}


