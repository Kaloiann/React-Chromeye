import './App.css';
import People from './components/People/people';
import './components/Input/input.js'
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([])
  const [searchFilter, setSearchFilter] = useState('')
  const [filteredResult, setFilteredResult] = useState([])

  const handleSearch = (e) => {
    const keyword = e.target.value

    if(keyword !== '') {
      const results = data.filter(person => person.firstName.toLowerCase().includes(keyword.toLowerCase()) || person.lastName.toLowerCase().includes(keyword.toLowerCase()))
      setFilteredResult(results)
    } else {
      setFilteredResult(data)
    }

    setSearchFilter(keyword)
  }

  useEffect(() => {
    async function fetchData(){
      const response = await fetch('http://apis.chromeye.com:9191/people')
      const json = JSON.parse(await response.text())
      setData(json)
      setFilteredResult(json)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <div className='flex search'>
      <input className='input' onChange={handleSearch} value={searchFilter} type="text" placeholder="Enter Keyword" />
      </div>
     <People data={data} filteredResult={filteredResult} />
    </div>
  );
}

export default App;
