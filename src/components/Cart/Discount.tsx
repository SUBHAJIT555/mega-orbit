import React from "react";

const Discount = () => {
  return (
    <div className="lg:max-w-[670px] w-full">
      <form>
        {/* <!-- coupon box --> */}
        <div className="bg-white rounded-none border-[3px] border-[var(--brutal-black)] brutal-box">
          <div className="border-b-2 border-[var(--brutal-black)] py-5 px-4 sm:px-5.5 bg-[var(--brutal-bg)]">
            <h3 className="font-black text-[var(--brutal-black)] uppercase tracking-tight">Have any discount code?</h3>
          </div>

          <div className="py-8 px-4 sm:px-8.5">
            <div className="flex flex-wrap gap-4 xl:gap-5.5">
              <div className="max-w-[426px] w-full">
                <input
                  type="text"
                  name="coupon"
                  id="coupon"
                  placeholder="Enter coupon code"
                  className="rounded-none border-2 border-[var(--brutal-black)] bg-white font-medium text-[var(--brutal-black)] placeholder:text-[var(--brutal-black)]/50 w-full py-2.5 px-5 outline-none duration-200 focus:shadow-[2px_2px_0_0_var(--brutal-black)]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex font-black text-[var(--brutal-black)] bg-[var(--brutal-yellow)] border-2 border-[var(--brutal-black)] py-3 px-8 rounded-none brutal-btn hover:bg-[var(--brutal-cyan)]"
              >
                Apply Code
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Discount;
