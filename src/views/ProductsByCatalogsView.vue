<script setup>
  import ProductCatalog from '@/components/ProductCatalog.vue';
  import ProductCatalogLoading from '@/components/ProductCatalogLoading.vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  import { onMounted, ref } from 'vue';

  const catalog_id = ref(null)
  const catalog_name = ref(null)
  const objProducts = ref({});
  const loading = ref(true);
  const isEmpty = ref(false);

  onMounted(() => {
    const route = useRoute();
    catalog_id.value = route.params.catalog_id ;
    catalog_name.value = route.params.catalog_name ;
    console.log("catalog_id ", catalog_id.value);
    getAllProductsByCatalog(catalog_id.value);
  });

  const getAllProductsByCatalog = async (catalog_id) => {
    try {
      const URL = import.meta.env.VITE_URL_CATALOG;
      const response = await axios.get(`${URL}/catalogs/products/${catalog_id}`);
      objProducts.value = response.data;
      console.log(response.data);
      if(response.statusText === 'OK') loading.value = false;
      if(response.data.length === 0) isEmpty.value = true;
      // productsCatalogs.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };

</script>
<template>
  <div class="text-lg font-semibold p-2 dark:text-white">
    Catalogo: <span class="text-base font-light">{{ catalog_name }}</span>
  </div>
  <div v-if="objProducts.length > 0" class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
    <ProductCatalog   
      :products="objProducts"
    />
  </div>
  <div v-if="loading" class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
    <ProductCatalogLoading/>
    <ProductCatalogLoading/>
    <ProductCatalogLoading/>
    <ProductCatalogLoading/>
    <ProductCatalogLoading/>
  </div>
  <div v-if="isEmpty" class="text-lg font-semibold p-2 dark:text-white">No hay productos</div>

</template>