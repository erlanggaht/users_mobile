"use client";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

export default function Home() {
  const [Users,setUsers] = useState([])
  const [nama, setNama] = useState([]);
  const [email,setEmail] = useState([]);
  const [exp,setExp] = useState([]); 
  const [aksesToken, setAksesToken] = useState([]);
  const [jwtDecoded,setJwtDecoded] = useState([])

  //RefreshToken
  async function refreshToken() {
        try {
          const response = await axios(process.env.URL_HOST + "/token", {
            method: "GET",
            withCredentials: true,
          });
              const decoded = await jwt_decode(response.data.accesstoken)
              setAksesToken(response.data.accesstoken);
              setJwtDecoded(decoded)
              setNama(jwtDecoded.nama)
              setEmail(jwtDecoded.email)
              setExp(jwtDecoded.exp)
                          
        } catch (error) {
          return error
        }
  }

const fetchCeptor = axios.create();
  fetchCeptor.interceptors.request.use(async(config) => {
    const date = new Date();
    if(exp * 1000 < date.getTime()){
      try {
        const response = await axios(process.env.URL_HOST + "/token", {
          method: "GET",
          withCredentials: true,
        });
        const decoded = await jwt_decode(response.data.accesstoken);
        config.headers.Authorization = `Bearer ${response.data.accesstoken}`;
        setJwtDecoded(decoded);
        setNama(response.nama);
        setEmail(response.email);
        setExp(response.exp);      
      } catch (error) {
        console.log({InterceptorError : error})
      }
    }  
    return config
  });

  async function getUsers() {
    try {
      const response =await fetchCeptor(process.env.URL_HOST + "/users", {
        method: "GET",
        withCredentials: true,
        headers : {
          Authorization : `Bearer ${aksesToken}`
        }
      });
      if(response.statusText === 'OK') setUsers(response.data)

    } catch (error) {
      return error

    }
  }

  useEffect(() => {
    refreshToken() 
    getUsers()
  }, []);

  return (
    <>
      <h1 className="text-2xl text-cyan-500 text-center p-4">Dashboard</h1>
      <div className="p-4">
      <h3 className="text-xl ">Data users</h3>
         <ul className="p-4">
          {Users ? Users.map ((m,i)=>{
            return (
           
              <li key={i} className="list-decimal ">
                Nama : {m.nama}<br/>
                Email : {m.email}

              </li>
            
              )
          }) : ""}
          </ul>
       
   
      </div>
       </>
  );
}
