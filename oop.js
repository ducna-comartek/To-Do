//Lập trình hướng đối tượng trong javascript tức là xử lý các yêu cầu bằng cách đối tượng hóa các dữ liệu cần xử lý.


function sinhVien(msv, ht, gt){
    this.maSinhVien = msv //this = SinhVien
    this.hoTen = ht
    this.gioiTinh = gt
    this.thongTin = function(){
        console.log(this.maSinhVien, this.hoTen, this.gioiTinh) //this = SinhVien
    }
}
var st2 = new sinhVien(1711061435, "Nguyen Anh Duc", "nam")
st2.thongTin()
//Ke thua su dung call()
function sinhVienGioi(msv, ht, gt, ns){
    sinhVien.call(this, msv, ht, gt)
    this.namSinh = ns
}

var sv1 = new SinhVienGioi(1711061435,"Cao Anh Duc","nam",1999)

sv1.thongTin()
console.log(sv1.namSinh)

// Prototype là khuôn mẫu cho các đối tượng trong javascript. Các đối tượng kế thừa các thuộc tính và phương thức từ
// prototype của mình.Nếu bạn bổ sung thuộc tính hay phương thức vào prototype thì các đối tượng cũng sẽ có

SinhVienGioi.prototype.chieuCao = 180

console.log(sv1.chieuCao)

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

//this không được gán giá trị cho đến khi một đối tượng gọi một hàm có có chứa this bên trong

var firstName = "Anh", lastName = "Tranngoc";

function showFullName() {
    // "this" trong hàm này sẽ có giá trị của đối tượng window bởi vì
    // showFullName() là hàm được định nghĩa một cách toàn cục, cũng
    // như các biến firstName và lastName
    console.log(this.firstName + " " + this.lastName);
}

var person = {
    firstName: "VietPhuong",
    lastName: "Doan",
    showFullName: function() {
        // "this" trong hàm này tham chiếu đến đối tượng person, bởi
        // vì showFullName là hàm được gọi bởi đói tượng này
        console.log(this.firstName + " " + this.lastName);
    }
}

showFullName(); // Anh Tranngoc

// window là đối tượng mà mọi biến và hàm toàn cục được định nghĩa
// trên đó, vì thế:
window.showFullName(); // Anh Tranngoc

// "this" bên trong phương thức showFullName định nghĩa bên trong đối
// tượng person sẽ tham chiếu đến đối tượng đó, vì vậy:
person.showFullName(); // VietPhuong Doan