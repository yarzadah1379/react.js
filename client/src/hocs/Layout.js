import React,{Fragment} from 'react'
import Navigation from '../componenets/Navigation'

const Layout =({children})=>(

    <Fragment>
        <Navigation/>
        <div>
            {children}
        </div>
    </Fragment>
);
export default Layout;