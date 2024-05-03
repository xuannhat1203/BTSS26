import "./B10.css"
export default function B10() {
    function buttonAdd() {
        let inputElement: HTMLInputElement | null = document.querySelector(".jobName");
        let todo: HTMLElement | null = document.querySelector(".todoList");
        if (inputElement && todo) {
            let valueInput = inputElement.value;
            let itemList = document.createElement("nav");
            itemList.innerHTML =
            `
                <div class="inputValue">
                    <input type="checkbox"></input>
                    <span class = "nameInput">${valueInput}</span>
                </div>
                <div class="btnAdd">
                    <button class="btn3">
                        <span class="material-symbols-outlined">edit</span>
                    </button>
                    <button class="btn3">
                        <span class="material-symbols-outlined">delete</span>
                    </button> 
                </div>                                              
            `;
            todo.appendChild(itemList);
            valueInput = "";
        }
    }
    return (
        <div>
           <div className="mainJob">
                <h2 style={{color:"black"}}>Quản lí công việc</h2>
                <div className="inandbtn">
                    <input className="jobName" type="text" placeholder="Thêm công việc " />
                    <button className="add" onClick={buttonAdd}>Thêm</button>
                </div>
                <div>
                    <h4>Tất cả công việc</h4>
                </div>
                <div className="todoList"></div>
           </div>
        </div>
    );
}


