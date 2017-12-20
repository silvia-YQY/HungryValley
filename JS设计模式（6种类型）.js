//1.构造函数模式:返回一个新对象   
//constructor
//通过new来实现

function Person(name,age){
	this.name = name;
	this.age = age;
}
Person.prototype.sayName = function(){
	return this.name;
}

var student = new Person("YQY",22);

//2.工厂模式:返回一个新对象
//factory

function createPerson(name){
	var person= {
		name: name,
		sayName:function(){
			console.log(this.name);
		}
	};
	return person;
}
//对象调用模式
createPerson("YQY").sayName() // YQY
createPerson("xiaoming").sayName()  //xiaoming
//函数调用模式
var t = createPerson("YQY").sayName()
t()   //undefined    
//原因为createPerson中的sayName方法中的this此时指向window


//3.单例模式
//singleton

var People = (function(){
	var instance;
	function init(name){
		return{
			name: name
		};
	}

	return{
		createPeople : function(name){
			if(!instance){
				instance = init(name);
			}
			return instance
		}
	}
}());

People.createPeople("YQY") //{"name" :"YQY"}
People.createPeople("xiaoming") //{"name" :"YQY"}


//4.混合模式
//mix in
//继承

var Person = function(name,age){
	this.name = name;
	this.age = age;
}

Person.prototype.sayName = function(){
	console.log(this.name);
}

var Student = function(name,age,score){
	Person.call(this,name,age);
	this.score = score;
};

//Student.prototype = Object.create(Person.prototype)
Student.prototype = create(Person.prototype);

function create(parentObj){
	function F(){}
	F.prototype = parentObj;
	return new F();
};

Student.prototype.sayScore = function(){
	console.log(this.score);
}

var student = new Student("YQY",22,95);


//5.模块模式:通过闭包来实现一个模块
//module

var Person = (function(){
	var name = "YQY";
	function sayName(){
		console.log(name);
	}
	return {
		name:name,
		sayName:sayName
	}
})()

Person //{name:name,sayName:sayName}

//6.订阅发布模式
//publish/subscribe

var EventCenter = (function(){
	var events = {};
	function on(evt,handler){
		events[evt] = events[evt] || [];
		events[evt].push({
			handler:handler
		});
	}

	function fire(evt,args){
		if(!events[evt]){
			return;
		}
		for(var i = 0; i < events[evt].length; i++){
			events[evt][i].handler(args);
		}
	}

	function off(name){
		delete events[name]
	}

	return{
		on:on,
		off:off,
		fire:fire
	}
})();