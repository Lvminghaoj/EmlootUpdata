<template>
    <div class="onClick">
<van-tabs v-model="active">
  <van-tab title="客户信息">
              <section class="HonKonTiao"></section>
              <section class="formData">
                 <section class="left">
                 客户基本信息
               </section>
              </section>
      <section class="formData">
         <section class="concent2">
                 客户名称
          </section>
               <input type="text" placeholder="请输入客户名称" class="enen" v-model="UserName">
      </section>
       <section class="formData">
             <section class="concent2">
                 客户电话
               </section>
               <input type="text" placeholder="请输入客户名称" class="enen" v-model="UserNumber">
      </section>
               <section class="formData">
                 <section class="concent2">
                 客户类型
              </section>
                  <input type="text" placeholder="请选择" v-model="UserCosId" @click="ShowUp" class="User">
            <van-popup v-model="show" position="bottom" :overlay="true">
        <van-picker show-toolbar title='客户类型选择' :columns="columns" @cancel="onCancel" @confirm="onConfirm" @change="onChange" />
            </van-popup>
              </section>
                <section class="formData formData1">
             <section class="concent2">
                 客户地址
               </section>
               <textarea type="textarea" placeholder="请输入客户地址" class="enen enen2" v-model="UserFamily"></textarea>
            </section>
           <section class="HonKonTiao"></section>
            <form action="" v-for='(val,index) in Forms' :key='index'>
                    <section class="formData">
                      <section class="right">
                      客户联系人
                    </section>
                    </section>
              <section class="formData">
                <section class="concents1">
                      姓名
                </section>
                    <input type="text" placeholder="请输入客户名称" class="Name NaInput" v-model="val.name">
              </section>
              <section class="formData">
                  <section class="concents2">
                      联系人手机
                    </section>
                    <input type="text" placeholder="请输入客户名称" class="enen name" v-model="val.phone">
            </section>
                    <section class="formData">
                      <section class="concents1">
                      性别
                </section>
                  <input type="text" placeholder="请选择" v-model="val.radio" @click="ShowUp1(index)" class="User Name">
                  <van-popup v-model="show1" position="bottom" :overlay="true">
                 <van-picker show-toolbar title='客户类型选择' :columns="Textxb" @cancel="onCancel1" @confirm="onConfirm1" @change="onChange1" />
                   </van-popup>
          
                    </section>
                      <section class="formData">
                  <section class="concents1">
                      职务
                </section>
                    <input type="text" placeholder="请选择" class="User Name" v-model="val.GunZhi" @click="ShowUp8(index)">
                    <van-popup v-model="show8" position="bottom" :overlay="true">
                 <van-picker show-toolbar title='客户类型选择' :columns="TextZhiWu" @cancel="onCancel8" @confirm="onConfirm8" @change="onChange8" />
                   </van-popup>
                </section>
                  <section class="HonKonTiao" ></section>
                </form>
                <!-- 按钮事件 -->
                  <section class="ClickBtoom" >
                        <section class="ClickLeft" @click="AddTrs()">
                          + 添加客户联系人
                        </section>
                        <section class="ClickRight" @click="onConfirms()">提交</section>
                  </section>

                  <div class="Kongbai2"></div>
  </van-tab>
  <van-tab title="电房信息">
    <div class="HonKonTiao"></div>
    <!-- 电房信息的添加 -->
    <form action="" v-for="(val,index) in Friends" :key='index'>
    <section class="formData">
      <section class="concent2">
        选择客户
      </section>
       <input type="text" v-model="val.value2" @click="ShowUp2(index)" class="User"  placeholder="请选择">
        <van-popup v-model="show2" position="bottom" :overlay="true">
                <van-picker show-toolbar title='客户选择' :columns="ResData" @cancel="onCancel2" @confirm="onConfirm2" @change="onChange2" />
        </van-popup>
    </section>
      <section class="formData">
         <section class="concent2">
              电房名称
        </section>
            <input type="text" placeholder="请输入电房名称" class="enen"  v-model="val.DianFang">
      </section>
       <section class="formData">
         <section class="concent2">
              电房类型
        </section>
                       <input type="text" v-model="val.DianFangPist" @click="ShowUp9(index)" placeholder="请选择" class="User">
        <van-popup v-model="show9" position="bottom" :overlay="true">
                <van-picker show-toolbar title='选择电房类型' :columns="DianFangPist" @cancel="onCancel9" @confirm="onConfirm9" @change="onChange9" />
        </van-popup>
      </section>
      <section class="formData">
         <section class="concent2">
              行业类型
        </section>
                       <input type="text" v-model="val.DianFangList" @click="ShowUp3(index)" placeholder="请选择" class="User">
        <van-popup v-model="show3" position="bottom" :overlay="true">
                <van-picker show-toolbar title='选择电房行业类型' :columns="DianFanglists" @cancel="onCancel3" @confirm="onConfirm3" @change="onChange3" />
        </van-popup>
      </section>
      
       <section class="formData">
         <section class="concent2">
              电房编号
        </section>
            <input type="text" placeholder="请输入电房编号" class="enen"  v-model="val.DianFnum">
      </section>
      <section class="formData">
         <section class="concents1">
              备注
        </section>
            <input type="text" placeholder="请输入遇到的问题" class=" Name NaInput"  v-model="val.Childata">

      </section>
       <div class="HonKonTiao"></div>
      </form>
       <section class="ClickBtoom" >
                <section class="ClickLeft" @click="addDiang()">
                          + 添加电房
                </section>
                  <section class="ClickRight" @click="onConfirms2()">提交</section>
        </section>
  </van-tab>
