import React from 'react'
import { PiGitBranch } from "react-icons/pi";
import { VscError } from "react-icons/vsc";
import { VscWarning } from "react-icons/vsc";

const Bottombar = () => {
    return (
        <footer className='bottombar'>
            <div className="bottom-left d-flex align-center">
                <a href="#" className='main-logo d-flex ms-2'>
                    <PiGitBranch size={18} />
                    <p className='ms-1'>main</p>
                </a>
                <div className="bottom-left-content d-flex">
                    <div className="error d-flex">
                        <VscError size={14}/>
                        <p className='ms-1'>0</p>
                    </div>
                    <div className="warning d-flex ms-2">
                        <VscWarning size={14} />
                        <p className='ms-1'>0</p>
                    </div>
                </div>
            </div>
            <div className="bottom-right">
                
            </div>
        </footer>
    )
}

export default Bottombar
