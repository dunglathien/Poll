function Validation (){
    this.kiemTraRong = function(inputVal, spanID, message){
        if(inputVal ===""){
            getEle(spanID).style.display="block";
            getEle(spanID).innerHTML=message;
            return false;
        }
        getEle(spanID).style.display="none";
        return true;

    }
}