<van-tab title="设备信息">
  <section class="banner">
    <section class="BannerImg">
    </section>
  </section>
  <form action="" v-for='(val,index) in SheBase' :key='index'>
     <section class="formData">
                 <section class="concent2">
                选择客户
              </section>
                  <input type="text" placeholder="请选择" v-model="val.Username" @click="ShowUp4(index)" class="User2 MarUser">
            <van-popup v-model="show4" position="bottom" :overlay="true">
        <van-picker show-toolbar title='选择客户' :columns="ResData" @cancel="onCancel4" @confirm="onConfirm4" @change="onChange4" />
            </van-popup>
              </section>
              <section class="formData">
                 <section class="concent2">
                选择电房
              </section>
                  <input type="text" placeholder="请选择" v-model="val.DFnumber" @click="ShowUp5(index)" class="User2 MarUser">
            <van-popup v-model="show5" position="bottom" :overlay="true">
        <van-picker show-toolbar title='选择电房' :columns="DFList" @cancel="onCancel5" @confirm="onConfirm5" @change="onChange5" />
            </van-popup>
              </section>
      <section class="formData">
                 <section class="concent6">
                设备分类名称
              </section>
                  <input type="text" placeholder="请选择" v-model="val.SheBaseName" @click="ShowUp6(index)" class="User2 inputs">
            <van-popup v-model="show6" position="bottom" :overlay="true">
        <van-picker show-toolbar title='选择设备分类' :columns="SheBaseList" @cancel="onCancel6" @confirm="onConfirm6" @change="onChange6" />
            </van-popup>
              </section>
      <section class="formData">
         <section class="concent2">
              设备名称
        </section>
            <input type="text" placeholder="请输入设备名称" class="enen MarUser"  v-model="val.SheBasename">
      </section>
      <section class="formData">
         <section class="concent2">
              设备类型
        </section>
            <input type="text" placeholder="请选择" class="User2 MarUser"  v-model="val.SheBaseListName" @click="ShowUp14(index)">
             <van-popup v-model="show14" position="bottom" :overlay="true">
             <van-picker show-toolbar title='选择设备分类' :columns="SheBaseListNamesy" @cancel="onCancel14" @confirm="onConfirm14" @change="onChange14" />
            </van-popup>
      </section>
      <section class="formData">
         <section class="concent2">
              设备别名
        </section>
            <input type="text" placeholder="请输入设备别名" class="enen MarUser"  v-model="val.SheBaseLinName">
      </section>
      <section class="formData">
         <section class="concent2">
              生产日期
        </section>
            <input type="text" placeholder="请输入设备的生产日期" class="enen MarUser"  v-model="val.SheBaseTime" @click="endTimePops(index)" >
                  <van-popup v-model="endTimePop" label="离开时间" position="bottom" :overlay="true">
                    <van-datetime-picker
                      type="date"
                      @cancel="endTimePop = false"
                      @confirm="endTimePop = false"
                      @change='endTimeChange'
                    />
                  </van-popup>
      </section>
      <section class="formData">
         <section class="concent2">
              设备编号
        </section>
            <input type="text" placeholder="请输入设备编号" class="enen MarUser"  v-model="val.SheBaseJiLiang">
      </section>
         <section class="formData">
           <section class="concent2">
              设备计量
        </section>
            <input type="text" placeholder="请输入设备计量点" class="enen MarUser"  v-model="val.DFshebeiJiname">
      </section>
      <section class="formData">
           <section class=" concent10">
              变压器编号
        </section>
            <input type="text" placeholder="请输入变压器编号" class="NaInputs"  v-model="val.BianYaQinumber">
      </section>
       <section class="formData">
         <section class="concents1">
              容量
        </section>
            <input type="text" placeholder="请输入变压器容量" class=" Name NaInputs2"  v-model="val.BianYaQinum">
      </section>
       <section class="formData">
         <section class="concents1">
             型号
        </section>
            <input type="text" placeholder="请输入变压器型号" class=" Name NaInputs2"  v-model="val.BianYaQILname">
      </section>
      <section class="formData">
                 <section class="concent2">
                行业类型
              </section>
                  <input type="text" placeholder="请选择" v-model="val.BianYaQiList" @click="ShowUp10(index)" class="User2 MarUser">
            <van-popup v-model="show10" position="bottom" :overlay="true">
        <van-picker show-toolbar title='选择行业类型' :columns="DianFanglists" @cancel="onCancel10" @confirm="onConfirm10" @change="onChange10" />
            </van-popup>
              </section>
               <section class="formData">
                 <section class="concent2">
            计量方式
              </section>
                  <input type="text" placeholder="请选择" v-model="val.DfSheBeiname" @click="ShowUp7(index)" class="User2 MarUser">
            <van-popup v-model="show7" position="bottom" :overlay="true">
        <van-picker show-toolbar title='选择计量方式' :columns="SheBaseDfname" @cancel="onCancel7" @confirm="onConfirm7" @change="onChange7" />
            </van-popup>
              </section>
                <section class="formData">
           <section class="concent11">
              cos力率
        </section>
            <input type="text" placeholder="请输入cos力率" class="NaInputs3"  v-model="val.Cos">
      </section>
      <section class="formData">
                 <section class="concent2">
            损耗类型
              </section>
                  <input type="text" placeholder="请选择" v-model="val.SunBian" @click="ShowUp11(index)" class="User2 MarUser">
            <van-popup v-model="show11" position="bottom" :overlay="true">
        <van-picker show-toolbar title='选择损耗类型' :columns="SunBianList" @cancel="onCancel11" @confirm="onConfirm11" @change="onChange11" />
            </van-popup>
              </section>

               <section class="formData">
                 <section class="concent2">
            变损标准
              </section>
              <input type="text" placeholder="请选择" v-model="val.BianSun" @click="ShowUp12(index)" class="User2 MarUser">
            <van-popup v-model="show12" position="bottom" :overlay="true">
        <van-picker show-toolbar title='选择变损标准' :columns="BianSunList" @cancel="onCancel12" @confirm="onConfirm12" @change="onChange12" />
            </van-popup>
              </section>

      <section class="formData">
         <section class="concents1">
              厂家
        </section>
            <input type="text" placeholder="请输入厂家" class=" Name NaInputs2"  v-model="val.FormCity">
      </section>
 <section class="formData">
                 <section class="concent6">
                是否需要需量
              </section>
                  <input type="text" placeholder="请选择" v-model="val.XuList" @click="ShowUp13(index)" class="User2 inputs">
            <van-popup v-model="show13" position="bottom" :overlay="true">
               <van-picker show-toolbar title='选择是否需要需量' :columns="XuListstute" @cancel="onCancel13" @confirm="onConfirm13" @change="onChange13" />
            </van-popup>
              </section>
