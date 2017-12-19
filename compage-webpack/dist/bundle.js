/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var _Carousel = __webpack_require__(1)
var _GoTop = __webpack_require__(2)
var _waterfallNew = __webpack_require__(3)


_Carousel.init($(".carousel"))
_GoTop.init($(".goTopSet"))

$(document).ready(function() { 
	_waterfallNew.init($("#portfolio"))
	}); 


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports =  _Carousel = (function(){
	    function Carousel(ct){
	    	this.ct = $(ct)
	    	console.log(this.ct)
	    	console.log(document.querySelector(".carousel"))
	    	this.init()
			this.bind()
	    }
	    Carousel.prototype = {
			init:function(){
				this.$link = this.ct.find(".link>li")
				this.$imgCt = this.ct.find(".img-ct")
				this.$img = this.ct.find(".img-ct>li")
				this.imgWidth = this.$img.width()  //500
				this.imgCount = this.$img.length   //4
				this.$pre = this.ct.find(".pre")
				this.$next = this.ct.find(".next")
				this.pageIndex = 0
				this.clock = false
				this.$imgCt.css({width:(this.imgCount + 2) * this.imgWidth})
				this.$imgCt.append(this.$img.first().clone())
				this.$imgCt.prepend(this.$img.last().clone())
				this.$imgCt.css({left:-this.imgWidth})
				console.log(555)
				
			},
			bind:function(){
				var _this = this
				//this.autoPlay()
				this.$pre.click(function(){
					_this.prePlay(1)
				})
				this.$next.click(function(){
					_this.nextPlay(1)
				})
				this.$link.click(function(){
					var index = $(this).index()
					if(index > _this.pageIndex){
						_this.nextPlay(index - _this.pageIndex)
					}else if(index < _this.pageIndex){
						_this.prePlay(_this.pageIndex - index)
					}
					console.log("index:" + index)
				})
			},
			autoPlay:function(){
				var _this = this
				_this.clock = setInterval(function(){
					_this.clock = false
					_this.nextPlay(1)
				},2000)
			},
			nextPlay:function(len){
				var _this = this
				console.log(len)
		        if(_this.clock) return;
		        _this.clock = true
		        _this.$imgCt.animate({
					left:"-=" + _this.imgWidth*len
		        },function(){
					_this.pageIndex += len
					console.log("pageIndex:" + _this.pageIndex)
					if(_this.pageIndex == _this.imgCount){
						_this.pageIndex = 0
						_this.$imgCt.css({left:-_this.imgWidth})
					}
					_this.clock = false
					_this.indexPlay()
		        })       
			},
			prePlay:function(len){
				var _this = this
				if( _this.clock) return;
				_this.clock = true
				_this.$imgCt.animate({
					left:"+=" + _this.imgWidth * len
				},function(){
					
					console.log(_this.pageIndex)
					if(_this.pageIndex == 0){
					_this.pageIndex = 4
					_this.$imgCt.css({left:- _this.imgCount * _this.imgWidth})
				}
				_this.pageIndex -= len
				_this.clock = false
				_this.indexPlay()
				})
			},
			indexPlay:function(){
				this.$link.removeClass("active")
					.eq(this.pageIndex)
					.addClass("active")
				console.log("index:" + this.pageIndex)
			}
	    }
    	return {
    		init:function($ct){
    			$ct.each(function(idx,target){
    				new Carousel($(target))
    				console.log("carousel!!!!!!")
    			})
    		}
    	}
    })()
    //new Carousel($(".carousel")[0])
    //new Carousel($(".carousel")[1])
    
    
    //module.exports = _Carousel.init($(".carousel"))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = _GoTop = (function(){

	function goTop(ct){
		this.ct = $(ct)
		this.clock
		this.bind()
	}

	goTop.prototype = {
		bind:function(){

			$(window).on("scroll",function(){

				var scrollTop = $(window).scrollTop()
				if(this.clock){
					clearTimeout(this.clock)
				}
				this.clock = setTimeout(function(){
					if(scrollTop>500){
						$(".goTopSet").addClass("SetActive")
						console.log("1")
					}
					if(scrollTop<500){
						$(".goTopSet").removeClass("SetActive")
						console.log("55")
					}

				},300)
			})

			$(".goTopSet").on("click",function(){
				console.log("goto!!!!!!!")
				$('bodu,html')
				.animate({ 
					scrollTop: 0
				}, 1000);
				console.log("chengong")

			})

		}
	}

	return{
		init:function($ct){
			new goTop($ct)

		}
	}


})()

  //module.exports = _GoTop.init($(".goTopSet"))



/***/ }),
/* 3 */
/***/ (function(module, exports) {



module.exports = _waterfallNew = (function(){

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
            	
            	console.log("curPage:" + _this.curPage)
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
			var _this = this
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
					_this.curPage++
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

 //  module.exports = $(document).ready(function() { 
	// _waterfallNew.init($("#portfolio"))
	// }); 


/***/ })
/******/ ]);