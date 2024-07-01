<script setup>
  import { onMounted, ref } from 'vue';
  import ProductDetailContent from '../components/ProductDetailContent.vue'
  import { useRoute } from 'vue-router';
  import axios from 'axios';

  const product_id = ref(null)
  const product_name = ref(null)
  const objProducts = ref(null)
  const productsCatalogs = ref(null)

  onMounted(() => {
    const route = useRoute();
    console.log('route');
    console.log(route);
    product_id.value = route.params.product_id ;
    product_name.value = route.params.product_name ;
    console.log("product_id ", product_id.value);
    getProductsDetail(product_id.value);

    
  });

  const getProductsDetail = async (product_id) => {
    try {
      const URL = import.meta.env.VITE_URL_CATALOG;
      const response = await axios.get(`${URL}/catalogs/details/products/${product_id}`);
      objProducts.value = response.data[0];
      console.log(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  };
</script>

<template>
    <ProductDetailContent 
      :product="objProducts"
    />
</template>
