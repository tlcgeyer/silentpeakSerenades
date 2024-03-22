<template>
    <div class="card">
        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
        <div class="card-footer" style="background-color: none;">
            <slot name="cardFooter"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComp'
}
</script>

<style scoped>
.card {
    width: 15rem;
    margin-bottom: 20px;
    margin-left: 16px;
}
</style>