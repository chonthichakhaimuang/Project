<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center">Create Sunscreen</h1><br><br>
        <form @submit.prevent="createSunscreen">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" class="form-control" v-model="sunscreen.name">
          </div><br>
          <div class="form-group">
            <label for="brand">Brand:</label>
            <input type="text" id="brand" class="form-control" v-model="sunscreen.brand">
          </div><br>
          <div class="form-group">
            <label for="SPF">SPF:</label>
            <input type="number" id="SPF" class="form-control" v-model="sunscreen.SPF">
          </div><br>
          <div class="form-group">
            <label for="price">Price:</label>
            <input type="number" id="price" class="form-control" v-model="sunscreen.price">
          </div><br>
          <div class="form-group">
            <label for="volume">Volume:</label>
            <input type="number" id="volume" class="form-control" v-model="sunscreen.volume">
          </div><br>
          <div class="form-group">
            <label for="type">Type:</label>
            <input type="text" id="type" class="form-control" v-model="sunscreen.type">
          </div><br>
          <div class="form-group">
            <label for="image">Image URL:</label>
            <input type="text" id="image" class="form-control" v-model="sunscreen.image">
          </div><br>
          <div class="form-group text-center">
            <button type="submit" class="btn btn-primary">Create Sunscreen</button>
          </div>
        </form>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import SunscreenService from '@/services/SunscreenService'

export default {
  data() {
    return {
      sunscreen: {
        name: '',
        brand: '',
        SPF: 0,
        price: 0,
        volume: 0,
        type: '',
        image: '',
      }
    }
  },
  methods: {
    async createSunscreen() {
      try {
        await SunscreenService.post(this.sunscreen)
        this.$router.push({
          name: 'sunscreens'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped></style>

