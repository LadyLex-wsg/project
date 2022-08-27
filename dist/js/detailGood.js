//轮播图
class Slider {
    //属性
    constructor() {
        // //获取大盒子 
        // this.big_box = $('#bigBox');
        // //大图
        // this.big_pic = $('#bigBox>li');
        //小图盒子(ul)
        this.small_box = $('#smallBox');
        //小图
        this.small_pic = $('#smallBox>li');
        //图片数量
        this.num =  this.small_pic.length ;  
        //上按钮
        this.btn_l = $('#btnL');
        //下按钮
        this.btn_r = $('#btnR');
        //添加事件
        this.addEvent();
        //调用轮播方法
        this.slide();
        //记录当前下标
        this.cur_index = 0 ;
    }
    //添加事件方法
    addEvent(){
        //小图盒子移入事件 -- 移入ul 显示btn
        this.small_box.mouseenter(function(){
            $('#btnL').css('opacity','.8');
            $('#btnR').css('opacity','.8');
        })
        //小图盒子移出事件 -- 移出ul  btn 消失
        this.small_box.mouseleave(function(){
            $('#btnL').css('opacity','');
            $('#btnR').css('opacity','');
        })
        //小图点击事件 -- 切换大图盒子的内容到当前大图
        this.btn_l.click(function(){

        })
        //小图
    }
    slide(){
        //大图
        this.big_pic[this.cur_index].css('z-index',`${++zindex}`);
        //小图
        if(this.cur_index <= 0){
            this.cur_index === 0 ;
        }else if(this.cur_index >= this.num - 1){ //最后一张图
            this.cur_index === this.num - 1 ;
        }else{  // 中间图片
            this.small_box.css('left',`${- (this.cur_index - 1) * this.small_pic[0].offsetWidth}`);
        }
    }
}

new Slider();