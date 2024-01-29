import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/">Home</Link>
        <Link to="/veterinarios">Veterinarios</Link>
        <Link to="/addVeterinario">Añadir Veterinario</Link>
        <Link to="/veterinario">Buscar Veterinario</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;