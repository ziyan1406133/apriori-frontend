<template>
    <div class="card border-success">
        <div class="card-body">
            <div class="card-title">
                Daftar Produk
                <span class="description">(Klik gambar untuk memilih produk)</span>
            </div>
            <div class="card-text">
                <VuePerfectScrollbar class="scrollbar-one" :settings="settings" @ps-scroll-y="scrollHandle">
                    <div class="row">
                        <div class="col-md-3 text-center" v-for="product in allProducts" :key="product.id">
                            <a href="#" v-on:click="getItem(product.id)">
                                <img :src="getImgUrl(product.image)" width="100%" alt="Gambar Produk">
                            </a>
                            <p>{{product.nama}}</p>
                            <p>Rp. {{ formatPrice(product.harga) }}</p>
                        </div>            
                    </div>
                </VuePerfectScrollbar>
            </div>
        </div>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar';
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'Products',
        components: {
            VuePerfectScrollbar
        },
        data() {
            return {
                settings: {
                    maxScrollbarLength: 100
                }
            }
        },
        methods: {
            ...mapActions(["fetchProducts", "getItem"]),
            scrollHandle(evt) {
                console.log(evt)
            },
            getImgUrl(pic) {
                return require('../assets/img/' + pic)
            },
            formatPrice(value) {
                let val = (value/1).toFixed(0).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            },
        },
        computed: mapGetters(["allProducts"]),
        created() {
            this.fetchProducts();
        }
    }
</script>