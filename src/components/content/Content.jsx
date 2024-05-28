// import React from 'react'    

import Contentheader from "./Contentheader"
import Tabelcontent from "./Tabelcontent"

function Content() {
    return (
        <div className="content ">
            <Contentheader />
            <div className="tabelcontent shadow-xl">
                <Tabelcontent />
            </div>
        </div>
    )
}

export default Content