import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import anggur from "./img/anggur.png";
import jeruk from "./img/jeruk.png";
import semangka from "./img/semangka.png";
import mangga from "./img/mangga.png";
import Random from "./img/default.jpg";

export default function Hero() {
  const [played, setPlayed] = useState(false);

  const [fruitsRandom, setFruitsRandom] = useState([]);
  const [inputUser, setInputUser] = useState(null);
  const [inputNominal, setInputNominal] = useState(0);
  const [inputCom, setInputCom] = useState("");
  const fruits = ["anggur", "jeruk", "semangka", "mangga"];
  const [Point, setPoint] = useState(0);
  const minimumNominal = 5;
  const [cash, setCash] = useState(500);
  const [Newcash, setNewCash] = useState(500);
  function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const play = (event) => {
    event.preventDefault();

    if (inputNominal >= minimumNominal) {
      const newFruitsRandom = shuffleArray(fruits);
      setFruitsRandom(newFruitsRandom); // Simpan fruitsRandom yang baru diacak
      setInputCom(newFruitsRandom[0]); // Set the inputCom to a random element from fruits
    } else {
      alert("Taruhan harus lebih besar atau sama dengan " + minimumNominal);
    }

    // Reset inputUser setelah selesai bermain
  };

  useEffect(() => {
    if (inputUser === inputCom && !played) {
      setCash((prevCash) => prevCash + parseInt(inputNominal));
      setPlayed(true);
    } else {
      // Ensure cash doesn't go below 0 after subtracting the bet amount
      setCash((prevCash) => prevCash - parseInt(inputNominal));
      setPoint((prevPoint) => prevPoint + 20);
    }
    // Reset inputCom AFTER updating cash and point
    // setInputCom("");
    // setInputUser("");
    // Reset inputCom AFTER updating cash and point
    // setTimeout(() => {
    //   setInputCom("");
    //   setInputUser("");
    // }, 1000);
    // const timer = setTimeout(() => {
    //   // Reset inputs after a delay
    //   setInputCom("");
    //   setInputUser("");
    //   if (inputUser === inputCom) {
    //     setCash((prevCash) => prevCash + parseInt(inputNominal));
    //   } else {
    //     // Ensure cash doesn't go below 0 after subtracting the bet amount
    //     setCash((prevCash) => Math.max(prevCash - parseInt(inputNominal), 0));
    //     setPoint((prevPoint) => prevPoint + 20);
    //   }
    // }, 1000);

    // // return () => clearTimeout(timer);
    // const timer = setTimeout(() => {
    //   setInputUser("");
    //   setInputCom("");
    // }, 1000);

    // return () => {
    //   clearTimeout(timer);
    // };
  }, [inputCom]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInputUser("");
      setInputCom("");
      setPlayed(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [inputUser, inputCom]);
  function getFruitImage(fruit) {
    switch (fruit) {
      case "anggur":
        return anggur;
      case "jeruk":
        return jeruk;
      case "semangka":
        return semangka;
      case "mangga":
        return mangga;
      default:
        return Random; // jika tidak ada gambar yang di input
    }
  }
  // membuat function untuk mendaptakan value masing masing input

  return (
    <>
      <Navbar cash={cash} Point={Point} />
      <div className="bg-purple-600">
        <h1 className="text-center text-white font-bold py-5 px-2">
          Tebak Buah dan dapatkan hadiah
        </h1>
        <div className="flex justify-between">
          <img src={anggur} alt="" width="50" height="50" />
          <img src={jeruk} alt="" width="50" height="50" />
          <img src={semangka} alt="" width="50" height="50" />
          <img src={mangga} alt="" width="50" height="50" />
        </div>
      </div>
      <div className="hasil bg-purple-600">
        <h1 className="text-center text-white text-2xl font-bold py-5 px-2">
          Hasil
        </h1>
        <div className="subHasil bg-[#33085E] p-7">
          <div className="flex items-center justify-around">
            <div className="you text-center">
              <span className="text-white font-semibold block">
                Pilihan Kamu
              </span>
              <img
                src={getFruitImage(inputUser)}
                alt=""
                width="50"
                height="50"
                className="mt-4 mx-auto"
              />
            </div>
            <div className="vs">
              <h1 className="font-semibold text-xl text-white">Dan</h1>
            </div>
            <div className="com text-center">
              <span className="text-white font-semibold">Pilihan Komputer</span>
              <img
                src={getFruitImage(inputCom)}
                alt=""
                width="50"
                className="mt-4 mx-auto"
                height="50"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-0 sm:p-12">
        <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
          <h1 className="text-xl font-bold mb-8">
            Inputkan hanya salah satu dibawah
          </h1>
          <h1 className="text-xs font-bold">anggur, jeruk, semangka, mangga</h1>
          <h1 className="text-xs font-bold ">
            List hadiah ada dibagian
            <a href="/Reward" className="text-violet-500">
              REWARD
            </a>
          </h1>
          <form id="form" novalidate onSubmit={play}>
            <div className="relative z-0 w-full mb-5 mt-10">
              <input
                type="inputUser"
                name="inputUser"
                placeholder=""
                autoComplete="off"
                onChange={(event) => setInputUser(event.target.value)}
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                for="inputUser"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Masukan Pilihan
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 mt-10">
              <input
                type="number"
                name="money"
                placeholder=" "
                required
                onChange={(event) => setInputNominal(event.target.value)}
                className="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <div className="absolute top-0 left-0 mt-3 ml-1 text-gray-400">
                $
              </div>
              <label
                for="money"
                className="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500"
              >
                Taruhan
              </label>
            </div>
            <span className="text-sm text-red-600 ">
              warna merah berarti taruhannya kurang / cash tidak cukup
            </span>
            {cash === 0 && (
              <div className="text-red-600 font-semibold text-center">
                Cash habis! Silakan tambahkan saldo untuk bermain lagi.
              </div>
            )}
            <button
              id="button"
              type="submit"
              disabled={
                !inputUser ||
                inputNominal < minimumNominal ||
                inputNominal > cash
              }
              className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none disabled:bg-red-600"
            >
              Main
            </button>
          </form>
        </div>
      </div>

      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
                "Kemenangan saat bermain judi adalah saat berhenti bermain"
              </p>
            </blockquote>
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <a
              href="https://facebook.com/wilypradana"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>

            <a
              href="https://github.com/wilypradana"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://instagram.com/wxhzyyy"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">instagram</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2021 Kalkoadev, Inc. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
}
