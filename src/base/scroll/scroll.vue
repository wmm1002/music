<template>
	<div ref="wrapper">
		<slot></slot>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	export default{
   		props: {
   			probeType: {
   				type: Number,
   				default: 1
   			},
   			click: {
   				type: Boolean,
   				default: true
   			},
   			data: {
   				type: Array,
   				default: null
   			}
   		},
   		mounted: function(){
   			setTimeout(()=>{
   				this._initScroll()
   			},20)
   		},
   		methods: {
   			_initScroll: function(){
   				if(!this.$refs.wrapper){
   					return
   				}
   				this.scroll = new BScroll(this.$refs.wrapper,{
   					probeType: this.probeType,
   					click: this.click
   				})
   			},
   			enable: function(){
   				this.scroll && this.scroll.enable()
   			},
   			disable: function(){
   				this.scroll && this.scroll.disable()
   			},
   			refresh: function(){
   				this.scroll && this.scroll.refresh()
   			},
            scrollTo: function(){
               this.scroll && this.scroll.scrollTo.apply(this.scroll,arguments)
            },
            scrollToElement: function(){
               this.scroll && this.scroll.scrollToElement.apply(this.scroll,arguments)
            }
   		},
   		watch: {
   			data: function(){
   				setTimeout(()=>{
   					this.refresh()
   				},20)
   			}
   		}
  	}
</script>
<style scoped lang="stylus">
 
</style>