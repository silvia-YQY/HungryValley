import EventHub from '../src/index'

type TessCase = (message:string) => void;

const test1:TessCase = message => {
    const eventHub = new EventHub();
    console.assert(eventHub instanceof Object === true , 'evenHub 是个对象');
    console.log(message);
}

const test2:TessCase = message => {
    const eventHub = new EventHub();
    let called = false;
    eventHub.on('xxx', y => {
        called = true;
        console.assert(y[0] === '今天开始要努力');
        console.assert(y[1] === '明天开始要减肥');
    });
    eventHub.emit('xxx', ['今天开始要努力', '明天开始要减肥']);
    console.assert(called);
    console.log(message);
}

const test3:TessCase = message => {
    const eventHub = new EventHub();
    let called = false;
    const fn1 = () =>{
        called = true;
    };

    eventHub.on('yyy', fn1);
    eventHub.off('yyy', fn1);
    eventHub.emit('yyy');
    console.assert(called === false);
    console.log(message);
}

test1('EvenHub 可以创建对象')
test2('on之后会触发emit')
test3('off生效了')
