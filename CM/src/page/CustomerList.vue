<template>
    <div class="Dist">
          <section class="BiaoTing" v-show='show'>
               <section class="BiaoTleft">客户信息</section>
               <section class="beijingtu" @click="add"></section>
           </section>
           <section class='One' v-show='show'>
             <section class="left">
                 <span>客户名称</span>
             </section>
             <section class="right" v-show='show'>
                 <span v-show="!show2">{{CustomerListL[0].cusName}}</span>
                 <input type="text" v-model="CustomerListL[0].cusName" v-show="show2">
             </section>
           </section>
            <section class='One' v-show='show'>
             <section class="left">
                 <span>客户电话</span>
             </section>
             <section class="right">
                 <span v-show="!show2">{{CustomerListL[0].cusPhone}}</span>
                  <input type="text" v-model="CustomerListL[0].cusPhone" v-show="show2">
             </section>
           </section>
            <section class='One' v-show='show'>
             <section class="left">
                 <span>客户类型</span>
             </section>
             <section class="right">
                   <span v-show="!show2">{{CustomerListL[0].cusType}}</span>
                   <select name="" id="Select" v-model="CustomerListL[0].cusType" v-show="show2" >
                       <option :value="val" v-for="(val,idx) in CuestLit" :key='idx'>{{val}}</option>
                   </select>
             </section>
           </section>
           <section class='One1' v-show='show'>
             <section class="left">
                 <span>客户地址</span>
             </section>
             <section class="right">
                 <textarea v-show="!show2" v-model="CustomerListL[0].cusAddress" cols="28" rows="3"></textarea>
                   <input type="text" v-model="CustomerListL[0].cusAddress" v-show="show2"  class="inputs">
             </section>
           </section>
         
           <table class="CustomerIphone" border="0" cellspacing="0" v-show='show'>
               <tbody v-for="(val,index) in CustomerListL[0].contactsList" :key='index'>
                   <tr class="CustList">
                       <td class="Custleft">
                           <span>客户联系人</span>
                        <td class="Custright">
                            <span v-show="!show2">{{val.cusConName}}</span>
                            <input type="text" v-show="show2" v-model="val.cusConName" >
                        </td>
                   </tr>
                    <tr class="CustList">
                       <td class="Custleft">
                           <span>联系人手机</span>
                        <td class="Custright">
                            <span v-show="!show2">{{val.cusConPhone}}</span>
                            <input type="text" v-show="show2" v-model="val.cusConPhone" >
                        </td>
                   </tr>
                    <tr class="CustList">
                       <td class="Custleft">
                           <span>性别</span>
                        <td class="Custright">
                            <span v-show="!show2">{{val.sex}}</span>
                           <select name="" id="" v-model="val.sex" v-show="show2">
                               <option :value="val" v-for="(val,index) in Sex" :key='index'>{{val}}</option>
                           </select>
                        </td>
                   </tr>
                   <tr class="CustList">
                       <td class="Custleft bottoms">
                           <span>职务</span>
                        <td class="Custright bottoms">
                            <span v-show="!show2">{{val.cusConPost}}</span>
                            <select name="" id="" v-model="val.cusConPost" v-show="show2">
                               <option :value="val" v-for="(val,index) in CustorList" :key='index'>{{val}}</option>
                           </select>
                        </td>
                   </tr>
                     <section class="KongbaiT" ></section>
                      <section class="Beijingtu" v-show='show2' @click="addSubmit"></section>
               </tbody>
           </table>
        
            <a href="javascript:" v-show="!show3" class="addlist" @click="GodoAdd">亲,您还没添加电房!<span> 点击跳转添加电房</span></a>

        <ul class="ULlis" v-show="show3">
            <li v-for="(val,index) in this.DianList[0]" :key='index' >
                <div class='Filer' @click="GotoList(val.id)"></div>
                <p @click="GotoList(val.id)">{{val.name}}</p>
               <span>{{CustomerListL[0].cusAddress}} </span>
                <div class="BorderLeft" @click="GotoList(val.id)">
                    {{val.type}}
                </div>
                <div class="BorderRight" @click="GotoList(val.id)">
                    {{CustomerListL[0].cusType}}
                </div>
               <a href="javascript:" @click='GoingTo1(val.id)'>查看</a>
            </li>
        </ul>
         <section class="KongbaiT" v-show="show3"></section>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id:'',
            CustomerListL:[],
            url:this.$store.state.url,
            show:false,
            show2:false,
            show3:false,
            DianList:[],
            CuestLit:['合同用户','试用客户','意向客户'],
            Sex:['男','女'],
            CustorList:['职务1','职务2','职务3']
        }
    },
    methods:{
       GoingTo1:function(id){ 
        if(this.show == 1){
            this.$router.push({ name: "CustomerDList", query: { id  }, params: { id } });
          }
         },
         GodoAdd:function(){
             this.$router.push({name:'Customer'})
         },
         add:function(){ //修改
            this.show2 = true;
         },
         GotoList:function(id){
            this.$router.push({ name: "CustomerBaseList", query: { id  }, params: { id } });
         },
         addSubmit:function(){
            var paras ={};
            var cusConList = new Array();
            paras.userId = this.$store.state.userId;
            paras.id = this.id;
            paras.cusName = this.CustomerListL[0].cusName;
            paras.cusPhone = this.CustomerListL[0].cusPhone;
            if(this.CustomerListL[0].cusType == '合同用户'){
                this.CustomerListL[0].cusType = 1
            }else if(this.CustomerListL[0].cusType == '试用用户'){
                this.CustomerListL[0].cusType = 2
            }else if(this.CustomerListL[0].cusType == '意向用户'){
                this.CustomerListL[0].cusType = 3
            }
            for(let data of this.CustomerListL[0].contactsList){
                var res = {};
                res.id = data.id;
                res.cusConName = data.cusConName;
                res.cusConPhone = data.cusConPhone;
                if(data.sex == '男'){
                        res.sex = 1;
                }else if(data.sex == '女'){
                        res.sex = 2;
                }
                if(data.cusConPost == '职务3'){
                    res.cusConPost = 3
                }else if(data.cusConPost == '职务2'){
                    res.cusConPost = 2
                }else if(data.cusConPost == '职务1'){
                    res.cusConPost = 1
                }
                cusConList.push(res)
            }
            paras.cusAddress = this.CustomerListL[0].cusAddress
            paras.cusConList = cusConList;
			var params = new Object(); //参数
			params.module = "updCustomInfo";
			params.action = "CustomManageService";
			params.paras = paras;
            var v = JSON.stringify(params);
            var shows = this.show2
            var code ;
            if(this.CustomerListL[0].cusName !='' && this.CustomerListL[0].cusPhone != '' && this.CustomerListL[0].cusType !=''){
            $.ajax({
                type:'get',
                url:this.url,
                dataType:'json',
                async:false,
                data:{
                    params:v
                },
                success:function(data){
                    code = data.code
                }
            })
             if(code == 200){
                    if(this.CustomerListL[0].cusType == 1){
                        this.CustomerListL[0].cusType = '合同客户'
                    }else if(this.CustomerListL[0].cusType == 2){
                        this.CustomerListL[0].cusType = '试用客户'
                    }else if(this.CustomerListL[0].cusType == 3){
                        this.CustomerListL[0].cusType = '意向客户'
                    }
                    this.show2 = false;
                    this.$toast({
                        message: "成功"
                        })
            }else{
                 this.$toast({
                    message: "服务器繁忙"
                    })
                    
            }
            }else{
                 this.$toast({
                    message: "提交失败,请检查数据"
                    })
                    }
            }
         },
    created(){
         let { QueId: QueId } = this.$route.query;
         if(QueId == 105){//点击菜单进来
             let { id: id } = this.$route.query;
             this.id = id;
             this.show = true;
             var paras = {};
			paras.userId =this.$store.state.userId;
			paras.id = id; // 服务站点id
			var params = {}; // 参数
			params.module = "getCustomDetails";
			params.action = "CustomManageService";
			params.paras = paras;
            var v =JSON.stringify(params);
            var res= this.CustomerListL;
            var code ;
            $.ajax({
                type:'get',
                url:this.url,
                dataType:'json',
                async:false,
                data:{
                    params:v
                },
                success:function(data){
                    code = data.code;
                    var message = data.message;
                        if(code == 200){
                            if(data.result.contactsList.length != 0){
                            if(data.result.cusType == 1){
                                data.result.cusType = '合同用户';
                            } else if(data.result.cusType == 2){
                                data.result.cusType = '试用用户';
                            }else if(data.result.cusType == 3){
                                data.result.cusType = '意向用户';
                            }
                            if(data.result.contactsList[0].sex == 1){
                                data.result.contactsList[0].sex = '男'
                            }else if(data.result.contactsList[0].sex == 2){
                                data.result.contactsList[0].sex = '女'
                            }else if(data.result.contactsList[1].sex == 1){
                                data.result.contactsList[1].sex = '男'
                            } else if(data.result.contactsList[1].sex == 2){
                                data.result.contactsList[1].sex = '女'
                            }else if(data.result.contactsList[2].sex == 1){
                                data.result.contactsList[2].sex = '男'
                            }else if(data.result.contactsList[2].sex == 2){
                                data.result.contactsList[2].sex = '女'
                            }
                            if(data.result.contactsList[0].cusConPost == 1){
                                data.result.contactsList[0].cusConPost = '职务1'
                            }else if(data.result.contactsList[0].cusConPost == 2){
                                data.result.contactsList[0].cusConPost = '职务2'
                            }else if(data.result.contactsList[0].cusConPost == 2){
                                data.result.contactsList[0].cusConPost = '职务3'
                            }else  if(data.result.contactsList[1].cusConPost == 1){
                                data.result.contactsList[1].cusConPost = '职务1'
                            }else if(data.result.contactsList[1].cusConPost == 2){
                                data.result.contactsList[1].cusConPost = '职务2'
                            }else if(data.result.contactsList[1].cusConPost == 2){
                                data.result.contactsList[1].cusConPost = '职务3'
                            }else  if(data.result.contactsList[2].cusConPost == 1){
                                data.result.contactsList[2].cusConPost = '职务1'
                            }else if(data.result.contactsList[2].cusConPost == 2){
                                data.result.contactsList[2].cusConPost = '职务2'
                            }else if(data.result.contactsList[2].cusConPost == 2){
                                data.result.contactsList[2].cusConPost = '职务3'
                             }
                              res.push(data.result);
                            }
                    }else{
                        alert(message)
                    }
                    
                }
            })


                 var queryList = new Array();
				var query2 = new Object();
				query2.title = "M_sto0_0.cid";
				query2.maxVal = "";
				query2.minVal = id;
				query2.comparisonType = 4;
				query2.numberType = 1;
                queryList.push(query2);
                var paras = new Object();
                paras.userId = this.$store.state.userId;
                paras.pageSize = 100;
                paras.page = 1;
                paras.queryList = queryList;
                var params = new Object(); // 参数
                params.module = "getStockRooms";
                params.action = "StockRoomService";
                params.paras = paras;
                var v = JSON.stringify(params);
                var DianFangList = this.DianList;
                $.ajax({
                    type:'get',
                    url:this.url,
                    dataType:'json',
                    async:false,
                    data:{
                    params:v
                    },
                    success:function(data){
                        var code = data.code;
                        if(code == 200){
                            console.log(data)
                            var List = data.result.stockRoomList;
                            for(let res of List){
                                if(res.type == 1){
                                    res.type = '箱变'
                                }else if(res.type == 2){
                                    res.type = '台架'
                                }else if(res.type == 3){
                                    res.type = '电房'
                                }
                            }
                            DianFangList.push(data.result.stockRoomList)
                        }
                    }
                })
               if(this.DianList == ''){
                    this.show3 = false;
               }else{
                   this.show3 = true;
               }
         }
      
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
@import '../css/CustomerLook.scss';
@import '../css/CustomerList.scss';
</style>