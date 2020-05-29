<template>
    <div class="card border-success">
        <div class="card-body">
            <div class="card-title">Recommendation</div>
            <div class="card-text">
            <p class="description">Berikut adalah produk yang direkomendasikan berdasarkan item yang ada di keranjang belanja :</p>
            <VuePerfectScrollbar class="scrollbar-two " :settings="settings" @ps-scroll-y="scrollHandle">
            <div v-if="allRecommendations.length > 0">
                <div class="row" v-for="recommendation in allRecommendations" :key="recommendation.id">
                    <div class="col-sm-3">
                        <img :src="getImgUrl(recommendation.produk_image)" width="100%" alt="Gambar Produk">
                    </div>
                    <div class="col-sm-6">
                        <p>{{recommendation.produk_name}}</p>
                        <p>Rp. {{ formatPrice(recommendation.produk_harga) }}</p>
                        <p>Confidence : {{recommendation.confidence.toFixed(2)}}%</p>
                    </div>
                    <div class="col-sm-3">
                        <input v-if="recommendation.added_to_cart" type="number" 
                            style="margin-right: 3px;width: 47px" 
                            min="1"
                            v-model="recommendation.qty" disabled>
                        <input v-else type="number" 
                            style="margin-right: 3px;width: 47px" 
                            min="1"
                            v-model="recommendation.qty">
                        <button v-if="recommendation.added_to_cart" 
                            class="btn btn-sm btn-success" 
                            @click="addRecToCart(recommendation.id)">
                            <i class="fa fa-check"></i>
                        </button>
                        <button v-else
                            class="btn btn-sm btn-primary" 
                            @click="addRecToCart(recommendation.id)">
                            <i class="fa fa-plus"></i>
                        </button>
                    </div>
                <hr>
                </div>
            </div>
            <p v-else>
                Jika rekomendasi tidak muncul setelah beberapa detik, 
                tidak ada rekomendasi untuk transaksi kali ini.
            </p>
            </VuePerfectScrollbar>
            <div class="row">
            <div class="col-md-6">
                <span @click="resetCart()">
                    <router-link :to="{ path:'/' }" class="bottom btn btn-md btn-block btn-secondary">
                        Kembali
                    </router-link>
                </span>
            </div>
            <div class="col-md-6">
                <span @click="resetCart()">
                    <router-link :to="{path:'/done'}" class="bottom btn btn-md btn-block btn-success" 
                        data-toggle="modal" data-target="#exampleModal">
                        Bayar
                    </router-link>
                </span>
            </div>
            </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar';
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'Recommendation',
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
        computed: mapGetters(["allRecommendations"]),
        methods: {
            ...mapActions(["resetCart", "addRecToCart"]),
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
        // created() {
        //     this.fetchRecommendations();
        // }
    }
</script>