import React,{useState} from 'react'

function NavbarComponent({onSearch}) {
  const [search, setSearch] = useState('')
    
  const handleSearch=()=>{
    onSearch(search);
  };
  
  return (
    <div>
      <nav className="navbar bg-black">
    <div className="container-fluid d-flex"> 
    <div >
      <a className="navbar-brand px-5 fs-3 text-danger">🤤RECEIPE MENU👩‍🍳</a>
      </div>
      <div className='d-flex'>
        <input
          className="form-control me-2"
          type="text"
          placeholder="Search food items"
          aria-label="Search"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}/>
        <button className="btn btn-outline-info" onClick={handleSearch}>Search</button>
        </div>
    </div>
  </nav>
    </div>
  )
}

export default NavbarComponent;

