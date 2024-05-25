/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        {/* main  */}
        <div className="container px-5 py-10 mx-auto">
          {/* Heading  */}
          <h1 className=" text-center text-3xl font-bold text-black">
            Testimonial
          </h1>
          {/* para  */}
          <h2 className=" text-center text-2xl font-semibold mb-10">
            What our <span className=" text-pink-500">customers</span> are
            saying
          </h2>

          <div className="flex flex-wrap -m-4">
            {/* Testimonial 1 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRfpo86SB6nHTlhI0FZFHPbdDb-y_QKJuvx6ugVdIEn1chvgrONhKsaG_spVs9sxjv84&usqp=CAU"
                />
                <p className="leading-relaxed">
                  assumenda! Culpa ab quasi molestiae labore nostrum. Corrupti
                  suscipit corporis veritatis similique molestias iure
                  provident, voluptate ad modi rem maiores et. Laboriosam.
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Patitapaban panda
                </h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="data:image/jpeg;base64,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vTQvjSvTfvwWxgfG6yvYXin9B8gvYUEghYK9PuuWwsdT3SgKFfV3MJwvZIjUe8P16EFUq9ruqUxLT2lL4hmWdW6geJHMFdRvelImNPkqleFCZdTMP8g48D8LvQrmyx4v8OnHKzV2fvV1ambOXYnDDhd8TcQz8AFPUKQxYjoMlVdj6VWra3MZRJc2cTmghgDgR39zDIgjKdQNV1y6bjbShz4e/X8oPIbzzPokU5d+BJqJ5ue7YaC8c4PPPNTKItznYREQBERAEREAREQBERAEREAREQBYKlkYTMQeIynTXjoFnRAUe17M16Fp/iLNhewkk08WF3ezeBOUEjEM9SclkvqzCo3tQDTqsEgOBachoZ135hXReXtBEEAg7iJCii3IgrntnaU2P+INOeuYBzW9i16FbTLFTbOFjWzrAA+SGyt5+asmVfZrtdr98F9xLP8AwwmZPovv8MOJ81NkUa2JeXHIrcFnbw9SvbWgaBRYogn2F78g3xOQWpZ9iqeMvqvc4HWm3Jh6nU+EK1Iolvssm10YrPZ2MbhY0NaNwAA/35rKiIQEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB//Z"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  p.k panda
                </h2>
                <p className="text-gray-500">UI Develeoper</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="data:image/jpeg;base64,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"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  impedit facere reprehenderit laborum molestias adipisci est,
                  voluptatibus alias. Harum eius provident aliquam beatae quo
                  dolor voluptatum aliquid sapiente quasi accusamus.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Mukesh Ratha
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
