

_waterfallNew = (function(){

	function waterfallNew(ct){
		this.ct = $(ct)
		this.init()
	}
	waterfallNew.prototype = {
		init:function(){
			var _this = this
			this.clock 
			this.curPage = 1
			this.perPageCount = 9
			this.col = []
			this.colValue = parseInt($(".ct").width()/$(".item").outerWidth(true))
			for(var i =0;i < this.colValue;i++){
					this.col[i] = 0
				}
			
			this.start()
            $(".more").on("click",function(){
                _this.start()
            })
            
		},
      
		start:function(){
			var _this = this
			this.getData(function(newsList){
				var arr = []
				var count = 0
				$.each(newsList,function(idx,news){
					var $node = _this.getNodes(news)
					$node.find("img").load(function(){
						$(".ct").append($node)
						arr.push($node)
						count ++
						if(count >= newsList.length){
							_this.waterFall(arr)
						}
					})
				})
			})
		},
		waterFall:function($node){
			var _this = this
			$.each($node,function(){
				var minValue = Math.min.apply(null,_this.col)
				var colIndex = _this.col.indexOf(minValue)
				$(this).css({
					top:minValue,
					left:colIndex * $(this).outerWidth(true),
					opacity:1
				})
				console.log(minValue,colIndex)
				_this.col[colIndex] += $(this).outerHeight(true);
			})
		
		$(".wrap").height(Math.max.apply(null,_this.col))
		},
		getNodes:function(news){
			var node = "<li class='item'>"
			node += "<a href='" + news.url + "'>"
			node += "<img src='" + news.img_url + "'>"
			node += "</a>"
			node += "<h2>" + news.short_name + "</h2>"
			node += "<p>" + news. short_intro +"</p>"
			node += "</li>"
			return $(node)
		},
		getData:function(callback){
			$.ajax({
				url:"//platform.sina.com.cn/slide/album_tech?jsoncallback=func&app_key=1271687855&num=3&page=4",
				dataType:"jsonp",
				jsonp:"jsoncallback",
				data:{
					app_key:"1271687855",
					num:this.perPageCount,
					page:this.curPage
				}
			}).done(function(ret){
				if(ret && ret.status && ret.status.code == "0"){
					callback(ret.data)
					this.urPage ++
				}else{
					console.log("err")
				}
			})
		},
	}

	return {
		init:function($ct){
			new waterfallNew
		}
	}
})()

// _waterfallNew.init($("#portfolio"))

$(document).ready(function() { 
	_waterfallNew.init($("#portfolio"))
}); 
