import "./B9.css";
export default function B9() {
    const users =[
        {
            id: 1,
            name: "Nguyễn Xuân Nhất",
            age: "12/03/2005",
            gender: "Nam",
            address: "Hải Dương",
        },
        {
            id: 2,
            name: "Nguyễn Xuân Nhất",
            age: "12/03/2005",
            gender: "Nam",
            address: "Hải Dương",
        },
        {
            id: 3,
            name: "Nguyễn Xuân Nhất",
            age: "12/03/2005",
            gender: "Nam",
            address: "Hải Dương",
        }
    ];
    return (
        <div>Danh sách học sinh   
            <div className="header2">
                <ul style={{ listStyle: "none",width:700,height:60, display: "flex", justifyContent: "space-around",alignItems:"center"}}>
                    <li>STT</li>
                    <li>Họ và tên</li>
                    <li>Ngày sinh</li>
                    <li>Giới tính</li>
                    <li>Địa chỉ</li>
                    <li>Hành động</li>
                </ul>
            </div>
            <div className="main2">
                <ul style={{ listStyle: "none"}}>
                    {users.map((item, index) => (
                        <li className="list" key={index}>
                            <span>{item.id}</span>
                            <span>{item.name}</span>
                            <span>{item.age}</span>
                            <span>{item.gender}</span>
                            <span>{item.address}</span>
                            <li className="btn">
                                <button className="btnItem">Sửa</button>
                                <button className="btnItem">Xóa</button>
                            </li>
                        </li>
                    ))}
                </ul> 
            </div>
            <div className="footer2"></div>
        </div>
    );
}

