import { NavLink } from 'react-router-dom';

export default function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/pricing'>Pricing</NavLink>
          <NavLink to='/product'>Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}
