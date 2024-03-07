<template>
    <nav class="navbar navbar-expand-lg navbar-light" id="navbarr">
       <div class="container-fluid">
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
       </button>

       <div class="collapse navbar-collapse justify-content-center inline-block d-flex w-100">
           <ul class="navbar-nav">
           <li class="nav-item">
                   <router-link to ="/" class="nav-link">Home</router-link> 
           </li>  
           <li class="nav-item">
                <router-link to ="/about" class="nav-link">About</router-link>
           </li>
                  
           <li class="nav-item">
               <router-link to ="/instruments" class="nav-link">Instruments</router-link>
           </li>    
           <!-- <div>
            the pic of the logo for the website
           <li class="nav-item ml-auto">
            <router-link to="/">
           <img src="https://i.ibb.co/hYrJKmp/Background-Eraser-20240220-094141227.png
            " alt="logo">
           </router-link>
        </li>
           </div> -->
                   
           <!-- <li class="nav-item">
               <router-link to ="/product/:id" class="nav-link">Single prod</router-link>
           </li>     -->
                   
           <li class="nav-item">
                <router-link to ="/admin" class="nav-link">Admin</router-link>
           </li>   
                  
           <li class="nav-item">
                <router-link to ="/contact" class="nav-link">Contact us</router-link>
           </li>
           <li class="nav-item">
                <router-link to ="/blog" class="nav-link">Blog</router-link>
           </li>
           <li class="nav-item">
                <router-link to ="/register" class="nav-link"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 20.247V16C18.5 16 16 14.5 12 14.5C8 14.5 5.5 16 5.5 16V20.247M1.5 12C1.5 6.201 6.201 1.5 12 1.5C17.799 1.5 22.5 6.201 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.201 22.5 1.5 17.799 1.5 12ZM11.926 12.5C11.926 12.5 8.5 10.68 8.5 8C8.5 6.067 10.069 4.5 12.004 4.5C12.4635 4.49987 12.9185 4.59034 13.3429 4.76623C13.7674 4.94212 14.153 5.19999 14.4778 5.52507C14.8025 5.85016 15.0599 6.23608 15.2353 6.66075C15.4107 7.08543 15.5007 7.54053 15.5 8C15.5 10.68 12.074 12.5 12.074 12.5H11.926Z" stroke="black"/>
                </svg>
                </router-link>
           </li>
           <li class="nav-item">
                <router-link to ="/login" class="nav-link"></router-link>
           </li>
           </ul>
         </div>
       </div>
   </nav>
</template>

<script>
   export default {
       name: 'NavBar'
   }
</script>

<style scoped>
img[alt="logo"] {
   width: 130px;
}

.nav-item {
    font-size: 20px;
}
.navbar-nav li  {
       margin-inline: .2rem;
   }

#searchNav {
    margin-top: 8%;
    border-radius: 10px;
    border-color: #EE6F12;
    background-color: white;
    color: gray;
    width: 20%;
}
</style>