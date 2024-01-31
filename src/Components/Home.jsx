import React, { useState ,useEffect } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Home = (props,name) => {
 
const [Data , setData] = useState([])
const [err , setError] = useState(false)

const Navigate = useNavigate()

useEffect(() => {
 
  const Connection = async()=>{

    try {
    
    const {data} = await axios.get("https://api.tvmaze.com/search/shows?q=all")
       setData(data)
      console.log(Data)
      
    
    } catch (error) {
    
      console.log(error)
      setError(true)
      
    }
    
    
      }

Connection();
},[])


const handle =(data,name)=>{
  Navigate("/page")
  props.func(data,name);
}

  return (

<div className='w-full h-[100vh]  flex items-center   flex-col  p-10 justify-center'>

<h1 className=' text-center font-mono  p-10 text-black  text-5xl'>Shows Details</h1>
<div className='w-[100%] h-[100%] flex-wrap flex gap-[20px] '>

{err && <span>Something went wrong</span>}
  {
    

Data.map((data)=>(

  
  <div key={data.show.id}  className='w-[30%] h-[30%] rounded-md flex items-center flex-col  gap-[20px] bg-gray-500  p-5'>

<div className='w-[100%] gap-5   flex items-center '>

<div className='rounded-md object-cover w-[30%] h-[20%]'>
{/* <img src={data.show.image.medium} alt="" /> */}
</div>
<div className='font-mono'>
<div className='flex'>  <h3 className='font-semibold'>Name:</h3>  <p>{data.show.name}</p>  </div>
<div className='flex'>  <h3 className=' font-semibold '>Type:</h3>  <p> {data.show.type}</p>  </div>
<div className='flex'>  <h3 className=' font-semibold '>language:</h3>  <p> {data.show.language}</p>  </div>
<div className='flex'>  <h3 className=' font-semibold '>Rating:</h3>  <p> {data.show.rating.average}</p>  </div>


</div>


</div>

<button onClick={()=>{handle(data.show.summary , data.show.name)}}  className=' bg-green-400 p-2  rounded-md	'>
  Open
</button>


</div>
  )

)


  }



</div>
     
     
    </div>
  )
}

export default Home
