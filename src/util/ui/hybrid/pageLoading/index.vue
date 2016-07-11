<template>
    <bantouch :show = 'show'>
        <div class="pageLoading" v-show="show">
            <div class="pageLoading-mask">
              <mt-spinner :type="type" color="#fff" :size="35"></mt-spinner>
            </div>  
        </div>
    </bantouch>
</template>
<script>
import bantouch from '../ban-touch'

	export default {
		name: 'page-loading',
        components: {
            bantouch
        },
		props: {
			show: {
				type: Boolean,
				default: false 
			},
			type: {
				type: Number,
				default: 0
			}
		}
	}
</script>
<style lang='less'>
.pageLoading-mask {
    width: 1.3rem; height: 1.3rem; background: rgba(0,0,0,.6); border-radius: 6px; text-align: center;
    & > span {
        text-align: center; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;
    }
}
.pageLoading {
	position: fixed; left: 50%; top: 45%; transform: translate(-50%, -50%); z-index: 210
}
.kebab-spinner-double-bounce {
    position: relative
}

.kebab-spinner-double-bounce-bounce1,.kebab-spinner-double-bounce-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: .6;
    position: absolute;
    top: 0;
    left: 0;
    animation: kebab-spinner-double-bounce 2s infinite ease-in-out
}

.kebab-spinner-double-bounce-bounce2 {
    animation-delay: -1s
}

@keyframes kebab-spinner-double-bounce {
    0%,to {
        transform: scale(0)
    }

    50% {
        transform: scale(1)
    }
}

.kebab-spinner-fading-circle {
    position: relative
}

.kebab-spinner-fading-circle-circle {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute
}

.kebab-spinner-fading-circle-circle:before {
    content: " ";
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    border-radius: 100%;
    animation: kebab-fading-circle 1.2s infinite ease-in-out both
}

.kebab-spinner-fading-circle-circle.is-circle2 {
    transform: rotate(30deg)
}

.kebab-spinner-fading-circle-circle.is-circle2:before {
    animation-delay: -1.1s
}

.kebab-spinner-fading-circle-circle.is-circle3 {
    transform: rotate(60deg)
}

.kebab-spinner-fading-circle-circle.is-circle3:before {
    animation-delay: -1s
}

.kebab-spinner-fading-circle-circle.is-circle4 {
    transform: rotate(90deg)
}

.kebab-spinner-fading-circle-circle.is-circle4:before {
    animation-delay: -.9s
}

.kebab-spinner-fading-circle-circle.is-circle5 {
    transform: rotate(120deg)
}

.kebab-spinner-fading-circle-circle.is-circle5:before {
    animation-delay: -.8s
}

.kebab-spinner-fading-circle-circle.is-circle6 {
    transform: rotate(150deg)
}

.kebab-spinner-fading-circle-circle.is-circle6:before {
    animation-delay: -.7s
}

.kebab-spinner-fading-circle-circle.is-circle7 {
    transform: rotate(180deg)
}

.kebab-spinner-fading-circle-circle.is-circle7:before {
    animation-delay: -.6s
}

.kebab-spinner-fading-circle-circle.is-circle8 {
    transform: rotate(210deg)
}

.kebab-spinner-fading-circle-circle.is-circle8:before {
    animation-delay: -.5s
}

.kebab-spinner-fading-circle-circle.is-circle9 {
    transform: rotate(240deg)
}

.kebab-spinner-fading-circle-circle.is-circle9:before {
    animation-delay: -.4s
}

.kebab-spinner-fading-circle-circle.is-circle10 {
    transform: rotate(270deg)
}

.kebab-spinner-fading-circle-circle.is-circle10:before {
    animation-delay: -.3s
}

.kebab-spinner-fading-circle-circle.is-circle11 {
    transform: rotate(300deg)
}

.kebab-spinner-fading-circle-circle.is-circle11:before {
    animation-delay: -.2s
}

.kebab-spinner-fading-circle-circle.is-circle12 {
    transform: rotate(330deg)
}

.kebab-spinner-fading-circle-circle.is-circle12:before {
    animation-delay: -.1s
}


@keyframes kebab-fading-circle {
    0%,39%,to {
        opacity: 0
    }

    40% {
        opacity: 1
    }
}

.kebab-spinner-snake {
    animation: kebab-spinner-rotate .8s infinite linear;
    border: 4px solid transparent;
    border-radius: 50%
}



@keyframes kebab-spinner-rotate {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}

.kebab-spinner-triple-bounce-bounce1,.kebab-spinner-triple-bounce-bounce2,.kebab-spinner-triple-bounce-bounce3 {
    border-radius: 100%;
    display: inline-block;
    animation: kebab-spinner-triple-bounce 1.4s infinite ease-in-out both
}

.kebab-spinner-triple-bounce-bounce1 {
    animation-delay: -.32s;
    animation-delay: -.16s
}

@keyframes kebab-spinner-triple-bounce {
    0%,80%,to {
        transform: scale(0)
    }

    40% {
        transform: scale(1)
    }
}

</style>
