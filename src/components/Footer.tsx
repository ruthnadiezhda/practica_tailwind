import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className="
      sm:w-full sm:h-min-[250px] sm:bg-[#7525a7] sm:flex sm:flex-col sm:items-center
      w-full flex flex-col bg-[#419428] text-center items-center
      "> 
        <div id="footer" className="
        sm:w-full sm:flex sm:justify-between sm:p-5 
        ">
          <ul className="w-[170px] p-2.5 list-none">
            <li className="font-bold pb-5">
              <a className="text-white no-underline" href="./index.html">
                Ofertas
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="./index.html">
                Laptops
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="./index.html">
                Audio
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="./index.html">
                Auriculares
              </a>
            </li>
          </ul>
          <ul className="w-[170px] p-2.5 list-none">
            <li className="font-bold pb-5">
              <a className="text-white no-underline" href="./index.html">
                Cómo comprar
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="./index.html">
                Formas de pago
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="./index.html">
                Envios
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="./index.html">
                Devoluciones
              </a>
            </li>
          </ul>
          <ul className="w-[170px] p-2.5 list-none">
            <li className="font-bold pb-5">
              <a className="text-white no-underline" href="./index.html">
                Costos y tarifas
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="./index.html">
                Impuestos
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="./index.html">
                Facturación
              </a>
            </li>
          </ul>
          <ul className="w-[170px] p-2.5 list-none">
            <li className="font-bold pb-5">
              <a className="text-white no-underline" href="./index.html">
                Mis pedidos
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="./index.html">
                Pedir nuevamente
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="./index.html">
                Lista de deseos
              </a>
            </li>
          </ul>
          <ul className="w-[170px] p-2.5 list-none">
            <li className="font-bold pb-5">
              <a className="text-white no-underline" href="./index.html">
                Garantía
              </a>
            </li>
          </ul>
        </div>
        <div className="
        sm:w-full sm:border-t-[1px] sm:border-t-[#ba53fb] sm:text-center sm:text-white sm:font-bold sm:py-[30px] sm:box-border
        w-full border-t-[2px] border-t-[#a8ef34] text-center text-white font-bold box-border py-[30px]
        ">
          Curso de HTML + CSS 2023
        </div>
      </footer>
    </>
  );
}
