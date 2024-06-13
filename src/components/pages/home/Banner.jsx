const Banner = () => {
  /* border-radius: 5px;
background: var(--PINK, #); */
  return (
    <div className="bg-[#FFF8F5]">
      <div className="max-w-screen-2xl px-8 mx-auto lg:py-14 pt-8 pb-16">
        <div className="flex lg:justify-between flex-col-reverse lg:flex-row items-center">
          <div className="flex-1">
            <h1 className="md:text-[48px] text-3xl md:leading-[60px] font-poppins font-bold text-[#111430]">
              BEAUTY SALON <br />
              FOR EVERY WOMEN
            </h1>
            <p className="text-[#666] text-base font-poppins font-normal max-w-80 py-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </p>
            <button className="text-white font-poppins text-base font-normal bg-[#F63E7B] py-3 px-8 rounded">
              Get an Appointment
            </button>
          </div>
          <div className="flex-1 flex justify-evenly lg:pb-0 pb-10">
            <img src="../../../assets/banner-image.png" alt="Banner Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
