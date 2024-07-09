<script setup>
  import CatalogCompany from '@/components/CatalogCompany.vue';
  import CatalogCompanyLoading from '@/components/CatalogCompanyLoading.vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  import { onMounted, ref } from 'vue';

  const company_id = ref(null);
  const objCatalog = ref({});
  const loading = ref(true);
  const isEmpty = ref(false);

  const getAllCatalogsByCompany = async () => {
    try {
      loading.value = true;
      const URL = import.meta.env.VITE_URL_CATALOG;
      const response = await axios.get(`${URL}/catalogs/${company_id.value}`);
      console.log(response);
      objCatalog.value = response.data;
      if(response.statusText === 'OK') loading.value = false;
      if(response.data.length === 0) isEmpty.value = true;
    } catch (error) {
      console.error(error);
    }
  }

  onMounted(() => {
    const route = useRoute();
    company_id.value = route.params.company_id;
    // console.log("company_id", company_id.value);
    getAllCatalogsByCompany(company_id.value);
  });

</script>
<template>
  <div v-if="objCatalog.length > 0" class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <CatalogCompany  
      v-for="(catalog, index) in objCatalog" 
      :key="index" 
      :catalog="catalog"
    />
  </div>
  <div v-if="loading" class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <CatalogCompanyLoading/>  
    <CatalogCompanyLoading/>  
    <CatalogCompanyLoading/>  
    <CatalogCompanyLoading/>  
  </div>
  <div v-if="isEmpty" class="text-lg font-semibold p-2 dark:text-white">No hay catalogos</div>
</template>