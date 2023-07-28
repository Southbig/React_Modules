import axios from "axios";

const {hostname} = window.location;
let baseURL = '';

const isDevelop = hostname.includes('dev') || hostname.includes('local');

const timestamp = new Date().getTime()

const baseAxios = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  }
})


const useGetApi = async (url: string, params?: any) => {
  const formData = params || {};

  const {data} = await baseAxios.get(url, {
    params: {...formData, timestamp}
  })

  return {
    data,
  }
}

const usePostApi = async (url:string, params: any) => {
  const formData = new FormData();
  const getKeys = Object.keys(params);

  getKeys.forEach((key) => {
    formData.append(key, params[key])
  })
  const {data} = await baseAxios.post(url, formData);

  return data
}


export {
  useGetApi,
  usePostApi
}