<template>
  <HeaderSection></HeaderSection>
  <router-view></router-view>
  <FooterSection></FooterSection>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue';
import FooterSection from '@/components/FooterSection.vue';


export default {
  components: {
    HeaderSection,
    FooterSection,
  }
}
</script>

<style>

</style>
