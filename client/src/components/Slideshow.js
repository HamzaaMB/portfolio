import React from 'react'
import { Slide }  from 'react-slideshow-image'


const slideImages = [
  'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.etimg.com%2Fthumb%2Fmsid-56500181%2Cwidth-640%2Cresizemode-4%2Cimgsize-276013%2Fgoogle-sky.jpg&imgrefurl=https%3A%2F%2Feconomictimes.indiatimes.com%2Ftech-life%2F7-little-known-google-products-and-services%2Fgoogle-sky%2Fslideshow%2F56500181.cms&tbnid=IA0VhC6BENQK3M&vet=12ahUKEwiOoqWzi8DwAhUMcxoKHT7pC3sQMygIegUIARDZAQ..i&docid=wu7BnTYwevFOsM&w=640&h=480&q=google%20image%20sky&ved=2ahUKEwiOoqWzi8DwAhUMcxoKHT7pC3sQMygIegUIARDZAQ',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
]
  
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
}
  
const Slideshow = () => {
  return (
    <Slide {...properties}>
      <div className="each-slide">
        <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
          <span>Slide 1</span>
        </div>
      </div>
      <div className="each-slide">
        <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
          <span>Slide 2</span>
        </div>
      </div>
      <div className="each-slide">
        <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
          <span>Slide 3</span>
        </div>
      </div>
    </Slide>
  )
}

export default Slideshow
