import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import scss from './layout.module.scss';

export const Layout = () => {
  return (
    <div className={scss.wrapper}>
        <nav className={scss.nav}>
          <NavLink className={scss.link} to="/">Home</NavLink>
          <NavLink className={scss.link} to="movies">Movies</NavLink>
        </nav>
        <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
        </Suspense>
      
    </div>
  );
};
