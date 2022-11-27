import Web3 from "web3";
import web3Provider from "react-web3-provider";

function App() {
  const web3 = new Web3();
  const connectMetamask = (async) => {
    const msgParams = JSON.stringify({
      types: {
        EIP712Domain: [
          { name: "name", type: "string" },
          { name: "version", type: "string" },
          { name: "chainId", type: "uint256" },
          { name: "verifyingContract", type: "address" },
        ],
        // Not an EIP712Domain definition
        Bid: [{ name: "name", type: "string" }],
        // Refer to PrimaryType
        Mail: [
          { name: "from", type: "Person" },
          { name: "to", type: "Person[]" },
          { name: "contents", type: "string" },
        ],
        // Not an EIP712Domain definition
        Person: [
          { name: "name", type: "string" },
          { name: "wallets", type: "address[]" },
        ],
      },
    });

    var from = web3.eth.accounts[0];

    var params = [from, msgParams];
    var method = "eth_signTypedData_v4";

    web3.currentProvider.sendAsync(
      {
        method: method,
        params: params,
        from: from,
      },
      function (err, result) {
        if (err) return console.dir(err);
        if (result.error) {
          alert(result.error.message);
        }
        if (result.error) return console.error("ERROR", result);
        console.log("TYPED SIGNED:" + JSON.stringify(result.result));
      }
    );
  };

  return (
    <div>
      <button
        onClick={connectMetamask}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded absolute top-1/2 right-1/2"
      >
        {" "}
        Connect with Metamask{" "}
      </button>

      <br></br>
    </div>
  );
}

export default App;
