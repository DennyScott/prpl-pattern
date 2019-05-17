import axios from 'axios';


const picSumEndpoints = {
  picSum: 'https://picsum.photos/',
  images: 'v2/list',
  companies: 'companies',
};

const endpoints = {
  images: {
    getList: () => `${picSumEndpoints.images}/`,
  },
};

function getAxiosAuthInstance() {
  return axios.create({
    baseURL: picSumEndpoints.picSum,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

async function authGet(endpoint) {
  return await getAxiosAuthInstance().get(endpoint);
}

export default endpoints;
export { authGet };