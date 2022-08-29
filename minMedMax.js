const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
    //code here
    if(n1>n2 && n1>n3){
        if(n2>n3){ //max = n1 
            return { min: n3, mid: n2, max: n1 }
        }else{
            return { min: n2, mid: n3, max: n1 }
        }
    }else if(n2>n1 && n2>n3){
        if(n1>n3){ //max = n2
            return { min: n3, mid: n1, max: n2 }
        }else{
            return { min: n1, mid: n3, max: n2 }
        }
    }else if(n3>n1 && n3>n2){
        if(n1>n2){ // max = n3
            return { min: n2, mid: n1, max: n3 }
        }else{
            return { min: n1, mid: n2, max: n3 }
        }
    }
  }
module.exports = minMedMax