<section class="formData">
           <section class="concent2">
             需量系数
        </section>
            <input type="text" placeholder="请输入设备计量点" class="enen MarUser"  v-model="val.XuListnumber">
      </section>
      <section class="formData">
                 <section class="concent6">
                下属设备名称
              </section>
                  <input type="text" placeholder="请输入下属设备名称" v-model="val.DownBasename"  class="NaInputs4">
      </section>
       <section class="formData">
                 <section class="concent6">
                开关额定电流
              </section>
                  <input type="text" placeholder="请输入额定电流" v-model="val.ISOKDianfree"  class="NaInputs4">
              </section>
              <section class="formData">
         <section class="concents1">
             型号
        </section>
            <input type="text" placeholder="请输入型号" class=" Name NaInputs2"  v-model="val.List">
      </section>
      <section class="formData">
         <section class="concent6">
              开关生产日期
        </section>
            <input type="text" placeholder="请输入开关的生产日期" class="NaInputs4"  v-model="val.Times" @click="endTimePops2(index)" >
                  <van-popup v-model="endTimePop2" label="离开时间" position="bottom" :overlay="true">
                    <van-datetime-picker
                      type="date"
                      @cancel="endTimePop2 = false"
                      @confirm="endTimePop2 = false"
                      @change='endTimeChange2'
                    />
                  </van-popup>
      </section>
        <section class="formData">
         <section class="concent20">
            互感器CT变比
        </section>
            <input type="text" placeholder="请输入CT" class=" NaInputs5 NaInputs4"  v-model="val.CTnum">
      </section>
       <section class="formData">
         <section class="concent6">
            下属设备厂家
        </section>
            <input type="text" placeholder="请输入下属设备厂家" class=" NaInputs4"  v-model="val.DownCity">
      </section>
       <section class="formData">
         <section class="concent20">
            下属设备PT比
        </section>
            <input type="text" placeholder="请输入PT" class=" NaInputs5 NaInputs4"  v-model="val.PT">
      </section>
       <section class="Kongbai"></section>
  </form>
     <section class="ClickBtoom" >
        <section class="ClickLeft" @click="addEbase()">
                          + 添加设备信息
        </section>
        <section class="ClickRight" @click="onConfirms3()">提交</section>
    </section>
      <section class="Kongbai2"></section>
</van-tab>
 <!-- <van-tab title="上传图片">
    
   <FileImg />
    </van-tab> -->
