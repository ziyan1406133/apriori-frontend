import axios from 'axios';

const state = {
    products: [],
    cart: [],
    total: [],
    rules: [],
    recommendations: [],
};

const getters = {
    allProducts: state => state.products,
    CartProduct: state => state.cart,
    TotalPrice: state => state.total,
    allRules: state => state.rules,
    allRecommendations: state => state.recommendations,
};

const actions = {
    async fetchProducts({commit}) {
        const response = await axios.get('http://otojuara-prototype.com/aptest/public/api/produk'); 
        // console.log(response.data.data);
        commit('setProducts', response.data.data);
    },
    async getItem({commit}, id) {
        const response = await axios.get(`http://otojuara-prototype.com/aptest/public/api/produk/${id}`); 
        // console.log(id);
        // console.log(response.data.data);
        commit("addToCart", response.data.data);
    },
    async getItemInCart({commit}, id) {
        const response = await axios.get(`http://otojuara-prototype.com/aptest/public/api/produk/${id}`); 
        // console.log(id);
        // console.log(response.data.data);
        commit("removeFromCart", response.data.data);
    },
    async changeQtyAction({commit}, carrier) { 
        // console.log(carrier);
        commit("updateSubTotal", carrier);
    },
    async fetchRulesAndRecommendation({commit, state}) {
        const cart = state.cart;
        const response = await axios.post(
                            'http://otojuara-prototype.com/aptest/public/api/rules_and_recommendations',
                            JSON.stringify(cart)); 
        // console.log(JSON.stringify(cart));
        commit('setRulesAndRecommendation', response.data);
    },
    async addRecToCart({commit}, id) {

        commit("changeRecAttribute", id);
    },
    // async fetchRules({commit, state}) {
    //     const cart = state.cart;
    //     const response = await axios.post(
    //                         'http://otojuara-prototype.com/aptest/public/api/rules_and_recommendations',
    //                         JSON.stringify(cart));
                            
    //     commit('setRules', response.data.rules);
    // },
    // async fetchRecommendations({commit, state}) {
    //     const cart = state.cart;
    //     const response = await axios.post(
    //                         'http://otojuara-prototype.com/aptest/public/api/rules_and_recommendations',
    //                         JSON.stringify(cart));
        
    //     commit('setRecommendations', response.data.recommendations);
    // },
    async resetCart({commit})
    {
        // console.log('reset');
        commit('resetCartMutation');
    }
};

const mutations = {
    setProducts(state, products) {
        state.products = products
        // console.log(state.products);
    },
    addToCart(state,product) {
        product.qty = "1"; 
        product.subtotal = product.harga; 
        // console.log(product);
        
        if(state.cart.length > 0) {
            state.total = parseFloat(state.total) + parseFloat(product.harga);
        } else {
            state.total = product.harga;
        }
        // console.log(state.cart);
        state.cart.unshift(product);
        state.products = state.products.filter(item => item.id !== product.id);
    },
    removeFromCart(state,product) {
        
        var cartProduct = state.cart.filter(item => item.id == product.id);
        state.total = state.total - cartProduct[0].subtotal;

        state.products.unshift(product);
        state.cart = state.cart.filter(item => item.id !== product.id);
    },
    updateSubTotal(state,carrier) {
        var product = state.cart.filter(item => item.id == carrier.id);
        // console.log(product);
        state.total = parseFloat(state.total) - parseFloat(product[0].subtotal);
        // console.log(state.total);
        product[0].subtotal = carrier.qty * product[0].harga;
        // console.log(product[0].subtotal);
        state.total = parseFloat(state.total) + parseFloat(product[0].subtotal);
        // console.log(state.total);
    },
    setRulesAndRecommendation(state, data) {
        // console.log(data.rules);
        (state.rules = data.rules);
        // console.log(data.recommendations);
        (state.recommendations = data.recommendations);
        // console.log(state.recommendations);
    },
    // setRules(state, rules) {
    //     (state.rules = rules);
    // },
    // setRecommendations(state, recommendations) {
    //     (state.recommendations = recommendations);
    //         console.log(state.recommendations);
    // },
    resetCartMutation(state) {
        state.cart = null;
        state.cart = [];
        state.recommendations = null;
        state.recommendations = [];
    },
    changeRecAttribute(state, id) {
        var recommendation = state.recommendations.filter(item => item.id == id);
        recommendation[0].added_to_cart = !recommendation[0].added_to_cart;
        // console.log(recommendation);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};