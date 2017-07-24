<template>
	<div>歌手页面</div>
</template>
<script>
	import {getSingerList} from 'api/singer'
	import {ERR_OK} from 'api/config'
	import Singer from 'common/js/singer'

	const HOT_NAME = '热门'
	const HOT_SINGER_LEN = 10
	export default {
		data: function(){
			return {
				singers: []
			}
		},
		created: function(){
			this._getSingerList();
		},
		methods: {
			_getSingerList: function(){
				getSingerList().then((res)=>{
					if(res.code === ERR_OK){
						this.singers = res.data.list;
					}
				})
			},
			_normalizeSinger(list){
				let map={
					hot: {
						title: HOT_NAME,
						items: []
					}
				};
				list.foreach((item,index)=>{
					if(index < HOT_SINGER_LEN){
						map.hot.items.push(new Singer({
							id: item.Fsinger.mid,
							name: item.Fsinger.name
						}))
						const key = item.Findex;
						if(!map[key]){
							map[key]={
								title: key,
								items: []
							}
						}
						map[key].items.push(new Singer({
							id: item.Fsinger.mid,
							name: item.Fsinger.name
						}))
					}
				});

				//为了得到有序列表，处理map
				let hot = []
				let ret = []
				for(let key in map){
					let val = map[key]
					if(val.title.match(/a-zA-Z/)){
						ret.push(val)
					}else if(val.title === HOT_NAME){
						hot.push(val)
					}
				}
				ret.sort((a,b)=>{
					return a.title.charCodeAt(0) - b.title.charCodeAt(0)
				})
				return hot.concat(ret) //数组合并
			}
		}
	}
</script>
<style scoped lang="stylus">
	
</style>