</van-tabs>
        <!-- 底部菜单 -->
  <div class="axb">
    <div class="left">
       <router-link to="/index">
        <img src="../img/首页1.png" alt="">
          <a href class="Font">首页</a>
        </router-link>
    </div> 
    <div class="center">
       <router-link to="/Customer">
        <img src="../img/客户1.png" alt="">
          <a href class="Fonts">客户</a>
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
import {checkAll} from '../js/comment.js'
import FileImg from '../components/FileImg.vue'
export default {
  data() {
    return {
        active: 0, // 绑定导航头部的位置
        // 第一层级用到 =============================================================
        UserName:'',//客户名称
        UserNumber:'',//客户电话
        UserFamily:'',//客户地址
        UserCosId:'',//客户状态
        UserCosIds:'',
        Textxb:['','男','女'],
        TextZhiWu:['','职务1','职务2','职务3'],
        show1:false,
         show8:false,
        index:'',//添加多个时候的索引  客户联系人部分
        Forms:[{ //表单的添加
        name:'', //姓名
        phone:'',//电话
        GunZhi:'',//职位
        GunZhiIndex:'',
        radio:'',//性别
        RadioIndex:'',
        }],
        numbers:3,
        columns: ['','合同客户','试用客户','意向客户'],//客户类型选择
         show:false,//客户类型选择判断
         ISOK:false,//判断是否全部通过
         ISOK2:false,
      // 第二层级用到 ===============================================================
         show2:false, //客户选择判断
        index2:'',
        show3:false,
        show9:false,
        index3:'',
        ResData:['','234','123'],//选择客户的列表
        ResDataId:[],//点击客户的id
        DianFangPist:['','箱变','台架','电房'],//电房类型
        DianFanglists:['','工业','普通工业','商业','其他(特殊机构如医疗)'], // 行业类型选择
        index4:'',//电房部分的索引
        Friends:[{//电房信息
          value2:'',//选择客户的Val
          valueId:'',
          DianFang:'',//电房名称
          DianFangPist:'',//电房类型
          DianFangPistId:'',//电房Id
          DianFangList:'',//行业类型
          DianFangListId:'',//行业ID
          DianFnum:'',//电房编号
          Childata:'',//备注
          Jinxian:'0',
          JiLIANG:'0',
          ChuXian:'0',
          HuanWang:'0',
          DJinxian:'0',
          DDianRong:'0',
          DChuXian:'0',
          LianLuo:'0',
            Friends2:[],
        }],
      
        // 第三层用到的 ========================================================
        show4:false,
        index4:'',
        SheBase:[{//表单数据
          Username:'',//客户名称
          UsernameId:'',
          DFnumber:'',//电房名称
          DFnumberid:'',
          SheBaseName:'',//设备分类名称
          DFshebeiJiname:'',
          DfSheBeiname:'',//计量方式
          DFshebeinameid:'',
          SheBasename:'',//设备名称
          SheBaseListName:'简略',//
          SheBaseListNameid:'0',
          SheBaseLinName:'',//设备别名
          SheBaseTime:'',//生日日期
          SheBaseJiLiang:'',//变压器计量
          BianYaQinumber:'',//变压器编号
          BianYaQinum:'',//容量
          BianYaQILname:'',//变压器型号
          BianYaQiList:'',
          BianYaQiListid:'',//行业类型id
          Cos:'',
          SunBian:'',//损耗值
          SunBianid:'',
          BianSun:'',//变损值
          BianSunid:'',//变损标准id
          FormCity:'',//厂家
          XuList:'',
          XuListid:'',//需量id
          XuListnumber:'1',//需量系数
          DownBasename:'',//下属设备名称
          ISOKDianfree:'',//开关额定电流She
          List:'',//型号
          Times:'',//时间
          CTnum:'',//CT
          DownCity:'',//下属设备厂家
          PT:'',
          YongListst:'1',//用电电压等级
          stockId:'0',
          EquClassId:'1',
          billingId:'1',
          capid:'0',
          cabinetid:'0',
          disId:'1'
        }],
        show5:false,
        DFList:['',],//电房选择部分
        DFListId:['',],
        show6:false,
       SheBaseList:['','变压器'],//设备分类选择部分
       show7:false,
       SheBaseDfname:['','高计','低计'],
       SunBianList:['','油变','干变'],
        BianSunList:['','3','5','7','9','10','11','12','13','15'],
       endTimePop:false,
        endTimePop2:false,
       show10:false,
       show11:false,
       show12:false,
      show13:false,
      XuListstute:['','非需量','需量'],
      show14:false,
      SheBaseListNamesy:['简略','非简略'],
        url:this.$store.state.url,
        isok:false
    }
  },
  // components:{  //图片上传
  //   FileImg
  // },
  methods:{
    onConfirms(){//这里是提交 第一层数据 ==========================
         var cusConList = [];
         var res= this.Forms;
         var number = this.UserNumber;
      for(let val of res){
          var trs = new Object();
          if(checkAll('Phone',val.phone) == true && val.name != '' && val.RadioIndex != '' && val.GunZhiIndex != ''){
              trs.cusConName = val.name;
              trs.cusConPhone = val.phone;
              trs.sex = val.RadioIndex;
              trs.cusConPost = val.GunZhiIndex;
              cusConList.push(trs)
              this.ISOK = true;
          }
      }
        if(checkAll('Phone',number) == true && this.ISOK == true && this.UserName != '' && this.UserFamily != '' && this.UserCosIds != '' ){
         var paras = new Object();
          paras.userId = this.$store.state.userId;
          paras.cusName=this.UserName;
          paras.cusPhone=this.UserNumber;
          paras.cusAddress = this.UserFamily;
          paras.cusType = this.UserCosIds.toString();
          paras.cusConList = cusConList;
          var params = new Object(); // 参数
        	params.module = "addCustomInfo";
          params.action = "CustomManageService";
          params.paras = paras;
          var v = JSON.stringify(params);
          var url = this.url;
          console.log(v)
                $.ajax({
                    type: "get",
                    url: url,
                    async:false,
                    dataType: "json",
                    data: {
                        params:v
                    },
                    success: function(data) {
                      var message = data.message;
                        if(data.code == 200){
                          alert(message);
                        }else{
                          alert(message);
                        }
                      }
                    })
                    }else{
                      this.$toast({
                                message: "提交失败,请检查数据"
                              })
                    }
    },
    onConfirms2:function(){ //第二层提交 =========================
      var Cabinet = [];
        var DianFangpush = [];
       var Paras = {};
        Paras.userId = this.$store.state.userId;
      for(let res of this.Friends){
          var paras = {};
          paras.name = res.DianFang;//电房名称
          paras.type = res.DianFangPistId;//电房类型
          paras.remark = res.Childata;//备注
          paras.cid = res.valueId;//客户id
          paras.industry = res.DianFangListId;//行业类型id
          paras.number = res.DianFnum;//电房编号
          for(let val of res.Friends2){
               var cabinetNumobj = {};  
                console.log(val.id)
                cabinetNumobj.cabinetId = val.id;
                cabinetNumobj.number = val.number;
                Cabinet.push(cabinetNumobj)
          }
            paras.gxList = Cabinet
            DianFangpush.push(paras);
      }
      Paras.list = DianFangpush;
      var params = {}; //参数
      params.module = "addStockRoom";
      params.action = "StockRoomService";
      params.paras = Paras;
      var v = JSON.stringify(params);
      console.log(v)
      var code;
      if(this.Friends[0].DianFang != '' && this.Friends[0].DianFangPistId != '' && this.Friends[0].Childata != '' && this.Friends[0].valueId != '' && this.Friends[0].DianFangListId != '' && this.Friends[0].DianFnum != ''){
                    $.ajax({
                            type:'get',
                            url:this.url,
                            async:false,
                            dataType:'json',
                            data:{
                              params:v
                            },
                            success:function(data){
                               console.log(data)
                                var message = data.message;
                              code = data.code;
                                if(code == 200){
                                }else{
                                  alert(message)
                                }
                            }
                          })
                          if(code == 200){
                             this.$toast({
                                message: "成功"
                              })
                          }else{
                             this.$toast({
                                message: "服务器出错,请稍后再提交"
                              })
                          }
                          }else{
                            this.$toast({
                                message: "提交失败,请检查数据"
                              })
                    }
    },
    onConfirms3(){
      var Paras = {};
      Paras.userId = this.$store.state.userId;//多个提交单独存开id
      var SheBaseListnumm = [];//  多个数据的列表
      var sRient = [];//设备属性列表
var itemList = []//下属设备的数组
var ItemListVue = [];//下属设备数据的列表


for(let value of this.SheBase){
  var res = {};
  res.type = value.SheBaseListNameid;//简略或者非简略
  res.equiName = value.SheBasename;//设备名称
  res.EquipName1 = value.SheBaseLinName;//设备别名
  res.equipNum = value.SheBaseJiLiang;//设备的计量
  res.createDate = value.SheBaseTime;//设备的生产日期
  res.stockRoomId = value. DFnumberid;//设备的电房编号id
  res.cusId = value.UsernameId;//设备的客户id
  res.stockId=value.stockId;//  以下都是必须熬传的值
  res.EquClassId=value.EquClassId;
  res.billingId = value.billingId;
  res.capid = value.capid;
  res.cabinetid = value.cabinetid;
  res.disId = value.disId;
  var items = {};//存值对象
  items.equiName = '开关';
  items.equClassId = '3';
      if( value.DFshebeiJiname != ''){
              var res1 = {};
                res1.eAttrid = '1';
                res1.aValue = value.DFshebeiJiname;//设备计量
                sRient.push(res1);
          }
          if( value.SheBaseJiLiang != ''){
              var res1 = {};
              res1.eAttrid = '2';
              res1.aValue = value.SheBaseJiLiang;// 变压器计量
              sRient.push(res1);
          }
          if( value.BianYaQinum != ''){
              var res1 = {};
              res1.eAttrid = '4';
              res1.aValue = value.BianYaQinum;//变压器容量
              sRient.push(res1);
          }
      if( value.BianYaQinum != ''){
          var res1 = {};
          res1.eAttrid = '5';
          res1.aValue = value.BianYaQILname;//变压器型号
          sRient.push(res1);
      }
      if( value.BianYaQiList != ''){
          var res1 = {};
          res1.eAttrid = '6';
          res1.aValue = value.BianYaQiListid;//设备行业类型id
          sRient.push(res1);
      }
        if( value.DfSheBeiname != ''){
          var res1 = {};
          res1.eAttrid = '7';
          res1.aValue = value.DFshebeinameid; //设备计量方式的id
          sRient.push(res1);
      }
        if( value.Cos != ''){
          var res1 = {};
          res1.eAttrid = '8';
          res1.aValue = value.Cos; //设备的Cos力率
          sRient.push(res1);
      }
      if( value.SunBian != ''){
          var res1 = {};
          res1.eAttrid = '9';
          res1.aValue = value.SunBianid;//设备损耗值的id
          sRient.push(res1);
      }
      if( value.BianSun != ''){
          var res1 = {};
          res1.eAttrid = '11';
          res1.aValue = value.BianSun;//设备的变损值
          sRient.push(res1);
      }
      if( value.FormCity != ''){
          var res1 = {};
          res1.eAttrid = '16';
          res1.aValue = value.FormCity;//设备的厂家
          sRient.push(res1);
      }
      if( value.XuList != ''){
          var res1 = {};
          res1.eAttrid = '25';
          res1.aValue = value.XuListid;//设备的需量id
          sRient.push(res1);
      }
      if( value.XuListid != ''){
          var res1 = {};
          res1.eAttrid = '26';
          res1.aValue = value.XuListnumber;//设备的需量系数
          sRient.push(res1);
      }
     if(value.ISOKDianfree != ''){
        var SheBleVal={}
        SheBleVal.eAttrid = '12';
        SheBleVal.aValue = value.ISOKDianfree;
        ItemListVue.push(SheBleVal)
     }
     if(value.List != ''){
        var SheBleVal={}
        SheBleVal.eAttrid = '13';
        SheBleVal.aValue = value.List;
        ItemListVue.push(SheBleVal)
     }
      if(value.Times != ''){
        var SheBleVal={}
        SheBleVal.eAttrid = '14';
        SheBleVal.aValue = value.Times;
        ItemListVue.push(SheBleVal)
     }
     if(value.CTnum != ''){
        var SheBleVal={}
        SheBleVal.eAttrid = '15';
        SheBleVal.aValue = value.CTnum;
        ItemListVue.push(SheBleVal)
     }
      if(value.DownCity != ''){
        var SheBleVal={}
        SheBleVal.eAttrid = '17';
        SheBleVal.aValue = value.DownCity;
        ItemListVue.push(SheBleVal)
     }
     if(value.PT != ''){
        var SheBleVal={}
        SheBleVal.eAttrid = '18';
        SheBleVal.aValue = value.PT;
        ItemListVue.push(SheBleVal)
     }
     items.sRIAttributList = ItemListVue
     itemList.push(items)
     res.sRIAttributList = sRient;
     res.itemList = itemList;
     SheBaseListnumm.push(res);
     itemList=[];
     items={};
     ItemListVue=[];
     sRient=[]

}
  Paras.list = SheBaseListnumm;
  var params = {}; // 参数
	params.module = "addStockRoominf";
	params.action = "StockRoominfService";
  params.paras = Paras;
 var v = JSON.stringify(params);
  for(let val of this.SheBase){
    if(val.Username != '' && val.DFnumber != '' && val.SheBaseName != '' && val.DFshebeiJiname != '' && val.DfSheBeiname != '' && val.SheBasename != '' && val.SheBaseLinName != '' && val.SheBaseTime != '' && val.SheBaseJiLiang != '' && val.BianYaQinumber != '' &&  val.BianYaQinum != '' && val.BianYaQILname != '' && val.BianYaQiList != '' && val.Cos != '' && val.SunBian != '' && val.BianSun != '' && val.FormCity != '' && val.XuList != ''&& val.XuListid != ''&& val.DownBasename != '' && val.ISOKDianfree != '' && val.List != '' && val.Times != '' && val.CTnum != '' && val.DownCity != '' && val.PT != ''){
        this.isok = true;
        
    }else{
       this.$toast({
                  message: "提交失败,请检查数据"
        })
    }
  }
     
  if(this.isok == true){
    var code;
      $.ajax({
          type: "post",
          url: this.url,
          dataType: "json",
          async:false,
          data: {
            params: v
          },
          success: function(data) {
            console.log(data)
            var message = data.message;
            code = data.code;
            if(code == 200){
            }else{
              alert(message)
            }
          }
        });
        if(code == 200){
          this.$toast({
                  message: "成功"
            });
            this.SheBase=[{//表单数据
          Username:'',//客户名称
          UsernameId:'',
          DFnumber:'',//电房名称
          DFnumberid:'',
          SheBaseName:'',//设备分类名称
          DFshebeiJiname:'',
          DfSheBeiname:'',//计量方式
          DFshebeinameid:'',
          SheBasename:'',//设备名称
          SheBaseListName:'简略',//
          SheBaseListNameid:'0',
          SheBaseLinName:'',//设备别名
          SheBaseTime:'',//生日日期
          SheBaseJiLiang:'',//变压器计量
          BianYaQinumber:'',//变压器编号
          BianYaQinum:'',//容量
          BianYaQILname:'',//变压器型号
          BianYaQiList:'',
          BianYaQiListid:'',//行业类型id
          Cos:'',
          SunBian:'',//损耗值
          SunBianid:'',
          BianSun:'',//变损值
          BianSunid:'',//变损标准id
          FormCity:'',//厂家
          XuList:'',
          XuListid:'',//需量id
          XuListnumber:'1',//需量系数
          DownBasename:'',//下属设备名称
          ISOKDianfree:'',//开关额定电流She
          List:'',//型号
          Times:'',//时间
          CTnum:'',//CT
          DownCity:'',//下属设备厂家
          PT:'',
          YongListst:'1',//用电电压等级
          stockId:'0',
          EquClassId:'1',
          billingId:'1',
          capid:'0',
          cabinetid:'0',
          disId:'1'
        }]
        }else{
          this.$toast({
                  message: "服务器异常,请稍后再提交"
        })
        }
  }
   
    },
    // 这里下面都是客户类型的选择的方法  =========================
    onChange(picker,value,index){//获取选中值
              console.log(value)
                this.UserCosId = value
                this.UserCosIds = index
        },
        onCancel(){//点击取消
            this.show=false
        },
         onConfirm(){//点击确定
            this.show=false
        },
        ShowUp(){//点击开启弹窗
            this.show=true
        },
    // 这里是客户性别的选择方法 ================================
       onChange1(picker,value,index){
              console.log(value)
                this.Forms[this.index].radio = value
                 this.Forms[this.index].RadioIndex = index
        },
        onCancel1(){
            this.show1=false
        },
         onConfirm1(){
            this.show1=false
        },
        ShowUp1(i){
            console.log(i)
            this.index = i;
            this.show1=true
        },
        // 第二层(电房信息) 客户选择的下拉弹窗
        onChange2(picker,value,index){ 
                this.Friends[this.index2].value2 = value
                this.Friends[this.index2].valueId = this.ResDataId[index] 
        },
        onCancel2(){
            this.show2=false
        },
         onConfirm2(){
            this.show2=false
        },
        ShowUp2(i){
            console.log(i)
            this.index2 = i;
            this.show2=true
        },
        //电房类型选择下拉
        onChange3(picker,value,index){
                this.Friends[this.index3].DianFangList = value
                this.Friends[this.index3].DianFangListId = index
        },
        onCancel3(){
            this.show3=false
        },
         onConfirm3(){
            this.show3=false
        },
        ShowUp3(i){
            this.index3 = i;
            this.show3=true
        },
        // 第三层用到的方法 ================================================ 
        // 客户选择 =========
         onChange4(picker,value,index){//获取选中值
              console.log(value)
                this.SheBase[this.index4].Username = value;
                this.SheBase[this.index4].UsernameId = this.ResDataId[index];
                var queryList = new Array();
                var query = new Object();
                query.title = "M_sto0_0.cid"; //填写类型
                query.maxVal = "";
                query.minVal = this.SheBase[this.index4].UsernameId; //柜型;
                query.comparisonType = 4; //4为等于
                query.numberType = 1; //1为数值
                queryList.push(query);
                var paras = {};
                paras.userId = this.$store.state.userId;
                paras.page = 1;
                paras.pageSize = 9999;
                paras.queryList = queryList;
                var params = {}; //参数
                params.module = "getStockRooms";
                params.action = "StockRoomService";
                params.paras = paras;
                var v = JSON.stringify(params);
                console.log(v)
                var code;
                this.DFList = [''];
                this.DFListId = [''];
                var res = this.DFList;
                var resid = this.DFListId;

                $.ajax({
                  type:'get',
                  url:this.url,
                  dataType:'json',
                  data:{
                    params:v
                  },
                  success:(data)=>{
                      code = data.code;
                      if(code == 200){
                        var datas = data.result.stockRoomList
                        for(var i = 0;i<=datas.length-1;i++){
                          console.log(datas[i])
                          res.push(datas[i].name);  
                          resid.push(datas[i].id)
                        }
                      }else{
                        alert(data.message);
                      }
                  }
                })
                if(this.res =''){
                   this.$toast({
                     message: "服务器出现异常,请重新进入页面"
                   })
                }
                

        },
        onCancel4(){//点击取消
            this.show4=false
        },
         onConfirm4(){//点击确定
            this.show4=false
        },
        ShowUp4(i){//点击开启弹窗
         this.index4 = i;
            this.show4=true
        },
        // 选择电房
        onChange5(picker,value,index){//获取选中值
              console.log(value)
                this.SheBase[this.index4].DFnumber = value
                this.SheBase[this.index4].DFnumberid = this.DFListId[index]
        },
        onCancel5(){//点击取消
            this.show5=false
        },
         onConfirm5(){//点击确定
            this.show5=false
        },
        ShowUp5(i){//点击开启弹窗
         this.index4 = i;
            this.show5=true
        },
        // 选择设备分类 
         onChange6(picker,value,index){//获取选中值
              console.log(value)
                this.SheBase[this.index4].SheBaseName = value
        },
        onCancel6(){//点击取消
            this.show6=false
        },
         onConfirm6(){//点击确定
            this.show6=false
        },
        ShowUp6(i){//点击开启弹窗
         this.index4 = i;
            this.show6=true
        },
        onChange7(picker,value,index){//获取选中值
              console.log(value)
                this.SheBase[this.index4].DfSheBeiname = value
                 this.SheBase[this.index4].DFshebeinameid = index
                 console.log(this.SheBase[this.index4].DFshebeinameid)
        },
        onCancel7(){//点击取消
            this.show7=false
        },
         onConfirm7(){//点击确定
            this.show7=false
        },
        ShowUp7(i){//点击开启弹窗
         this.index4 = i;
         this.show7=true
        },
         onChange8(picker,value,index){//获取选中值
              console.log(value)
            this.Forms[this.index].GunZhi = value
             this.Forms[this.index].GunZhiIndex = index
        },
        onCancel8(){//点击取消
            this.show8=false
        },
         onConfirm8(){//点击确定
            this.show8=false
        },
        ShowUp8(i){//点击开启弹窗
         this.index = i;
         this.show8=true
        },
         onChange9(picker,value,index){//获取选中值
              console.log(value)
            this.Friends[this.index4].DianFangPist = value
             this.Friends[this.index4].DianFangPistId = index
        },
        onCancel9(){//点击取消
            this.show9=false
        },
         onConfirm9(){//点击确定
            this.show9=false
        },
        ShowUp9(i){//点击开启弹窗
         this.index4 = i;
         this.show9=true
        },
         onChange10(picker,value,index){//获取选中值
              console.log(value)
            this.SheBase[this.index].BianYaQiList = value
             this.SheBase[this.index].BianYaQiListid = index
        },
        onCancel10(){//点击取消
            this.show10=false
        },
         onConfirm10(){//点击确定
            this.show10=false
        },
        ShowUp10(i){//点击开启弹窗
         this.index = i;
         this.show10=true
        },
        onChange11(picker,value,index){//获取选中值
              console.log(value)
            this.SheBase[this.index].SunBian = value
             this.SheBase[this.index].SunBianid = index
        },
        onCancel11(){//点击取消
            this.show11=false
        },
         onConfirm11(){//点击确定
            this.show11=false
        },
        ShowUp11(i){//点击开启弹窗
         this.index = i;
         this.show11=true
        },
        onChange12(picker,value,index){//获取选中值
              console.log(value)
            this.SheBase[this.index].BianSun = value
             this.SheBase[this.index].BianSunid = index
        },
        onCancel12(){//点击取消
            this.show12=false
        },
         onConfirm12(){//点击确定
            this.show12=false
        },
        ShowUp12(i){//点击开启弹窗
         this.index = i;
         this.show12=true
        },
         onChange13(picker,value,index){//获取选中值
              console.log(value)
            this.SheBase[this.index].XuList = value
             this.SheBase[this.index].XuListid = index
        },
        onCancel13(){//点击取消
            this.show13=false
        },
         onConfirm13(){//点击确定
            this.show13=false
        },
        ShowUp13(i){//点击开启弹窗
         this.index = i;
         this.show13=true
        },
         onChange14(picker,value,index){//获取选中值
              console.log(value)
              console.log(index)
            this.SheBase[this.index].SheBaseListName = value
             this.SheBase[this.index].SheBaseListNameid = index
        },
        onCancel14(){//点击取消
            this.show14=false
        },
         onConfirm14(){//点击确定
            this.show14=false
        },
        ShowUp14(i){//点击开启弹窗
         this.index = i;
         this.show14=true
        },
        // 时间选择器
        endTimePops(i){
          this.index4 = i;
         this.endTimePop = true;
        },
        endTimeChange(e) {
        let endTimeArr = e.getValues();//["2019", "01", "01"]
        console.log(endTimeArr);
        this.SheBase[this.index4].SheBaseTime = `${endTimeArr[0]}-${endTimeArr[1]}-${endTimeArr[2]}`
      },
      endTimePops2(i){
          this.index4 = i;
         this.endTimePop2 = true;
        },
        endTimeChange2(e) {
        let endTimeArr = e.getValues();//["2019", "01", "01"]
        this.SheBase[this.index4].Times = `${endTimeArr[0]}-${endTimeArr[1]}-${endTimeArr[2]}`
      },
      addDiang:function(){
  var Friends={//电房信息
          value2:'',//选择客户的Val
          valueId:'',
          DianFang:'',//电房名称
          DianFangPist:'',//电房类型
          DianFangPistId:'',//电房Id
          DianFangList:'',//行业类型
          DianFangListId:'',//行业ID
          DianFnum:'',//电房编号
          Childata:'',//备注
          Jinxian:'0',
          JiLIANG:'0',
          ChuXian:'0',
          HuanWang:'0',
          DJinxian:'0',
          DDianRong:'0',
          DChuXian:'0',
          LianLuo:'0',
            Friends2:[],
        }
        this.Friends.push(Friends);
      },
      addEbase:function(){
         var  SheBase={//表单数据
          Username:'',//客户名称
          UsernameId:'',
          DFnumber:'',//电房名称
          DFnumberid:'',
          SheBaseName:'',//设备分类名称
          DFshebeiJiname:'',
          DfSheBeiname:'',//计量方式
          DFshebeinameid:'',
          SheBasename:'',//设备名称
          SheBaseListName:'简略',//
          SheBaseListNameid:'0',
          SheBaseLinName:'',//设备别名
          SheBaseTime:'',//生日日期
          SheBaseJiLiang:'',//变压器计量
          BianYaQinumber:'',//变压器编号
          BianYaQinum:'',//容量
          BianYaQILname:'',//变压器型号
          BianYaQiList:'',
          BianYaQiListid:'',//行业类型id
          Cos:'',
          SunBian:'',//损耗值
          SunBianid:'',
          BianSun:'',//变损值
          BianSunid:'',//变损标准id
          FormCity:'',//厂家
          XuList:'',
          XuListid:'',//需量id
          XuListnumber:'1',//需量系数
          DownBasename:'',//下属设备名称
          ISOKDianfree:'',//开关额定电流She
          List:'',//型号
          Times:'',//时间
          CTnum:'',//CT
          DownCity:'',//下属设备厂家
          PT:'',
          YongListst:'1',//用电电压等级
          stockId:'0',
          EquClassId:'1',
          billingId:'1',
          capid:'0',
          cabinetid:'0',
          disId:'1'
         }
        this.SheBase.push(SheBase);
      },
      AddTrs:function(){
        this.numbers--
        if(this.numbers == 0){
           this.$toast({
             message: "只能添加3个客户联系人"
            })
        }else{
          var Forms = { //表单的添加
        name:'', //姓名
        phone:'',//电话
        GunZhi:'',//职位
        GunZhiIndex:'',
        radio:'',//性别
        RadioIndex:'',
          }
          this.Forms.push(Forms)
        }
        
      },
  },
  created(){  //初始化前
  // 获取客户的信息 =======================================
          var paras = new Object();
          paras.userId = this.$store.state.userId;
          paras.pageSize = 100;
          paras.page = 1;
          paras.queryList = [];
          var params = new Object(); // 参数
        	params.module = "getCustomInfos";
          params.action = "CustomManageService";
          params.paras = paras;
          var v = JSON.stringify(params);
          var url = this.$store.state.url;
          var resid = ['']
          var res = ['']
        //    this.$axios
        // .post("http://192.168.1.91:8081/cmapi/v1", {
        //   params: {
        //     params:v
        //   }
        // })
        // .then(res => {
        //  console.log(res)
        // });
      $.ajax({
          type:'get',
          url:url,
        dataType:'json',
        data:{
          params:v
        },
        success:function(data){
          if(data.code == 200){
          var List = data.result.customerList
          for(var i = 0; i <List.length;i++){
           if(List[i].cusName != ''){
              res.push(List[i].cusName);
            }
            if(List[i].id){
              resid.push(List[i].id)
            }
          }   
          }else{
            alert('发生错误')
          }
        }
       })
       if(this.res = ''){
          this.$toast({
             message: "服务器异常,请重新进入页面"
            })
       }
       this.ResData = res;
       this.ResDataId = resid;
  }
}
</script>

