import { Particles } from "react-particles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

const ParticlesContainer = () => {
	// init
	const particlesInit = useCallback(async (engine:any) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async () => {}, []);
	return (
		<Particles
    className=" w-full h-full absolute translate-z-0 top-0"
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				fullScreen: { enable: false },
				background: {
					color: {
						value: "",
					},
				},
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: false,
							mode: "push",
						},
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
					},
          modes: {
            push: {
              quantity: 90
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            }
          }
				},
        particles: {
          color: {
            value: '#e68e2e',
            
          },
          links: {
            color: '#7e4638',
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 1.1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 1000
            },
            value: 150
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'triangle'
          },
          size: {
            value: {min: 1, max: 5},
          }
        },
        detectRetina: true
			}}
		/>
	);
};

export default ParticlesContainer;
