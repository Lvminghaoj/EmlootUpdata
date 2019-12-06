import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Customer from '@/page/Customer'
import CustomerList from '@/page/CustomerList' //电房列表
import Mybar from '@/page/Mybar'
import CustomerDList from '@/page/CustomerDList' //电房详情
import CustomerShebase from '@/page/CustomerShebase' //设备详情
import CustomerBaseList from '@/page/CustomerBaseList' //设备列表
import CustomerPhone from '@/page/CustomerPhone' //输入手机号码
import CustList from '@/page/CustList' //输入手机号码

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/CustomerPhone'
        }, {
            name: 'Index', //首页
            path: '/index',
            component: Index,
        }, {
            name: 'Customer', //录入资料 查 改 
            path: '/customer',
            component: Customer,

        },
        {
            name: 'CustomerList', // 意向客户 已安装 未安装
            path: '/CustomerList',
            component: CustomerList,
        },
        {
            name: 'Mybar', //我的
            path: '/Mybar',
            component: Mybar,
        },
        {
            name: 'CustomerDList',
            path: '/CustomerDList',
            component: CustomerDList,
        },
        {
            name: 'CustomerShebase',
            path: '/CustomerShebase',
            component: CustomerShebase,
        },
        {
            name: 'CustomerBaseList',
            path: '/CustomerBaseList',
            component: CustomerBaseList,
        },
        {
            name: 'CustomerPhone',
            path: '/CustomerPhone',
            component: CustomerPhone,
        },
        {
            name: 'CustList',
            path: '/CustList',
            component: CustList,
        }
    ],

})