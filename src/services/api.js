import axios from 'axios';


const paramsObj = {
  token: '4dASQkD2GS2NeDriGG6d49kEbNDSHe5S',
  companyId: 'bb4f4a20-e572-41d5-90fb-69ed6e92c66d',
  tradepointId: '2'
};

export const getProductList = async () => {
  const params = new URLSearchParams(paramsObj);
  const URL = `https://xn-l3h.api.skyservice.online/?action=getProducts&section=products&${params}`;

  return await axios.get(URL);
};
