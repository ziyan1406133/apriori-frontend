<template>
    <div class="row" style="margin-left: 50px; margin-right: 50px">
      <div class="col-md-7">
        <AssociationRule />
      </div>
      <div class="col-md-5">
        <Recommendation />
      </div>
    </div>
</template>

<script>
import AssociationRule from '@/components/AssociationRule.vue'
import Recommendation from '@/components/Recommendation.vue'
import {mapActions} from 'vuex';
// @ is an alias to /src

export default {
  name: 'Checkout',
  components: {
    AssociationRule,
    Recommendation
  },
  methods: {
    ...mapActions(["fetchRulesAndRecommendation"]),
  },
  created() {
      this.fetchRulesAndRecommendation();
  }
}
</script>
