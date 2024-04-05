import * as React from "react";

export default function Footer() {
  return (
    <div className="flex z-10 flex-col justify-center items-center px-11 py-16 w-full bg-white border border-black border-solid max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between items-start self-center w-full tracking-normal max-w-[1248px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col mt-2 text-sm leading-5 text-stone-950">
          <div className="text-base font-bold leading-7">Pets</div>
          <div className="mt-7">Find a pet</div>
          <div className="mt-5">Rehome a pet</div>
          <div className="mt-5">Spay & neuter</div>
          <div className="mt-5">Total Dog Manual</div>
          <div className="mt-5">Total Cat Manual</div>
        </div>
        <div className="flex flex-col mt-2 text-sm leading-5 text-stone-950">
          <div className="text-base font-bold leading-7">Get Involved</div>
          <div className="mt-7">Ways to help</div>
          <div className="mt-5 leading-[186%]">Shelter / Rescue</div>
          <div className="mt-6">Sign up</div>
          <div className="mt-5">Log in</div>
        </div>
        <div className="flex flex-col mt-2 text-sm leading-5 text-stone-950">
          <div className="text-base font-bold leading-7">Our Organization</div>
          <div className="mt-6">About Adopt a Pet</div>
          <div className="mt-5">Blog</div>
          <div className="mt-5">Press room</div>
          <div className="mt-6">Contact</div>
        </div>
        <div className="flex flex-col mt-2 text-sm leading-5 text-stone-950">
          <div className="text-base font-bold leading-7">Information</div>
          <div className="mt-7">Sitemap</div>
          <div className="mt-5">Privacy policy</div>
          <div className="mt-5 leading-[158%]">Terms of service</div>
          <div className="mt-5">Cookies</div>
          <div className="mt-5">Accessibility</div>
          <div className="mt-5">Mars, Incorporated</div>
          <div className="mt-5">AdChoices</div>
          <div className="flex gap-4 mt-5">
            <div className="grow">Your privacy choices </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/55cf7691959beb1914eb757eb07005da27f89879fbddd5a84864b2e2c9c79345?"
              className="shrink-0 aspect-[2.13] w-[30px]"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col px-10 py-7 w-full bg-white rounded-3xl max-md:px-5">
            <div className="flex gap-2.5">
              <div className="flex flex-col text-base">
                <div className="font-medium leading-[156%] text-stone-950">
                  Sign up for our newsletter
                </div>
                <div className="flex flex-col justify-center py-px mt-5 bg-white rounded-md border border-solid border-stone-950 leading-[158%] text-zinc-400">
                  <div className="justify-center items-start px-4 py-4 bg-white rounded-md max-md:pr-5">
                    Enter e-mail
                  </div>
                </div>
              </div>
              <div className="justify-center self-end px-9 py-4 mt-9 text-sm font-medium leading-5 text-center whitespace-nowrap bg-stone-950 rounded-[64px] text-stone-100 max-md:px-5">
                Send
              </div>
            </div>
            <div className="mt-3.5 text-xs leading-4 underline text-neutral-800">
              I'm over 16 years old, and would like to be sent product
              <br />
              updates, offers, and news from us, and other{" "}
              <span className="underline text-neutral-800">Mars Petcare</span>
              <br />
              <span className="underline text-neutral-800">brands.</span> See
              our{" "}
              <span className="underline text-neutral-800">
                privacy statement
              </span>{" "}
              to find out how we collect
              <br />
              and use your data.
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a07be07ef1c1533cd5b4ecd761e89b3c70ab6b5fca717c1eee5d7b978f270b2?"
            className="mt-4 max-w-full aspect-[7.69] w-[242px]"
          />
        </div>
      </div>
      <div className="self-start mt-24 mb-1 mx-auto text-center font-Anta font-medium text-black text-[200px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        PAWSNATION
      </div>
    </div>
  );
}
