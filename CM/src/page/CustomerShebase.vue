<template>
      <div class="box">
<section class="banner">
    <section class="BannerImg">
    </section>
  </section>
      <section class="BiaoTing">
               <section class="BiaoTleft">设备信息</section>
               <section class="beijingtu" @click="add"></section>
    </section>
 <table border="0" cellspacing="0">
     <tbody v-for='(val,index1) in List' :key='index1' >
         <tr>
             <td class="left">电房名称</td>
             <td class="right" v-show="!show">{{val.stockRoomName}}</td>
             <td class="right" v-show="show">
                 <input type="text" v-model='val.stockRoomName' >
             </td>
         </tr>
         <tr>
             <td class="left">设备属性名称</td>
             <td class="right" v-show="!show">{{val.name}}</td>
              <td class="right" v-show="show">
                  <input type="text" v-model="val.name">
              </td>
         </tr>
         <tr>
             <td class="left">设备名称</td>
             <td class="right" v-show="!show">{{val.equiName}}</td>
              <td class="right" v-show="show">
                  <input type="text" v-model="val.equiName">
              </td>
         </tr>
          <tr>
             <td class="left">设备类型</td>
             <td class="right" v-show="!show">{{val.type}}</td>
              <td class="right" v-show="show">
                  <input type="text" v-model="val.type">
              </td>
         </tr>
         <tr>
             <td class="left">设备别名</td>
             <td class="right" v-show="!show">{{val.equipName1}}</td>
              <td class="right" v-show="show">
                  <input type="text" v-model="val.equipName1">
              </td>
         </tr>
          <tr>
             <td class="left">设备编号</td>
             <td class="right" v-show="!show">{{val.equipNum}}</td>
              <td class="right" v-show="show">
                  <input type="text" v-model="val.equipNum">
              </td>
         </tr>
         <tr>
             <td class="left">生产日期</td>
             <td class="right" v-show="!show">{{val.createDate}}</td>
              <td class="right" v-show="show">
                  <input type="text" v-model="val.createDate">
              </td>
         </tr>
         <tr v-for='(val,index2) in val.sRIAttributList' :key='"index" + index2'>
             <td class="left" >{{val.equClassName}}</td>
                <td class="right" v-show="!show">{{val.aValue}}</td>
              <td class="right" v-show="show">
                  <input type="text" v-model="val.aValue">
              </td>
         </tr>
         <tr v-for='(val,i) in val.itemList[index1].sRIAttributList' :key='i'>
             <td class="left" >{{val.equClassName}}</td>
                <td class="right" v-show="!show">{{val.aValue}}</td>
              <td class="right" v-show="show">
                  <input type="text" v-model="val.aValue">
              </td>
         </tr>
     </tbody>
 </table>
 <section class="Beijingtu"  v-show="show" @click="Commit"></section>
    <section class="KongbaiT"></section>
