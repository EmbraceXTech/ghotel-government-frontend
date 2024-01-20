import axios from "axios";

const checkTraveler = (walletAddress: string) => {
  return axios.get(`/api/traveler/${walletAddress}`);
};

const checkBusiness = (walletAddress: string) => {
  return axios.get(`/api/business/${walletAddress}`);
};

const createTraveler = (data: any) => {
  return axios.post("/api/traveler", data);
};

const createBusiness = (data: any) => {
  return axios.post("/api/business", data);
};

const ghovernmentService = {
  createTraveler,
  checkTraveler,
  checkBusiness,
  createBusiness,
};

export default ghovernmentService;
