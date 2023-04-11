<template>
    <div>
        <section id="dept-hero" class="lg:min-h-[34rem] bg-egg min-h-min pb-24">
            <div class="relative container mx-auto p-5">
                <div class="hero-content flex flex-col max-w-3xl text-center lg:text-left">
                    <h1 class="lg:text-7xl mb-5 font-bold text-5xl">Unlock Your Brand's <span class="grad-text">Full Potential</span></h1>
                    <h3 class="lg:text-4xl mb-12 text-xl">From Branding to Web Design and SEO Content, I've Got You Covered</h3>
                    <NuxtLink><span class="dept-btn w-fit">Get Started</span></NuxtLink>
                </div>
                <img src="../assets/img/gabe-lp-mocks.png" alt="mockups" class="absolute -top-10 -right-40 max-w-2xl hidden lg:block">
            </div>
        </section>
        <section id="about" class="pb-24">
            <div class="max-w-2xl mx-auto container">
                <h1 class="lg:text-4xl text-center font-bold mb-4 text-3xl">Why Choose Me?</h1>
                <p class="text-center mb-4">As a solo freelancer, I offer personalized service and attention to detail that you won't find at a larger agency. I'm dedicated to delivering high-quality work that exceeds your expectations and helps you achieve your goals.</p>
                <p class="text-center mb-10">I work with you on your favorite CMS platform to help ease you into updating content, media etc. effortlessly.</p>
                <div class="grid lg:grid-cols-5 grid-cols-1 gap-8 justify-self-center items-center mb-24 text-center">
                        <img src="../assets/img/framer-logo.png" alt="Framer" class="max-w-[12rem] mx-auto">
                        <img src="../assets/img/webflow-logo.png" alt="Webflow" class="max-w-[12rem] mx-auto">
                        <img src="../assets/img/shopify_secondary.png" alt="Shopify" class="max-w-[12rem] mx-auto">
                        <img src="../assets/img/sp-logo.png" alt="Squarespace" class="max-w-[12rem] mx-auto">
                        <img src="../assets/img/wp-logo.png" alt="Wordpress" class="max-w-[12rem] mx-auto">
                </div>
                <h3 class="text-center lg:text-2xl text-xl">Ready to take your online presence to the next level?</h3>
                <h3 class="text-center lg:text-2xl text-xl mb-12">Contact me today to discuss your project and how I can help.</h3>
                <div class="text-center">
                    <NuxtLink><span class="dept-btn w-fit text-center">Get Started</span></NuxtLink>
                </div>
            </div>
        </section>
        <section id="services" class="pt-24 pb-24 bg-white">
            <div class="max-w-5xl mx-auto container mx-auto">
                <h4 class="text-sm uppercase font-bold dept-small mb-2">Services</h4>
                <h1 class="text-4xl font-bold mb-16">My Comprehensive Services Include:</h1>
                <div class="grid lg:grid-cols-3 grid-cols-1 gap-12">
                    <div class="flex flex-col justify-start">
                        <div class="relative w-16 h-16 bg-lavender rounded-full flex justify-center items-center text-center mb-6">
                            <i class="fa-solid fa-wand-sparkles fa-xl"></i>
                        </div>
                        <h3 class="lg:text-2xl text-xl font-bold mb-8">Branding</h3>
                        <p>Your brand is more than just a logo. It's the visual representation of your company's values, mission, and personality. I'll work with you to develop a strong brand identity that will resonate with your target audience.</p>
                    </div>
                    <div class="flex flex-col justify-start">
                        <div class="relative w-16 h-16 bg-lavender rounded-full flex justify-center items-center text-center mb-6">
                            <i class="fa-solid fa-laptop-code fa-xl"></i>
                        </div>
                        <h3 class="lg:text-2xl text-xl font-bold mb-8">Website Design &amp; Development</h3>
                        <p> I'll work with you to create a website that not only looks great but is easy to use and navigate. Your website will be responsive, meaning it will look and function seamlessly on all devices, from desktop computers to smartphones.</p>
                    </div>
                    <div class="flex flex-col justify-start">
                        <div class="relative w-16 h-16 bg-lavender rounded-full flex justify-center items-center text-center mb-6">
                            <i class="fa-solid fa-magnifying-glass-chart fa-xl"></i>
                        </div>
                        <h3 class="lg:text-2xl text-xl font-bold mb-8">SEO</h3>
                        <p>Search engine optimization (SEO) is essential to help your website rank higher in search engine results. I'll ensure your website is optimized with relevant keywords, meta tags, and other SEO best practices, so you can attract more traffic and leads.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="portfolio" class="bg-lavender pt-14 pb-24">
            <div class="container grid grid-cols-2 gap-8 mx-auto">
                <div class="img-wrapper relative p-6 flex justify-center">
                    <img src="../assets/img/love-bonnet.JPG" alt="Blue Bonnets" class="object-fit max-w-sm brown-shadow border-4 border-black">
                </div>
                <div class="about-content flex justify-center justify-items-center flex-col">
                    <h4 class="text-sm uppercase font-bold dept-small mb-2">Creative Agency</h4>
                    <h1 class="lg:text-4xl text-xl font-bold mb-6">Build Your Business With Me</h1>
                    <p class="mb-8">At my creative agency, I’m super passionate about helping small businesses succeed. Contact me today to learn more about my services and how I can help your business grow!</p>
                    <a href="#portfolio" class="dept-btn w-fit">View Work</a>
                </div>
            </div>
        </section>

        <section id="testimonials" class="pt-12 pb-36 relative min-h-[42rem]">
            <div class="container mx-auto">
                <h1 class="text-4xl font-bold mb-16 text-center">What My Clients Say</h1>
            </div>
            <!-- Dr Bhatt-->
            <div class="p-4 bg-white shadow-sm rounded-sm max-w-3xl absolute top-32 right-44 z-10">
                <div class="flex justify-between items-center pb-4">
                    <p class="text-md pr-12">
                        “Gabe takes care of your website so you can focus on what you do best. He’s trusted, reliable, and a joy to work with!” <span class="font-bold">- Dr. Mike Bhatt</span>
                    </p>
                    <img src="https://uploads-ssl.webflow.com/5d50a508a4a370d65f8a84f7/5ef242ad253385302aaf66eb_bhatt.jpg" alt="Dr Bhatt" class="rounded-full border-2 border-black max-w-[3rem]">
                </div>
                <div class="flex justify-between items-end">
                    <img src="../assets/img/5-star.svg" alt="5 Star" class="max-w-[6rem]">
                    <div class="flex items-center text-center bg-lavender py-2 px-4 rounded-full">
                        <p class="font-bold text-xs">Prosper With Posture</p>
                    </div>
                </div>
            </div>
            <!-- Mike Black -->
            <div class="p-4 bg-white shadow-lg rounded-sm max-w-3xl absolute bottom-10 right-32 z-40">
                <div class="flex justify-between items-start pb-4">
                    <p class="text-md pr-12">
                        "Gabe has been amazing to work with. Whether he's fixing issues on one of my existing websites or creating new websites from scratch for my business, the end product has always turned out great." <span class="font-bold">- Mike Black</span>
                    </p>
                    <img src="../assets/img/mike-black.png" alt="Mike Black" class="rounded-full border-2 border-black max-w-[3rem]">
                </div>
                <div class="flex justify-between items-end">
                    <img src="../assets/img/5-star.svg" alt="5 Star" class="max-w-[6rem]">
                    <div class="flex items-center text-center bg-forest py-2 px-4 rounded-full text-white">
                        <p class="font-bold text-xs">Black's Family Hospitality</p>
                    </div>
                </div>
            </div>
            <!-- Fate Fowler -->
            <div class="p-4 shadow-md rounded-sm max-w-3xl absolute bottom-56 left-36">
                <div class="flex justify-between items-center pb-4">
                    <p class="text-md pr-12">
                        “Working with Gabe was super easy and stress-free. He is creative and professional. I would totally use his services again and recommend him to friends and associates.” <span class="font-bold">- Fate Fowler</span>
                    </p>
                    <img src="../assets/img/fate-fowler.jpeg" alt="Fate Fowler" class="rounded-full border-2 border-black max-w-[3rem]">
                </div>
                <div class="flex justify-between items-end">
                    <img src="../assets/img/5-star.svg" alt="5 Star" class="max-w-[6rem]">
                    <div class="flex items-center text-center bg-claypot py-2 px-4 rounded-full text-white">
                        <p class="font-bold text-xs">CoBoDo Services</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>

<style scoped>

.brown-shadow {
    box-shadow: -5rem 5rem 0 0 var(--earth);
}

.grad-text {
    /* background-image: linear-gradient(90deg, #74ebd5, #ACB6E5 ); */
    background-image: linear-gradient(90deg, #6D6027, #D3CBB8 );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    background-clip: text;
}

</style>