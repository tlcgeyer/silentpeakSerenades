<template>
    <div class="container">
        <ul class="breadcrumbs">
            <li class="breadcrumb">
                <router-link to="/" style="text-decoration: none; color: grey; font-size: small;" class="breadcrumb-label"><span>Home</span></router-link>
            </li>
            <li class="breadcrumb item-active">
                <span class="breadcrumb-label" style="color: grey; font-size:small;">Contact</span>
            </li>
        </ul>
        <div class="row d-flex justify-content-center">
            <h4 class="display-6 d-flex justify-content-center">Our Contact</h4>
            <br><br> <br><br>
            <div class="col-md-6" id="contactForm">
                <form class="submit-form" action="https://formspree.io/f/mbjnkpna" method="POST" name="contact-form">
                <div class="mb-3"> <br>
                    <label class="form-label d-flex justify-content-left mx-3" for="fullName" id="darker-1">Full Name</label>
                    <input type="text" id="name" v-model="name" class="form-control " required="fullName" name="name">
                </div>
                <div class="mb-3">
                    <label class="form-label d-flex justify-content-left mx-3" id="darker-1">Email</label>
                    <input type="email" id="email" v-model="email" class="form-control" required="email" name="email">
                </div>
                <div class="mb-3">
                    <label class="form-label d-flex justify-content-left mx-3" id="darker-1">Message</label>
                    <textarea id="message" v-model="message" class="form-control" rows="4" required="message" name="message"></textarea>
                </div>
                <br> 
                <button type="submit" class="d-flex justify-content-left" id="subButton">Submit</button>
                </form> <br>
                
            </div>
    </div><br><br><br>
</div>
</template> 

<script>
    export default {
        
    }
</script>

<style scoped>
#contactForm{
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

#subButton {
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
    transition: background-color 0.3s;
    font-weight: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    border-color:  #9F7E69;
}

#subButton:hover {
    background-color: #9F7E69;
    color: white;
    font-style: italic;
}


.breadcrumb:not(:first-child):before {
    display: inline-block;
    margin: 0.25rem;
    transform: rotate(15deg);
    border-right: 0.1em solid #a3a3a3;
    height: 0.7em;
    content: '';
}
</style>