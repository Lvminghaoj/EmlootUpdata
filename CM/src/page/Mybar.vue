<template>
<div>
    <div class="Box">
       <section class="banner">
       </section>
       <div class="Tou">
         <img :src='img' alt="">
       </div>
       <section class="User">
          <p>{{Username}}</p>
          <div class="spans">
              <span>写一句话介绍一下自己 ...
              <div class="Icons"></div>
          </span>
          </div>
          <ul>
              <li>
                  <span>已有客户</span>
                  <p>{{YyouUser}}</p>
              </li>
               <li>
                  <span>已签约</span>
                   <p>{{YqianUser}}</p>
              </li>
               <li>
                  <span>未签约</span>
                   <p>{{WqianUser}}</p>
              </li>
          </ul>
       </section>
    </div>
      <div class="axb">
    <div class="left">
       <router-link to="/index">
        <img src="../img/首页1.png" alt="">
          <a href class="Font">首页</a>
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
        <img src="../img/我的.png" alt="">
          <a href class="Fonts">我的</a>
        </router-link>
    </div> 
  </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            Username:this.$store.state.name,
            YyouUser:"",
            YqianUser:'',
            WqianUser:'',
            img:this.$store.state.img,
        }
    },
     beforeCreate () {
      document.querySelector('body').setAttribute('style', 'background-color:#efefef;')//设置背景颜色
    },
    beforeDestroy () {
      document.querySelector('body').removeAttribute('style')
    },
    created(){
         var userId = this.$store.state.userId;
         var url = this.$store.state.url;
         var id1 = 1;
         var id2 = 2;
         var id3 = 3;
         if(id3 = 3){
           var WqianUser; //试用用户
          var queryList = new Array();
          var query = new Object();
          query.title='M_cus0_0.cusType'
          query.maxVal = "";
		      query.minVal = id3;
	        query.comparisonType = '4'; //4为等于
		      query.numberType = '0'; //1为数值
          queryList.push(query);
          var paras = {};
          paras.userId = userId
          paras.pageSize = 100;
          paras.page = 1;
          paras.queryList = queryList;
          var params  ={}
          params.module = "getCustomInfos";
          params.action = "CustomManageService";
          params.paras = paras;
          var v = JSON.stringify(params);
          var code;
          $.ajax({
                type:'get',
                    url:url,
                    async:false,
                    dataType:'json',
                    data:{
                    params:v
                  },
               success:function(data){
                 code = data.code;
                 var message = data.message;
                 if(data.code == 200){
                   if(data.result.customerList.length != ''){
                        WqianUser = data.result.customerList.length;
                   }else{
                     WqianUser = 0;
                   }
                 }else{
                   alert(message)
                 }
           }
         })
         this.WqianUser = WqianUser;
         }
         if(id2 = 2){
           var YqianUser; //试用用户
          var queryList = new Array();
          var query = new Object();
          query.title='M_cus0_0.cusType'
          query.maxVal = "";
		      query.minVal = id2;
	        query.comparisonType = '4'; //4为等于
		      query.numberType = '0'; //1为数值
          queryList.push(query);
          var paras = {};
          paras.userId = userId
          paras.pageSize = 100;
          paras.page = 1;
          paras.queryList = queryList;
          var params  ={}
          params.module = "getCustomInfos";
          params.action = "CustomManageService";
          params.paras = paras;
          var v = JSON.stringify(params);
          var code;
          $.ajax({
                type:'get',
                    url:url,
                    async:false,
                    dataType:'json',
                    data:{
                    params:v
                  },
               success:function(data){
                 code = data.code;
                 var message = data.message;
                 if(data.code == 200){
                   if(data.result.customerList.length != ''){
                        YqianUser = data.result.customerList.length;
                   }else{
                     YqianUser = 0;
                   }
                 }else{
                   alert(message)
                 }
           }
         })
         this.YqianUser = YqianUser;
         }
         if(id1 == 1){
             var YyouUser;//合同用户
          var queryList = new Array();
          var query = new Object();
          query.title='M_cus0_0.cusType'
          query.maxVal = "";
		      query.minVal = id1;
	        query.comparisonType = '4'; //4为等于
		      query.numberType = '0'; //1为数值
          queryList.push(query);
          var paras = {};
          paras.userId = userId
          paras.pageSize = 100;
          paras.page = 1;
          paras.queryList = queryList;
          var params  ={}
          params.module = "getCustomInfos";
          params.action = "CustomManageService";
          params.paras = paras;
          var v = JSON.stringify(params);
          var code;
          $.ajax({
                type:'get',
                    url:url,
                    async:false,
                    dataType:'json',
                    data:{
                    params:v
                  },
               success:function(data){
                 code = data.code;
                 var message = data.message;
                 if(data.code == 200){
                   if(data.result.customerList.length != ''){
                        YyouUser = data.result.customerList.length;
                   }else{
                     YyouUser = 0;
                   }
                 }else{
                   alert(message)
                 }
           }
         })
         this.YyouUser = YyouUser;
         }
       
    }
}
</script>
<style lang="scss" scoped>
@import '../css/Clickon.scss';
@import '../css/Mybar.scss';
</style>