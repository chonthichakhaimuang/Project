import Api from '@/services/Api'

export default {
  // ดึงข้อมูลครีมกันแดดทั้งหมด
  index() {
    return Api().get('sunscreens')
  },
  // ดึงข้อมูลครีมกันแดดโดย ID
  show(sunscreenId) {
    return Api().get('sunscreen/' + sunscreenId)
  },
  // สร้างข้อมูลครีมกันแดด
  post(sunscreen) {
    return Api().post('sunscreen', sunscreen)
  },
  // แก้ไขข้อมูลครีมกันแดด
  put(sunscreen) {
    return Api().put('sunscreen/' + sunscreen.id, sunscreen)
  },
  // ลบข้อมูลครีมกันแดด
  delete(sunscreen) {
    return Api().delete('sunscreen/' + sunscreen.id, sunscreen)
  },
}
