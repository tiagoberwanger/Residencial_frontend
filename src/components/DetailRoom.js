import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import axios from 'axios';

function DetailRoom () {
  let { id } = useParams(); 
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosGet = () => {
    setLoading(true); 
    axios.get(`http://localhost:3001/room/${id}`)
    .then((response) => {
      setRooms(response.data);
      setLoading(false);
    })
    .catch((err) =>{
      console.log(err)
    })
  }

  useEffect(() => {
    axiosGet();
  }, [id])


  return (
    loading ? <p>Loading...</p> : (
    <div>
        <Link to="/">
        <button className="ml-6 mt-2 bg-indigo-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          voltar
        </button>
        </Link>
        <div>
        <p className="ml-6 mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-500 sm:text-4xl">
          {rooms.name}
        </p>
        <p className="ml-6 mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-500 sm:text-2xl">
          Valor: R$ {rooms.value}
        </p>
        <p className="ml-6 mt-2 text-1xl leading-8 font-extrabold tracking-tight text-gray-500 sm:text-1xl">
          Descrição: {rooms.description}
        </p>
        <div className=" grid grid-flow-row md:grid-flow-col ">
          <div className="m-3 border-2 border-white border-solid">
            <img src={rooms.images[0]} alt="entrada" />
          </div>
          <div className="m-3 border-2 border-white border-solid">
            <img src={rooms.images[1]} alt="cozinha" />
          </div>
          <div className="m-3 border-2 border-white border-solid">
            <img src={rooms.images[2]} alt="sala" />
          </div>
          <div className="m-3 border-2 border-white border-solid">
            <img src={rooms.images[3]} alt="mesanino" />
          </div>
          <div className="m-3 border-2 border-white border-solid">
            <img src={rooms.images[4]} alt="banheiro" />
          </div>
        </div>
        </div>
    </div>
  )
  )
};

export default DetailRoom;