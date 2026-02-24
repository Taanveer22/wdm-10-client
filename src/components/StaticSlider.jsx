import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

const StaticSlider = () => {
  return (
    <div className="w-full">
      <div className="carousel w-full">

        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={banner1}
            alt="Banner 1"
            className="
              w-full 
              h-48 sm:h-64 md:h-80 lg:h-124
              object-cover
            "
          />
          <div className="
              absolute left-2 right-2 
              sm:left-5 sm:right-5 
              top-1/2 -translate-y-1/2 
              flex justify-between
          ">
            <a href="#slide4" className="btn btn-circle btn-sm sm:btn-md">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={banner2}
            alt="Banner 2"
            className="
              w-full 
              h-48 sm:h-64 md:h-80 lg:h-124
              object-cover
            "
          />
          <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 -translate-y-1/2 flex justify-between">
            <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={banner3}
            alt="Banner 3"
            className="
              w-full 
              h-48 sm:h-64 md:h-80 lg:h-124
              object-cover
            "
          />
          <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 -translate-y-1/2 flex justify-between">
            <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle btn-sm sm:btn-md">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={banner4}
            alt="Banner 4"
            className="
              w-full 
              h-48 sm:h-64 md:h-80 lg:h-124
              object-cover
            "
          />
          <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 -translate-y-1/2 flex justify-between">
            <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">
              ❯
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StaticSlider;