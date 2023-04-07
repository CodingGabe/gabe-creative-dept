<template>
    <div>
        <header>
            <nav class="px-3 py-4 flex justify-between items-center fixed w-full backdrop-blur-sm sm:top:0 sm:bottom-auto sm:px-6 lg:py-4 shadow-sm bottom-0 ">
                <div class="top-0 absolute left-0 w-full bg-topbar"></div>
                    <div class="container flex justify-between mx-auto">
                        <NuxtLink to="/"><span class="rounded-md transition-all"><img src="../assets/img/final-final-logo.svg" alt="Gabe Creative Dept Logo" class="object-cover w-full max-w-[10rem]"></span></NuxtLink>
                        <div class="flex items-center gap-1 sm:gap-2">
                        <NuxtLink to="/about"><span class="px-3 py-1 pb-2 pt-2 rounded-md transition-all sm:px-6 sm:py-2">About</span></NuxtLink>
                        <NuxtLink to="/services"><span class="px-3 py-1 pb-2 pt-2 rounded-md transition-all sm:px-6 sm:py-2">Services</span></NuxtLink>
                        <NuxtLink to="/shop"><span class="px-3 py-1 pb-2 pt-2 rounded-md transition-all sm:px-6 sm:py-2">Shop</span></NuxtLink>
                        <NuxtLink to="/journal"><span class="px-3 py-1 pb-2 pt-2 rounded-md transition-all sm:px-6 sm:py-2">Journal</span></NuxtLink>

                    </div>
                </div>
            </nav>
        </header>

        <!-- Page Content -->
        <div class="pt-16 lg:pt-48 overflow-hidden">
            <slot />
        </div>

    </div>
</template>

<style>
    nav .bg-topbar {
        height: .25rem;
        background-image: linear-gradient(90deg, rgb(245 237 240),rgb(66 76 85), rgb(136 111 104));
        /* background-image: linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% ); */
    }
    .border-nav--color {
        border-bottom: 1px solid rgba(54,54,54,.4);
    }

    nav a {
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
    }
</style>