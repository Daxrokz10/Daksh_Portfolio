import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import '../Global.css'
import { Link } from 'react-router-dom';

const Explorer = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="explorer">
      <p className='explorer-title'>Explorer</p>

      <div className="explorer-section">
        {/* CLICKABLE HEADER */}
        <div
          className="explorer-name d-flex align-items-center"
          onClick={() => setOpen(!open)}
        >
          <FaAngleDown className={`chevron ${open ? "open" : ""}`} />
          <p>Portfolio</p>
        </div>

        {/* FILE LIST */}
        <div className={`explorer-files ${open ? "show" : "hide"}`}>
          <Link>
            <div className="explorer-file">
              <img src="/react_icon.svg" alt="react" />
              <p>Home.jsx</p>
            </div>
          </Link>

          <Link>
            <div className="explorer-file">
              <img src="/html_icon.svg" alt="html" />
              <p>about.html</p>
            </div>
          </Link>

          <Link>
            <div className="explorer-file">
              <img src="/css_icon.svg" alt="css" />
              <p>contact.css</p>
            </div>
          </Link>

          <Link>
            <div className="explorer-file">
              <img src="/js_icon.svg" alt="js" />
              <p>projects.js</p>
            </div>
          </Link>

          <Link>
            <div className="explorer-file">
              <img src="/markdown_icon.svg" alt="readme" />
              <p>github.md</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Explorer
