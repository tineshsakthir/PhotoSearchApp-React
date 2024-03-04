import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [searchText , setSearchText] = useState("")
  const [results , setResults] = useState([])
  const Access_Key = "aiz0Ny-IAwZIWNt2rEiDXBcBRkZbzV3mjYNMB1fSeR8"


  const search = async ()=>{
    const data = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=${Access_Key}&per_page=15`) ; 
    const jsonData = await data.json() ; 
    const result = jsonData.results ;
    result.map((res)=>{
      console.log(res.urls.small)
    })
    setResults(result)
  }

  return (
    <div>
    <h1 className="text-3xl font-bold underline text-center  bg-green-200">
    Photo Search App In React</h1>
    <div className='flex justify-center m-5'>
    <input type="text" className='border border-green-400' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
    <button className="border border-r-zinc-800 ml-9" onClick={search}>search</button>
    </div>
    <div className='flex flex-wrap justify-around'>
      {results.map(
        (res)=>{
          return(
             <Card key={res.id} url={res.urls.small} alt={res.alt_description} />
          )
    }
      )}
    </div>
    </div>
  )
}

export default App
