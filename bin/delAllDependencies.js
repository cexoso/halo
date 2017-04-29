var shell = require('shelljs');
var _ = require("lodash");
function toPromise(res) {
    return new Promise((resolve,reject)=>(_.eq(res.code,0) ? resolve : reject)(res))
}

var ls = shell.ls("./node_modules");
toPromise(ls).then(res=>{
    ls.forEach((item)=>{
        const ret = shell.exec("npm uni " + item);
        console.log(ret)
    });
},err=>{
    console.log(ls)
})
