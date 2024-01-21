import { addressList } from "@/constants/addressList";
import { provider } from "@/lib/provider";
import {
  TravelPBMManager__factory,
  TravelPBM__factory,
} from "@/typechain-types";
import { formatEther } from "viem";

const getTokenDetails = (id: number) => {
  const travelPBMManager = TravelPBMManager__factory.connect(
    addressList.TravelPBMManger,
    provider
  );
  return travelPBMManager.getTokenDetails(id);
};

const getBalanceOfPBM = (id: number, address: string) => {
  const travelPBM = TravelPBM__factory.connect(addressList.TravelPBM, provider);
  return travelPBM.balanceOf(address, id);
};

const getAirdropStatus = async (id: number) => {
  return Promise.all([
    getTokenDetails(id),
    getBalanceOfPBM(id, addressList.PBMDistributor),
  ]).then((res) => {
    return {
      totalSupply: formatEther(res[0][4]),
      remaining: formatEther(res[1]),
    };
  });
};

const contractService = {
  getTokenDetails,
  getBalanceOfPBM,
  getAirdropStatus,
};

export default contractService;
