<template>
  <div class="text-center">
    <h1 class="display-4 text-warning">Show Sunscreen</h1>
    <div class="card shadow">
      <img :src="sunscreen.image" alt="Sunscreen Image" class="card-img-top" />
      <div class="card-body">
        <p class="card-text text-muted">ID: {{ sunscreen.id }}</p>
        <p class="card-text">Name: {{ sunscreen.name }}</p>
        <p class="card-text">Brand: {{ sunscreen.brand }}</p>
        <p class="card-text">SPF: {{ sunscreen.SPF }}</p>
        <p class="card-text">Price: {{ sunscreen.price }}</p>
        <p class="card-text">Volume: {{ sunscreen.volume }}</p>
        <p class="card-text">Type: {{ sunscreen.type }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import SunscreenService from '@/services/SunscreenService'

export default {
  data() {
    return {
      sunscreen: {}
    }
  },
  async created() {
    try {
      let sunscreenId = this.$route.params.sunscreenId
      this.sunscreen = (await SunscreenService.show(sunscreenId)).data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped>
.text-center {
  text-align: center;
}

.text-primary {
  color: rgb(14, 182, 248); /* สีที่คุณเลือก */
}

.card {
  max-width: 400px;
  margin: 0 auto;
}

.card.shadow {
  box-shadow: 0 4px 6px rgba(167, 127, 127, 0.1); /* เพิ่มเงาให้กับการ์ด */
}

.card-img-top {
  max-width: 100%;
  height: auto;
}

.card-body {
  padding: 15px;
}

.card-text {
  margin: 5px 0;
}
</style>
