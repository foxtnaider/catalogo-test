<script setup>
    import axios from "axios";
    import { ref } from "vue";
    import { useRouter } from 'vue-router';
    const router = useRouter();

    const props = defineProps(['catalog']);
    const productsCatalogs = ref([]);
    const URL = import.meta.env.VITE_URL_CATALOG;

    const getProductsCatalogs = async (catalog_id , catalog_name) => {
        console.log(catalog_id);
        router.push({ name: 'ProductsByCatalogsView', params: { catalog_id, catalog_name } });
    };
</script>

<template>
    <div @click="getProductsCatalogs(props.catalog.keycodigo, props.catalog.nombre)" class=" bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 flex items-center pr-4 w-md h-24 cursor-pointer">
        <div class="">
            <img :src="props.catalog.url_images" alt="Precooked Foil" class="rounded-l-lg h-24 w-28 ">
        </div>
        <div class="ml-4 flex-1 overflow-hidden">
            <h2 class="text-base font-semibold whitespace-normal break-words  text-gray-900 dark:text-white">{{ props.catalog.nombre }}</h2>
        </div>
    </div>
</template>