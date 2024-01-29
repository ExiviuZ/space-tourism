import Navbar from "./Navbar";

function Layout({ children, bg }) {
  return (
    <div
      className={`min-h-[100vh] ${bg.mb} ${bg.tl} ${bg.dt} bg-cover bg-no-repeat text-white font-barlow flex flex-col`}
    >
      <Navbar />
      <>{children}</>
    </div>
  );
}

export default Layout;
