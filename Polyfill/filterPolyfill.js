Array.prototype.myFilter = function(callbackFn){
    var result = []
    for(let i=0;i<this.length;i++){
        if(callbackFn(this[i],i,this)){
            result.push(this[i])
        }
    }
    return result;
}