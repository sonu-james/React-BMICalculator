
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  //state to hold value from input field
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState(0)
  const[msg,setMsg]=useState('')

  //for conditional rendering
  const [isWeight, setisWeight] = useState(true)
  const [isHeight, setisHeight] = useState(true)
  const validate = (e) => {
    let value = e.target.value
    let name = e.target.name

    if (!!value.match(/^[0-9]*$/)) {
      if (name == 'weight') {
        setWeight(value)
        setisWeight(true)
      }
      else {
        setHeight(value)
        setisHeight(true)
      }
    }
    else{
      if (name == 'weight') {
        setWeight(value)
        setisWeight(false)
      }
      else {
        setHeight(value)
        setisHeight(false)
      }
    }

  }
 
  // console.log(height,weight);
  const handleReset=()=>{
    setHeight(0)
    setWeight(0)
    setBmi(0)
    setMsg('')
    setisWeight(true)
    setisHeight(true)

  }

  const calculate = () => {
   let bmi=(weight / (height * height / 10000))
    setBmi(bmi)
    if(bmi<18.5)
      {
        setMsg('Underweight')
        console.log(msg)
      }
      else if(bmi >= 18.5 && bmi < 24.9){
        setMsg('Healthy')
        
      }else if(bmi >= 24.9 && bmi < 30){
        setMsg('Overweight')
      }else {
        setMsg('Suffering from Obesity')
      }
    
  }
  

  
  // console.log(bmi.toPrecision(2));

  return (
    <>
      <div className='container mt-5' style={{ width: '100%', height: '100vh' }}>
        <div className="row w-100">
          <div className="col-md-2"></div>
          <div className="col-md-8 ">
          <div className="bg-success rounded shadow p-3 box" style={{ width: '450px', height: '550px'}}>
              <div className='bg-dark p-3 rounded'>
              <h3 className='text-center fs-3 text-light bg-dark'>BMI CALCULATOR</h3>
              <p className='text-center text-light'>(Body Mass Index)</p>
              </div>
              <form className='shadow bg-light p-4 mt-4 rounded'>
                <div className='mb-3 w-100'>
                  <TextField id="outlined-basic" label="Enter Your Weight(Kg)" name='weight' value={weight|| ''} variant="outlined" className='w-100' onChange={(e) => validate(e)} />
                </div>
                {!isWeight && <p className='text-danger'>*Invalid Input</p>}
                <div className='mb-3 w-100'>
                  <TextField id="outlined-basic" label="Enter Your Height(cm)" name='height' value={height||''} variant="outlined" className='w-100' onChange={(e) => validate(e)} />
                </div>
                {!isHeight && <p className='text-danger'>*Invalid Input</p>}
              
                <div className='d-flex justify-content-between w-100 mt-4'>
                  <Button variant="contained" color='success' style={{ width: '190px', height: '60px' }} onClick={calculate}>Calculate</Button>
                  <Button variant="outlined" style={{ width: '190px', height: '60px' }} className='ms-3' onClick={handleReset}>Reset</Button>
                </div>
              </form>
              <div className='mt-3 flex-column rounded shadow bg-dark d-flex justify-content-center align-items-center p-4  text-light'>
                <h2 className='text-light'>{bmi.toPrecision(3)}</h2>
                <p className='msg'>{msg}</p>
                
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
         
        </div>

      </div>
    </>
  )
}

export default App
