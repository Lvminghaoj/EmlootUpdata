<template>
    <div>
   <form action="" v-for="(val,index) in Friend" :key='index'>
     <section class="BiaoTing">
               <section class="BiaoTleft">电房信息</section>
               <section class="beijingtu" @click="add"></section>
    </section>
      <section class="formData">
         <section class="concent2">
              电房名称
        </section>
            <input type="text" placeholder="请输入电房名称" class="enen"  v-model="val.name" v-show="show">
            <div v-show="!show">{{val.name}}</div>
      </section>
       <section class="formData">
         <section class="concent2">
              电房类型
        </section>
       <select name="" id="" v-model="val.type" v-show="show" class="SELct">
         <option :value="val" v-for="(val,index) in DianFang" :key='"Index" + index'>{{val}}</option>
       </select>
        <div v-show="!show">{{val.type}}</div>
      </section>
      <section class="formData">
         <section class="concent2">
              行业类型
        </section>
                       <!-- <input type="text" v-model="val.industry"  v-show="show" placeholder="请输入行业类型" class="enen"> -->
                       <select name="" id="" v-model="val.industry"  v-show="show" class="SELct">
                       <option :value="val" v-for="(val,index) in DianHeng" :key='"Index" + index'>{{val}}</option>
                  </select>
                    <div v-show="!show"> {{val.industry}}</div>
      </section>
      
       <section class="formData">
         <section class="concent2">
              电房编号
        </section>
            <input type="text" placeholder="请输入电房编号" class="enen" v-show="show" v-model="val.number">
            <div v-show="!show">{{val.number}}</div>
      </section>
      <section class="formData">
         <section class="concents1">
              备注
        </section>
            <input type="text" placeholder="请输入遇到的问题" class=" Name NaInput"  v-show='show' v-model="val.remark">
            <div v-show="!show" class="divs"> {{val.remark}}</div>
      </section>
       <!-- <section class="DianFangs ">
         <section class="DianFang">
              电房柜型数量
        </section>
        <section class="DianFangright">
          <section class="DianFangrightDiv">
            <section class="DianFanglist">
              <div class="DfList">
                <span>高压柜-进线柜(G)</span>
                <input type="text" class="Inputs" v-model="val.Jinxian" @change="OnDianChang(index)">
              </div>
                <div class="DfList">
                   <span>高压柜-计量柜(G)</span>
                <input type="text" class="Inputs" v-model="val.JiLIANG"  @change="OnDianChang2(index)">
                </div>
                  <div class="DfList">
                     <span>高压柜-出线柜(G)</span>
                <input type="text" class="Inputs" v-model="val.ChuXian"  @change="OnDianChang3(index)">
                  </div>
                    <div class="DfList">
                       <span>高压柜-环网柜(G)</span>
                <input type="text" class="Inputs" v-model="val.HuanWang"  @change="OnDianChang4(index)">
                    </div>
                      <div class="DfList">
                         <span>低压柜-进线柜(P)</span>
                <input type="text" class="Inputs" v-model="val.DJinxian"  @change="OnDianChang5(index)">
                      </div>
                        <div class="DfList">
                           <span>低压柜-电容柜(P)</span>
                <input type="text" class="Inputs" v-model="val.DDianRong"  @change="OnDianChang6(index)">
                        </div>
                          <div class="DfList ">
                             <span>低压柜-出线柜(P)</span>
                <input type="text" class="Inputs" v-model="val.DChuXian"  @change="OnDianChang7(index)">
                          </div>
                            <div class="DfList">
                               <span>高压柜-联络柜(G)</span>
                <input type="text" class="Inputs" v-model="val.LianLuo"  @change="OnDianChang8(index)">
                            </div>
            </section>

          </section>

        </section>
        </section>
     <section class="DianFangs2 ">
         <section class="DianFang">
              电房柜型数量
        </section>
      <section class="DianFangright">
          <section class="DianFangrightDiv">
            <section class="DianFanglist">
              <div class="DfList" v-for='(val,index) in val.Friends2' :key='index'>
                <span>{{val.name}}</span>
                <input type="text" class="Inputs" v-model="val.data">
              </div>
            </section>
          </section>
        </section>
     </section> -->
    <section class="Beijingtu2" @click="onConfirms2" v-show='show'></section>
      </form>
       <!-- <div class="HonKonTiao"></div> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
 Friend:[],
 Friends:[{
     Friends2:[],
 }],
        show:false,
        index4:0,
        id:'',
        DianFang:['箱变','台架','电房'],
        DianHeng:['工业','普通工业','商业','其他(特殊机构如医疗)']
        }
    },
    methods:{
        add(){
            this.show=true
        },
        onConfirms2:function(){
          var paras = {};
          paras.userId = this.$store.state.userId;
          paras.name = this.Friends[0].name;//电房名称
          if(this.Friends[0].type == '箱变'){
              this.Friends[0].type =1
          }else if(this.Friends[0].type == '台架'){
              this.Friends[0].type = 2
          }else if(this.Friends[0].type == '电房'){
              this.Friends[0].type = 3
          }
          if(this.Friends[0].industry == '工业'){
            this.Friends[0].industry = 1
              }else if(  this.Friends[0].industry ='普通工业'){
             this.Friends[0].industry = 2
            }else if(  this.Friends[0].industry = '商业'){
             this.Friends[0].industry = 3
            }else if(  this.Friends[0].industry = '其他(特殊机构如医疗)'){
              this.Friends[0].industry = 4
            }
          paras.type = this.Friends[0].type;//电房类型
          paras.remark = this.Friends[0].remark;//备注
          paras.id = this.id;//电房id
          paras.industry = this.Friends[0].industry;//行业类型id
          paras.number = this.Friends[0].number;//电房编号
          paras.capacitList = [];
          paras.gxList = [];
            var params = {}; //参数
            params.module = "updStockRoom";
            params.action = "StockRoomService";
            params.paras = paras;
            var v = JSON.stringify(params);
            console.log(v)
            console.log(this.Friends)
            var code;
      if(this.Friends.name != '' && this.Friends.type != '' && this.Friends.remark != '' && this.id != '' && this.Friends.industry != '' && this.Friends.number != ''){
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
                            }
                          })
                          if(code == 200){
                                this.$toast({
                                message: "成功"
                              })
                              if(this.Friends[0].industry == 1){
                            this.Friends[0].industry = '工业';
                           }else if(this.Friends[0].industry == 2){
                                this.Friends[0].industry = '普通工业';
                           }else if(this.Friends[0].industry == 3){
                                this.Friends[0].industry = '商业';
                           }else if(this.Friends[0].industry == 4){
                                this.Friends[0].industry = '其他(特殊机构如医疗)'
                           }
                           if(this.Friends[0].type == 1){
                               this.Friends[0].type = '箱变';
                           }else  if(this.Friends[0].type == 2){
                               this.Friends[0].type = '台架';
                           } if(this.Friends[0].type == 3){
                              this.Friends[0].type = '电房';
                           }
                              this.show = false;
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
    },
    //      OnDianChang(i){
    //       this.index4 = i;
    //      var res = this.Friends[this.index4].Jinxian;
    //      console.log(res)
    //       for(var i = 1; i<=res;i++){
    //         var datas = {
    //           id:'1',
    //             name:'高压柜-进线柜(G)',
    //             data:'G',
    //             number:res
    //         }
    //         this.Friends[this.index4].Friends2.push(datas);
    //       }
    //     if(res == 0){
    //         var List=[]
    //          for(var i = 0;i<this.Friends[this.index4].Friends2.length;i++){
    //           if(this.Friends[this.index4].Friends2[i].id == 1){
    //             List.push(this.Friends[this.index4].Friends2[i])
    //           }
    //         }
    //            this.Friends[this.index4].Friends2.splice(List,List.length);
    //       }
    //     },
    //      OnDianChang2(i){
    //       this.index4 = i;
    //      var res = this.Friends[this.index4].JiLIANG;
    //      console.log(res)
    //       for(var i = 1; i<=res;i++){
    //         var datas = {
    //             id:'2',
    //             name:'高压柜-计量柜(G)',
    //             data:'G',
    //              number:res
    //         }
    //         this.Friends[this.index4].Friends2.push(datas);
    //       }
    //     if(res == 0){
    //         var List=[]
    //          for(var i = 0;i<this.Friends[this.index4].Friends2.length;i++){
    //           if(this.Friends[this.index4].Friends2[i].id == 2){
    //             List.push(this.Friends[this.index4].Friends2[i])
    //           }
    //         }
    //         this.Friends[this.index4].Friends2.splice(List,List.length);
    //       }
        
    //     },
    //      OnDianChang3(i){
    //       this.index4 = i;
    //      var res = this.Friends[this.index4].ChuXian;
    //      console.log(res)
    //       for(var i = 1; i<=res;i++){
    //         var datas = {
    //           id:'3',
    //             name:'高压柜-出线柜(G)',
    //             data:'G',
    //              number:res
    //         }
    //         this.Friends[this.index4].Friends2.push(datas);
    //       }
    //       if(res == 0){
    //         var List=[]
    //          for(var i = 0;i<this.Friends[this.index4].Friends2.length;i++){
    //           if(this.Friends[this.index4].Friends2[i].id == 3){
    //             List.push(this.Friends[this.index4].Friends2[i])
    //           }
    //         }
    //          this.Friends[this.index4].Friends2.splice(List,List.length);
    //       }
    //     },
    //      OnDianChang4(i){
    //       this.index4 = i;
    //      var res = this.Friends[this.index4].HuanWang;
    //      console.log(res)
    //       for(var i = 1; i<=res;i++){
    //         var datas = {
    //           id:'4',
    //             name:'高压柜-环网柜(G)',
    //             data:'G',
    //              number:res
    //         }
    //          this.Friends[this.index4].Friends2.push(datas);
    //       }
    //       if(res == 0){
    //         var List=[]
    //         for(var i = 0;i<this.Friends[this.index4].Friends2.length;i++){
    //           if(this.Friends[this.index4].Friends2[i].id == 4){
    //             List.push(this.Friends[this.index4].Friends2[i])
    //           }
    //         }
    //          this.Friends[this.index4].Friends2.splice(List,List.length);
    //       }
    //     },
    //      OnDianChang5(i){
    //       this.index4 = i;
    //      var res = this.Friends[this.index4].DJinxian;
    //      console.log(res)
    //       for(var i = 1; i<=res;i++){
    //         var datas = {
    //           id:'5',
    //             name:'低压柜-进线柜(P)',
    //             data:'P',
    //              number:res
    //         }
    //         this.Friends[this.index4].Friends2.push(datas);
    //       }
    //       if(res == 0){
    //         var List=[]
    //          for(var i = 0;i<this.Friends[this.index4].Friends2.length;i++){
    //           if(this.Friends[this.index4].Friends2[i].id == 5){
    //             List.push(this.Friends[this.index4].Friends2[i])
    //           }
    //         }
    //            this.Friends[this.index4].Friends2.splice(List,List.length);
    //       }
    //     },
    //      OnDianChang6(i){
    //       this.index4 = i;
    //      var res = this.Friends[this.index4].DDianRong;
    //      console.log(res)
    //       for(var i = 1; i<=res;i++){
    //         var datas = {
    //             id:'6',
    //             name:'低压柜-电容柜(P)',
    //             data:'P',
    //              number:res
    //         }
    //         this.Friends[this.index4].Friends2.push(datas);
    //       }
    //       if(res == 0){
    //         var List=[]
    //         for(var i = 0;i<this.Friends[this.index4].Friends2.length;i++){
    //           if(this.Friends[this.index4].Friends2[i].id == 6){
    //             List.push(this.Friends[this.index4].Friends2[i])
    //           }
    //         }
    //           this.Friends[this.index4].Friends2.splice(List,List.length);
    //       }
    //     },
    //      OnDianChang7(i){
    //       this.index4 = i;
    //      var res = this.Friends[this.index4].DChuXian;
    //      console.log(res)
    //       for(var i = 1; i<=res;i++){
    //         var datas = {
    //           id:'7',
    //             name:'低压柜-出线柜(P)',
    //             data:'P',
    //              number:res
    //         }
    //       this.Friends[this.index4].Friends2.push(datas);
    //       }
    //       if(res == 0){
    //         var List=[]
    //         for(var i = 0;i<this.Friends[this.index4].Friends2.length;i++){
    //           if(this.Friends[this.index4].Friends2[i].id == 7){
    //             List.push(this.Friends[this.index4].Friends2[i])
    //           }
    //         }
    //          this.Friends[this.index4].Friends2.splice(List,List.length);
    //       }
    //     },
    //      OnDianChang8(i){
    //       this.index4 = i;
    //      var res = this.Friends[this.index4].LianLuo;
    //      console.log(res)
    //        for(var i = 1; i<=res;i++){
    //         var datas = {
    //           id:'8',
    //             name:'高压柜-联络柜(G)',
    //             data:'G',
    //              number:res
    //         }
    //        this.Friends[this.index4].Friends2.push(datas);
    //       }
    //         if(res == 0){
    //         var List=[]
    //         for(var i = 0;i<this.Friends[this.index4].Friends2.length;i++){
    //           if(this.Friends[this.index4].Friends2[i].id == 8){
    //             List.push(this.Friends[this.index4].Friends2[i])
    //           }
    //         }
    //           this.Friends[this.index4].Friends2.splice(List,List.length);
    //       }
    //      }
    },
    created(){
          let { id: id } = this.$route.query;
          this.id = id;
          var paras = new Object();
          paras.userId = this.$store.state.userId;
          paras.id = id;
          var params = new Object(); // 参数
        	params.module = "getStockRoomDetail";
          params.action = "StockRoomService";
          params.paras = paras;
          var v = JSON.stringify(params);
          var List = this.Friend;
           $.ajax({
                type:'get',
                url:this.$store.state.url,
                dataType:'json',
                async:false,
                data:{
                    params:v
                },
                success:function(data){
                   var code = data.code;
                   if(code == 200){
                           if(data.result.industry == 1){
                            data.result.industry = '工业';
                           }else if(data.result.industry == 2){
                                data.result.industry = '普通工业';
                           }else if(data.result.industry == 3){
                                data.result.industry = '商业';
                           }else if(data.result.industry == 4){
                                data.result.industry = '其他(特殊机构如医疗)'
                           }
                           if(data.result.type == 1){
                               data.result.type = '箱变';
                           }else  if(data.result.type == 2){
                               data.result.type = '台架';
                           } if(data.result.type == 3){
                               data.result.type = '电房';
                           }
                       
                        List.push(data.result);
                   }
                }
           })
           console.log(List)
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
@import '../css/Customer.scss';
</style>