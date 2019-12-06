<template>
  <div class="hello">
   <section class="formData">
      <section class="concent2">
        选择客户
      </section>
       <input type="text" v-model="Friends.CustomerName" @click="ShowUp2()" class="NaInput"  placeholder="请选择">
        <van-popup v-model="show2" position="bottom" :overlay="true">
                <van-picker show-toolbar title='客户选择' :columns="customerList" @cancel="onCancel2" @confirm="onConfirm2" @change="onChange2" />
        </van-popup>
    </section>
      <section class="formData">
                 <section class="concent2">
                选择电房
              </section>
                  <input type="text" placeholder="请选择" v-model="Friends.DFname" @click="ShowUp5()" class="NaInput">
            <van-popup v-model="show3" position="bottom" :overlay="true">
        <van-picker show-toolbar title='选择电房' :columns="DFList" @cancel="onCancel5" @confirm="onConfirm5" @change="onChange5" />
            </van-popup>
              </section>
               <section class="formData">
                 <section class="concent2">
                选择设备
              </section>
                  <input type="text" placeholder="请选择" v-model="Friends.Shebase" @click="ShowUp()" class="NaInput">
            <van-popup v-model="show" position="bottom" :overlay="true">
        <van-picker show-toolbar title='选择电房设备' :columns="Shebase" @cancel="onCancel" @confirm="onConfirm" @change="onChange" />
            </van-popup>
              </section>

   <span class="control-label">上传图片(最多可上传10张)</span>
      <div class="control-form">
        <span class="help-block">(建议图片格式为：JPG/PNG，大小不超过5M.)</span>
        <ul class="upload-imgs">
           <li class="img">
            <img src="../img/addimg.png" @click="Clicks" >
          </li>
          <li v-for="(value,key) in imgs" :key="key" class="img">
            <img :src="getObjectURL(value)"><a class="close" @click="delImg(key)">×</a>
          </li>
        </ul>
        <form action="">
            <input type="file" class="upload" id="upload" @change="addImg" ref="inputer" multiple accept="image/png,image/jpg"/>
            <a class="add"><i class="iconfont icon-plus"></i></a>
            <p>
           <button id="btn" @click="submit()" type="button">提交</button>
            </p>
         </form>
      </div>
  </div>
 </template>

<script>
  export default {
    data() {
      return {
        formData:new FormData(),
        imgs: {},
        imgLen:0,
        AddImgs:{},
        customerList:[''], //客户名称
        customerListid:[''],//客户id
        DFList:[''],//电房列表
        DFListId:[''],//电房的id
        Shebase:[''],//设备名称
        Shebaseid:[''],//设备id
        Friends:{
          CustomerId:'',
          CustomerName:'',
          DFname:'',
          DFid:'',
          Shebase:'',
          Shebaseid:''
        },
        show2:false,//控制选择客户
        show3:false,
        show:false,
        url:this.$store.state.url,
      }
    },
    methods: {
      Clicks:function(){
        document.getElementById('upload').click();
           },
         onChange(picker,value,index){//获取选中值
                  this.Friends.Shebase = value;
                 this.Friends.Shebaseid = this.Shebaseid[index];
               
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
        onChange5(picker,value,index){//  这里是电房 =================================
                this.Friends.DFname = value;
                this.Friends.DFid = this.DFListId[index];
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
			query2.minVal = this.Friends.DFid; //电房id
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
      this.Shebase=['']       //设备名称
      this.Shebaseid=['']     //设备id
      var ShebaseList = this.Shebase;
      var ShebaseId = this.Shebaseid;
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
                     for(var i = 0;i<=data.result.stockRoominfList.length -1;i++){
                      ShebaseList.push(data.result.stockRoominfList[i].equiName);
                      ShebaseId.push(data.result.stockRoominfList[i].id);
                     }
                  }else{
                      alert(message)
                  }
                }
            })
        },
        onCancel5(){//点击取消
            this.show3=false
        },
         onConfirm5(){//点击确定
            this.show3=false
        },
        ShowUp5(){//点击开启弹窗
            this.show3=true
        },
         onChange2(picker,value,index){  // 这里是客户选择 ====================================
                this.Friends.CustomerId = this.customerListid[index];
                this.Friends.CustomerName = value;
                var queryList = new Array();
                var query = new Object();
                query.title = "M_sto0_0.cid"; //填写类型
                query.maxVal = "";
                query.minVal = this.Friends.CustomerId; //客户id;
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
                  async:false,
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
                        alert('发生错误');
                      }
                  }
                })
                if(this.res =''){
                   this.$toast({
                     message: "服务器出现异常,请重新进入页面"
                   })
                }
        },
        onCancel2(){
            this.show2=false
        },
         onConfirm2(){
            this.show2=false
        },
        ShowUp2(){
            this.show2=true
        },
      addImg(event){
        let inputDOM = this.$refs.inputer;//获取绑定的节点
        this.fil = inputDOM.files;//获取图片路径
        let oldLen=this.imgLen;
        let len=this.fil.length+oldLen;
        if(len>10){
          alert('最多可上传10张，您还可以上传'+(10-oldLen)+'张');
          return false;
        }
        for (let i=0; i < this.fil.length; i++) {
          this.AddImgs = this.fil[i];
          let size = Math.floor(this.fil[i].size / 1024);
          if (size > 5*1024*1024) {
            alert('请选择5M以内的图片！');
            return false
          }
          this.imgLen++;
          this.$set(this.imgs,this.fil[i].name+'?'+new Date().getTime()+i,this.fil[i]);//设置值(对象,设置的值，设置值的名称)
        }
      },
      getObjectURL(file) {//获取图片放入到节点里面
        var url = null ;
        if (window.createObjectURL!=undefined) { // 普通浏览器兼容
          url = window.createObjectURL(file) ;//获取base64字符串
        } else if (window.URL!=undefined) { // 火狐的兼容
          url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // 谷歌的兼容
          url = window.webkitURL.createObjectURL(file);
        }
        return url ;
      },
      delImg(key){
        this.$delete(this.imgs,key);
        this.imgLen--;
      },
      submit(){ //这个是点击提交
        // for(let key in this.imgs){
        //   console.log(key)
        //   let name=key.split('?')[0];
        //   console.log(name)
        //   // this.formData.append('file',name);
        //   this.formData.append('multipartFiles',this.imgs[key],name);
        // }
        this.formData.append('file',this.AddImgs);
        console.log(this.AddImgs)
         var token = '1573005783653766dbea0218944a6b51a1b98ff280346';
         var userId = 269;  
         var type = 100;
         var Baseid = 1;
         var url = "http://wx.epowerboy.cn/upload/uploadFile/269/1573028153547071570d3dd1f4f27968114adf4b50c51/1/100";
         $.ajax({
          url: url,
          type: "post",
          data: this.formData,
          contentType: false,
		    	processData: false,
          success: function(data) {
            console.log(data)
          },
        })
          

        // this.$http.post('/opinion/feedback', this.formData,{
        //   headers: {'Content-Type': 'multipart/form-data'}
        // }).then(res => {
        //   this.alertShow=true;
        // });
      },
    },
    created(){
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
       this.customerList = res;
       this.customerListid = resid
    }
  }