<style  lang='scss' scoped>
@import '../css/Clickon.scss';
@import '../css/Customer.scss';

</style>
<style>
.van-toast--text{
  width: 150px !important;
  height:100px !important;
}
.van-toast__text{
 line-height: 100%;
}
.van-tab {
    line-height: 2.375rem;
    position: relative;
    -webkit-box-flex: 1;
    flex: 1;
    box-sizing: border-box;
    min-width: 0;
    padding: 0 0.15625rem;
    color: #7d7e80;
    font-size: 0.4375rem;
    text-align: center;
    cursor: pointer;
}
.van-tabs--line .van-tabs__wrap {
    height: 2.375rem;
    overflow: hidden;
}
.van-tabs__line{
  width:60px !important;
  background-color:rgb(61,197,221);
  position: absolute;
    bottom: 26px;
    left: 0;
    z-index: 1;
    height: 0.09375rem;
    border-radius: 0.09375rem;
}
.van-tabs__nav{
    position: relative;
    display: flex;
    background-color: #fff;
    user-select: none;
}
.van-tabs__nav--line{
      box-sizing: content-box;
    height: 100%;
    padding-bottom: 0.46875rem;
}
.van-tab--active  span{
    font-weight: 500;
    color: rgb(61,197,221) !important;
}
.van-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.van-tab span {
    display: block;
    font-size:28px;
    color:rgb(153,153,153);
}
.van-cell {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    padding: 0;
    width: 100%;
    float: left;
    overflow: hidden;
    color: #323233;
    font-size: 0.4375rem;
    line-height: 0.75rem;
    background-color: #fff;
    }
.van-field__label {
    -webkit-box-flex: 0;
    -webkit-flex: none;
    flex: none;
    width: 110px;
    height: 58px;
}
.van-field__label span {
     color: rgb(51, 51, 51);
        font-size: 26px;
        line-height: 80px;
        float: left;
}
.van-field__control {
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    color: #323233;
    text-align: left;
    background-color: transparent;
    border: 0;
    resize: none;
    height:78px;
    margin-left: 20px;
}
.van-field__control::-webkit-input-placeholder{
    color: rgb(143, 214, 227);
    font-size: 26px;
    padding-left: 500px;
}
.van-picker__toolbar{
  height:80px;
    line-height: 80px;

}
.van-cell--required::before {
    position: absolute;
    left: 0.25rem;
    color: #ee0a24;
    font-size: 0.4375rem;
    content: none
}
.van-radio-group{
width: 500px;
height: 100%;
float:left;
margin-left: 20px;
padding-left: 140px;
}
.van-radio{
  float:left;
  height:100%;
  padding-left:30px;
}
.van-radio span{
    color: rgb(143, 214, 227);
    font-size: 26px;
    margin-top: 5px;
}

</style>