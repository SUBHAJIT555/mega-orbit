import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { siteConfig } from "@/config/site";

const CookiePolicy = () => {
  return (
    <>
      <Breadcrumb title={"Cookie Policy"} pages={["Cookie Policy"]} />

      <section className="overflow-x-hidden py-20 bg-[var(--brutal-bg)] border-t-4 border-[var(--brutal-black)]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="bg-white rounded-none border-[3px] border-[var(--brutal-black)] brutal-box p-4 sm:p-7.5 xl:p-10">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h2 className="font-black text-[var(--brutal-black)] text-2xl uppercase tracking-tight mb-4">
                  Introduction
                </h2>
                <p className="text-[var(--brutal-black)] font-medium mb-4">
                  {siteConfig.brand.name} is an Indian e-commerce company selling electronics, stationery, books, and garments to customers across India. This Cookie Policy explains what cookies and similar technologies we use on our website, why we use them, and how you can manage your choices.
                </p>
                <p className="text-[var(--brutal-black)] font-medium">
                  This policy should be read together with our Privacy Policy. By using {siteConfig.brand.name}, you agree to the use of cookies as described here unless you change your browser or device settings.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-black text-[var(--brutal-black)] text-2xl uppercase tracking-tight mb-4">
                  What Are Cookies?
                </h2>
                <p className="text-[var(--brutal-black)] font-medium mb-4">
                  Cookies are small text files that are stored on your device (computer, tablet, or phone) when you visit a website. They help the site remember your preferences, keep you signed in, understand how you use the site, and improve your experience.
                </p>
                <p className="text-[var(--brutal-black)] font-medium">
                  We also use similar technologies such as local storage and pixels where they help us run the website and provide services to you.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-black text-[var(--brutal-black)] text-2xl uppercase tracking-tight mb-4">
                  Types of Cookies We Use
                </h2>
                <p className="text-[var(--brutal-black)] font-medium mb-3">
                  We use the following types of cookies on {siteConfig.brand.name}:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--brutal-black)] font-medium">
                  <li>
                    <strong className="text-[var(--brutal-black)] font-black">Strictly Necessary:</strong> These are required for the website to work (e.g. keeping you logged in, remembering items in your cart, security). You cannot turn these off if you want to use the site normally.
                  </li>
                  <li>
                    <strong className="text-[var(--brutal-black)] font-black">Functional:</strong> These remember your choices (e.g. language, region) and make your visit more convenient.
                  </li>
                  <li>
                    <strong className="text-[var(--brutal-black)] font-black">Analytics and Performance:</strong> These help us understand how visitors use our site (e.g. which pages are popular, how long people stay) so we can improve it for Indian customers.
                  </li>
                  <li>
                    <strong className="text-[var(--brutal-black)] font-black">Marketing (with your consent):</strong> These may be used to show you relevant offers and ads based on your interests. We only use these where we have your consent or where the law allows.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="font-black text-[var(--brutal-black)] text-2xl uppercase tracking-tight mb-4">
                  How We Use Cookies
                </h2>
                <p className="text-[var(--brutal-black)] font-medium mb-3">
                  We use cookies to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--brutal-black)] font-medium">
                  <li>Keep you signed in and manage your account</li>
                  <li>Remember your cart and wishlist</li>
                  <li>Process and remember your preferences (e.g. currency, delivery options)</li>
                  <li>Understand how our website is used so we can improve it</li>
                  <li>Help secure our site and prevent fraud</li>
                  <li>Show you relevant content and offers (where you have agreed)</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="font-black text-[var(--brutal-black)] text-2xl uppercase tracking-tight mb-4">
                  Session and Persistent Cookies
                </h2>
                <p className="text-[var(--brutal-black)] font-medium mb-4">
                  <strong className="text-[var(--brutal-black)] font-black">Session cookies</strong> are temporary and are deleted when you close your browser. They help with things like keeping your cart while you browse.
                </p>
                <p className="text-[var(--brutal-black)] font-medium">
                  <strong className="text-[var(--brutal-black)] font-black">Persistent cookies</strong> stay on your device for a set period or until you delete them. They help us remember your preferences and understand how you use {siteConfig.brand.name} over time.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-black text-[var(--brutal-black)] text-2xl uppercase tracking-tight mb-4">
                  Third-Party Cookies
                </h2>
                <p className="text-[var(--brutal-black)] font-medium mb-4">
                  Some cookies are placed by third parties we work with—for example, payment gateways, analytics providers, or advertising partners. These parties have their own privacy and cookie policies. We only allow such cookies where necessary for our services or where you have given consent.
                </p>
                <p className="text-[var(--brutal-black)] font-medium">
                  We do not control third-party cookies. You can learn about their use and how to manage them in their respective policies or through your browser settings.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-black text-[var(--brutal-black)] text-2xl uppercase tracking-tight mb-4">
                  How to Manage Cookies
                </h2>
                <p className="text-[var(--brutal-black)] font-medium mb-4">
                  You can control or delete cookies through your browser or device settings. Most browsers let you block or allow cookies, and delete existing ones. How you do this depends on your browser (e.g. Chrome, Safari, Firefox, Edge).
                </p>
                <p className="text-[var(--brutal-black)] font-medium mb-4">
                  If you block or delete cookies, some features of {siteConfig.brand.name} may not work properly—for example, staying logged in, saving your cart, or seeing personalized content.
                </p>
                <p className="text-[var(--brutal-black)] font-medium">
                  You can also use our cookie or preference banner (if shown on the site) to manage your choices for non-essential cookies.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-black text-[var(--brutal-black)] text-2xl uppercase tracking-tight mb-4">
                  Updates to This Cookie Policy
                </h2>
                <p className="text-[var(--brutal-black)] font-medium">
                  We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated &quot;Last Updated&quot; date. We encourage you to check this page periodically. Continued use of our website after changes means you accept the updated policy.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-black text-[var(--brutal-black)] text-2xl uppercase tracking-tight mb-4">
                  Contact Us
                </h2>
                <p className="text-[var(--brutal-black)] font-medium mb-3">
                  If you have questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="rounded-none border-2 border-[var(--brutal-black)] bg-[var(--brutal-bg)] p-5 text-[var(--brutal-black)] font-medium">
                  <p className="mb-2">
                    <strong className="text-[var(--brutal-black)] font-black">Email:</strong> {siteConfig.brand.email}
                  </p>
                  <p className="mb-2">
                    <strong className="text-[var(--brutal-black)] font-black">Phone:</strong> {siteConfig.brand.phone}
                  </p>
                  <p>
                    <strong className="text-[var(--brutal-black)] font-black">Address:</strong> {siteConfig.brand.address.full}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-[var(--brutal-black)]">
                <p className="text-[var(--brutal-black)] font-medium text-sm">
                  <strong className="text-[var(--brutal-black)] font-black">Last Updated:</strong> {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiePolicy;
