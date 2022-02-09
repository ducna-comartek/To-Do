//Lập trình hướng đối tượng trong javascript tức là xử lý các yêu cầu bằng cách đối tượng hóa các dữ liệu cần xử lý.


function SinhVien(msv, ht, gt){
    this.MaSinhVien = msv //this = SinhVien
    this.HoTen = ht
    this.GioiTinh = gt
    this.thongtin = function(){
        console.log(this.MaSinhVien, this.HoTen, this.GioiTinh) //this = SinhVien
    }
}
var st2 = new SinhVien(1711061435, "Nguyen Anh Duc", "nam")
st2.thongtin()
//Ke thua su dung call()
function SinhVienGioi(msv, ht, gt, ns){
    SinhVien.call(this, msv, ht, gt)
    this.NamSinh = ns
}

var sv1 = new SinhVienGioi(1711061435,"Cao Anh Duc","nam",1999)

sv1.thongtin()
console.log(sv1.NamSinh)

// Prototype là khuôn mẫu cho các đối tượng trong javascript. Các đối tượng kế thừa các thuộc tính và phương thức từ
// prototype của mình.Nếu bạn bổ sung thuộc tính hay phương thức vào prototype thì các đối tượng cũng sẽ có

SinhVienGioi.prototype.ChieuCao = 180

console.log(sv1.ChieuCao)

//This
//nếu chúng ta sử dụng strict mode, this sẽ là undefined trong các hàm toàn cục và trong các hàm vô danh không ràng buộc đối tượng nào cả
var person = {
    firstName: "Duc",
    lastName: "NguyenAnh",
    fullName: function() {
        // Việc sử dụng "this" cũng tương tự như việc sử dụng "he"
        // trong câu tiếng Anh ở trên.
        console.log(this.firstName + " " + this.lastName);
        // Chúng ta cũng có thể viết thế này.
        console.log(person.firstName + " " + person.lastName);
    }
}
person.fullName()