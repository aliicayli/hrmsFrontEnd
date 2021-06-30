import React from 'react'
import { Carousel } from 'bootstrap'
import software from '../images/software.jpg'
import jobs from '../images/jobs.jpg'
import career from '../images/career.PNG'






export default function Slider() {
  return (
    <div style={{marginTop:"20px"}}>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" style={{height:"300px"}}>
      <img  src={career} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h1>İş</h1>
        <hr/>
        <p>Kariyer basamaklarını hızlıca çıkmanın sence de zamanı gelmedi mi ?</p>
      </div>
    </div>
    <div class="carousel-item" style={{height:"300px"}}>
      <img src={software} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>İş</h1>
        <hr/>
        <p>Yazılım alanında yeni eklenen iş ilanlarımıza bir göz atmalısın !</p>
      </div>
    </div>
    <div class="carousel-item" style={{height:"300px"}}>
      <img src={jobs} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>İş</h1>
        <hr/>
        <p>Binlerce iş ilanı arasından istediğine başvur ve geleceğine yön ver !</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

