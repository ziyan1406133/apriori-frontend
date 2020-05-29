<template>
  <div class="container text-center">
    <h3>Transaksi Selesai</h3>
    <router-link :to="{path:'/'}" class="bottom btn btn-lg btn-success" style="width: 40%" 
        data-toggle="modal" data-target="#exampleModal">
        Kembali Bertransaksi
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Done',
}
</script>
