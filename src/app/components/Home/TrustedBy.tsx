import Image from "next/image"; // Import the Image component

export default function TrustedBy() {
  return (
    <section>
      <div className="container">
        <div className="relative xl:pb-[80px] sm:pb-[40px] pb-[30px] xl:px-[63px] w-fit mx-auto">
          {/* <div className="relative xl:pb-[256px] sm:pb-[80px] pb-[50px] xl:px-[63px] w-fit mx-auto">
          <div className="absolute xl:top-[70px] sm:top-6 top-4 left-0 flex flex-col justify-center items-center ">
            <h6 className="satoshi-bold rotate-[-13deg] text-black text-sm">
              Trusted by
            </h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="51"
              viewBox="0 0 21 51"
              fill="none"
              className="w-[36px] h-[36px] lg:w-[51px] lg:h-[51px]"
            >
              <path
                d="M14.7866 1.57679C12.3482 3.08516 10.2152 5.54253 8.61101 7.88184C6.91998 10.3478 5.65608 13.0848 4.67271 15.9019C3.46379 19.3652 2.47012 23.1793 2.47217 26.8777C2.47691 35.4214 9.63407 42.4511 17.0218 45.6549C17.1813 45.724 18.7124 46.5507 18.7283 46.08C18.7817 44.5008 18.6675 42.8892 18.617 41.3098C18.6083 41.0401 18.5483 40.2362 18.5274 40.5053C18.4362 41.6776 18.4398 42.8702 18.4518 44.0454C18.4599 44.8316 18.647 45.2766 18.8686 45.9847C19.0071 46.4271 19.1186 46.8799 19.2069 47.3347C19.3624 48.1352 18.2744 48.0717 17.7089 48.1475C15.8267 48.3997 13.896 48.5835 12.0018 48.6904"
                stroke="#111827"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div> */}

          <div className="flex items-center justify-center gap-x-[30px] sm:gap-x-[46px] flex-wrap gap-y-1 md:px-12 xl:px-0 px-4">
            <Image
              className="w-[130px] sm:w-[150px] aspect-[3/2] object-contain"
              src="/assets/img/mouseflow.webp"
              alt=""
              width={150}
              height={230}
            />

            <Image
              className="w-[130px] sm:w-[150px] aspect-[3/2] object-contain"
              src="/assets/img/qwilr.webp"
              alt=""
              width={150}
              height={100}
            />

            <Image
              className="w-[80px] sm:w-[100px] aspect-[3/2] object-contain"
              src="/assets/img/juro.webp"
              alt=""
              width={100}
              height={70}
            />

            <Image
              className="w-[130px] sm:w-[150px] aspect-[3/2] object-contain"
              src="/assets/img/userpilot-logo.webp"
              alt=""
              width={150}
              height={180}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
