import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to="/"><button>Dashboard</button></Link>
      <Link to="/add"><button>Add Inventory</button></Link>
    </div>
  );
};

export default Header;