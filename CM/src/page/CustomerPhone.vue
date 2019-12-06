<template>
    <div>
     <section class="box">
        <section class="box1"></section>
        <section class="box2">
          <div class="top">
             <span>手机号</span><input type="text" placeholder="请输入手机号码" v-model.number='Numbers'>
          </div>
          <div class="bottom">
            <button class="Nosool" @click="beforeClose">取消</button>
            <button class="sool" @click="beforeClose2">确定</button>
          </div>
        </section>
     </section>
    </div>
</template>
<script>
import {checkAll} from '../js/comment.js';
export default {
    data(){
        return{
                Numbers:'',
                name:'',
                img:'',
                userid:'',
                openid:'',
                codes:''

        }
    },
    methods:{
         beforeClose() { //点击取消
         this.$toast({
                message: "必须要填写手机号"
          })
    },
    beforeClose2() {
  var number = this.Numbers
      if(checkAll('Phone',number) == false){ //点击确认
        this.$toast({
                message: "请填写正确的手机号码"
          })
      }else{
        var openid;
        var code = localStorage.code;
        var state = localStorage.state;
        var appid = this.$store.state.appid;
        var phone = this.Numbers;
        var url = this.$store.state.url;
        var paras ={}
        paras.code = code;
        paras.appid = appid;
        paras.phone = phone;
        var params = {};
        params.module = 'getUserinfo';
        params.action = 'WeChatService';
        params.paras = paras;
        var v =JSON.stringify(params);
        var that = this;
        console.log(v)
        $.ajax({
          type:'get',
          url:url,
          dataType:'json',
          async:false,
          data:{
            params:v
          },
          success:(data)=>{
            that.codes = data.code;
           if(data.code == 200){
             if(data.result.flag == 1){
               var List = data.result.userinfo;
               that.img = List.headimgurl;
               that.openid=data.result.userinfo.openid
               that.userid=List.uid 
               that.name= List.nickname 
             }else{
               alert('服务器异常,请重进页面')
             }
           }else{
             alert(data.message);
           }
          }
        })
        if(this.codes == 200){
        this.$toast({
                message: "成功"
          });
          localStorage['openid'] = this.openid;
          console.log(openid)
          console.log(this.userid)
          this.$store.commit('showOne',this.userid)
          this.$store.commit('name',this.name)
          this.$store.commit('img',this.img)
          this.$router.push({name: "Index"}); 
          console.log(this.$store.state.userId)
        }else{
          this.$toast({
                message: "服务器异常,请刷新页面"
          });
        }
      
      }
    },
    },
    created(){
      if(localStorage.getItem('openid') == null){
      }else{
         this.$router.push({name: "Index"}); 
      }
    }
  }
</script>
<style scoped>
.box{
  width: 100%;
  height:100%;
}
.top{
  height:80px;
  line-height: 80px;
  font-size:25px;
}
.top span{
  width: 100px;
  height: 100%;
  display:block;
  float: left;
  margin-left: 20px;
}
.top input{
  width: 270px;
  height:70px;
  border:none;
  float: left;
  margin-top: 5px;
}
.bottom{
  border-top: 2px solid #ccc;
  width: 100%;
  height:80px;
}
button{
  width: 50%;
  height:100%;
  float: left;
  background:white;
  border: none;
}
.box1{
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  background: rgb(0,0,0,.7);  
}
.box2{
      position: fixed;
    top: 45%;
    left: 50%;
    width: 400px;
    height: 160px;
    overflow: hidden;
    font-size: 0.5rem;
    background-color: #fff;
    border-radius: 0.5rem;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: .3s;
    transition: .3s;
    transition-property: transform,opacity,-webkit-transform
}
</style>