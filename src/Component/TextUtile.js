import React,{useState} from 'react'

export default function TextUtile(props) {
    const [x, setX] = useState("");
  // console.log(x)
    let upperCase = () =>{        
        let change = x.toUpperCase();
        setX(change)
        console.log("upper cahe ho gya" ,)
    }
    let lowerCase = () =>{        
      let change = x.toLowerCase();
      setX(change)
      console.log("lower cahe ho gya" ,)
  }
    let allDlt = () =>{
         setX("")
        console.log("khatam")
    }
    let onchange = (event) =>{
        console.log("on change")
        setX(event.target.value)
    }
  return (
    <>
      <div className="mb-3 container"> 
        <h1 className='mt-3 heading'>{props.heading}</h1>
        <textarea className="form-control"  onChange={onchange}  value={x} id="myBox" rows="2"></textarea>
        <button onClick={upperCase} className="btn btn-danger mt-3 mx-2">Add Uppercase</button>
        <button onClick={lowerCase} className="btn btn-danger mt-3 mx-2">Add Lowercase</button>
        <button onClick={allDlt} className="btn btn-danger mt-3 b  mx-2">Delete All</button>
      </div> 
      <div className="container my-4">
        <h2>Your text Summary</h2>
        <p> {x.split(" ").length} words and {x.length} character</p>
        <h2>Preview</h2>
        <p>{x}</p>       
         <button onClick={() => {
           let text = document.getElementById("myBox")
           text.select();
           navigator.clipboard.writeText(text.value)
         }} className="btn btn-primary mt-3 b">Copy</button>
      </div>
    </>
  )
}
