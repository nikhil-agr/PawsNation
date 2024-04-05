import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scroller = useRef();
  const skills = useRef();

  useEffect(() => {
    let skillSet = gsap.utils.toArray(".skill-set");

    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),

        end: () => "+=" + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden flex">
      <div className="overflow-hidden ">
        <div
          id="skills"
          ref={scroller}
          className=" flex overflow-x-hidden text-white w-[500vw] m-0 bg-[#3e3e3e]  relative h-screen"
        >
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <div className="absolute top-40 left-20">
              <div className="text-6xl text-center top-40 left-19 font-serif">
                GOLDEN <br /> RETRIEVER{" "}
              </div>
              <div className="w-full max-w-96 flex text-justify  top-80">
                The Golden Retriever is a Scottish breed of retriever dog of
                medium size. It is characterised by a gentle and affectionate
                nature and a striking golden coat. It is commonly kept as a pet
                and is among the most frequently registered breeds in several
                Western countries. It is a frequent competitor in dog shows and
                obedience trials; it is also used as a gun dog (a type of
                hunting dog for soft-mouthed retrieving of fowl) and may be
                trained for use as a guide dog.
              </div>
            </div>
            <div>
              <Image
                src="/Images/dog-gr.jpg"
                alt="1st image"
                layout="fill"
                objectFit="contain"
                className="max-w-[100vw] max-h-[60vh] m-auto"
              />
            </div>
          </section>
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <div>
              <div className="text-6xl text-center absolute top-40 left-32 font-serif">
                ROTT <br /> WEILER{" "}
              </div>
              <div className="w-full max-w-96 flex text-justify absolute top-80 left-14">
                The Rottweiler is a breed of domestic dog, regarded as
                medium-to-large or large. The dogs were known in German as
                Rottweiler Metzgerhund, meaning Rottweil butchers' dogs, because
                their main use was to herd livestock and pull carts laden with
                butchered meat to market. This continued until the mid-19th
                century when railways replaced droving. Although still used to
                herd stock in many parts of the world, Rottweilers are now also
                used as search and rescue dogs, guard dogs, and police dogs.
              </div>
            </div>
            <Image
              src="/Images/dog-rw.jpg"
              alt="2ndimage"
              layout="fill"
              objectFit="contain"
              className="max-w-[70vw] max-h-[60vh] m-auto"
            />
          </section>
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <div>
              <div className="text-6xl text-center absolute top-40 left-19 font-serif">
                BEAGLE
              </div>
              <div className="w-full max-w-96 flex text-justify absolute top-80">
                The beagle is a breed of small scent hound, similar in
                appearance to the much larger foxhound. The beagle was developed
                primarily for hunting hare, known as beagling. Possessing a
                great sense of smell and superior tracking instincts, the beagle
                is the primary breed used as a detection dog for prohibited
                agricultural imports and foodstuffs in quarantine around the
                world. The beagle is a popular pet due to its size, good temper,
                and a lack of inherited health problem
              </div>
            </div>
            <Image
              src="/Images/dog-b.jpg"
              alt="2ndimage"
              layout="fill"
              objectFit="contain"
              className="max-w-[70vw] max-h-[60vh] m-auto"
            />
          </section>
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <div>
              <div className="text-6xl text-center absolute top-40 left-19 font-serif">
                SHIBA <br /> INU{" "}
              </div>
              <div className="w-full max-w-96 flex text-justify absolute top-80">
                The Shiba Inu is a breed of hunting dog from Japan. A
                small-to-medium breed, it is the smallest of the six original
                breed of dogs native to Japan.Its name literally translates to
                "brushwood dog", as it is used to flush game.A small, alert, and
                agile dog that copes very well with mountainous terrain and
                hiking trails, the Shiba Inu was originally bred for hunting. It
                looks similar to other Japanese dog breeds such as the Akita Inu
                or Hokkaido, but the Shiba Inu is a different breed with a
                distinct bloodline, temperament, and smaller size than other
                Japanese dog breeds.
              </div>
            </div>
            <Image
              src="/Images/dog-si.jpg"
              alt="2ndimage"
              layout="fill"
              objectFit="contain"
              className="max-w-[70vw] max-h-[60vh] m-auto"
            />
          </section>
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <div>
              <div className="text-6xl text-center absolute top-40 left-19 font-serif">
                PITT <br /> BULL{" "}
              </div>
              <div className="w-full max-w-96 flex text-justify absolute top-80">
                Pit bull is an umbrella term for several types of dog believed
                to have descended from bull and terriers. In the United states,
                the term is usually considered to include the American Pit Bull
                Terrier, American Staffordshire Terrier, American Bully,
                Staffordshire Bull Terrier, and sometimes the American Bulldog,
                along with any crossbred dog that shares certain physical
                characteristics with these breeds. In other countries, including
                the United Kingdom, the term is used as an abbreviation of the
                American Pit Bull Terrier breed specifically,while the
                Staffordshire Bull Terrier is not considered a pit bull.
              </div>
            </div>
            <Image
              src="/Images/dog-pb.jpg"
              alt="2ndimage"
              layout="fill"
              objectFit="contain"
              className="max-w-[70vw] max-h-[60vh] m-auto"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
