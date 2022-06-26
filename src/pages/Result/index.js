import "./index.css";

function Result() {
  return (
    <>
      <div className="header-1">
        <h1 className="paraf-1 text-l font-bold">SCORE RESULT</h1>
      </div>

      <div>
        <h1 className="paraf-2 font-bold">Hi Anda</h1>
        <p className="paraf-3">Skor akhirmu adalah</p>
      </div>

      <div className="tengah-1">

        <div className="skor">
          <h1 >1925</h1>
          <p>18/20</p>
        </div>

        <div className="kecepatan">
          <p>Kecepatan</p>
          <h1 className='font-bold'>00 : 01 : 23</h1>
        </div>

        <div className="tinggi">
          <h1 className='font-bold'>TINGGI</h1>
        </div>

        <div className="total-waktu">
          <p>Total Waktu</p>
          <h1 className="font-bold">00 : 35 : 49</h1>
        </div>
      </div>

      <div className='footer'>
        <button
          type="button"
          className="tombol-1 py-4 px-8 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
        >
          Coba Quiz Lainnya
        </button>

        <button
          type="button"
          className="tombol-2 py-4 px-8 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
        >
          Keluar
        </button>
      </div>
    </>
  );
}

export default Result;
