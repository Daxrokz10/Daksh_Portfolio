import React from 'react'
import { Link } from 'react-router-dom'
import '../Global.css'

const Tabs = () => {
  return (
    <>
      <div className="tabs d-flex">
        <Link>
            <div className="tab">
                <img src="/react_icon.svg" alt="react" />
                <p>Home.tsx</p>
            </div>
        </Link>
        <Link>
            <div className="tab">
                <img src="/html_icon.svg" alt="react" />
                <p>about.html</p>
            </div>
        </Link>
        <Link>
            <div className="tab">
                <img src="/css_icon.svg" alt="react" />
                <p>contact.css</p>
            </div>
        </Link>
        <Link>
            <div className="tab">
                <img src="/js_icon.svg" alt="react" />
                <p>projects.js</p>
            </div>
        </Link>
        <Link>
            <div className="tab">
                <img src="/markdown_icon.svg" alt="react" />
                <p>github.md</p>
            </div>
        </Link>
      </div>
    </>
  )
}

export default Tabs