</div>
</template>
<script>
import {getDateStr} from '../js/comment.js'
export default {
    data(){
        return{
        show:false,
        id:'',
        url:this.$store.state.url,
        List:[],
        Res:[],
        SheBaseHeng:['工业','普通工业','商业','其他(特殊机构如医疗)'],
        SheBaseLiang:['高计','低计'],
        SheBaseLei:['油变','干变'],
        SheBaseSun:['3','5','7','9','10','11','12','13','15'],
        SheBaseLiang2:['非需量','需量'],
        }
    },
    methods:{
        Commit(){
            this.Res = this.List;
             if(this.Res[0].type == "简略"){
                    this.Res[0].type = '0'
                }else if(this.Res[0].type == "非简略"){
                    this.Res[0].type = '1'
                }
                console.log(this.Res[0].type)
                  var res = [];//设备的信息
                  var Res = [];//下属设备信息
                // 转换名字
                if(this.Res[0].sRIAttributList[4].aValue == '大工业'){
                    this.Res[0].sRIAttributList[4].aValue = '1'
                }else if(this.Res[0].sRIAttributList[4].aValue == '普通工业'){
                    this.Res[0].sRIAttributList[4].aValue = '2'
                }else if(this.Res[0].sRIAttributList[4].aValue == '商业'){
                    this.Res[0].sRIAttributList[4].aValue = '3'
                }else if(this.Res[0].sRIAttributList[4].aValue == '其他(特殊机构如医疗)'){
                    this.Res[0].sRIAttributList[4].aValue = '4'
                }
                // 转换名字
                if(this.Res[0].sRIAttributList[5].aValue == '高计'){
                    this.Res[0].sRIAttributList[5].aValue = '1'
                }else if(this.Res[0].sRIAttributList[5].aValue == '低计'){
                    this.Res[0].sRIAttributList[5].aValue = '2'
                }
                if(this.Res[0].sRIAttributList[7].aValue == '油变'){
                    this.Res[0].sRIAttributList[7].aValue = '1'
                }else if(this.Res[0].sRIAttributList[7].aValue == '干变'){
                    this.Res[0].sRIAttributList[7].aValue = '2'
                }
                if(this.Res[0].sRIAttributList[11].aValue == '非需量'){
                    this.Res[0].sRIAttributList[11].aValue = '1'
                }else if(this.Res[0].sRIAttributList[11].aValue == '需量'){
                    this.Res[0].sRIAttributList[11].aValue = '2'
                }
                for(var i = 0 ;i<=this.Res[0].sRIAttributList.length - 1;i++){
                        var str ={};
                        str.eAttrid = this.Res[0].sRIAttributList[i].eAttrid;
                        str.aValue = this.Res[0].sRIAttributList[i].aValue;
                        str.attId = this.Res[0].sRIAttributList[i].attId;
                        res.push(str);
                }
                for(var k = 0; k<=this.Res[0].itemList[0].sRIAttributList.length - 1;k++){
                        var strs ={};
                        strs.eAttrid = this.Res[0].itemList[0].sRIAttributList[k].eAttrid;
                        strs.aValue = this.Res[0].itemList[0].sRIAttributList[k].aValue;
                         strs.attId = this.Res[0].itemList[0].sRIAttributList[k].attId;
                        Res.push(strs);
                }
                this.Res[0].sRIAttributList = res;
                this.Res[0].itemList[0].sRIAttributList = Res;
                var paras = {};
                paras.equId = this.Res[0].equId;
                paras.equiName = this.Res[0].equiName;
                paras.billingId = this.Res[0].billingId;
                paras.cabinetId = this.Res[0].cabinetId;
                paras.equipName1 = this.Res[0].equipName1;
                paras.dyfw = this.Res[0].dyfw;
                paras.EquClassId = this.Res[0].EquClassId;
                paras.type = this.Res[0].type;
                paras.capId = this.Res[0].capId;
                paras.equipNum = this.Res[0].equipNum;
                paras.stockRoomId = this.Res[0].stockRoomId;
                paras.stockRoomName = this.Res[0].stockRoomName;
                paras.cusId = this.Res[0].cusId;
                paras.stockId = this.Res[0].stockId;
                paras.name = this.Res[0].name;
                paras.itemList =  this.Res[0].itemList;
                paras.disId = this.Res[0].disId;
                paras.id = this.Res[0].id;
                paras.createDate = this.Res[0].createDate;
                paras.sRIAttributList = res;
                var params = {};
                params.module = 'updStockRoominf';
                params.action = 'StockRoominfService';
                params.paras = paras;
                var v = JSON.stringify(params);
                console.log(params)
                $.ajax({
                    type:'get',
                    url:this.$store.state.url,
                    dataType:'json',
                    async:false,
                    data:{
                        params:v
                    },
                    success:(data)=>{
                        console.log(data)
                    }
                })


            // 把数据恢复原原样 
            this.List = [];
            var paras = {};
        paras.userId = this.$store.state.userId;
        paras.id = this.id;; // 电房设备id
        paras.equId = 1; // 设备分类id
        var params = {}; // 参数
        params.module = "getStockRoominfDetile";
        params.action = "StockRoominfService";
        params.paras = paras;
        var v = JSON.stringify(params);
        var Listers =this.List;
        $.ajax({
          type: "get",
          url: this.url,
          dataType: "json",
          data: {
            params: v
          },
          success: function(data) {
            console.log(data)
            var message = data.message;
            if(data.code == 200){
                if(data.result.type == 0){
                    data.result.type ='简略'
                }else if(data.result.type == 1){
                    data.result.type ='非简略'
                }
                data.result.createDate = getDateStr(data.result.createDate);
                // 转换名字
                if(data.result.sRIAttributList[4].aValue == 1){
                    data.result.sRIAttributList[4].aValue = '大工业'
                }else if(data.result.sRIAttributList[4].aValue == 2){
                    data.result.sRIAttributList[4].aValue = '普通工业'
                }else if(data.result.sRIAttributList[4].aValue == 3){
                    data.result.sRIAttributList[4].aValue = '商业'
                }else if(data.result.sRIAttributList[4].aValue == 4){
                    data.result.sRIAttributList[4].aValue = '其他(特殊机构如医疗)'
                }
                // 转换名字
                if(data.result.sRIAttributList[5].aValue == 1){
                    data.result.sRIAttributList[5].aValue = '高计'
                }else if(data.result.sRIAttributList[5].aValue == 2){
                    data.result.sRIAttributList[5].aValue = '低计'
                }
                
                if(data.result.sRIAttributList[7].aValue == 1){
                    data.result.sRIAttributList[7].aValue = '油变'
                }else if(data.result.sRIAttributList[7].aValue == 2){
                    data.result.sRIAttributList[7].aValue = '干变'
                }
                if(data.result.sRIAttributList[11].aValue == 1){
                    data.result.sRIAttributList[11].aValue = '非需量'
                }else if(data.result.sRIAttributList[11].aValue == 2){
                    data.result.sRIAttributList[11].aValue = '需量'
                }
                Listers.push(data.result);
            }else{
              alert(message)
            }
          }
        });


        },
    add(){
        this.show=true
        },
    },
    created(){
        let { id: id } = this.$route.query;
        this.id = id;
        var paras = {};
        paras.userId = this.$store.state.userId;
        paras.id = this.id;; // 电房设备id
        paras.equId = 1; // 设备分类id
        var params = {}; // 参数
        params.module = "getStockRoominfDetile";
        params.action = "StockRoominfService";
        params.paras = paras;
        var v = JSON.stringify(params);
        var Listers =this.List;
        $.ajax({
          type: "get",
          url: this.url,
          dataType: "json",
          data: {
            params: v
          },
          success: function(data) {
            console.log(data)
            var message = data.message;
            if(data.code == 200){
                if(data.result.type == 0){
                    data.result.type ='简略'
                }else if(data.result.type == 1){
                    data.result.type ='非简略'
                }
                data.result.createDate = getDateStr(data.result.createDate);
                // 转换名字
                if(data.result.sRIAttributList[4].aValue == 1){
                    data.result.sRIAttributList[4].aValue = '大工业'
                }else if(data.result.sRIAttributList[4].aValue == 2){
                    data.result.sRIAttributList[4].aValue = '普通工业'
                }else if(data.result.sRIAttributList[4].aValue == 3){
                    data.result.sRIAttributList[4].aValue = '商业'
                }else if(data.result.sRIAttributList[4].aValue == 4){
                    data.result.sRIAttributList[4].aValue = '其他(特殊机构如医疗)'
                }
                // 转换名字
                if(data.result.sRIAttributList[5].aValue == 1){
                    data.result.sRIAttributList[5].aValue = '高计'
                }else if(data.result.sRIAttributList[5].aValue == 2){
                    data.result.sRIAttributList[5].aValue = '低计'
                }
                
                if(data.result.sRIAttributList[7].aValue == 1){
                    data.result.sRIAttributList[7].aValue = '油变'
                }else if(data.result.sRIAttributList[7].aValue == 2){
                    data.result.sRIAttributList[7].aValue = '干变'
                }
                if(data.result.sRIAttributList[11].aValue == 1){
                    data.result.sRIAttributList[11].aValue = '非需量'
                }else if(data.result.sRIAttributList[11].aValue == 2){
                    data.result.sRIAttributList[11].aValue = '需量'
                }


                Listers.push(data.result);
            }else{
              alert(message)
            }
          }
        });
}
}
</script>
<style lang="scss" scoped>
@import '../css/CustomerShebase.scss';
</style>