<template>
    <div>
        <span v-show="!show3">你尚未添加任何客户</span>
        <ul class="ULlis" v-show="show3">
            <li v-for="(val,index) in this.Condatas[0]" :key='index' >
                <div class='Filer'></div>
                <p>{{val.cusName}}</p>
               <span>{{val.cusPhone}} </span>
                <div class="BorderRights">
                 {{names}}
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
        data(){
            return{
                Condatas:[],
                show3:true,
                names:'合同用户'
            }
        },
        created(){
          let { QueId: QueId } = this.$route.query;
          var id ;
          if(QueId == 101){
              id = 1
          }
          if(QueId == 102){
              id = 2
          }
          if(QueId == 103){
              id = 3
          }
          var queryList = new Array();
          var query = new Object();
          query.title='M_cus0_0.cusType'
          query.maxVal = "";
		  query.minVal = id;
	      query.comparisonType = '4'; //4为等于
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
          this.Condatas = [];
          var List = this.Condatas;
          var code;
          var message;
          $.ajax({
                type:'get',
                    url:this.$store.state.url,
                    async:false,
                    dataType:'json',
                    data:{
                    params:v
                  },
               success:function(data){
                 code = data.code;
                 message = data.message;
                if(code == 200){
                  if(data.result.customerList != ''){
                    List.push(data.result.customerList);
                    console.log(List)
                     }else{
                     code = 600
                  }
                }
           }
         })
         if(code == 600){
            this.$toast({
                    message: "你尚未该类型客户"
              })
              this.show3 = false;
         }else if(code == 200){
             this.show3 = true;
         }else{
              this.$toast({
                    message: "服务器出错,请重新进入页面"
              })
         }
         if(id == 1){
             this.names = '合同客户'
         }else if(id == 2){
             this.names = '试用客户'
         }else if(id == 3){
             this.names = '意向客户'
         }
         console.log(this.Condatas)
        }
}
</script>
<style lang="scss" scoped>
@import '../css/CustomerLook.scss';
@import '../css/CustomerList.scss';
</style>