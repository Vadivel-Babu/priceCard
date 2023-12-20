import "./app.css";
import Card from "./component/Card";
function App() {
  const data = [{
    sub:'FREE',
    price:0,
    user:'Single User',
    private:false,
    support:false,
    domain:false,
    status:false
  },{
    sub:'PLUS',
    price:9,
    user:'5 User',
    private:true,
    support:true,
    domain:true,
    status:false
  },{
    sub:'PRO',
    price:49,
    user:'Unlimited User',
    private:true,
    support:true,
    domain:true,
    status:true
  }
]

  return (
    <div className="app">
      {data.map((e,i) => (
       <Card key={i} data={e}/>
      ))}
    </div>
  )
}

export default App
