import React, { useState } from "react";

const MoneyExchanger = () => {
  const [amount, setAmount] = useState({ USD: "", PKR: "" });
  const [pkr, setPkr] = useState(null)
  const [usd, setUsd] = useState(null)

  const handleChange = (e) => {
    setAmount({
      ...amount,
      [e.target.name]: e.target.value,
    });
  };

  const convert=(e)=>{
      const usdRate = 169.10;  
    e.preventDefault()  
     setPkr(amount.USD ? amount.USD* usdRate : null)
     setUsd(amount.PKR ? amount.PKR/usdRate : null)
  }
  
  const reset = (e)=>{
    e.preventDefault() 
      setAmount({ USD: "", PKR: "" })
      setPkr('')
      setUsd('')
  }

  

  return (
    <div className="currency">
      <input
        type="number"
        placeholder="Dollar Amount"
        value={amount.USD}
        name="USD"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Rupees Amount"
        value={amount.PKR}
        name="PKR"
        onChange={handleChange}
      />
      <div className="showAmount">
        <table>
          <tbody>
          <tr>
            <th>USD</th>
            <th>PKR</th>
          </tr>
          <tr>
            <td>{!amount.USD ? usd : amount.USD }</td>
            <td>{!amount.PKR ? pkr : amount.PKR }</td>
            
          </tr>
          </tbody>
        </table>
      </div>
      <div className='btn-container'>
      <button className='btn' onClick={convert}>Convert</button>
      <button className='btn' onClick={reset}>Clear</button>
      </div>
    </div>
  );
};
export default MoneyExchanger;
