import { useState, useEffect } from "react";

function App() {

  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("")
  
  const onClick = () => {
    setCounter((prev)=> prev + 1)
  }

  const onChange = (event) => setKeyword(event.target.value);
  
  console.log('i run all the time');
  
  // useEffect는 코드가 한번만 실행될 수 있도록 보호해준다
  useEffect(()=> {
    console.log('call the API')
  },[]); //지켜보는 것이 없으므로 1회만 실행 
  useEffect(()=> {
    if(keyword !== "" && keyword.length > 5){
      console.log("Serach For", keyword)
    }
  },[keyword]) //keyword를 지켜보며 변화 할때마다 실행 
  
  return (
    <div>
      <input 
      value={keyword} 
      onChange={onChange} 
      type={"text"} 
      placeholder="search here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
