'use strict';

  

























    
    const target1= document.getElementById('target1');
    target1.classList.toggle('circle');
    
    target1.addEventListener('click', () => {
     target1.classList.toggle('circle');


    });
    

 
    const target2= document.getElementById('target2');
    target2.classList.toggle('circle2');
    
    target2.addEventListener('click', () => {
     target2.classList.toggle('circle2');


    });

    






    
    
    
    // for (let i = 0; i < 12; i++) {
   
    // });
    
    // const target1= document.getElementById('target1');
    // const target2= document.getElementById('target2');
    
    
    // target1.addEventListener('click', () => {
    // target1.classList.toggle('circle');
    // });
    // target2.addEventListener('click', () => {
    // target2.classList.toggle('circle2');
    // });
    



  // (() => {
  //    class Ball {
  //     constructor(canvas) {
  //        this.canvas = canvas;
  //        this.ctx = this.canvas.getContext('2d');
  //        this.x = 30;
  //        this.y = 30;
  //        this.r = 10;
  //        this.x = this.pointA + 20;
  //        this.addClick();

  //     }

  //     addClick() {
  //        document.addEventListener('click' , e => {
  //          this.pointA = e.clientX;

  //        });

  //     }
      
  //     update() {
  //        this.x = this.pointA;
      

  //     }

  //     draw() {
  //       this.ctx.beginPath();
  //       this.ctx.fillStyle = '#fdfdfd';
  //       this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
  //       this.ctx.fill();
  //     }
  //    }



  //    class Game {
  //      constructor(canvas) {
  //        this.canvas = canvas;
  //        this.ctx = this.canvas.getContext('2d');
  //        this.ball = new Ball(this.canvas);
  //        this.loop();
  //      }    

  //      loop() {
  //        this.update();
  //        this.draw();

  //        requestAnimationFrame(() => {
  //          this.loop();

  //        });

  //      }

  //      update() {
  //        this.ball.update();


  //      }

  //      draw() {
  //       this.ball.draw();

  //      }
  //    }


  //   const canvas = document.querySelector('canvas');
  //   if (typeof canvas.getContext === 'undefined') {
  //      return;
  //       }  

  //   new Game(canvas);
    

  //  })();
    

    // ctx.beginPath();
    // //ctX.arc(x,y,r,start,end);
    // ctx.arc(100,100,50,0,2 * Math.PI);
    // ctx.stroke();





    
    
    
     // ctx.beginPath();
    // ctx.moveTo(50,50);
    // ctx.lineTo(100,50);
    // ctx.lineTo(100,100);
    // ctx.closePath();
    // ctx.stroke();





    //  ctx.shadowOffsetX = 4;
    //  ctx.shadowOffsetY = 4;
    //  ctx.shadowBlur =4;
    //  ctx.shadowColor ='rgba(0,0,0,0.3)';
     
    //  ctx.fillRect(50,50,100,100);


     //ctx.fillRect(x,y,width,height);
//     ctx.fillStyle ='pink';
//     ctx.strokeStyle = '#f00';
   
//     ctx.fillRect(50,50,50,50);
//     ctx.strokeRect(50,50,50,50);

//     ctx.fillStyle = 'skyblue';

//     ctx.fillRect(70,70,50,50);
//     ctx.strokeRect(70,70,50,50);
