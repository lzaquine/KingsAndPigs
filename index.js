const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.width = 1440;
canvas.height = 960;

let parsedCollisions;
let collisionBlocks;
let backgroundLevel1;
let doors;

const player = new Player({
  imageSrc: "/assets/king/leaveDoor.png",
  frameRate: 11,
  
  animations: {
    idleRight: {
      frameRate: 11,
      frameBuffer: 4,
      loop: true,
      imageSrc: "/assets/king/idle.png",
    },

    idleLeft: {
      frameRate: 11,
      frameBuffer: 4,
      loop: true,
      imageSrc: "/assets/king/idleLeft.png",
    },

    runRight: {
      frameRate: 8,
      frameBuffer: 5,
      loop: true,
      imageSrc: "/assets/king/runRight.png",
    },

    runLeft: {
      frameRate: 8,
      frameBuffer: 5,
      loop: true,
      imageSrc: "/assets/king/runLeft.png",
    },

    attack: {
      frameRate: 3,
      frameBuffer: 5,
      loop: false,
      imageSrc: "/assets/king/attack.png",
    },

    attackLeft: {
      frameRate: 3,
      frameBuffer: 5,
      loop: false,
      imageSrc: "/assets/king/attackLeft.png",
    },

    leaveDoor: {
      frameRate: 8,
      frameBuffer: 5,
      loop: false,
      imageSrc: "/assets/king/leaveDoor.png",
    },

    enterDoor: {
      frameRate: 8,
      frameBuffer: 5,
      loop: false,
      imageSrc: "/assets/king/enterDoor.png",
      onComplete: () => {
        overlay.opacity;
        gsap.to(overlay, {
          opacity: 1,
          onComplete: () => {
            level++;
            if(level === 9) level = 1
            levels[level].init();
            player.switchSprite('leaveDoor')
            setTimeout(() => {
              player.switchSprite('idleRight')
              player.preventInput = false;
            }, 1000)
            gsap.to(overlay, {
              opacity: 0,
            });
          },
        });
      },
    },
  },
});

