<script setup>
  import CatalogCompany from '@/components/CatalogCompany.vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  import { onMounted, ref } from 'vue';

  const company_id = ref(null);
  const objCatalog = ref({});

  const getAllCatalogsByCompany = async () => {
    try {
      const URL = import.meta.env.VITE_URL_CATALOG;
      const response = await axios.get(`${URL}/catalogs/${company_id.value}`);
      console.log(response.data);
      objCatalog.value = response.data;
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
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <CatalogCompany  
      v-for="(catalog, index) in objCatalog" 
      :key="index" 
      :catalog="catalog"
    />
  </div>
</template>