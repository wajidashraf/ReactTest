import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(25);
 
  React.useEffect(() => {
  setInterval(counter, 1000);
  }, []);

  const counter = () => {
    setCount(prev=> prev - 1);
  };
 
  if(count===0){
          setCount(25)
        }
let bg = count<5 ? 'blue':count<10 ? 'green':count <20 ? "red": 'white'  

  return (
    <div className={`counter ${bg}`}  >
      <h1>{count}</h1>
    </div>
  );
};
export default Counter;