</script>
<style lang='scss' scoped>
.upload-imgs{margin: 10px 0 30px 0;overflow: hidden;font-size: 0;}
.upload-imgs li{position: relative;width: 130px;height: 118px;font-size: 14px;margin-left: 28px;margin-top:10px;float:left;padding: 10px;border: 2px dashed #ccc;text-align: center;vertical-align: middle;}
.upload-imgs li:hover{border-color: red}
.upload-imgs .add{display: block;background-color: #ccc;color: #ffffff;height: 94px;padding: 8px 0;}
.upload-imgs .add .iconfont{padding: 10px 0;font-size: 40px;}
.upload-imgs li:hover .add{background-color:red}
.upload-imgs li .upload{position: absolute;top: 0;bottom: 0;left: 0;right: 0;width: 130px;height: 118px;}
.upload-imgs .img img{vertical-align: middle;width:100%;}
.upload-imgs .img .close{display: none;}
.upload-imgs li:hover .close{display: block;position: absolute;right: 2px;top: -2px;line-height: 1;font-size: 22px;color: #aaa;cursor: pointer;}
.control-label{color:rgb(143,214,227);margin-top: 20px;display: block;}
.help-block{color:rgb(143,214,227);}
#btn{color:rgb(143,214,227);border: 2px solid white;}
.upload{display: none;}
.formData{
  width: 100%;
  height: 80px;
  font-size: 26px;
  color: rgb(143, 214, 227);
  border-bottom:2px solid #ccc;
  .concent2{
    width: 130px;
    height:80px;
    float: left;
    margin-left: 10px;
    line-height: 80px;
  }
  input{
    width: 450px;
    margin-left:130px;
    height:70px;
    margin-top:1px;
    border:none;
  }
}
  .NaInput::-webkit-input-placeholder,
            textarea::-webkit-input-placeholder {
                color: rgb(143, 214, 227);
                font-size: 26px;
                padding-left: 320px;
            }
            
            .NaInput:-moz-placeholder,
            textarea:-moz-placeholder {
                color: rgb(143, 214, 227);
                font-size: 26px;
                padding-left: 140px;
            }
            
    .NaInput::-moz-placeholder,
    textarea::-moz-placeholder {
        color: rgb(143, 214, 227);
        font-size: 26px;
        padding-left: 140px;
      }
            
    .NaInput::-ms-input-placeholder,
    textarea:-ms-input-placeholder {
                color: rgb(143, 214, 227);
                font-size: 26px;
                padding-left: 140px
    }
</style>
