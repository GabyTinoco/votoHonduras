import React from "react"
import Button from '../Button';

const SerParte = () => {
  return (
<section class="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-2 text-center md:text-left -mt-32">
      <div class="flex flex-col md:flex-row items-center justify-between px-12 py-10 rounded-lg shadow-lg"  id ="cta-partido">
        <div class="w-full md:w-2/3">
          <h2 class="text-3xl leading-tight font-bold">Need help?</h2>
          <p class="mt-2 md:max-w-md">Contact our Customer Support that is always ready to help you with any possible questions, problems or
            information.</p>
        </div>

        <div class="w-full md:w-1/3 md:text-right mt-6 md:mt-0">
          <Button size="xl">Si, quiero ser parte</Button>
        </div>
      </div>
    </section>
  )
}

export default SerParte