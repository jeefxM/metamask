import { useWeb3React } from "@web3-react/core";
import { injected } from "./components/connector";

function App() {
  const { activate } = useWeb3React();

  const connectMetamask = async () => {
    try {
      await activate(injected);
    } catch (error) {}
  };

  return (
    <div className="App">
      <div>
        <button
          onClick={connectMetamask}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded absolute top-1/2 right-1/2"
        >
          Connect with Metamask
        </button>
      </div>
    </div>
  );
}

export default App;
