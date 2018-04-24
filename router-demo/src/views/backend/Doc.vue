<template>
  <div class="slider-box">
    <Slide></Slide>
    <router-view></router-view>
  </div>
</template>

<script>
    import Slide from '@/views/backend/docviews/Slide'
    import TWEEN from 'tween.js'
    export default {
        name: "doc",
        components : {
          Slide
        },
        beforeRouteEnter(to, from, next){
          next((vm)=>{
           vm.animate(to);
          });
        },
        beforeRouteUpdate(to, from, next){
          this.animate(to);
          next();
        },
       methods : {
          animate(to){
            let timer = false;
            function animateFun(){
              if(timer) return;
              TWEEN.update();
              console.log(11111);
              requestAnimationFrame(animateFun);
            }
            if(to.hash){

              var doc = document.querySelector('.content-wrap');
              var el = document.querySelector(to.hash);
              if(el){
                  new TWEEN.Tween({
                    number : doc.scrollTop
                  })
                  .to({
                    number : el.offsetTop - 125
                  }, 1000)
                  .onUpdate(function(){
                    console.log(this.number.toFixed(0));
                    doc.scrollTop = this.number.toFixed(0);
                  })
                  .onComplete(()=>{
                    timer = true;
                  })
                  .start()

                  animateFun()
                }
              }

          }
       }
    }
</script>

<style scoped>

</style>
