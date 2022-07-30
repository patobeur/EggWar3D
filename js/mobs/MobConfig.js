class MobConfig {
	config
	constructor(typeNum = 1) {
		this.typeNum = typeNum
		this.config = this.#get_config()
	}
	get_(parent, value = false) {
		let confParent = this.config[parent] ?? false;
		let confValue = confParent[value]
			? confParent[value]
			: confParent
				? confParent
				: false;
		return { ...confValue }
	}
	#get_config() {
		const config = {
			mobs: {
				lv: 0,
				speed: 1,
				theta: {
					cur: 0,
					min: 0,
					max: 360
				},
				faction: 'rangers',
				ia: {
					// can change mind every x milisec
					changeAction: {
						cur: 0,
						min: 0,
						max: 30,
						choice: 0,
						lastAction: 0
					},
					dirAmplitude: 360 / 8
				},
				divs: {
					prima: {
						divName: 'prima',
						className: 'prima',
						size: { x: 1, y: 1, z: 1 },
						parentDivName: false,
						position: 'relative',
						borderRadius: '50%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					},
					range: {
						divName: 'range',
						className: 'range',
						size: { x: 50, y: 50, z: 50 },
						backgroundColor: 'rgba(255, 255, 255, .95)',
						parentDivName: 'prima',
						position: 'absolute',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'flex-end',
						borderRadius: '50%',
						transition: 'transform 1s ease',
						comment: 'colision range',
					},
					dir: {
						divName: 'dir',
						className: 'dir',
						size: { x: 10, y: 8, z: 4 },
						backgroundColor: 'rgba(0, 0, 0, 0.8)',
						parentDivName: 'range',
						position: 'absolute',
						borderRadius: '50%',

					},
					ico: {
						divName: 'ico',
						className: 'ico',
						size: { x: 20, y: 20, z: 20 },
						backgroundColor: 'rgba(255,200,100,1)',
						parentDivName: 'prima',
						position: 'absolute',
						borderRadius: '50%',
						textAlign: 'center',
						boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'

					},
					info: {
						divName: 'info',
						className: 'info',
						size: { x: 40, y: 20, z: 40 },
						backgroundColor: 'rgba(150,150,255,.8)',
						parentDivName: 'prima',
						color: 'white',
						position: 'absolute',
						top: '60%',
						textAlign: 'center',
						borderRadius: '.2rem',
						padding: '0 .5rem',
						width: 'max-content',
						boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
					},
				},
				mesh: {
					size: { x: 1, y: 1, z: 1 },
					altitude: 0,
					color: 'yellow',
					wireframe: false,
					childs: {
						front: {
							color: 'black',
							wireframe: false,
							size: { x: .5, y: .5, z: .5 },
							position: { x: 0, y: .5, z: 0 }, // from parent center
						}
					}

				},
				states: {
					dead: false,
					collide: {
						changed: false,
						color: {
							saved: false,
							current: false
						}
					}
				}
			}
		}

		if (this.typeNum === 0) {
			config.mobs.speed = 1
			config.mobs.ia.dirAmplitude = 0
		}
		if (this.typeNum === 1) { // BLACK SPEEDER
			config.mobs.mesh.color = 'black'
			config.mobs.speed = 6
			config.mobs.mesh.size = { x: .5, y: 1, z: .5 }
			config.mobs.ia.changeAction.max = 10
			config.mobs.ia.dirAmplitude = 1
			config.mobs.mesh.childs = {
				front: {
					color: 'red',
					wireframe: false,
					size: { x: .25, y: .25, z: .25 },
					position: { x: 0, y: .125, z: 0 }, // from parent center
				}
			}
		}

		if (this.typeNum === 2) { // BIG PAPA
			config.mobs.mesh.color = 'green'
			config.mobs.speed = 3
			config.mobs.mesh.size = { x: 1.5, y: 1.5, z: 1.5 }
			config.mobs.ia.changeAction.max = 30
			config.mobs.mesh.childs = {
				front: {
					color: 'red',
					wireframe: false,
					size: { x: .75, y: .75, z: .75 },
					position: { x: 0, y: .5, z: 0 }, // from parent center
				}
			}
		}

		if (this.typeNum === 3 || this.typeNum === 4) { // REGULAR MANTA
			config.mobs.mesh.color = 0x00ff20
			config.mobs.speed = 1
			config.mobs.mesh.size = { x: 4, y: 4, z: .3 }
			config.mobs.ia.changeAction.max = 50
			config.mobs.mesh.altitude = 10
			config.mobs.mesh.opacity = .8
			config.mobs.mesh.childs = {
				front: false
			}

		}
		if (this.typeNum > 4) {// BIG MANTA
			config.mobs.mesh.color = 0xff0020
			config.mobs.speed = 1
			config.mobs.mesh.size = { x: 8, y: 8, z: .2 }
			config.mobs.mesh.altitude = 10
			config.mobs.ia.changeAction.max = 50
			config.mobs.ia.dirAmplitude = 0
			config.mobs.mesh.opacity = .6
			config.mobs.mesh.childs = {
				front: false
			}
		}
		return { ...config }
	}
}
