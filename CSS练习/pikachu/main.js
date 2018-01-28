!function(){
    var duration = 50
    
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget) // 取得点击的button
        let speed =  $button.attr('data-speed')
        $button.addClass('active')
                .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })

    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setTimeout(function run(){
            n+=1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n < code.length){
                setTimeout(run,duration)
            }else{
                fn && fn.call()
            }
        },duration)
    }
    let code = `
    /*
    * 首先需要准备皮卡丘的皮
    */
    .preview{
        height:50vh;
        border:1px solid green;
        display:flex;
        justify-content:center;
        align-items:center;
        background:#fee433;
    }
    .wrapper{
        width:100%;
        height:165px;
    /*       border:1px solid #000; */
        position:relative;
    }
    /*
    * 然后就是鼻子啦！
    */
    .nose{
        width:0px;
        height:0px;
        border:11px solid #000;
        border-width:10px 12px;
        border-color:#000 transparent transparent transparent;
        border-radius:11px;
        position:absolute;
        left:50%;
        top:28px;
        transform:translate(-50%);
        /* 或者使用，margin-left:-nose宽度，用以抵消 */
    }
    /*
    * 接下来，eye啦~
    */
    .eye{
        width:49px;
        height:49px;
        background:#2e2e2e;
        position:absolute;
        border-radius:50%;
        border:2px solid #000;
    }
    /*
    * 眼睛肯定要雪亮雪亮的
    */
    .eye::after{
        content:"";
        display:block;
        height:24px;
        width:24px;
        display:block;
        background:#fff;
        position:absolute;
        border-radius:50%;
        left:6px;
        top:-1px;
        border:2px solid #000;
    }
    .eye.right{
        right:50%;
        margin-right:90px;
    }
    .eye.left{
        left:50%;
        margin-left:90px;
    }
    /*
    * 没脸怎么行？？
    */
    .face{
        height:68px;
        width:68px;
        background:red;
        border:2px solid #000;
        border-radius:50%;
        position:absolute;
    }
    .face.left{
        right:50%;
        top:85px;
        margin-right:116px;
    }
    .face.right{
        left:50%;
        top:85px;
        margin-left:116px;
    }
    /*
    * 哎哟，没有嘴巴啊？
    */
    .upperLip{
        height:25px;
        width:80px;
        border:3px solid ;
        position:absolute;
        top:47px;
        background:#fee433;
        
    }
    .upperLip.left{
        border-bottom-left-radius:40px 25px;
        border-top:none;
        border-right:none;
        transform:rotate(-20deg);
        right:50%;
    }
    .upperLip.right{
        border-bottom-right-radius:40px 25px;
        border-top:none;
        border-left:none;
        transform:rotate(20deg);
        left:50%;
    }
    .Tongue-wrapper{
        position:absolute;
        bottom:-40px;
        left:50%;
        /* z-index:-1; */
        transform:translate(-50%);
        height:150px;
        width:300px;
        overflow:hidden;
    
    }
    /*
    * 到舌头啦
    */
    .Tongue{
        width:300px;
        height:3500px;
        background:#990513;
        border-radius: 50%;
        border:2px solid;
        position:absolute;
        left:50%;
        transform:translate(-50%);
        bottom:0px;
        overflow:hidden;
    }
    .Tongue:after{
        content:'';
        position:absolute;
        bottom:-40px;
        width:150px;
        height:150px;
        border-radius:50%;
        background:#FC4A62;
        left:50%;
        transform:translate(-50%);
        
    }
    /*
    * 好啦，送你一只可耐死了的皮卡丘
    */`
    writeCode('',code)

}.call()