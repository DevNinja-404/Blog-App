import { Button } from "@/components/ui/button";
import HeroImage from "../../assets/heroImage.jpg";
import { useNavigate } from "react-router-dom";

import { HeroHighlightSection } from "./components/HeroHighlightSection";
import { FeaturedPosts } from "./components/FeaturedPosts";
import { Testimonials } from "./components/Testimonials";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className=" w-full  flex flex-col mt-10 ">
      <div className="h-[40vh] md:h-auto flex flex-col items-center justify-center gap-y-6 md:flex-row bg-slate-950 w-full pt-8  pb-4 px-5">
        <div className=" w-full md:w-1/2  flex flex-col gap-y-4 items-center justify-center">
          <HeroHighlightSection className="" />
          <Button
            className="text-xl flex gap-0.5"
            onClick={() => navigate("/blogs")}
          >
            <span>Explore</span>
            <span className="text-purple-700">...</span>
          </Button>
        </div>
        <div className="rounded-3xl bg-red-900  md:w-1/2 h-[60vh]    overflow-hidden hidden  md:block">
          <img
            src={HeroImage}
            alt="heroImage.png"
            className=" object-cover h-[100%] w-[100%] "
          />
        </div>
      </div>
      {/* Featured Posts : */}
      <div className=" mt-16  ">
        <div className="flex flex-col gap-y-1">
          <p className="text-center text-purple-800 font-jersey text-4xl">
            Featured Posts:
          </p>
          <FeaturedPosts />
        </div>
      </div>
      {/* {Testimonials} */}
      <div className="mt-12 flex flex-col gap-y-1">
        <p className="text-center text-purple-800 font-jersey text-4xl">
          Testimonials:
        </p>
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
