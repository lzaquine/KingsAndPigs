const enemy = new Enemy({
    imageSrc: '/assets/pigs/idlePigLeft.png',
    frameRate: 11,
   
    animations: {
      idleRight: {
        frameRate: 11,
        frameBuffer: 8,
        loop: true,
        imageSrc: "/assets/pigs/idlePigRight.png",
      },
  
      idleLeft: {
        frameRate: 11,
        frameBuffer: 8,
        loop: true,
        imageSrc: "/assets/pigs/idlePigLeft.png",
      },
  
      runLeft: {
        frameRate: 6,
        frameBuffer: 8,
        loop: true,
        imageSrc: "/assets/pigs/runPigLeft.png",
      },
  
      runRight: {
        frameRate: 6,
        frameBuffer: 8,
        loop: true,
        imageSrc: "/assets/pigs/runPigRight.png",
      }
    }
  })

const enemy2 = new Enemy({
    imageSrc: '/assets/pigs/idlePigRight.png',
    frameRate: 11,
  
    animations: {
      idleRight: {
        frameRate: 11,
        frameBuffer: 8,
        loop: true,
        imageSrc: "/assets/pigs/idlePigRight.png",
      },
  
      idleLeft: {
        frameRate: 11,
        frameBuffer: 8,
        loop: true,
        imageSrc: "/assets/pigs/idlePigLeft.png",
      },
  
      runLeft: {
        frameRate: 6,
        frameBuffer: 8,
        loop: true,
        imageSrc: "/assets/pigs/runPigLeft.png",
      },
  
      runRight: {
        frameRate: 6,
        frameBuffer: 8,
        loop: true,
        imageSrc: "/assets/pigs/runPigRight.png",
      }
    }
  })

const cannon = new Enemy({
  imageSrc: '/assets/cannon/cannon.png',
    frameRate: 1,
  
    animations: {
      cannonIdle: {
        frameRate: 1,
        frameBuffer: 1,
        loop: false,
        imageSrc: '/assets/cannon/cannon.png'
      },
      cannonShoot: {
        frameRate: 4,
        frameBuffer: 8,
        loop: false,
        imageSrc: "/assets/cannon/cannonShoot.png",
      },
    }
})

const cannonBall = new Enemy({
  imageSrc: '/assets/cannon/cannonBall.png',
    frameRate: 1,
  
    animations: {
      cannonIdle: {
        frameRate: 1,
        frameBuffer: 1,
        loop: false,
        imageSrc: '/assets/cannon/cannonBall.png'
      },
    }
})

function newPos() {
    if(enemy.position.x > 550 && !marginLeft && level === 1) {
        enemy.position.x -= enemySpeed;
        if(enemy.position.x === 550) {
          marginLeft = true
        }
      } else if(enemy.position.x > 545 && marginLeft && level === 1){
        enemy.position.x += enemySpeed;
        enemy.switchSprite('runRight')
        if(enemy.position.x > 900) {
          enemy.switchSprite('runLeft')
          marginLeft = false
        }
      }

      if(enemy2.position.x > 435 && !marginLeft && level === 2) {
        enemy2.position.x += enemySpeed;
        if(enemy2.position.x === 805) {
          marginLeft = true
        }
      }
      if(enemy2.position.x >= 440 && marginLeft && level === 2){
        enemy2.position.x -= enemySpeed;
        enemy2.switchSprite('runLeft')
        if(enemy2.position.x === 440) {
          enemy2.switchSprite('runRight')
          marginLeft = false
        }
      }

      if(cannonBall.position.x >= 0 && level === 2) {
        cannonBall.position.x -= enemySpeed;
      }

      console.log(cannonBall.position.x)


      /* if(level === 2){
        setTimeout(() => {
          cannon.switchSprite('cannonShoot')
        }, 4500)
      } */
}
/* newPos(); */