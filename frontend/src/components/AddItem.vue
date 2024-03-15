<template>
    <div class="modal fade" id="addItemModal" tabindex="-1" aria-labelledby="addItem" aria-hidden="true"
        data-bs-target="#addItemModelTarget">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fs-5" id="addUser">Adding a new item</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <input type="text" class="form-control w-50 mx-auto" placeholder="prod ID"
                            v-model="payload.prodID">
                    </div>

                    <div class="mb-3">
                        <input type="text" class="form-control w-50 mx-auto" placeholder="product name"
                            v-model="payload.prodName">
                    </div>

                    <div class="mb-3">
                        <input type="text" class="form-control w-50 mx-auto" placeholder="product url"
                            v-model="payload.prodUrl">
                    </div>

                    <div class="mb-3">
                        <input type="text" class="form-control w-50 mx-auto" placeholder="product description"
                            v-model="payload.prodDesc">
                    </div>

                    <div class="mb-3">
                        <input type="text" class="form-control w-50 mx-auto" placeholder="product amount"
                            v-model="payload.prodAmount">
                    </div>

                    <div class="mb-3">
                        <input type="text" class="form-control w-50 mx-auto" placeholder="Category"
                            v-model="payload.category">
                    </div>

                    <div class="mb-3">
                        <input type="number" class="form-control w-50 mx-auto" placeholder="quantity"
                            v-model="payload.quantity">
                    </div>


                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" @click.prevent="addingProduct" class="btn btn-success"
                            data-bs-dismiss="modal">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["addItemModal"],
    data() {
        return {
            payload: {
                prodID: null,
                prodName: '',
                prodUrl: '',
                prodDesc: '',
                prodAmount: '',
                category: '',
                quantity: '',
            }
        }
    },
    methods: {
        addingProduct() {
            this.$store.dispatch("addProduct", this.payload)
        }
    }
}
</script>

<style scoped></style>