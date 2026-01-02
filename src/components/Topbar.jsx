import React from 'react'
import '../Global.css'

const Topbar = () => {
  return (
    <section className="titlebar">

      {/* LEFT: Icon + Menu */}
      <div className="titlebar-left">
        <img
          src="/vscode-icon.png"
          alt="VSCode-icon"
          width={15}
          height={15}
        />
        <div className="titlebar-list">
          <p>File</p>
          <p>Edit</p>
          <p>View</p>
          <p>Go</p>
          <p>Run</p>
          <p>Terminal</p>
          <p>Help</p>
        </div>
      </div>

      {/* CENTER */}
      <div className="titlebar-title">
        Daksh Gagnani - Visual Studio Code
      </div>

      {/* RIGHT */}
      <div className="titlebar-windowButtons">
        <span className="yellow"></span>
        <span className="green"></span>
        <span className="red"></span>
      </div>

    </section>
  )
}

export default Topbar
