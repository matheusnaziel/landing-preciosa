import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
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
                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl dark:text-gray-300">
                    Gaseificada enquanto vai para a garrafa, a refrescância já começa ao ouvir o “tsssss”.
                </p>

                <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center">
                <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-300 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                            <span>Informação Nutricional</span>
                            <ChevronUpIcon
                            className={`${
                                open ? "transform rotate-180" : ""
                            } w-5 h-5 text-gray-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                        <div class="w-full">
                            <ul class="divide-y divide-gray-200">
                                <li class="p-4">
                                <span class="font-bold text-gray-900">Classificação: </span>
                                <span class="text-gray-600">Água Mineral Fluoretada, Vanádica, Hipotermal na Fonte</span>
                                </li>

                                <li class="p-4 bg-gray-300">
                                <span class="font-bold text-gray-900">Composição Química (mg/L):</span>
                                </li>

                                <li class="p-4">
                                <span class="font-bold text-gray-900">Bicarbonato: </span>
                                <span class="text-gray-600">68,39</span>
                                </li>

                                <li class="p-4 bg-gray-300">
                                <span class="font-bold text-gray-900">Calcio: </span>
                                <span class="text-gray-600">2,650</span>
                                </li>

                                <li class="p-4">
                                <span class="font-bold text-gray-900">Cloreto: </span>
                                <span class="text-gray-600">0,82</span>
                                </li>
                                <li class="p-4 bg-gray-300">
                                <span class="font-bold text-gray-900">Características Físico-Químicas:</span>
                                </li>

                                <li class="p-4">
                                <span class="font-bold text-gray-900">pH a 25°: </span>
                                <span class="text-gray-600">9,38</span>
                                </li>

                                <li class="p-4 bg-gray-300">
                                <span class="font-bold text-gray-900">Temperatura da água na fonte: </span>
                                <span class="text-gray-600">26,5 °C</span>
                                </li>

                            </ul>
                        </div>
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                </div>
            </div>
        </div>
        <div className="flex items-center w-full lg:w-1/2 p-20">
            <div className="max-w-2xl mb-8">
                <h2 className="text-xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-3xl xl:leading-tight dark:text-white">
                Preciosa Dioamond
                </h2>
                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl dark:text-gray-300">
                    Hidratação com simplicidade. Sem adicionar, retirar ou alterar qualquer característica original da fonte.
                </p>

                <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center">
                <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-300 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                            <span>Informação Nutricional</span>
                            <ChevronUpIcon
                            className={`${
                                open ? "transform rotate-180" : ""
                            } w-5 h-5 text-gray-800`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                            <div class="w-full">
                                <ul class="divide-y divide-gray-200">
                                    <li class="p-4">
                                    <span class="font-bold text-gray-900">Classificação: </span>
                                    <span class="text-gray-600">Água Mineral Fluoretada, Vanádica, Hipotermal na Fonte</span>
                                    </li>

                                    <li class="p-4 bg-gray-300">
                                    <span class="font-bold text-gray-900">Composição Química (mg/L):</span>
                                    </li>

                                    <li class="p-4">
                                    <span class="font-bold text-gray-900">Bicarbonato: </span>
                                    <span class="text-gray-600">68,39</span>
                                    </li>

                                    <li class="p-4 bg-gray-300">
                                    <span class="font-bold text-gray-900">Calcio: </span>
                                    <span class="text-gray-600">2,650</span>
                                    </li>

                                    <li class="p-4">
                                    <span class="font-bold text-gray-900">Cloreto: </span>
                                    <span class="text-gray-600">0,82</span>
                                    </li>
                                    <li class="p-4 bg-gray-300">
                                    <span class="font-bold text-gray-900">Características Físico-Químicas:</span>
                                    </li>

                                    <li class="p-4">
                                    <span class="font-bold text-gray-900">pH a 25°: </span>
                                    <span class="text-gray-600">9,38</span>
                                    </li>

                                    <li class="p-4 bg-gray-300">
                                    <span class="font-bold text-gray-900">Temperatura da água na fonte: </span>
                                    <span class="text-gray-600">26,5 °C</span>
                                    </li>

                                </ul>
                            </div>
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
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
                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl dark:text-gray-300">
                Nossa água chega até você em embalagens 100% recicladas, sem deixar rastros no planeta. Beba o futuro!
                </p>

                <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center">
                <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-300 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                            <span>Informação Nutricional</span>
                            <ChevronUpIcon
                            className={`${
                                open ? "transform rotate-180" : ""
                            } w-5 h-5 text-gray-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                            <div class="w-full">
                                <ul class="divide-y divide-gray-200">
                                    <li class="p-4 bg-gray-300">
                                    <span class="text-lg font-bold text-gray-700">Informação Nutricional</span>
                                    </li>

                                    <li class="p-4">
                                    <span class="font-bold text-gray-900">Classificação: </span>
                                    <span class="text-gray-600">Água Mineral Fluoretada, Vanádica, Hipotermal na Fonte</span>
                                    </li>

                                    <li class="p-4 bg-gray-300">
                                    <span class="font-bold text-gray-900">Composição Química (mg/L):</span>
                                    </li>

                                    <li class="p-4">
                                    <span class="font-bold text-gray-900">Bicarbonato: </span>
                                    <span class="text-gray-600">68,39</span>
                                    </li>

                                    <li class="p-4 bg-gray-300">
                                    <span class="font-bold text-gray-900">Calcio: </span>
                                    <span class="text-gray-600">2,650</span>
                                    </li>

                                    <li class="p-4">
                                    <span class="font-bold text-gray-900">Cloreto: </span>
                                    <span class="text-gray-600">0,82</span>
                                    </li>
                                    <li class="p-4 bg-gray-300">
                                    <span class="font-bold text-gray-900">Características Físico-Químicas:</span>
                                    </li>

                                    <li class="p-4">
                                    <span class="font-bold text-gray-900">pH a 25°: </span>
                                    <span class="text-gray-600">9,38</span>
                                    </li>

                                    <li class="p-4 bg-gray-300">
                                    <span class="font-bold text-gray-900">Temperatura da água na fonte: </span>
                                    <span class="text-gray-600">26,5 °C</span>
                                    </li>

                                </ul>
                            </div>
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                </div>
            </div>
        </div>
        <div className="flex items-center w-full lg:w-1/2 p-20">
        <div className="max-w-2xl mb-8">
                <h2 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-3xl xl:leading-tight dark:text-white">
                Preciosa Copo
                </h2>
                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl dark:text-gray-300">
                Nossa água chega até você em embalagens 100% recicladas, sem deixar rastros no planeta. Beba o futuro!
                </p>

                <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center">
                <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-300 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                            <span>Informação Nutricional</span>
                            <ChevronUpIcon
                            className={`${
                                open ? "transform rotate-180" : ""
                            } w-5 h-5 text-gray-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                        <div class="w-full">
                            <ul class="divide-y divide-gray-200">
                                <li class="p-4">
                                <span class="font-bold text-gray-900">Classificação: </span>
                                <span class="text-gray-600">Água Mineral Fluoretada, Vanádica, Hipotermal na Fonte</span>
                                </li>

                                <li class="p-4 bg-gray-300">
                                <span class="font-bold text-gray-900">Composição Química (mg/L):</span>
                                </li>

                                <li class="p-4">
                                <span class="font-bold text-gray-900">Bicarbonato: </span>
                                <span class="text-gray-600">68,39</span>
                                </li>

                                <li class="p-4 bg-gray-300">
                                <span class="font-bold text-gray-900">Calcio: </span>
                                <span class="text-gray-600">2,650</span>
                                </li>

                                <li class="p-4">
                                <span class="font-bold text-gray-900">Cloreto: </span>
                                <span class="text-gray-600">0,82</span>
                                </li>
                                <li class="p-4 bg-gray-300">
                                <span class="font-bold text-gray-900">Características Físico-Químicas:</span>
                                </li>

                                <li class="p-4">
                                <span class="font-bold text-gray-900">pH a 25°: </span>
                                <span class="text-gray-600">9,38</span>
                                </li>

                                <li class="p-4 bg-gray-300">
                                <span class="font-bold text-gray-900">Temperatura da água na fonte: </span>
                                <span class="text-gray-600">26,5 °C</span>
                                </li>

                            </ul>
                        </div>
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
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