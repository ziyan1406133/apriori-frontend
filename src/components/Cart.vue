<template>
    <div class="card border-success">
        <div class="card-body">
            <div class="card-title">Keranjang Belanja</div>
            <div class="card-text">
            <VuePerfectScrollbar class="scrollbar-two " :settings="settings" @ps-scroll-y="scrollHandle">
                <div v-if="CartProduct.length > 0">
                    <table class="table table-borderless table-sm">
                        <tr>
                            <th>Nama</th>
                            <th>Qty</th>
                            <th>Harga Satuan*</th>
                            <th>Sub Total*</th>
                            <th>Hapus</th>
                        </tr>

                        <tr v-for="product in CartProduct" :key="product.id">
                            <td>{{product.nama}}</td>
                            <td>
                                <input type="number" style="width: 50px" 
                                    v-model="product.qty"
                                    v-on:change="changeQtyMethod(product.qty, product.id)"
                                min="1">
                            </td>
                            <td>{{formatPrice(product.harga)}}</td>
                            <td>{{formatPrice(product.subtotal)}}</td>
                            <td>
                                <a href="#" v-on:click="getItemInCart(product.id)" class="btn btn-sm btn-danger">
                                    <i class="fa fa-trash"></i>
                                </a>
                            </td>
                        </tr>
                        
                        <tr>
                            <th colspan="3">Total*</th>
                            <th>{{formatPrice(TotalPrice)}}</th>
                            <th></th>
                        </tr>
                    </table>
                </div>
                <div v-else>
                    Belum ada item di keranjang.
                </div>
                </VuePerfectScrollbar>
                <div v-if="CartProduct.length > 0">
                    <p class="description">*) (Rp.)</p>
                    <router-link :to="{ path:'/check-out' }" class="bottom btn btn-md btn-block btn-success">
                        <span>Selanjutnya</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar';
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'Cart',
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
            ...mapActions(["getItemInCart"]),
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
            changeQtyMethod(qty, id)
            {
                let carrier = {
                    qty: qty,
                    id: id,
                }
                this.$store.dispatch("changeQtyAction", carrier );
            }
        },
        computed: {
            ...mapGetters(["CartProduct", "TotalPrice"])
        },
    }
</script>