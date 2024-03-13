<template>
    <div class="container">
        <ul class="breadcrumbs">
            <li class="breadcrumb">
                <router-link to="/" style="text-decoration: none; color: grey; font-size: small;" class="breadcrumb-label"><span>Home</span></router-link>
            </li>
            <li class="breadcrumb item-active">
                <span class="breadcrumb-label" style="color: grey; font-size:small;">Your Cart</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.breadcrumb:not(:first-child):before {
    display: inline-block;
    margin: 0.25rem;
    transform: rotate(15deg);
    border-right: 0.1em solid #a3a3a3;
    height: 0.7em;
    content: '';
}
</style>