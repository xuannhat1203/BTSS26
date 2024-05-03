class User{
    name:string
    gender:string
    age: string
    email:string
    address:string
    constructor(name:string,gender:string,age:string,email:string,address:string){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.email = email;
        this.address = address;
    }
}
export default function () {
  const userInfor = new User("xuân nhất","nam","12/03/2005","xuannhatvn211@gmail.com","Hải Dương");
  return (
    <div>Thông tin cá nhân
        <ul>
            <li>Họ và tên: {userInfor.name}</li>
            <li>Giới tính: {userInfor.gender}</li>
            <li>Tuổi: {userInfor.age}</li>
            <li>Email: {userInfor.email}</li>
            <li>Địa chỉ: {userInfor.address}</li>
        </ul>
    </div>
  )
}
