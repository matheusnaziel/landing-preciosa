import Image from "next/image";
import Container from "./container";
import product1 from "../public/img/agua.png";

const Product = () => {
  return (
    <>
    <Container>
        <div className="text-4xl text-center text-gray-700 dark:text-white">
        Produtos <span className="text-blue-600">Preciosa</span>
        </div>
    </Container>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
            <div className="">
                <Image
                src={product1}
                width="616"
                height="617"
                className={"object-cover"}
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
                />
            </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8">
                <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                Preciosa: Pura, Sustentável, Revolucionária.
                </h1>
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
      </Container>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8">
                <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                Preciosa: Pura, Sustentável, Revolucionária.
                </h1>
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
            <div className="">
                <Image
                src={product1}
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


export default Product;