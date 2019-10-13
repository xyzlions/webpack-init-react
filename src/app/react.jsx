import React from 'react'
import ReactDOM from 'react-dom'
import App from './counter'
import Card from './card'


// eslint-disable-next-line react/prop-types
/* const Title = ({ text }) => <h5 className = "text-bold">{text}</h5>
const cartList = [
  'test1', 'test2'
]

// eslint-disable-next-line no-unused-vars
! const Card = () => {
  return (
    <div>
      {
        cartList.map((el, inx) => {
          return <Title key={inx} text={el}/>
        })
      }
      <Card2/>
    </div>
  )
}
const Card2 = () => {
  return <div>
    <Title text={'我是測試'} />
  </div>
}
var App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>You clicked {count} times!</h2>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
} */
  const MainScreen = () => 
  <div className  ='alert'>
  <h3>計數器</h3>
  <App/>
  </div>
  const MainCard = () => 
  <div className  ='alert'>
  <h3>卡片</h3>
  <Card/>
  </div>
const rootElement = document.getElementById('root')
ReactDOM.render(<MainScreen />, rootElement)
const rootElement2 = document.getElementById('card')
ReactDOM.render(<MainCard />, rootElement2)


