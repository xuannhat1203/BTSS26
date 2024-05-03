import "./B8.css"
export default function B8() {
  const cartItems:any[] = [0,1,2,3,4,5,6,7,8,9,10,11];
  return (
    <div>Xây dựng menu
        <div className="header">
            Header
        </div>
        <div className="navigation">
            Navigation
        </div>
        <div className="section">
            <div className="menu2">
                Menu
            </div>
            <div className="item">
                {cartItems.map((index) => (
                  <div key={index} className="cart">Cart</div>
                ))}
            </div>
            <div className="article">
                Article
            </div>
        </div>
    </div>
  )
}
