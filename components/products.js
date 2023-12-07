import Image from "next/image";
import Container from "./container";
import product1 from "../public/img/agualaranja.png";
import product2 from "../public/img/diamond1.png";
import product3 from "../public/img/roxo1.png";
import product4 from "../public/img/copo1.png";

const Product = () => {
  return (
    <>
    <Container>
        <div className="text-4xl text-center text-gray-700 dark:text-white">
        Produtos <span className="text-blue-600">Preciosa</span>
        </div>
    </Container>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2 p-20">
            <div className="border-2 border-gray-400 rounded-xl p-20">
                <Image
                src={product3}
                width="400"
                height="450"
                className={"object-cover"}
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
                />
            </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8">
                <h2 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-3xl xl:leading-tight dark:text-white">
                Preciosa Diamond Gaseificada.
                </h2>
                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                Nossa água chega até você em embalagens 100% recicladas, sem deixar rastros no planeta. Beba o futuro!
                </p>

                <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                    href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                    target="_blank"
                    rel="noopener"
                    className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-md ">
                    Saiba mais
                </a>
                </div>
            </div>
        </div>
        <div className="flex items-center w-full lg:w-1/2 p-20">
            <div className="max-w-2xl mb-8">
                <h2 className="text-xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-3xl xl:leading-tight dark:text-white">
                Preciosa Dioamond
                </h2>
                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                Nossa água chega até você em embalagens 100% recicladas, sem deixar rastros no planeta. Beba o futuro!
                </p>

                <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                    href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                    target="_blank"
                    rel="noopener"
                    className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-md ">
                    Saiba mais
                </a>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="border-2 border-gray-400 rounded-xl p-20">
                <Image
                src={product2}
                width="400"
                height="450"
                className={"object-cover"}
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
                />
            </div>
        </div>
        <div className="flex items-center w-full lg:w-1/2 p-20">
            <div className="border-2 border-gray-400 rounded-xl p-20">
                <Image
                src={product1}
                width="400"
                height="450"
                className={"object-cover"}
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
                />
            </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8">
                <h2 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-3xl xl:leading-tight dark:text-white">
                Preciosa Gaseificada
                </h2>
                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                Nossa água chega até você em embalagens 100% recicladas, sem deixar rastros no planeta. Beba o futuro!
                </p>

                <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                    href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                    target="_blank"
                    rel="noopener"
                    className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-md ">
                    Saiba mais
                </a>
                </div>
            </div>
        </div>
        <div className="flex items-center w-full lg:w-1/2 p-20">
        <div className="max-w-2xl mb-8">
                <h2 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-3xl xl:leading-tight dark:text-white">
                Preciosa Copo
                </h2>
                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                Nossa água chega até você em embalagens 100% recicladas, sem deixar rastros no planeta. Beba o futuro!
                </p>

                <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                    href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                    target="_blank"
                    rel="noopener"
                    className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-md ">
                    Saiba mais
                </a>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="border-2 border-gray-400 rounded-xl p-20">
                <Image
                src={product4}
                width="400"
                height="450"
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


export default Product;