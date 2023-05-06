import React, { useState, useEffect, useRef } from "react";
import { useThemeValue } from "../contexts";
import Sidebar from "../components/Sidebar";
import WalletBalance from "./../components/WalletBalance";
import CryptoCards from "./../components/CryptoCards";
import axios from "axios";

const WalletTest = () => {
  const [getlistofvalues, readlist] = useState([]);
  const [walletaddress, readaddress] = useState();
  const [isLoading, setLoading] = useState(true);
  const [showform, setform] = useState(false);
  const [sendAddress, setAddress] = useState("")
  const [fromAddress, setfromAddress] = useState("")
const [cryptoBalance, setBalance] = useState("")
  const { theme } = useThemeValue();
  const ref = useRef(null);
  const endpoint = "http://localhost:5000/send_transaction";
  const get_balance = () => {
    setTimeout(() => {
      // simulate a delay
      axios
        .get("http://localhost:5000/asset_addresses_balance",{
          params: {
            vaultID: "7"
          }
        })
        .then((response) => {
          readlist(response.data[0].total);
          readaddress(response.data[1][0].address);
          setLoading(false);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 100);
  };
  useEffect(() => {
    get_balance();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    console.log(sendAddress);
    fetch(`http://localhost:5000/send_transaction_FVTV`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fromAddress,sendAddress, cryptoBalance }),
    })
  }

  const showForms = () => {
    return (
      <div>
        <form
      // action={endpoint}
      onSubmit={submit}
      method="POST"
      target="_blank"
      // ref={formElement}
    >
            <div class="text-center items-center mx-4 my-4  space-y-2">
              <input
                type="text"
                class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="From"
                maxlength="30"
                name="fromAddress"
                onChange={(e) => setfromAddress(e.target.value)}
              />
            </div>
            <div class="text-center items-center mx-4 my-4  space-y-2">
              <input
                type="text"
                class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Send To"
                maxlength="30"
                name="sendAddress"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div class="text-center items-center mx-4 my-4  space-y-2">
              <input
                type="text"
                class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Crypto Balance"
                maxlength="30"
                name="cryptoBalance"
                onChange={(e) => setBalance(e.target.value)}
              />
            </div>
            <button
            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Send Crypto
            {/* <p>{walletaddress}</p> */}
          </button>
            </form>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        Loading the data {console.log("loading state")}
      </div>
    );
  }

  return (
    <div className="md:flex">
      <Sidebar />
      <div className="py-[30px] md:px-12 xl:px-16 flex-1">
        <WalletBalance
          initialCount={getlistofvalues}
          walletaddress={walletaddress}
        />
        <div className="text-center items-center mx-4 my-12 space-y-2">
          <div className="mx-10 my-25 px-4 inline-flex items-center">
            <button
              onClick={() => setform(true)}
              className={`border border-[${theme.textColor}] rounded-full text-[14px] text-[${theme.textColor}] flex justify-center py-2 px-[20px] mr-4`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill={theme.textColor}
                className="bi bi-send mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
              </svg>{" "}
              Send
            </button>
            <button
              className={`border border-[${theme.textColor}] rounded-full text-[14px] text-[${theme.textColor}] flex justify-center py-2 px-[20px]`}
            >
              <svg
                className="mr-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipath="url(#clip0_104_7052)">
                  <path
                    d="M4 20H20"
                    stroke={theme.textColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 14V4"
                    stroke={theme.textColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 14L16 10"
                    stroke={theme.textColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 14L8 10"
                    stroke={theme.textColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              Receive
            </button>
            
          </div>
          {showform ? showForms() : null}
        </div>

        <div>
          <h2 className="max-w-lg text-4xl font-semibold text-wrap  rounded bg-primary text-center  text-white">
            WalletTypes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2">
            <CryptoCards imgurl={"assets/images/icons/polygon.png"} />
            <CryptoCards imgurl={"assets/images/icons/bitcoin.png"} />
            <CryptoCards imgurl={"assets/images/icons/solana.png"} />
            <CryptoCards imgurl={"assets/images/icons/ethereum_logo.png"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletTest;
