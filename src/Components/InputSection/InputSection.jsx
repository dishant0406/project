import React, {useState} from 'react'
import { Form, Input } from 'antd';

const InputSection = () => {
  const [balance, setBalance] = useState(200000);
  const [amount, setAmount] = useState('');

  // console.log(amount);

  const handleClick1 = (e)=>{
    e.preventDefault();
    setAmount(`${balance}`);
  }

  const handleClick2 = (e)=>{
    e.preventDefault();
    setAmount(`${balance/2}`);
  }

  return (
    <div className="ui center aligned container">
      <h2 className="ui header">
        Wallet Balance
        <div className="sub header" bis_skin_checked="1">{`${balance} Tokens`}</div>
      </h2>
    <Form
      name="basic"
      autoComplete="off"
    >
      <Form.Item>
        <Input size="large" required placeholder='Enter the Amount' onChange={e=> {setAmount(e.target.value)}}  value={amount}/>
        <div className="ui red pointing label" bis_skin_checked="1">
      Please enter a Amount
    </div>
      </Form.Item>

      <div className="ui buttons" bis_skin_checked="1">
        <button className="ui  big primary button" onClick={handleClick1}>Max</button>
        <div className="or" bis_skin_checked="1"></div>
        <button className="ui big  primary button" onClick={handleClick2}>Half</button>
        <button className="ui big  positive button">Stake More</button>
      </div>
     
      </Form>
      
    <br/>
    </div>
  )
}

export default InputSection