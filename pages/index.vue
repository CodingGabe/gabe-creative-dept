<template>
    <div>
        <section id="dept-hero" class="min-h-[34rem] bg-sand">
            <div class="relative container mx-auto">
                <div class="hero-content flex flex-col max-w-3xl">
                    <h1 class="lg:text-7xl mb-5 font-bold">Unlock Your Brand's <span class="grad-text">Full Potential</span></h1>
                    <h3 class="lg:text-4xl mb-12">From Branding to Web Design and SEO Content, I've Got You Covered</h3>
                    <NuxtLink><span class="dept-btn w-fit">Get Started</span></NuxtLink>
                </div>
                <img src="../assets/img/gabe-lp-mocks.png" alt="mockups" class="absolute -top-12 -right-60 max-w-4xl">
            </div>
        </section>
        <section id="services" class="container mx-auto pb-24">
            <div class="max-w-5xl mx-auto">
                <h1 class="text-4xl text-center font-bold mb-20">My Comprehensive Services Include:</h1>
                <div class="grid grid-cols-3 gap-12">
                    <div class="flex flex-col justify-start items-center">
                        <div class="relative w-12 h-12 bg-lavender rounded-full flex justify-center items-center text-center mb-6">
                            <i class="fa-solid fa-wand-sparkles fa-lg"></i>
                        </div>
                        <h3 class="lg:text-2xl text-xl font-bold mb-4 text-center">Branding</h3>
                        <p class="text-center">Your brand is the foundation of your online presence. I create memorable and impactful branding strategies that represent your unique identity and resonate with your target audience.</p>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <div class="relative w-12 h-12 bg-lavender rounded-full flex justify-center items-center text-center mb-6">
                            <i class="fa-solid fa-laptop-code fa-lg"></i>
                        </div>
                        <h3 class="lg:text-2xl text-xl font-bold mb-4 text-center">Website Design &amp; Development</h3>
                        <p class="text-center">I specialize in creating visually stunning, user-friendly websites that are tailored to your specific needs. From responsive design to seamless navigation, our websites are optimized for performance and built to convert.</p>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <div class="relative w-12 h-12 bg-lavender rounded-full flex justify-center items-center text-center mb-6">
                            <i class="fa-solid fa-magnifying-glass-chart fa-lg"></i>
                        </div>
                        <h3 class="lg:text-2xl text-xl font-bold mb-4 text-center">SEO</h3>
                        <p class="text-center">Drive organic traffic to your website with our proven SEO strategies. Our team of SEO experts will optimize your website's content, structure, and performance to improve your search engine rankings and increase your online visibility.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="about" class="bg-lavender pt-14 pb-24">
            <div class="container grid grid-cols-2 gap-8 mx-auto">
                <div class="img-wrapper relative p-6 flex justify-center">
                    <img src="../assets/img/love-bonnet.JPG" alt="Blue Bonnets" class="object-fit max-w-sm brown-shadow">
                </div>
                <div class="about-content flex justify-center justify-items-center flex-col">
                    <h4 class="text-sm uppercase font-bold dept-small mb-2">Creative Agency</h4>
                    <h1 class="lg:text-6xl text-xl font-bold mb-6">Build Your Business With Me</h1>
                    <p class="mb-8">At my creative agency, I’m super passionate about helping small businesses succeed. Contact me today to learn more about my services and how I can help your business grow! At my creative agency, I’m super passionate about helping small businesses succeed. Contact me today to learn more about my services and how I can help your business grow!At my creative agency, I’m super passionate about helping small businesses succeed. Contact me today to learn more about my services and how I can help your business grow!</p>
                    <a href="#portfolio" class="dept-btn w-fit">View Work</a>
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