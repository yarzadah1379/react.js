import React,{Fragment,useState} from 'react'
import Navbar from './Navbar'

const Navigation =()=>{

const [showSidebar, setShowSidebar]=useState(false);

const closeSidebar=()=>{
    setShowSidebar(false);
};

const togglesSidebar=()=>{
    setShowSidebar(!showSidebar);
}

    return(
        <Fragment>
            <Navbar  togglesSidebar={togglesSidebar}/>
        </Fragment>
    )
}
export default Navigation;
