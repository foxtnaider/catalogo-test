<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import ProductCatalog from '@/components/ProductCatalog.vue'
</script>

<template>
<div class="w-full dark:bg-gray-900">
    <div class="flex h-screen">
        <!-- Sidebar -->
        <div class="hidden md:flex md:flex-col w-64 bg-white shadow-lg">
            <div class="flex items-center justify-center bg-blue-700 text-white min-h-20">
                Logo
            </div>
            <div class="flex flex-col flex-grow">
                <nav class="flex-1 px-2 py-4 space-y-1 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <!-- <RouterLink to="/" href="#" class="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 dark:hover:bg-gray-400 dark:text-white">
                        <svg class="flex-shrink-0 w-6 h-6 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Compañia 1
                    </RouterLink> -->
                    <button @click.prevent="getProductsCatalogs(1)" href="#" class="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 dark:hover:bg-gray-400 dark:text-white">
                        <svg class="flex-shrink-0 w-6 h-6 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Compañia 1
                    </button>
                    <button @click.prevent="getProductsCatalogs(2)" class="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 dark:hover:bg-gray-400 dark:text-white">
                        <svg class="flex-shrink-0 w-6 h-6 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Compañia 2
                    </button>
                    <a href="#" class="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 dark:hover:bg-gray-400 dark:text-white">
                        <svg class="flex-shrink-0 w-6 h-6 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 6h18M3 14h18M3 18h18"></path>
                        </svg>
                        Pedidos
                    </a>
                    <a href="#" class="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 dark:hover:bg-gray-400 dark:text-white">
                        <svg class="flex-shrink-0 w-6 h-6 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h14M5 5v14M19 19H5"></path>
                        </svg>
                        Calendario
                    </a>
                    <a href="#" class="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 dark:hover:bg-gray-400 dark:text-white">
                        <svg class="flex-shrink-0 w-6 h-6 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h10M7 16h10"></path>
                        </svg>
                        Informacion
                    </a>
                    <a href="#" class="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 dark:hover:bg-gray-400 dark:text-white">
                        <svg class="flex-shrink-0 w-6 h-6 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-4H3v4h6zm0 2H3a2 2 0 01-2-2v-4a2 2 0 012-2h6a2 2 0 012 2v4a2 2 0 01-2 2zm13-6v6M11 7V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2h8zm0 2H3a2 2 0 00-2 2v4h2v-4h8v-2zm2 2h6v8h-6zm6-10h-6v6h6z"></path>
                        </svg>
                        Reportes
                    </a>
                </nav>
                <div class="px-2 py-4 space-y-1 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 ">
                    <div class="text-sm font-semibold text-gray-900 px-2 dark:text-white">Nuestro Equipo</div>
                    <a href="#" class="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 dark:hover:bg-gray-400 dark:text-white">
                        <span class="flex-shrink-0 w-6 h-6 mr-3 text-gray-500 bg-gray-200 rounded-full"></span>
                        Heroicons
                    </a>
                    <a href="#" class="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 dark:hover:bg-gray-400 dark:text-white">
                        <span class="flex-shrink-0 w-6 h-6 mr-3 text-gray-500 bg-gray-200 rounded-full"></span>
                        Tailwind Labs
                    </a>
                    <a href="#" class="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 dark:hover:bg-gray-400 dark:text-white">
                        <span class="flex-shrink-0 w-6 h-6 mr-3 text-gray-500 bg-gray-200 rounded-full"></span>
                        Workcation
                    </a>
                </div>
            </div>
            <div class="flex-shrink-0 p-4 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <a href="#" class="flex items-center ">
                    <span class="text-sm font-medium text-gray-900 dark:text-white">Settings</span>
                </a>
            </div>
        </div>

        <!-- Main content -->
        <div class="flex flex-col flex-1 overflow-hidden">
            <header class="flex items-center justify-between flex-shrink-0 px-4 py-2 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center w-2/3">
                <form class="w-full">
                    <div class="flex">
                        
                        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">Todas las Categorias 
                            <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                <li>
                                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Viveres</button>
                                </li>
                                <li>
                                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Farmacia</button>
                                </li>
                                <li>
                                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cocina</button>
                            </li>
                            
                            </ul>
                        </div>
                        <div class="relative w-full">
                            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Buscar productos" required />
                            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>

                </div>
                <div class="flex items-center">
                    <button class="text-gray-500 focus:outline-none">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.403-1.403A4.971 4.971 0 0020 13V9a6 6 0 00-12 0v4a4.971 4.971 0 001.403 3.597L8 17h5m4-7a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0zm-5 1a1 1 0 11-2 0 1 1 0 012 0zm0-4a1 1 0 11-2 0 1 1 0 012 0zm-5 1a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0z"></path>
                        </svg>
                    </button>
                    <button class="text-gray-500 focus:outline-none">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12 12 0 016.842 4.258 11.954 11.954 0 01-6.842 1.082A12.018 12.018 0 0112 14zm0 0L5.84 10.578a12 12 0 00-6.842 4.258 11.954 11.954 0 006.842 1.082A12.018 12.018 0 0012 14z"></path>
                        </svg>
                    </button>
                    <button class="ml-4 text-gray-500 focus:outline-none">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </button>
                </div>
            </header>

            <!-- Main content area -->
            <main class="flex-1 p-4 overflow-y-auto">
                
                <RouterView />
                
            </main>
        </div>
    </div>
</div>

</template>

