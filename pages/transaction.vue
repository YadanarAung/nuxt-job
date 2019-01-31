<template>
  <section class="container">
    <el-container style="height: 500px; border: 1px solid #eee">
       
        <el-container>
            <el-main>
                <h1>Transaction</h1>
                <button v-on:click="show = !show">
                    Toggle
                </button>
                
                <transition name="fade">
                    <h3 v-if="show">hello</h3>
                </transition>

                <div id="example-2">
                <button @click="show = !show">Toggle show</button>
                <transition name="bounce">
                    <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
                </transition>
                </div>

                <div id="animated-number-demo">
                <input v-model.number="number" type="number" step="20">
                <p>{{ animatedNumber }}</p>
                </div>
            </el-main>
           
        </el-container>
    </el-container>
    
  </section>
</template>

<style>
.fade-enter-active, .fade-leave-active {
 // transition: opacity .3s;
  transition: all .3s ease;
  color:green;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.5;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<script>
    import general from '~/mixins/general.js';
    export default {
         head: {
            script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js' }
            ],
            link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
            ]
        },
        data() {
               return {
                    number: 0,
                    tweenedNumber: 0,
                    show: true,
                    
               }
            },
        components:{
        },
        mixins: [general],
        methods: {
           
        },
        mounted() {
            /*let recaptchaScript = document.createElement('script')
            recaptchaScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js')
            document.head.appendChild(recaptchaScript)*/
        },
       computed: {
            animatedNumber: function() {
            return this.tweenedNumber.toFixed(0);
            }
        },
        watch: {
            number: function(newValue) {
            TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
            }
        }
    };
</script>