let level = 1;
let enemySpeed = 1
let levels = {
  1: {
    init: () => {
      parsedCollisions = collisionsLevel1.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();
      player.collisionBlocks = collisionBlocks;
      if(player.currentAnimation) player.currentAnimation.isActive = false
      player.switchSprite('idleRight')
      player.preventInput = false;
      player.position.x = 500;
      player.position.y = 560;

      enemy.position.x = 900;
      enemy.position.y = 580;
      enemy2.position.x = 0;
      enemy2.position.y = 0;


      backgroundLevel1 = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "assets/DDma1p.png",
      });

      doors = [
        new Sprite({
          position: {
            x: 511.47,
            y: 551.94,
          },
          imageSrc: "/assets/king/doorOpen.png",
          frameRate: 5,
          frameBuffer: 10,
          loop: false,
          autoplay: true,
        }),

        new Sprite({
          position: {
            x: 960.58,
            y: 551.94,
          },
          imageSrc: "/assets/king/doorOpen.png",
          frameRate: 5,
          frameBuffer: 10,
          loop: false,
          autoplay: true,
        }),
      ];
    },
  },
  2: {
    init: () => {
      parsedCollisions = collisionsLevel2.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();
      player.collisionBlocks = collisionBlocks;
      player.position.x = 1020;
      player.position.y = 325;

      enemy.position.x = 0;
      enemy.position.y = 0;
      enemy2.position.x = 450;
      enemy2.position.y = 350;

      if(player.currentAnimation) player.currentAnimation.isActive = false

      backgroundLevel1 = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "assets/DDmap2.png",
      });

      doors = [
        new Sprite({
          position: {
            x: 1024.04,
            y: 327.69,
          },
          imageSrc: "/assets/king/doorOpen.png",
          frameRate: 5,
          frameBuffer: 10,
          loop: false,
          autoplay: true,
        }),

        new Sprite({
          position: {
            x: 1024.11,
            y: 615.98,
          },
          imageSrc: "/assets/king/doorOpen.png",
          frameRate: 5,
          frameBuffer: 10,
          loop: false,
          autoplay: true,
        }),
      ];
    },
  },

  3: {
    init: () => {
      parsedCollisions = collisionsLevel3.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();
      player.collisionBlocks = collisionBlocks;

      if(player.currentAnimation) player.currentAnimation.isActive = false


      player.position.x = 345;
      player.position.y = 328;

      enemy2.position.x = 0;
      enemy2.position.y = 0;

      backgroundLevel1 = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "assets/DDmap3.png",
      });

      doors = [
        new Sprite({
          position: {
            x: 352.07,
            y: 328.46,
          },
          imageSrc: "/assets/king/doorOpen.png",
          frameRate: 5,
          frameBuffer: 10,
          loop: false,
          autoplay: true,
        }),

        new Sprite({
          position: {
            x: 864.06,
            y: 615.71,
          },
          imageSrc: "/assets/king/doorOpen.png",
          frameRate: 5,
          frameBuffer: 10,
          loop: false,
          autoplay: true,
        }),
      ];
    },
  },

  4: {
    init: () => {
      parsedCollisions = collisionsLevel4.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();
      player.collisionBlocks = collisionBlocks;

      if(player.currentAnimation) player.currentAnimation.isActive = false


      player.position.x = 479;
      player.position.y = 328;

      backgroundLevel1 = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "assets/DDmap4.png",
      });

      doors = [
        new Sprite({
          position: {
            x: 479.98,
            y: 328.4,
          },
          imageSrc: "/assets/king/doorOpen.png",
          frameRate: 5,
          frameBuffer: 10,
          loop: false,
          autoplay: true,
        }),

        new Sprite({
          position: {
            x: 1024.14,
            y: 616.41,
          },
          imageSrc: "/assets/king/doorOpen.png",
          frameRate: 5,
          frameBuffer: 10,
          loop: false,
          autoplay: true,
        }),
      ];
    },
  },

  6: {
    init: () => {
      parsedCollisions = collisionsLevel5.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();
      player.collisionBlocks = collisionBlocks;

      if(player.currentAnimation) player.currentAnimation.isActive = false

      player.position.x = 315;
      player.position.y = 275;
      

      backgroundLevel1 = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "assets/DDmap5.png",
      });

      doors = [
        new Sprite({
          position: {
            x: 320.18,
            y: 264.16,
          },
          imageSrc: "/assets/king/doorOpen.png",
          frameRate: 5,
          frameBuffer: 10,
          loop: false,
          autoplay: true,
        }),

        new Sprite({
          position: {
            x: 1055.98,
            y: 328.48,
          },
          imageSrc: "/assets/king/doorOpen.png",
          frameRate: 5,
          frameBuffer: 10,
          loop: false,
          autoplay: true,
        }),
      ];
    },
  },

  5: {
    init: () => {
      parsedCollisions = collisionsLevel6.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();
      player.collisionBlocks = collisionBlocks;

      if(player.currentAnimation) player.currentAnimation.isActive = false


      player.position.x = 447;
      player.position.y = 616;
      
      backgroundLevel1 = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "assets/DDmap6.png",
      });

      doors = [
        new Sprite({
          position: {
            x: 447.98,
            y: 616.41,
          },
          imageSrc: "/assets/king/doorOpen.png",
          frameRate: 5,
          frameBuffer: 10,
          loop: false,
          autoplay: true,
        }),

        new Sprite({
          position: {
            x: 991.97,
            y: 488.08,
          },
          imageSrc: "/assets/king/doorOpen.png",
          frameRate: 5,
          frameBuffer: 10,
          loop: false,
          autoplay: true,
        }),
      ];
    },
  },

  7: {
    init: () => {
      parsedCollisions = collisionsLevel7.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();
      player.collisionBlocks = collisionBlocks;

      if(player.currentAnimation) player.currentAnimation.isActive = false


      player.position.x = 864;
      player.position.y = 360;
      
      backgroundLevel1 = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "assets/DDmap7.png",
      });

      doors = [
        new Sprite({
          position: {
            x: 864.26,
            y: 360.05,
          },
          imageSrc: "/assets/king/doorOpen.png",
          frameRate: 5,
          frameBuffer: 10,
          loop: false,
          autoplay: true,
        }),

        new Sprite({
          position: {
            x: 415.95,
            y: 583.90,
          },
          imageSrc: "/assets/king/doorOpen.png",
          frameRate: 5,
          frameBuffer: 10,
          loop: false,
          autoplay: true,
        }),
      ];
    },
  },

  8: {
    init: () => {
      parsedCollisions = collisionsLevel8.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();
      player.collisionBlocks = collisionBlocks;

      if(player.currentAnimation) player.currentAnimation.isActive = false


      player.position.x = 832;
      player.position.y = 328;
      
      backgroundLevel1 = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "assets/DDmap8.png",
      });

      doors = [
        new Sprite({
          position: {
            x: 832.19,
            y: 328.28,
          },
          imageSrc: "/assets/king/doorOpen.png",
          frameRate: 5,
          frameBuffer: 10,
          loop: false,
          autoplay: true,
        }),

        new Sprite({
          position: {
            x: 831.75,
            y: 552.12,
          },
          imageSrc: "/assets/king/doorOpen.png",
          frameRate: 5,
          frameBuffer: 10,
          loop: false,
          autoplay: true,
        }),
      ];
    },
  },
};

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  s: {
    pressed: false
  }
};

const overlay = {
  opacity: 0,
};

let marginLeft = false

function animate() {
  window.requestAnimationFrame(animate);
  backgroundLevel1.draw();
  collisionBlocks.forEach((collisionBlock) => {
    collisionBlock.draw();
  });
  
  doors.forEach((door) => {
    door.draw();
  });
  
  player.handleInput(keys);
  player.draw();
  enemy.draw();
  enemy2.draw();
  player.update();
  newPos();

  /* if(enemy.position.x > 550 && !marginLeft) {
    enemy.position.x -= enemySpeed;
    if(enemy.position.x === 550) {
      marginLeft = true
    }
  } 
  if(enemy.position.x > 545 && marginLeft){
    enemy.position.x += enemySpeed;
    enemy.switchSprite('runRight')
    if(enemy.position.x > 900) {
      enemy.switchSprite('runLeft')
      marginLeft = false
    }
  } */
  
  c.save();
  c.globalAlpha = overlay.opacity;
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.restore();
}
levels[level].init();
/* animate(); */

document.addEventListener('keydown', (e) => {
  switch(e.code) {
      case 'Enter':
          /* levels[level].init(); */
          animate();
      } 
  
})