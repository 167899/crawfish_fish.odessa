import axios from 'axios';


 const paramsObj = {
   token: '4dASQkD2GS2NeDriGG6d49kEbNDSHe5S',
   companyId: 'bb4f4a20-e572-41d5-90fb-69ed6e92c66d',
   tradepointId: '2'
 };

//export const getProductList = async () => {
  // const params = new URLSearchParams(paramsObj);
  //const URL = `https://xn-3s9h.api.skyservice.online/?action=getProducts&section=products&timezone=-3&token=hnH4iNfB5QFB7eRs8dt2RBzBy6f72Naa&device_uuid=300e7a10-2732-4218-bd03-5245bcb5babe&companyId=bb4f4a20-e572-41d5-90fb-69ed6e92c66d&ot=desc&of=nomenclatureId&search=&categories=[]&pagelimit=9999&tradepointId=1
//`;

 // return await axios.get(URL);
//};
 export const getProductList = async () => {
   const params = new URLSearchParams(paramsObj);
   const URL = `https://xn-3s9h.api.skyservice.online/?action=getProducts&section=products&${params}`;

   return await axios.get(URL);
 };
