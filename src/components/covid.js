import  axios  from "axios";

const Covid =()=>{
    let data =async()=>{
        let url=`http://api.covid19india.org/data.json`
        let response =await fetch(url,{method:'GET'});
        let data= await response.json();
        console.log(data)
    }

}
// const Covid = () => {
//     const getCovidData = async () => {
//         try{
//             const res = await fetch('http://api.covid19india.org/data.json');
//             console.log(res)
//             const actualData = await res.json();
//             console.log(actualData);
//         }catch(err){
//             console.log(err);
//         }
//         console.log("enw dfjkdfdjkfgak",actualData)
//     }
//     useEffect(() =>{
//       getCovidData();
//     },[]);

//     return (
//         <>
//             <h1>LIVE</h1>
//             <h2>COVID-19 CORONAVIROUS TRACKER</h2>
//         </>
//     )
// }
export default Covid