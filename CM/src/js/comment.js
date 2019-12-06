function checkAll(type, value) { //checkAll函数,type是你要验证的类型,value要是验证该类型的值，msg是验证失败后弹出的提示语
    switch (type) //判断该类型
    {
        case 'Phone': //电话号码
            if (!(/^1[34578]\d{9}$/.test(value))) {
                return false;
            } else {
                return true;
            }
            break;
        case 'Email':
            if (!(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value))) {
                return false;
            } else {
                return true;
            }
            break;
        case 'idcard': //身份证
            if (!(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value))) {
                return false;
            } else {
                return true;
            }
            break;
        case 'idcard': //身份证
            if (!(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value))) {
                return false;
            } else {
                return true;
            }
            break;
        case 'password': //用户密码 6~11位 首字母开头
            if (!(/^[a-zA-Z]\w{5,11}$/.test(value))) {
                return false;
            } else {
                return true;
            }
            break;
        case 'password': //用户密码 6~11位 首字母开头
            if (!(/^[a-zA-Z]\w{5,11}$/.test(value))) {
                return false;
            } else {
                return true;
            }
            break;
        case 'toFixed': //两位小数的正整数
            if (!(/^[0-9]+(.[0-9]{2})?$/.test(value))) {
                return false;
            } else {
                return true;
            }
            break;
        case 'trues': //正整数
            if (!(/^\d+$ 或 ^[1-9]\d*|0$/.test(value))) {
                return false;
            } else {
                return true;
            }
            break;
        case 'falses': //负整数
            if (!(/^-[1-9]\d*|0$ 或 ^((-\d+)|(0+))$/.test(value))) {
                return false;
            } else {
                return true;
            }
            break;
        case 'Chinese': //汉字
            if (!(/^[\u4e00-\u9fa5]{0,}$/.test(value))) {
                return false;
            } else {
                return true;
            }
            break;
        case 'NumEligsh': //数字和英文
            if (!(/^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$/.test(value))) {
                return false;
            } else {
                return true;
            }
            break;
        case 'NumEligsh': //数字和英文
            if (!(/^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$/.test(value))) {
                return false;
            } else {
                return true;
            }
            break;
        case 'username': //中文英文数字下划线
            if (!(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test(value))) {
                return false;
            } else {
                return true;
            }
            break;
        case 'Data': //日期格式
            if (!(/^\d{4}-\d{1,2}-\d{1,2}/.test(value))) {
                return false;
            } else {
                return true;
            }
            break;
        case 'ip': //ip地址
            if (!(/((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(value))) {
                return false;
            } else {
                return true;
            }
            break;
        case 'ChinaNum': //中国邮政编码
            if (!(/[1-9]\d{5}(?!\d)/.test(value))) {
                return false;
            } else {
                return true;
            }
            break;

    }
}

function getDateStr(seconds) {
    var date = new Date(seconds)
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var currentTime = year + "-" + month + "-" + day;
    return currentTime
}


function getUrlParam(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");　　　　　　 //构造一个含有目标参数的正则表达式对象
    let r = window.location.search.substr(1).match(reg);　　　　　　　 //匹配目标参数
    if (r != null) return decodeURIComponent(r[2]);
    return null;　　　 //返回参数值　
}
export { checkAll, getDateStr, wxLogin, getUrlParam }