class EventHub{
    // 声明cache为一个对象，key为string，value为一个函数（unknown类似any，但定义一次后不能修改[类似const])
    private cache:{[key:string]:Array<(data:unknown)=>void>} = {}  // 存事件名与事件回调
    on(eventName:string,fn:(data:unknown)=>void){
        // 把fn推进 this.cache[eventName] 数组
        this.cache[eventName] = this.cache[eventName] || []
        this.cache[eventName].push(fn)
    };
    emit(evenName:string,data?:unknown){
        // 把this.cache[evenName] 数组里面的fn全部依次调用
        (this.cache[evenName] || []).forEach(fn => fn(data))
    };
    off(eventName:string,fn:(data:unknown)=>void){
        // 把fn 从 this.cache[eventName] 数组 删掉      
        let index = indexOf(this.cache[eventName],fn)
        if(index != -1){            
            this.cache[eventName].splice(index,1)
        }
    }
}

export default EventHub

/**
 * 帮助函数 indexOf
 * @param array 
 * @param item 
 */
function indexOf(array,item){
    if(array === undefined) return -1;
    let index = -1;
    for(let i = 0;i < array.length;i++){
        if(array[i] === item){
            index = i;
            break
        }
    }
    return index;
}