import React from 'react'
import Particles from '../bits/Particles.jsx';
const Home = () => {
    return (
        <div className='home'>
            <h1>Hello</h1>
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                <Particles
                    particleColors={["#b19eef"]}
                    particleCount={400}
                    particleSpread={7}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover
                    alphaParticles={false}
                    disableRotation={false}
                    pixelRatio={1}
                />
            </div>
        </div>
    )
}

export default Home
