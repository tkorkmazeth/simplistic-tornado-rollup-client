import ConnectWallet from "@/components/Wallet/ConnectWallet";
import { SwitchNetwork } from "@/components/Wallet/SwitchNetwork";

const NavHeader = () => {
  return (
    <header className="flex items-center h-16 bg-white-800 text-black px-4  border-b-4 border-gray-500 sticky top-0 z-50 bg-white">
      <div className="flex items-center">
        <a href="/" className="block">
          <img
            src="/logo-black2.png"
            alt="CashProof Logo"
            className="h-8 w-auto fill-current"
          />
        </a>
        {/* <span className="ml-4 text-xl font-bold">FundPoint</span> */}
      </div>
      <nav className="flex">
        <a href="/upload" className="text-gray-500 hover:underline mx-4">
          Create balance request
        </a>
        |
        <a href="/sign" className="text-gray-500 hover:underline mx-4">
          Verify balance request
        </a>
      </nav>
      <span className="ml-auto align-right justify-end">
        <SwitchNetwork />
      </span>
      <span className="align-right justify-end">
        <ConnectWallet />
      </span>
    </header>
  );
};

export default NavHeader;
