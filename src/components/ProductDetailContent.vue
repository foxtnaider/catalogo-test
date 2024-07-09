<script setup>
    import { ref } from "vue";
    // const products = ref([]);
    const props = defineProps(['product']);
    const formatPrice = (price, currency) => {
        // Convertir el valor a un número
        const priceNumber = parseFloat(price);
        
        // Determinar el locale basado en la moneda
        const locale = currency === 'USD' ? 'en-US' : 'es-VE';
        
        // Formatear el número como moneda
        const formatter = new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2,
            // Opciones específicas para la moneda VES
            ...(currency === 'VES' && { 
            currencyDisplay: 'narrowSymbol',
            maximumFractionDigits: 2 
            }),
        });
        
        return formatter.format(priceNumber);
    };
</script>
<template>
    <!-- <pre>{{ product }}</pre> -->
    <div class="bg-gray-100 text-gray-900 min-h-screen flex flex-col items-center dark:bg-gray-900 dark:text-white">
        <div class=" w-full bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
            <div class="w-full md:w-1/3 p-4">
                <img :src="product?.url_images" alt="Pasta Image" class="w-full h-auto rounded-lg">
            </div>
            <div class="w-full md:w-2/3 p-4">
                <h1 class="text-2xl font-bold mb-2 dark:text-white">{{ product?.nombre }}</h1>
                <p class="text-sm mb-4 dark:text-white">Ref {{ formatPrice(product?.precio, 'USD') }}</p>
                <hr>
                <ul class="list-disc pl-4 mb-4 text-sm dark:text-white">
                    <li>Peso: Cada bulto contiene 10 paquetes de 500g cada uno, sumando un total de 5kg.</li>
                    <li>Dimensiones: El bulto tiene dimensiones estándar de 50cm x 30cm x 20cm, facilitando su almacenamiento y transporte.</li>
                    <li>Usos: Ideal para una amplia gama de platos, desde ensaladas de pasta hasta platos principales con salsas robustas.</li>
                    <li>Ingredientes: Sémola de trigo duro de alta calidad, agua. Puede contener trazas de huevo.</li>
                    <li>Preparación: Tiempo de cocción de 8-10 minutos para una textura ‘al dente’.</li>
                    <li>Almacenamiento: Conservar en un lugar fresco y seco. Una vez abierto, mantener en un recipiente hermético.</li>
                    <li>Durabilidad: Fecha de caducidad aproximada de 24 meses desde la fecha de fabricación.</li>
                </ul>
                <p class="mb-4 text-sm dark:text-white">
                    Estas características aseguran que Trenzados del Orinoco sea un producto práctico y de calidad para los consumidores, manteniendo la tradición y el sabor de Venezuela en cada bulto.
                </p>
                <hr>
                <h2 class="font-semibold mb-2 text-sm dark:text-white">Descripción</h2>
                <p class="text-sm dark:text-white">
                    Descubre el sabor de Venezuela con Trenzados del Orinoco, la pasta que entrelaza tradición y gusto en cada plato.
                </p>
                <ul class="list-disc pl-4 mt-2 text-sm dark:text-white">
                    <li>Sabor: Elaborada con la mejor sémola de trigo duro, Trenzados del Orinoco ofrece una textura firme y un sabor auténtico que absorbe perfectamente cualquier salsa.</li>
                    <li>Versatilidad: Su forma única de trenzas no solo es un homenaje a los ríos venezolanos, sino que también es ideal para retener salsas y condimentos, brindando una experiencia culinaria inolvidable.</li>
                    <li>Calidad: Producida en Venezuela, esta pasta sigue un proceso artesanal que garantiza un producto de la más alta calidad.</li>
                    <li>Cocina: Perfecta para una variedad de platos, desde un simple aglio e olio hasta una rica salsa boloñesa, Trenzados del Orinoco es la elección ideal para los amantes de la pasta.</li>
                    <li>Presentación: El empaque refleja la belleza natural de Venezuela, con colores vibrantes y diseños que evocan la rica cultura del país.</li>
                </ul>
                <p class="mt-2 text-sm dark:text-white">
                    Con Trenzados del Orinoco, lleva a tu mesa un pedazo de Venezuela y disfruta de una pasta que deleitará a todos con su sabor y calidad excepcionales.
                </p>
            </div>
        </div>
        <!-- <button @click="toggleDarkMode" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Toggle Dark Mode</button> -->
    </div>
</template>
