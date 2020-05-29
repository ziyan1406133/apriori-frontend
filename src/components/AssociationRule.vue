<template>
    <div class="card border-success">
        <div class="card-body">
            <div class="card-title">
                Association Rule
                <span class="description">
                (<a href="http://otojuara-prototype.com/aptest/public/step-by-step" 
                    target="_blank">step by step
                </a>)
                </span>
            </div>
            <div class="card-text">
                <VuePerfectScrollbar class="scrollbar-one" :settings="settings" @ps-scroll-y="scrollHandle">
                    <table class="table table-bordered table-sm">
                        <tr>
                            <th>Rule</th>
                            <th>Support A⋃B</th>
                            <th>Support A</th>
                            <th>Confidence</th>
                        </tr>
                        <tr v-for="item in allRules" :key="item.key">
                            <td>
                                {{item.A}} => {{item.B}}
                            </td>
                            <td>
                                {{item.support_aub.toFixed(2)}}%
                            </td>
                            <td>
                                {{item.support_a.toFixed(2)}}%
                            </td>
                            <td>
                                {{item.confidence.toFixed(2)}}%
                            </td>
                        </tr>
                    </table>
                </VuePerfectScrollbar>
            </div>
        </div>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar';
    import {mapGetters} from 'vuex';

    export default {
        name: 'AssociationRule',
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
            // ...mapActions(["fetchRules"]),
            scrollHandle(evt) {
                console.log(evt)
            },
        },
        computed: mapGetters(["allRules"]),
        // created() {
        //     this.fetchRules();
        // }
    }
</script>