import Image from "next/image";
import React, { useState } from 'react';
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

import Container from "./container";
import bala1 from "../public/img/bala-amarela.jpeg";
import bala2 from "../public/img/bala-verde.jpeg";
import bala3 from "../public/img/bala-rosa.jpeg";
import bala4 from "../public/img/bala-roxa.jpeg";
import bala5 from "../public/img/pirulito.png";
import bala6 from "../public/img/esticadinha.png";


const ProductsTwo = () => {
    
  return (
    <>
        <Container>
            <div className="text-4xl text-center text-gray-700 dark:text-white" id="produtos">
            Alimentos <span className="text-yellow-300">Bala Juquinha</span>
            </div>
            <div className="text-xl text-center text-gray-700 ">
                É a bala da Festa! uma delícia com sabor de infância.
            </div>
        </Container>
        <Container className="flex flex-wrap justify-center">
            {/* Product1 */}
            <div className="flex flex-col mb-12 lg:mb-4 lg:flex-row">
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <div className="border-2 border-gray-400 rounded-xl lg:p-20 p-5">
                        <Image
                        src={bala1}
                        width="400"
                        height="450"
                        className={"object-cover"}
                        alt="Pacote bala juquinha tutti frutti"
                        loading="eager"
                        placeholder="blur"
                        layout="responsive"
                        sizes="(max-width: 768px) 257px, (max-width: 1024px) 300px, 350px"
                        quality={75}
                        />
                    </div>
                </div>
                <div className="flex items-center w-full lg:w-1/2 lg:p-20 p-5">
                    <div className="lg:max-w-2xl mb-8">
                        <h2 className="text-4xl font-bold leading-snug mt-4 lg:mt-0 tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-3xl xl:leading-tight dark:text-white">
                        Bala Juquinha Tutti Frutti 600G
                        </h2>
                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl dark:text-gray-300">
                        Deliciosas Balas Juquinha Tutti Frutti! Com 600g de pura alegria, este pacote é o companheiro perfeito para qualquer festa ou para adoçar o seu dia a dia.
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
                                            <span class="font-bold text-gray-900">Valor Energético: </span>
                                            <span class="text-gray-600">72 kcal por porção de 20 g</span>
                                            </li>

                                            <li class="p-4 bg-gray-300">
                                            <span class="font-bold text-gray-900">Carboidratos Totais: </span>
                                            <span class="text-gray-600">18 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4">
                                            <span class="font-bold text-gray-900">Açúcares Totais: </span>
                                            <span class="text-gray-600">12 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4 bg-gray-300">
                                            <span class="font-bold text-gray-900">Açúcares Adicionados: </span>
                                            <span class="text-gray-600">12 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4">
                                            <span class="font-bold text-gray-900">Gorduras Totais: </span>
                                            <span class="text-gray-600">0 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4 bg-gray-300">
                                            <span class="font-bold text-gray-900">Sódio: </span>
                                            <span class="text-gray-600">20 mg por porção de 20 g</span>
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
            </div>  
            {/* Product2 */}
            <div className="flex flex-col mb-12 lg:mb-4 lg:flex-row-reverse">
                <div className="flex items-center w-full lg:w-1/2 justify-center">
                    <div className="border-2 border-gray-400 rounded-xl lg:p-20 p-5">
                        <Image
                        src={bala2}
                        width="400"
                        height="450"
                        className={"object-cover"}
                        alt="Garrafa Preciosa Diamond 330ml"
                        loading="eager"
                        placeholder="blur"
                        layout="responsive"
                        sizes="(max-width: 768px) 307px, (max-width: 1024px) 300px, 350px"
                        quality={75}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center w-full lg:w-1/2 lg:p-20 p-5">
                    <div className="lg:max-w-2xl mb-8">
                        <h2 className="text-4xl font-bold leading-snug mt-4 lg:mt-0 tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-3xl xl:leading-tight dark:text-white">
                        Bala Juquinha Maçã Verde 600G
                        </h2>
                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl dark:text-gray-300">
                        Deliciosas Balas Juquinha Maçã Verde! Com 600g de pura alegria, este pacote é o companheiro perfeito para qualquer festa ou para adoçar o seu dia a dia.
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
                                            <span class="font-bold text-gray-900">Valor Energético: </span>
                                            <span class="text-gray-600">72 kcal por porção de 20 g</span>
                                            </li>

                                            <li class="p-4 bg-gray-300">
                                            <span class="font-bold text-gray-900">Carboidratos Totais: </span>
                                            <span class="text-gray-600">18 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4">
                                            <span class="font-bold text-gray-900">Açúcares Totais: </span>
                                            <span class="text-gray-600">12 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4 bg-gray-300">
                                            <span class="font-bold text-gray-900">Açúcares Adicionados: </span>
                                            <span class="text-gray-600">12 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4">
                                            <span class="font-bold text-gray-900">Gorduras Totais: </span>
                                            <span class="text-gray-600">0 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4 bg-gray-300">
                                            <span class="font-bold text-gray-900">Sódio: </span>
                                            <span class="text-gray-600">20 mg por porção de 20 g</span>
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
            </div>
            {/* Product3 */}
            <div className="flex flex-col mb-12 lg:mb-4 lg:flex-row">
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <div className="border-2 border-gray-400 rounded-xl lg:p-20 p-5">
                        <Image
                        src={bala3}
                        width="400"
                        height="450"
                        className={"object-cover"}
                        alt="Pacote bala juquinha framboesa"
                        loading="eager"
                        placeholder="blur"
                        layout="responsive"
                        sizes="(max-width: 768px) 307px, (max-width: 1024px) 300px, 350px"
                        quality={75}
                        />
                    </div>
                </div>
                <div className="flex items-center w-full lg:w-1/2 lg:p-20 p-5">
                    <div className="lg:max-w-2xl mb-8">
                        <h2 className="text-4xl font-bold leading-snug mt-4 lg:mt-0 tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-3xl xl:leading-tight dark:text-white">
                        Bala Juquinha Framboesa 600G
                        </h2>
                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl dark:text-gray-300">
                        Deliciosas Balas Juquinha Framboesa! Com 600g de pura alegria, este pacote é o companheiro perfeito para qualquer festa ou para adoçar o seu dia a dia.
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
                                            <span class="font-bold text-gray-900">Valor Energético: </span>
                                            <span class="text-gray-600">72 kcal por porção de 20 g</span>
                                            </li>

                                            <li class="p-4 bg-gray-300">
                                            <span class="font-bold text-gray-900">Carboidratos Totais: </span>
                                            <span class="text-gray-600">18 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4">
                                            <span class="font-bold text-gray-900">Açúcares Totais: </span>
                                            <span class="text-gray-600">12 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4 bg-gray-300">
                                            <span class="font-bold text-gray-900">Açúcares Adicionados: </span>
                                            <span class="text-gray-600">12 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4">
                                            <span class="font-bold text-gray-900">Gorduras Totais: </span>
                                            <span class="text-gray-600">0 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4 bg-gray-300">
                                            <span class="font-bold text-gray-900">Sódio: </span>
                                            <span class="text-gray-600">20 mg por porção de 20 g</span>
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
            </div>  
            {/* Product4 */}
            <div className="flex flex-col mb-12 lg:mb-4 lg:flex-row-reverse">
                <div className="flex items-center w-full lg:w-1/2 justify-center">
                    <div className="border-2 border-gray-400 rounded-xl lg:p-20 p-5">
                        <Image
                        src={bala4}
                        width="400"
                        height="450"
                        className={"object-cover"}
                        alt="Bala Juquinha Uva 600G"
                        loading="eager"
                        placeholder="blur"
                        layout="responsive"
                        sizes="(max-width: 768px) 307px, (max-width: 1024px) 300px, 350px"
                        quality={75}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center w-full lg:w-1/2 lg:p-20">
                    <div className="lg:max-w-2xl mb-8">
                        <h2 className="text-4xl font-bold leading-snug mt-4 lg:mt-0 tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-3xl xl:leading-tight dark:text-white">
                        Bala Juquinha Uva 600G
                        </h2>
                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl dark:text-gray-300">
                        Deliciosas Balas Juquinha Uva! Com 600g de pura alegria, este pacote é o companheiro perfeito para qualquer festa ou para adoçar o seu dia a dia.
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
                                            <span class="font-bold text-gray-900">Valor Energético: </span>
                                            <span class="text-gray-600">72 kcal por porção de 20 g</span>
                                            </li>

                                            <li class="p-4 bg-gray-300">
                                            <span class="font-bold text-gray-900">Carboidratos Totais: </span>
                                            <span class="text-gray-600">18 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4">
                                            <span class="font-bold text-gray-900">Açúcares Totais: </span>
                                            <span class="text-gray-600">12 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4 bg-gray-300">
                                            <span class="font-bold text-gray-900">Açúcares Adicionados: </span>
                                            <span class="text-gray-600">12 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4">
                                            <span class="font-bold text-gray-900">Gorduras Totais: </span>
                                            <span class="text-gray-600">0 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4 bg-gray-300">
                                            <span class="font-bold text-gray-900">Sódio: </span>
                                            <span class="text-gray-600">20 mg por porção de 20 g</span>
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
            </div>
             {/* Product5 */}
             <div className="flex flex-col mb-12 lg:mb-4 lg:flex-row">
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <div className="border-2 border-gray-400 rounded-xl lg:p-20 p-5">
                        <Image
                        src={bala5}
                        width="400"
                        height="450"
                        className={"object-cover"}
                        alt="Pacote Pirulito juquinha tutti frutti"
                        loading="eager"
                        placeholder="blur"
                        layout="responsive"
                        sizes="(max-width: 768px) 307px, (max-width: 1024px) 300px, 350px"
                        quality={75}
                        />
                    </div>
                </div>
                <div className="flex items-center w-full lg:w-1/2 lg:p-20 p-5">
                    <div className="lg:max-w-2xl mb-8">
                        <h2 className="text-4xl font-bold leading-snug mt-4 lg:mt-0 tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-3xl xl:leading-tight dark:text-white">
                        Pirulito Juquinha Tutti Frutti 88G
                        </h2>
                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl dark:text-gray-300">
                        Delicioso Pirulito Juquinha Tutti Frutti! Com 88g de pura alegria, este pacote é o companheiro perfeito para qualquer festa ou para adoçar o seu dia a dia.
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
                                            <span class="font-bold text-gray-900">Valor Energético: </span>
                                            <span class="text-gray-600">72 kcal por porção de 20 g</span>
                                            </li>

                                            <li class="p-4 bg-gray-300">
                                            <span class="font-bold text-gray-900">Carboidratos Totais: </span>
                                            <span class="text-gray-600">18 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4">
                                            <span class="font-bold text-gray-900">Açúcares Totais: </span>
                                            <span class="text-gray-600">12 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4 bg-gray-300">
                                            <span class="font-bold text-gray-900">Açúcares Adicionados: </span>
                                            <span class="text-gray-600">12 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4">
                                            <span class="font-bold text-gray-900">Gorduras Totais: </span>
                                            <span class="text-gray-600">0 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4 bg-gray-300">
                                            <span class="font-bold text-gray-900">Sódio: </span>
                                            <span class="text-gray-600">20 mg por porção de 20 g</span>
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
            </div>  
            {/* Product6 */}
            <div className="flex flex-col mb-12 lg:mb-4 lg:flex-row-reverse">
                <div className="flex items-center w-full lg:w-1/2 justify-center">
                    <div className="border-2 border-gray-400 rounded-xl lg:p-20 p-5">
                        <Image
                        src={bala6}
                        width="400"
                        height="450"
                        className={"object-cover"}
                        alt="Garrafa Preciosa Diamond 330ml"
                        loading="eager"
                        placeholder="blur"
                        layout="responsive"
                        sizes="(max-width: 768px) 307px, (max-width: 1024px) 300px, 350px"
                        quality={75}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center w-full lg:w-1/2 lg:p-20">
                    <div className="lg:max-w-2xl mb-8">
                        <h2 className="text-4xl font-bold leading-snug mt-4 lg:mt-0 tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-3xl xl:leading-tight dark:text-white">
                        Esticadinha Juquinha Tutti Frutti 12,3g
                        </h2>
                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl dark:text-gray-300">
                        Deliciosas Esticadinha Juquinha Tutti Frutti! Com 12,3g de pura alegria, este pacote é o companheiro perfeito para qualquer festa ou para adoçar o seu dia a dia.
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
                                            <span class="font-bold text-gray-900">Valor Energético: </span>
                                            <span class="text-gray-600">72 kcal por porção de 20 g</span>
                                            </li>

                                            <li class="p-4 bg-gray-300">
                                            <span class="font-bold text-gray-900">Carboidratos Totais: </span>
                                            <span class="text-gray-600">18 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4">
                                            <span class="font-bold text-gray-900">Açúcares Totais: </span>
                                            <span class="text-gray-600">12 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4 bg-gray-300">
                                            <span class="font-bold text-gray-900">Açúcares Adicionados: </span>
                                            <span class="text-gray-600">12 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4">
                                            <span class="font-bold text-gray-900">Gorduras Totais: </span>
                                            <span class="text-gray-600">0 g por porção de 20 g</span>
                                            </li>

                                            <li class="p-4 bg-gray-300">
                                            <span class="font-bold text-gray-900">Sódio: </span>
                                            <span class="text-gray-600">20 mg por porção de 20 g</span>
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
            </div>
        </Container>
    </>
  );
}


export default ProductsTwo;
