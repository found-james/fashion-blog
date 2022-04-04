export default function Nav ( props ) {
 

    if (props.navDataH) {
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

    if (props.navDataF) {
    return (
        <nav aria-label="Footer Navigation" role="navigation">
            <ul>
                {
                    props.navDataF && props.navDataF.footerList.map((item, idx) => {
                                    return (
                                        <a href="#"><li key={ idx }>{ item }</li></a>
                                        )
                    })
                } 
            </ul>
        </nav>
        )
    }
}


