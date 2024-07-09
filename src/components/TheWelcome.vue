<script setup>
  import axios from 'axios';
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  onMounted(() => {
    getAllCompanies();
  })
  const goCatalogCompany = (id) => {
    router.push({ name: 'CatalogView', params: { company_id: id } });
  }
  const objCompanies = ref({});

  const getAllCompanies = async () => {
    try {
      const URL = import.meta.env.VITE_URL_CATALOG;
      const response = await axios.get(`${URL}/catalogs/companies`);
      console.log(response.data);
      objCompanies.value = response.data;
    } catch (error) {
      console.error(error);
    }
  }
</script>

<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
    <div v-for="(company, index) in objCompanies" :key="index">      
      <button @click.prevent="goCatalogCompany(company.id)" href="#" class="flex flex-row items-center w-full max-w-xl h-40 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-hidden">
        <img class="object-cover w-40 h-40 rounded-s-lg" :src="company.imageUrl || 'https://dummyjson.com/image/150'" :alt="company.nombre">
        <div class="flex flex-col justify-between p-4 h-full w-full">
          <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white text-left line-clamp-2">{{ company.nombre }}</h5>
          <p class="text-sm text-gray-700 dark:text-gray-400 font-semibold text-left line-clamp-3">{{ company.direccion }}</p>
        </div>
      </button>

    </div>
  </div>
  <!-- <pre>
    {{ objCompanies }}
  </pre> -->

</template>
