<template>
<div>
 <section class="BiaoTing" style="border-bottom:1px solid #ccc;">
               <section class="BiaoTleft" >设备列表</section>
               <!-- <section class="beijingtu" @click="add"></section> -->
</section>
     <ul class="ULlis" v-show='show'>
            <li v-for="(val,index) in this.List[0]" :key='index' @click="gotoList(val.id)">
                <div class="img"></div>
                <p>{{val.cusName}}</p>
               <span>{{val.equiName}} </span>
                <div class="BorderLeft">
                    {{val.equClassName}}
                </div>
            </li>
        </ul>
        <div class="BiaoTing" v-show="!show">
           <a href="javascript:" @click="gotoList2">亲,您还没添加设备! 点击添加</a>
        </div>
        </div>
</template>
<script>
export default {
    data(){
        return{
            id:'',
            List:[],
            show:false,
        }
    },methods:{
        gotoList:function(id){
            this.$router.push({ name: "CustomerShebase", query: { id  }, params: { id } });
        },
        gotoList2:function(){
            this.$router.push({ name: "Customer"});
        }
    },
        beforeCreate () {
      document.querySelector('body').setAttribute('style', 'background-color:#efefef;')//设置背景颜色
    },
    beforeDestroy () {
      document.querySelector('body').removeAttribute('style')
    },
        created(){
          let { id: id } = this.$route.query;
            this.id = id;
            var queryList = new Array();
			var query3 = new Object();
			query3.title = "M_sto1_0.stockId";
			query3.maxVal = "";
			query3.minVal = "0";
			query3.comparisonType = 4; //4为等于
			query3.numberType = 1; //1为数值
            queryList.push(query3);
            var query2 = new Object();

			query2.title = "M_sto1_0.stockRoomId";
			query2.maxVal = "";
			query2.minVal = this.id; //电房id
			query2.comparisonType = 4; //4为等于
			query2.numberType = 1; //1为数值
			queryList.push(query2);
            var paras = new Object();
			paras.userId = this.$store.state.userId;
			paras.pageSize = 100;
			paras.page = 1
			paras.queryList = queryList;
			var params = new Object(); //参数
			params.module = "getStockRoominfs";
			params.action = "StockRoominfService";
			params.paras = paras;
            var v =JSON.stringify(params);
            var List = this.List;
            $.ajax({
                type:'get',
                url:this.$store.state.url,
                dataType:'json',
                async:false,
                data:{
                    params:v
                },
                success:(data)=>{
                    var message = data.message;
                  if(data.code == 200){
                    List.push(data.result.stockRoominfList)
                  }else{
                      alert(message)
                  }
                }
            })
            if(this.List != ''){
                 this.show = true;
            }else{
                  this.show = false;
            }
    }
}
</script>
<style lang="scss" scoped>
@import '../css/CustomerLook.scss';
@import '../css/CustomerList.scss';
</style>