
var validation = new Validation();

function getEle(id){
    return document.getElementById(id)
}
getEle("btnTiepTuc").addEventListener("click",tiepTuc);
function tiepTuc(){
    var tenND = getEle("tenND").value;
    var email = getEle("email").value;
    var tieude = getEle("tieude").value;


    var isValid = true;
    isValid &= validation.kiemTraRong(tenND,"tbTenND","Ten khong duoc de rong")
    isValid &= validation.kiemTraRong(email,"tbEmail","Không được để trống email")
    isValid &= validation.kiemTraRong(tieude,"tbTieuDe","Không được để trống tiêu đề")
    
}