import Image from "next/image";

export default function Home() {
  return (
    <div>

      <main>
        <div className="grid 3">

          <form>


            <input type="text" className="shadow shadow-black"/>
            <input type="text" className="shadow shadow-black"/>
            <input type="text" className="shadow shadow-black"/>
      

          </form>

          <button className=" bg-blue-400 shadow shadow-black"> Calcular</button>
          


        </div>

      </main>
      
    </div>
  );
}
