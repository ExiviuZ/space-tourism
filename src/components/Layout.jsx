import { useNavigation } from "react-router-dom";
import Navbar from "./Navbar";

function Layout({ children, bg }) {
  const navigation = useNavigation();
  console.log(navigation.state);
  const isLoading = navigation.state === "loading";
  console.log(navigation);

  if (isLoading) {
    return <div className="bg-black w-[100vw] h-[100vh]">HELLO WORLD</div>;
  }

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
