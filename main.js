const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Handsfree',
            selectedVariant: 0,
            brand: 'Crown',
            details: [
                'Noise Control',
                'Wireless',
                'Smart button Control',
                'Waterproof'

            ],
            variants: [
                { id: 1, color: "pink", image:'assets/images/pink.jpg', quantity: 100 },
                { id: 2, color: "white", image:'assets/images/white.jpg' , quantity: 0},
                { id: 3, color: "black", image:'assets/images/black.jpg' , quantity: 20}
            ]
        }


    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        updateVariant(index){
            this.selectedVariant = index
        }
     },
   
   
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        }
    }

   

})
const mountApp = app.mount('#app')