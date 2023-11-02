<template>
  <div class="container">
    <h2 class="display-4 text-primary text-center">Get all Sunscreens</h2>
    <h4 class="text-muted text-center">จำนวนครีมกันแดด {{ sunscreens.length }}</h4>
    <button class="btn btn-success btn-sm" @click="navigateTo('/sunscreen/create')">สร้างครีมกันแดด</button>
<br><br>
    <div class="row">
      <div class="col-md-4" v-for="sunscreen in sunscreens" :key="sunscreen.id">
        <div class="card mb-3 bg-light" @mouseenter="hoveredSunscreen = sunscreen" @mouseleave="hoveredSunscreen = null">
          <img :src="sunscreen.image" alt="Sunscreen Image" class="card-img-top" />
          <div class="card-body">
            <p class="card-text">ID: {{ sunscreen.id }}</p>
            <p class="card-text">Name: {{ sunscreen.name }}</p>
            <p class="card-text">Brand: {{ sunscreen.brand }}</p>
            <p class="card-text">SPF: {{ sunscreen.SPF }}</p>
            <p class="card-text">Price: {{ sunscreen.price }}</p>
            <p class="card-text">Volume: {{ sunscreen.volume }}</p>
            
            <div class="btn-group">
              <button class="btn btn-primary btn-sm" @click="navigateTo('/sunscreen/' + sunscreen.id)">ดูข้อมูลครีมกันแดด</button>
              <button class="btn btn-warning btn-sm" @click="navigateTo('/sunscreen/edit/' + sunscreen.id)">แก้ไขข้อมูล</button>
              <button class="btn btn-danger btn-sm" @click="deleteSunscreen(sunscreen)">ลบข้อมูล</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- ... โค้ด JavaScript และ CSS เหมือนเดิม ... -->


<script>
import SunscreenService from '@/services/SunscreenService';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  data() {
    return {
      sunscreens: [],
      hoveredSunscreen: null,
    };
  },
  async created() {
    this.sunscreens = (await SunscreenService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteSunscreen(sunscreen) {
      try {
        await SunscreenService.delete(sunscreen);
        this.refreshData();
      } catch (err) {
        console.log(err);
      }
    },
    async refreshData() {
      this.sunscreens = (await SunscreenService.index()).data;
    },
  },
};
</script>

<style scoped>
.text-primary {
  color: #007BFF;
}

.text-muted {
  color: #6c757d;
}

.container {
  text-align: center;
}

.card {
  margin-bottom: 15px;
}

.card:hover {
  transform: scale(1.02); /* เมื่อนำเม้าส์ไปวัตถุ, เพิ่มขนาด */
  transition: transform 0.2s ease-in-out; /* ทำให้เกิดการเปลี่ยนแปลงอย่างนุ่ม */
}

.btn-group {
  margin-top: 10px;
}

img {
  cursor: pointer; /* เปลี่ยน cursor เมื่อนำเม้าส์ไปที่รูปภาพ */
}
</style>
