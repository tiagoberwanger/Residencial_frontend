import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/wppbutton.css'

function Home () {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="ml-6 mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-500 sm:text-4xl">
            Residencial Berwanger
          </p>
        </div>
        
    <div class="relative h-64 m-8 overflow-hidden rounded-lg">
      <div class="absolute top-0 right-0 w-full h-full">
        <img
          alt="Casa"
          class="object-cover min-w-full h-full"
          src="https://i.ibb.co/TKZxNw2/Foto-casa.jpg"
        />
      </div>
    </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

            <div className="relative">
              <dt>
                <Link to="/room/1">
                <button class=" ml-12 bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  Quitinete 1
                </button>
                </Link>
              </dt>
              <dd className="mt-2 ml-12 text-base text-gray-800">
                Valor: $700 + contas
              </dd>
              <dd className="mt-2 ml-12 mr-8 text-justify text-base text-gray-500">
                Quitinete estilo loft com 25 m². Cama suspensa em mezanino, forro em gesso, iluminação em led e móveis rusticos.
              </dd>
            </div>

            <div className="relative">
              <dt>
              <Link to="/room/2">
                <button class=" ml-12 bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  Quitinete 2
                </button>
              </Link>
              </dt>
              <dd className="mt-2 ml-12 text-base text-gray-800">
                Valor: $650 + contas
              </dd>
              <dd className="mt-2 ml-12 text-base mr-8 text-justify text-gray-500">
              Quitinete estilo loft com 20 m². Cama suspensa em mezanino, forro em gesso, iluminação em led e móveis rusticos.
              </dd>
            </div>

            <div className="relative">
              <dt>
              <Link to="/room/3">
                <button class=" ml-12 bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  Quitinete 3
                </button>
              </Link>
              </dt>
              <dd className="mt-2 ml-12 text-base text-gray-800">
                Valor: $650 + contas
              </dd>
              <dd className="mt-2 ml-12 text-base mr-8 text-justify text-gray-500">
              Quitinete estilo loft com 20 m². Cama suspensa em mezanino, forro em gesso, iluminação em led e móveis rusticos.
              </dd>
            </div>

            <div className="relative">
              <dt>
              <Link to="/room/4">
                <button class=" ml-12 bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  Quitinete 4
                </button>
              </Link>
              </dt>
              <dd className="mt-2 ml-12 text-base text-gray-800">
                Valor: $700 + contas
              </dd>
              <dd className="mt-2 ml-12 text-base mr-8 text-justify text-gray-500">
              Quitinete estilo loft com 25 m². Cama suspensa em mezanino, forro em gesso, iluminação em led e móveis rusticos.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <Link to="/room/5">
                <button class=" ml-12 bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  Quarto 1
                </button>
                </Link>
              </dt>
              <dd className="mt-2 ml-12 text-base text-gray-800">
                Valor: $375 + contas
              </dd>
              <dd className="mt-2 ml-12 text-base mr-8 text-justify text-gray-500">
                Quarto disponível no piso superior, amplo e arejado.
              </dd>
            </div>

          <div className="relative">
              <dt>
                <Link to="/room/6">
                <button class=" ml-12 bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  Quarto 2
                </button>
                </Link>
              </dt>
              <dd className="mt-2 ml-12 text-base text-gray-800">
                Valor: $375 + contas
              </dd>
              <dd className="mt-2 ml-12 text-base mr-8 text-justify text-gray-500">
              Quarto disponível no piso superior, amplo e arejado.
              </dd>
            </div>

          </dl>
        </div>
      </div>
        <div className="w-96 block my-0 mx-auto ">
        <p className="ml-6 text-2xl font-bold mt-10 mx-auto text-base text-gray-500">
          Localização
        </p>
        <p className="ml-6 mt-4 text-justify max-w-2xl text-m text-gray-500 lg:mx-auto">
          Rua 25 de Julho, 551. Bairro Jardim Bela Vista. Itapiranga/SC
        </p>
        <p className="ml-6 mt-4 mb-5 text-justify max-w-2xl text-m text-red-700 font-semibold lg:mx-auto">
          A poucos metros da UCEFF!
        </p>
        <p className="ml-6 mt-4 mb-5 text-justify max-w-2xl text-m text-gray-500 lg:mx-auto">
          Veja no mapa:
        </p>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1774.8297244861049!2d-53.704284142051065!3d-27.167003159446697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x94fbb64df5aeaf61%3A0xd9dae5d37af3425f!2sR.%2025%20de%20Julho%2C%20551%2C%20Itapiranga%20-%20SC%2C%2089896-000!3m2!1d-27.1676321!2d-53.7045183!4m5!1s0x94fbb653d3e59fe9%3A0x3b09977d26aa4fb5!2sUCEFF%20Itapiranga%20-%20Rua%20Carlos%20Kummer%20-%20Bairro%20Universit%C3%A1rio%2C%20Itapiranga%20-%20SC!3m2!1d-27.1662158!2d-53.701888999999994!5e0!3m2!1spt-BR!2sbr!4v1615669312961!5m2!1spt-BR!2sbr"
            key="iframe"
            title="iframe"
            width="400"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
        <div className="w-96 block my-0 mx-auto ">
        <p className="ml-6 text-2xl font-bold mt-10 mb-5 mx-auto text-base text-gray-500">
          Contato
        </p>
          <a href="mailto:daniel_berwanger@hotmail.com" className="mt-3 px-4 py-2 text-base text-gray-500">
            daniel_berwanger@hotmail.com
          </a>
          <a href="https://api.whatsapp.com/send?phone=5549999262126&text=Ol%C3%A1!%20Estou%20interessado%20em%20uma%20quitinete" class="float" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-whatsapp my-float"></i>
          </a>
        </div>
    </div>
  );
};

export default Home;