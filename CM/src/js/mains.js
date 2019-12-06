router.beforeEach((to,  from,  next)  =>  {  
    console.log(1111)  
    store.commit('clearToken') ;
    const  token  =  window.localStorage.getItem('openid');
    if  (token)  {      /* 路由发生变化修改页面title */     
        if  (to.meta.title)  {       document.title  =  to.meta.title;     }    
        next();

            
        if  (to.matched.length  ===  0)  {     //在匹配不上情况下，默认检查name是否为空。不为空默认接着操作
                   from.name  ?  next({         name:  from.name       })  :  next('/error');     } 
        else  {       next();     } 
    } 
    else  {     
        const  openid =  to.query.openid;
        //      alert(openid);
        //      alert(JSON.stringify(to));
        //      alert(JSON.stringify(to.query));
                      
        if (openid) {             
            window.localStorage.setItem('openid', openid);   /* 路由发生变化修改页面title */               
            if  (to.meta.title)  {                
                document.title  =  to.meta.title;              
            }              
            next();

                          
            if  (to.matched.length  ===  0)  {               //在匹配不上情况下，默认检查name是否为空。不为空默认接着操作
                                 from.name  ?  next({                   name:  from.name                 })  :  next('/error');               } 
            else  {                 next();               }         
        } else {              //没值的时候
            const  currurl  =  encodeURIComponent(window.location.href);             
            window.location.href  =  'https://cmzb.idyoga.cn/yoga_star/authorization/goToAuthorization?currurl=' + currurl ;       //没值就跳转这个页面 让他授权   
        }

             
    }
    next();
})