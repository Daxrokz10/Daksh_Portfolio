import React from 'react'
import { VscFiles } from "react-icons/vsc";
import { VscGithubAlt } from "react-icons/vsc";
import { VscCode } from "react-icons/vsc";
import { VscEdit } from "react-icons/vsc";
import { VscSourceControl } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscSettings } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import '../Global.css'

const Sidebar = () => {
  return (
    <>
      <aside className='sidebar d-flex flex-column justify-content-between align-items-center'>
        <div className="sidebar-activities">
          <Link to="/">
            <div className="sidebar-icon-container">
              <VscFiles size={32} />
            </div>
          </Link>
          <Link to="/github">
            <div className="sidebar-icon-container">
              <VscGithubAlt size={32} />
            </div>
          </Link>
          <Link to="/code">
            <div className="sidebar-icon-container">
              <VscCode size={32} />
            </div>
          </Link>
          <Link to="/edit">
            <div className="sidebar-icon-container">
              <VscEdit size={32} />
            </div>
          </Link>
          <Link to="/source-control">
            <div className="sidebar-icon-container">
              <VscSourceControl size={32} />
            </div>
          </Link>
          <Link to="/contact">
            <div className="sidebar-icon-container">
              <VscMail size={32} />
            </div>
          </Link>
        </div>
        <div className="sidebar-settings">
          <Link to="/about">
            <div className="sidebar-icon-container">
              <VscAccount size={32} />
            </div>
          </Link>
          <Link to="/settings">
            <div className="sidebar-icon-container">
              <VscSettings size={32} />
            </div>
          </Link>
        </div>
      </aside>
    </>
  )
}

export default Sidebar;