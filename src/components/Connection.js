import React  , {useState} from 'react'
import './connection.css'
import axios from 'axios'
import Card from './Cards'
const Connection = () => {
    const [plat , setplat] = useState();
    const [input , setinput] = useState([]);
    const [req , setreq] = useState();
    const request =  async () => {
        let {data} = await axios.get(`https://api.mozambiquehe.re/bridge?version=4&platform=${plat}&player=${input}&auth=QWBhGd7X860polT7cP7V`)
        setreq(data)
    }
    return (
        <div className='Connection'>
            <div className="container">
            <input type="text" onChange={(event) => setinput(event.target.value)} />
            <select name="platform" id="platform" onChange={(event) => setplat(event.target.value)}>
                <option value="PC">PC</option>
                <option value="PS4">Sony Playstaion 4</option>
                <option value="X1">Xbox 1</option>
            </select>
            <div id='test'>
            <button onClick={() => request()}>Search</button>
            </div>
            </div>
            <div>
                {req && <Card data={req} />}
            </div>
        </div>
    )
}

export default Connection
