import React from "react"
import PeopleVoting from "../../svg/PeopleVoting";
import { StaticImage } from "gatsby-plugin-image"


const Diputados = () => {
  return (
<section id="team" class="py-24 text-center">
<div class="text-center">
<h2 class="mb-12 section-heading wow fadeInDown animated" data-wow-delay="0.3s">Our Team</h2>
</div>
<div class="container mx-auto flex flex-wrap pt-4 pb-12">
<div class="flex flex-wrap justify-center">

<div class="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
<div class="team-item">
<div class="team-img relative">
<StaticImage
        src = "../../assets/diputados_liberal/diputado2.jpg"
        width = {500}
        alt= "Telesan plataforma"
      />
<div class="team-overlay">
<ul class="flex justify-center">
<li class="mx-1">
<a href="#" class="social-link hover:bg-indigo-500">
<i class="lni lni-facebook-original" aria-hidden="true"></i>
</a>
</li>
<li class="mx-1">
<a href="#" class="social-link hover:bg-blue-400">
<i class="lni lni-twitter-original" aria-hidden="true"></i>
</a>
</li>
<li class="mx-1">
<a href="#" class="social-link hover:bg-red-500">
<i class="lni lni-instagram-original" aria-hidden="true"></i>
</a>
</li>
</ul>
</div>
</div>
<div class="text-center px-5 py-3">
<h3 class="team-name">Sarah Doe</h3>
<p>Front-End Developer</p>
</div>
</div>
</div>


<div class="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
<div class="team-item">
<div class="team-img relative">
<StaticImage
        src = "../../assets/diputados_liber/diputado3.jpg"
        width = {500}
        alt= "Telesan plataforma"
      />
<div class="team-overlay">
<ul class="flex justify-center">
<li class="mx-1">
<a href="#" class="social-link hover:bg-indigo-500">
<i class="lni lni-facebook-original" aria-hidden="true"></i>
</a>
</li>
<li class="mx-1">
<a href="#" class="social-link hover:bg-blue-400">
<i class="lni lni-twitter-original" aria-hidden="true"></i>
</a>
</li>
<li class="mx-1">
<a href="#" class="social-link hover:bg-red-500">
<i class="lni lni-instagram-original" aria-hidden="true"></i>
</a>
</li>
</ul>
</div>
</div>
<div class="text-center px-5 py-3">
<h3 class="team-name">Rob Hope</h3>
<p>Front-end Developer</p>
</div>
</div>
</div>

</div>
</div>
</section>
  )
}

export default Diputados