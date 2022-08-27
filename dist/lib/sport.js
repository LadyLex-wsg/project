function getStyle(obj,attr){
    return window.getComputedStyle ? getComputedStyle(obj,1)[attr] : obj.currentStyle[attr];
}
function sport(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
        let flag = true;
        for(let i in json){
            let cur = i === 'opacity' ? parseInt(parseFloat(getStyle(obj,i)) * 100) : parseInt(getStyle(obj,i));
            let speed = (json[i] - cur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if(cur !== json[i]){
                flag = false;
            }
            if(i === 'opacity'){
                obj.style.opacity = (cur + speed) / 100;
                obj.style.filter = `alpha(opacity=${cur + speed})`;
            }else{
                obj.style[i] = cur + speed + 'px';
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn instanceof Function){
                fn();
            }
        }
    }, 30);
}