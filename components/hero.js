import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/agua-fundo.png";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full my-4">
          <h2 className="text-xl font-bold leading-snug tracking-tight text-gray-800 text-center lg:text-xl lg:leading-tight xl:text-3xl xl:leading-tight dark:text-white">
            Fornecendo qualidade em bebidas e alimentos
          </h2>
        </div>
        <div className=" w-full my-4">
          <h2 className="text-4xl font-bold text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            BEBIDAS <br />
          </h2>
        </div>
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Água mineral Preciosa: Não basta ser água, tem que ter qualidade!
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Nosso portfólio de produtos é completo para todos os tipos de eventos atendendo sua necessidade com uma verdadeira jóia líquida.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://wa.me/5521991221552"
                target="_blank"
                rel="noopener"
                id="botao-whatsapp-2"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-md ">
                Saiba mais
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center w-full lg:w-1/2 ">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}


export default Hero;