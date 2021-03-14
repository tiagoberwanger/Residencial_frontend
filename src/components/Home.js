import React from 'react';
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="ml-6 mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-500 sm:text-4xl">
            Residencial Berwanger
          </p>
          <p className="ml-6 mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Rua 25 de Julho, 551. Bairro Jardim Bela Vista. Itapiranga/SC
          </p>
          <p className="ml-6 mt-4 max-w-2xl text-xl text-red-700 lg:mx-auto">
            A poucos metros da UCEFF! 
            (veja o mapa abaixo)
          </p>
        </div>
        
    <div class="relative h-64 m-8 overflow-hidden rounded-lg bg-indigo-500">
      <div class="absolute top-0 right-0 w-full h-full">
        <img
          alt="Snowy mountain lake"
          class="object-cover min-w-full h-full"
          src="https://lh3.googleusercontent.com/pw/ACtC-3cW5zoSoQC2oOqYLGfFEn4kT6ui6A4dT6WPexEaqAu_EITi7GJNJVL6oslvAzBhOyFX46wu3ETemFyFIqNcF_MucCjlLlInleLfIXHfLo_AZAPfWYb0Hyz0a6gArlbD0foU3lsM82qONcSLHxx_EZlIqQ=w1027-h519-no"
        />
      </div>
    </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <Link to="/room/1">
                <p className="ml-16 text-lg leading-6 font-medium text-gray-500 hover:text-gray-800">
                  Quitinete 1
                </p>
                </Link>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-800">
                Valor: $700 + contas
              </dd>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Quitinete estilo loft com 25 m². Cama suspensa em mezanino, forro em gesso, iluminação em led e móveis rusticos.
              </dd>
            </div>

            <div className="relative">
              <dt>
              <Link to="/room/2">
                <p className="ml-16 text-lg leading-6 font-medium text-gray-500 hover:text-gray-800">
                  Quitinete 2
                </p>
              </Link>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-800">
                Valor: $650 + contas
              </dd>
              <dd className="mt-2 ml-16 text-base text-gray-500">
              Quitinete estilo loft com 20 m². Cama suspensa em mezanino, forro em gesso, iluminação em led e móveis rusticos.
              </dd>
            </div>

            <div className="relative">
              <dt>
              <Link to="/room/3">
                <p className="ml-16 text-lg leading-6 font-medium text-gray-500 hover:text-gray-800">
                  Quitinete 3
                </p>
              </Link>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-800">
                Valor: $650 + contas
              </dd>
              <dd className="mt-2 ml-16 text-base text-gray-500">
              Quitinete estilo loft com 20 m². Cama suspensa em mezanino, forro em gesso, iluminação em led e móveis rusticos.
              </dd>
            </div>

            <div className="relative">
              <dt>
              <Link to="/room/4">
                <p className="ml-16 text-lg leading-6 font-medium text-gray-500 hover:text-gray-800">
                  Quitinete 4
                </p>
              </Link>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-800">
                Valor: $700 + contas
              </dd>
              <dd className="mt-2 ml-16 text-base text-gray-500">
              Quitinete estilo loft com 25 m². Cama suspensa em mezanino, forro em gesso, iluminação em led e móveis rusticos.
              </dd>
            </div>
          </dl>
        </div>
      </div>
        <div className="w-96 block my-0 mx-auto ">
        <p className="text-2xl mt-10 mx-auto text-base text-gray-500">
          Localização
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
        <p className="text-2xl mt-10 mb-5 mx-auto text-base text-gray-500">
          Contato
        </p>
          <a href="https://api.whatsapp.com/send?phone=5549999262126&text=Ol%C3%A1!%20Estou%20interessado%20em%20uma%20quitinete" className="mt-3 bg-green-500 px-4 py-2 text-white rounded-full" target="_blank">
            Whatsapp
          </a>
        </div>
    </div>
  );
};

export default Home;