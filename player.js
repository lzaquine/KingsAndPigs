class Player extends Sprite {
  constructor({ collisionBlocks = [], imageSrc, frameRate, animations, loop }) {
    super({ imageSrc, frameRate, animations, loop });
    this.position = {
      x: 490,
      y: 560,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.sides = {
      bottom: this.position.y + this.height,
    };
    this.gravity = 0.5;
    this.collisionBlocks = collisionBlocks;
  }

  update() {
    this.position.x += this.velocity.x;

    this.updateHitbox();

    this.checkForHorizontalCollisions();
    this.applyGravity();
    this.updateHitbox();

    this.checkForVerticalCollisions();
    this.checkEnemy1();
    this.checkEnemy2();
    this.checkForColCannonBall();
  }

  handleInput(keys) {
    if (this.preventInput) return;
    this.velocity.x = 0;
    if (keys.d.pressed) {
      this.switchSprite("runRight");
      this.velocity.x = 2;
      this.lastDirection = "right";
    } else if (keys.a.pressed) {
      this.switchSprite("runLeft");
      this.velocity.x = -2;
      this.lastDirection = "left";
    } else if (keys.s.pressed) {
      if (this.lastDirection === "left") {
        this.switchSprite("attackLeft");
      } else {
        this.switchSprite("attack");
      }
    } else {
      if (this.lastDirection === "left") {
        this.switchSprite("idleLeft");
      } else {
        this.switchSprite("idleRight");
      }
    }
  }

  switchSprite(name) {
    if (this.image === this.animations[name].image) return;
    this.currentFrame = 0;
    this.image = this.animations[name].image;
    this.frameRate = this.animations[name].frameRate;
    this.frameBuffer = this.animations[name].frameBuffer;
    this.loop = this.animations[name].loop;
    this.currentAnimation = this.animations[name];
  }

  updateHitbox() {
    this.hitbox = {
      position: {
        x: this.position.x + 32,
        y: this.position.y + 14,
      },
      width: 25,
      height: 30,
    };

    this.hitboxLeft = this.hitbox.position.x;
    this.hitboxRight = this.hitbox.position.x + this.hitbox.width;
    this.hitboxTop = this.hitbox.position.y;
    this.hitboxBottom = this.hitbox.position.y + this.hitbox.height;
  }

  checkForHorizontalCollisions() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];
      if (
        this.hitbox.position.x <=
          collisionBlock.position.x + collisionBlock.width &&
        this.hitbox.position.x + this.hitbox.width >=
          collisionBlock.position.x &&
        this.hitbox.position.y + this.hitbox.height >=
          collisionBlock.position.y &&
        this.hitbox.position.y <=
          collisionBlock.position.y + collisionBlock.height
      ) {
        // collision on x axis going to the left
        if (this.velocity.x < 0) {
          const offset = this.hitbox.position.x - this.position.x;
          this.position.x =
            collisionBlock.position.x + collisionBlock.width - offset + 0.01;
          break;
        }
        if (this.velocity.x > 0) {
          const offset =
            this.hitbox.position.x - this.position.x + this.hitbox.width;
          this.position.x = collisionBlock.position.x - offset - 0.01;
          break;
        }
      }
    }
  }

  checkForVerticalCollisions() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];
      if (
        this.hitbox.position.x <=
          collisionBlock.position.x + collisionBlock.width &&
        this.hitbox.position.x + this.hitbox.width >=
          collisionBlock.position.x &&
        this.hitbox.position.y + this.hitbox.height >=
          collisionBlock.position.y &&
        this.hitbox.position.y <=
          collisionBlock.position.y + collisionBlock.height
      ) {
        // collision on y axis
        if (this.velocity.y < 0) {
          const offset = this.hitbox.position.y - this.position.y;
          this.velocity.y = 0;
          this.position.y =
            collisionBlock.position.y + collisionBlock.height - offset + 0.01;
          break;
        }
        if (this.velocity.y > 0) {
          this.velocity.y = 0;
          const offset =
            this.hitbox.position.y - this.position.y + this.hitbox.height;
          this.position.y = collisionBlock.position.y - offset - 0.01;
          break;
        }
      }
    }
  }

  checkForColCannonBall() {
    let cannonBallLeft = cannonBall.position.x;
    let cannonBallRight = cannonBall.position.x + cannonBall.width;
    let cannonBallTop = cannonBall.position.y;
    let cannonBallBottom = cannonBall.position.y + cannonBall.height;

    if (
      this.hitboxLeft <= cannonBallRight &&
      this.hitboxRight >= cannonBallLeft &&
      this.hitboxTop <= cannonBallBottom &&
      this.hitboxBottom >= cannonBallTop
    ) {
      console.log("BOOM");
    }
  }

  checkEnemy1() {
    let enemy1Left = enemy.position.x;
    let enemy1Right = enemy.position.x + enemy.width;
    let enemy1Top = enemy.position.y;
    let enemy1Bottom = enemy.position.y + enemy.height;

    if (
      this.hitboxLeft <= enemy1Right &&
      this.hitboxRight >= enemy1Left &&
      this.hitboxTop <= enemy1Bottom &&
      this.hitboxBottom >= enemy1Top
    ) {
      console.log("check check check");
    }
  }

  checkEnemy2() {
    let enemy2Left = enemy2.position.x;
    let enemy2Right = enemy2.position.x + enemy2.width;
    let enemy2Top = enemy2.position.y;
    let enemy2Bottom = enemy2.position.y + enemy2.height;

    if (
      this.hitboxLeft <= enemy2Right &&
      this.hitboxRight >= enemy2Left &&
      this.hitboxTop <= enemy2Bottom &&
      this.hitboxBottom >= enemy2Top
    ) {
      console.log("check2 check2 check2");
    }
  }

  applyGravity() {
    this.velocity.y += this.gravity;
    this.position.y += this.velocity.y;
  }
}
