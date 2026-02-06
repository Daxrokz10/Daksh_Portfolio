import React from 'react'
import Particles from '../bits/Particles.jsx';
import TextType from '../bits/TextType.jsx';

const Home = () => {
    return (
        <div className='home'>
            <div className="home-content text-center">
                <div className="home-content-card">
                    
                </div>
                <div className="home-content-text">
                    <TextType
                        text={["Text typing effect", "for your websites", "Happy coding!"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor
                        cursorCharacter="_"
                        texts={["Welcome to React Bits! Good to see you!", "Build some amazing experiences!"]}
                        deletingSpeed={50}
                        variableSpeedEnabled={false}
                        variableSpeedMin={60}
                        variableSpeedMax={120}
                        cursorBlinkDuration={0.5}
                    />
                </div>
            </div>
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
