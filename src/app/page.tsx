import BrandsList from "@/components/Brands";
import MainButton from "@/components/MainButton";
import CartProduct from "@/components/cardProducts";
import { SwiperSlide } from "swiper/react";
import { DataProduct } from "../data/index";
import { useMemo } from "react";
import { TProduct } from "@/types";
import { Slider } from "@/components/splide";
import CollecItem from "@/components/collecItems";
import TimerItems from "@/components/timerItems";
import DeliveryItems from "@/components/DeliveryItems";
import Newsletter from "@/components/Newsletter";
import NewProductsSlider from "@/components/NewPro";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="banner-one  w-full h-[721px]">
        {/* <picture className="w-full">
          <img className="w-full" src="/banners/ImagePlaceholder.svg" alt="" />
        </picture> */}
        <div className=" absolute lg:top-1/2 lg:left-1/2  min-[1321px]:top-[282px] flex flex-col gap-7 min-[1321px]:left-[732px] ">
          <h1 className="flex flex-col gap-2">
            <span className="text-8xl font-bold  animate-wiggle sec-font">
              Listen to the{" "}
              <mark className="bg-transparent text-[var(--color-mark-baner)]">
                amazing
              </mark>{" "}
              music sound.
            </span>
            <span className="third-font">
              Experience music like never before
            </span>
          </h1>
          <MainButton className="px-14 w-72 py-3" value={"Shopping Now"} />
        </div>
      </div>
      <div className="flex gap-12 flex-col min-[500px]:px-16 md:px-40">
        <section className=" flex gap-6 py-10 items-center">
          {/* <BrandsList img={"/brandsLogo/logo 01.svg"} />
          <BrandsList img={"/brandsLogo/logo 02.svg"} />
          <BrandsList img={"/brandsLogo/logo 03.svg"} />
          <BrandsList img={"/brandsLogo/logo 04.svg"} />
          <BrandsList img={"/brandsLogo/logo 05.svg"} />
          <BrandsList img={"/brandsLogo/logo 6.svg"} /> */}
          
        </section>

        <NewProductsSlider />

        <div className="flex flex-col gap-12">
          <h1 className="sec-font min-[500px]:text-4xl md:text-5xl font-semibold text-black leading-10">
            Shop Collection
          </h1>

          <div className="flex min-[500px]:flex-col md:flex-row items-center gap-6">
            <CollecItem
              link="/sortpro/headphones"
              img={"/collec/headphone.svg"}
              title={"HeadPhones"}
              className="md:h-[664px]"
            />
            <section className="flex gap-6 justify-center flex-col ">
              <CollecItem
                className="md:h-[319px]"
                link="/sortpro/earbuds"
                img={"/collec/earbuds.svg"}
                title={"Earbuds"}
              />
              <CollecItem
                className="md:h-[319px]"
                link="/sortpro/accessories"
                img={"/collec/accessories.svg"}
                title={"Accessories"}
              />
            </section>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <h1 className="sec-font w-fill min-[500px]:text-4xl md:text-5xl font-semibold text-black leading-10">
            Best Seller
          </h1>

          <section className="flex justify-center items-center gap-6 flex-wrap">
            {DataProduct.map((items: TProduct) => {
              return (
                items.pos == "HOT" && (
                  <CartProduct
                    id={items.id}
                    img={items.img}
                    name={items.name}
                    cato={items.cato}
                    price={items.price}
                    pos={items.pos}
                  />
                )
              );
            })}
          </section>
        </div>
      </div>

      <div className=" mt-[6.25rem] mb-10 flex flex-col gap-10 ">
        <div className="w-full  md:items-center md:justify-normal min-[500px]:items-center min-[500px]:justify-center  h-[532px] flex gap-[4.5rem]  sell-banner ">
          <picture className="md:inline-block min-[500px]:hidden h-[532px] w-1/2">
            <img
              className="w-full object-cover h-full"
              src="/banners/counterSeler.svg"
              alt=""
            />
          </picture>

          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 leading-4 ">
              <p className="text-[var(--color-mark-baner)] m-0 font-bold uppercase thrid-font">
                PROMOTION
              </p>
              <h1 className="sec-font text-4xl leading-10 font-semibold">
                Hurry up! 40% OFF
              </h1>
              <p className="third-font text-xl leading-8">
                Thousands of high tech are waiting for you
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <p className="third-font text-base font-normal leading-7 text-[var(--neutral-07)]">
                Offer expires in:
              </p>
              <section className="flex gap-4 items-center">
                <TimerItems desc={"Days"} id={"d"} />
                <TimerItems desc={"Hours"} id={"h"} />
                <TimerItems desc={"Minutes"} id={"m"} />
                <TimerItems desc={"Seconds"} id={"s"} />
              </section>
              <MainButton className="px-10 py-2 w-1/2" value={"Shop Now"} />
            </div>
          </section>
        </div>

        <section className="min-[500px]:px-16 md:px-40 justify-center min-[500px]:flex-wrap flex items-center gap-6">
          <DeliveryItems
            img={"/delivery/fastdelivery.svg"}
            title={"Free Shipping"}
            desc={"Order above $200"}
          />
          <DeliveryItems
            img={"/delivery/money.svg"}
            title={"Money-back"}
            desc={"30 days guarantee"}
          />
          <DeliveryItems
            img={"/delivery/lock 01.svg"}
            title={"Secure Payments"}
            desc={"Secured by Stripe"}
          />
          <DeliveryItems
            img={"/delivery/call.svg"}
            title={"24/7 Support"}
            desc={"Phone and Email support"}
          />
        </section>
      </div>

      <div className="min-[500px]:px-16 md:px-40 flex flex-col gap-10 mt-10">
        <section className="flex items-center flex-col gap-4">
          <p className="uppercase third-font font-bold text-base leading-4 text-[var(--neutral-04)]">
            newsfeed
          </p>
          <h1 className="sec-font font-semibold text-[2.5rem]">Instagram</h1>
          <p className="text-xl leading-8 third-font">
            Follow us on social media for more discount & promotions
          </p>
          <p className="text-[var(--neutral-04)] sec-font text-xl leading-7">
            @3legant_official
          </p>
        </section>
        <div className="flex justify-center min-[500px]:flex-wrap xl:flex-nowrap items-center gap-6">
          <picture className="min-[500px]:w-[260px] min-[500px]:h-[260px] lg:w-[312px] lg:h-[312px] ">
            <img className="w-full  h-full" src="/contact/Image.svg" alt="" />
          </picture>
          <picture className="min-[500px]:w-[260px] min-[500px]:h-[260px] lg:w-[312px] lg:h-[312px]">
            <img className="w-full  h-full" src="/contact/Image1.svg" alt="" />
          </picture>
          <picture className="min-[500px]:w-[260px] min-[500px]:h-[260px] lg:w-[312px] lg:h-[312px]">
            <img className="w-full  h-full" src="/contact/Image2.svg" alt="" />
          </picture>
          <picture className="min-[500px]:w-[260px] min-[500px]:h-[260px] lg:w-[312px] lg:h-[312px] ">
            <img className="w-full h-full " src="/contact/Image3.svg" alt="" />
          </picture>
        </div>
      </div>
    </main>
  );
}
