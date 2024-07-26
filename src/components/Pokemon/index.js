import {Component} from 'react'
import './index.css'
class Pokemon extends Component {
  state = {list: [], searchResult: ''}
  componentDidMount() {
    this.get()
  }
  get = async () => {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
    )
    const data = await response.json()
    console.log(data)
    const fetcheddata = data.results.map(i => ({
      name: i.name,
      url: i.url,
    }))
    this.setState({list: fetcheddata})
  }
  search=(event)=>{
    this.setState({searchResult:event.target.value})
  }
  render() {
    const {list,searchResult} = this.state
    const s = list.filter(eachUser=>
    eachUser.name.includes(searchResult))
    return (
      <div className="pokeman">
        <h1 className="heading">Pokemon</h1>
        <input
          type="search"
          placeholder=" Enter Search "
          required onChange={this.search}
          className="searchInput"
        />
        <ul className="unorderdlist">
          {s.map(i => (
            <li>
              <h1 className="headingName">{i.name}</h1>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default Pokemon
