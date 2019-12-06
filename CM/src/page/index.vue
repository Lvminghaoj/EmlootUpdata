<template>
    <div>
    <header class="headers" >
        <input type="serch" v-model="LookVal" id="PutVal" @keypress="searchGoods"  placeholder="搜索客户" >
        <div></div> 
    </header>
    <section class="TwoConder">
        <section class="TwoConder_box">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
        </van-swipe> 
        </section>
    </section>
    <!-- 3个分类 -->
    <section class="contents" >
      <ul>
        <li @click='GoingTo1()'>
          <img src="../img/安装工.png" alt="" class="ImgOne" >
          <p>合同客户</p>
        </li>
         <li @click='GoingTo2()'>
          <img src="../img/安装完成.png" alt="" class="ImgTwo">
          <p>试用客户</p>
        </li>
         <li @click='GoingTo3()'>
          <img src="../img/上线.png" alt="" class="ImgThree">
          <p>意向客户</p>
        </li>
      </ul>
    </section>
    <!-- 间隔行 -->
    <section class="HonKonTiao" ></section>
    <!-- 内容部分 -->
    <section class="content" >
      <!-- 内容头部 -->
        <section class="HeadTop">
          <section class="HeadTopBox">
            <span>{{contentName}}</span>
          </section>
        </section>
      <!-- 内容中间部分 -->
      <section class="ConDate">
        <ul>
          <li v-for="(val,idx) in ConDatas" :key="'index' + idx" v-show="!show">
              <div class="imgs"></div>
              <section class="PosotionFree">
              <span class="names">{{val.cusName}}</span>
               <h6>{{val.cusPhone}}</h6>
              <span class="Times">{{val.addTime}}</span>
              <a href="javascript:" @click=" Goto(val.id)">查看</a>
              </section>
          </li>
           <li v-for="(val,index) in Condatas[0]" :key="index" v-show='show'>
               <div class="imgs"></div>
              <section class="PosotionFree">
              <span class="names">{{val.cusName}}</span>
               <h6>{{val.cusPhone}}</h6>
              <span class="Times">{{val.addTime}}</span>
              <a href="javascript:" @click=" Goto(val.id)">查看</a>
              </section>
          </li>
        </ul>
      </section>
      
    </section>
     <section class="HonKonTiaos"></section>
  <div class="axb">
    <div class="left">
       <router-link to="/index">
        <img src="../img/首页.png" alt="">
          <a href class="Fonts">首页</a>
        </router-link>
    </div> 
    <div class="center">
       <router-link to="/Customer">
        <img src="../img/客户.png" alt="">
          <a href class="Font">客户</a>
        </router-link>
    </div> 
    <div class="right">
       <router-link to="/Mybar">
        <img src="../img/我的1.png" alt="">
          <a href class="Font">我的</a>
        </router-link>
    </div> 
  </div>
    </div>
</template>
<script>
import {getDateStr} from '../js/comment.js'
export default {
  data(){
    return{
        LookVal:'',//查询的值
        images: ['http://www.powerboy.vip/dist/banner1.285c4e7.png','http://www.powerboy.vip/dist/banner1.285c4e7.png'], //轮播图片
        iconFontSize:[{ // 3个分类
          name:'合同客户',
          img:require('../img/安装工.png')
        },{
          name:'试用客户',
          img:require('../img/安装完成.png')
        },{
          name:'意向客户',
          img:require('../img/上线.png')
        }],
        contentName:'我的客户', // 内容部分头部
        ConDatas:[],
        Condatas:[],
        show:false,
        url:this.$store.state.url,
        Numbers:'',
        code:''
    }
  },
  methods:{
    GoingTo1:function(){  //合同客户 跳转
        var QueId = 101; 
        this.$router.push({ name: "CustList", query: { QueId  }, params: { QueId } });
    },
    GoingTo2:function(){  //试用客户 跳转
      var QueId = 102; 
        this.$router.push({ name: "CustList", query: { QueId  }, params: { QueId } }); 
    },
    GoingTo3:function(){  //意向客户 跳转
       var QueId = 103; 
        this.$router.push({ name: "CustList", query: { QueId  }, params: { QueId } }); 
    },
    Goto(id){
      var QueId = 105
      this.$router.push({name: "CustomerList",query:{id,QueId}, params: { QueId,id } }); 
    },
    searchGoods(event){
        //查询按钮
      if (event.keyCode == 13) { //如果按的是enter键 13是enter 
          event.preventDefault(); //禁止默认事件（默认是换行） 
          var queryList = new Array();
          var query = new Object();
          query.title='M_cus0_0.cusName'
          query.maxVal = "";
					query.minVal = event.target.value;
					query.comparisonType = '6'; //4为等于
					query.numberType = '0'; //1为数值
          queryList.push(query);
          var paras = {};
          paras.userId = this.$store.state.userId;
          paras.pageSize = 100;
          paras.page = 1;
          paras.queryList = queryList;
          var params  ={}
          params.module = "getCustomInfos";
          params.action = "CustomManageService";
          params.paras = paras;
          var v = JSON.stringify(params);
          var that = this;
          if(event.target.value != ''){
          $.ajax({
                type:'get',
                    url:this.$store.state.url,
                    async:false,
                    dataType:'json',
                    data:{
                    params:v
                  },
               success:function(data){
                 that.code = data.code;
                if(that.code == 200){
                  if(data.result.customerList != ''){
                    that.Condatas.push(data.result.customerList);
                     }else{
                      that.code = 600
                  }
                }
           }
         })
         if(this.code == 200){
          this.show = true;
          this.$toast({
                message: "您查询的客户已在下方刷新列表"
          })
         }else if(this.code ==  600){
          this.show = false;
          this.$toast({
                message: "您查询的客户不存在"
          })
         }else{
          this.$toast({
                message: "服务器繁忙,请稍后再试"
          })
      }
      }else{
         this.$toast({
                message: "查询条件不能为空"
          })
          this.show=false;
      }
      }
    },
  },
  created(){//获取客户信息
      var paras = new Object();
      var queryList = new Array();
			paras.userId = this.$store.state.userId;
			paras.pageSize = 9999;
			paras.page = 1
			paras.queryList = queryList;
			var params = new Object(); //参数
			params.module = "getCustomInfos";
			params.action = "CustomManageService";
      params.paras = paras;
      var v =JSON.stringify(params);
      var res = this.ConDatas;
      var code;
      var message;
      $.ajax({
        type:'get',
        url:this.url,
        async:false,
        dataType:'json',
        data:{
          params:v
        },
        success:function(data){
          code = data.code;
          if(code == 200){
            if(data.result.customerList != ''){
                 for(var i = 0;i<=data.result.customerList.length -1;i++){
                     data.result.customerList[i].addTime = getDateStr(data.result.customerList[i].addTime)
                       res.push(data.result.customerList[i])
              }
            }
          }else{
            alert(message);
          }
        
        } 
      })
      console.log(res)
      
  }
}
</script>
<style>
.van-toast--text{
  width: 150px !important;
  height:100px !important;
}
.van-toast__text{
 line-height: 100%;
}

</style>
<style lang="scss" scoped>
@import '../css/index.scss';
@import '../css/Clickon.scss';
</style>
