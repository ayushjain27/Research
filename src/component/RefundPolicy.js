import React from "react";
import { ArrowRight } from "lucide-react";
import HeaderTab from "./HeaderTab";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <HeaderTab />

      {/* Main Content */}
      <div className="max-w-7xl mt-16 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="sticky top-24 z-10 bg-gradient-to-r from-teal-600 to-blue-600 p-6 rounded-t-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            REFUND POLICY
          </h1>
        </div>
        
        <div className="bg-white rounded-b-lg shadow-sm border border-gray-200 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          {/* Content Sections */}
          <div className="p-6 md:p-8 space-y-8">
            {/* Introduction Section */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Introduction</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  This privacy policy sets out how Abishek Kondagunta Venkatesh uses and protects any information
                  that you give Abishek Kondagunta Venkatesh when you use this website.
                </p>
                <p>
                  Abishek Kondagunta Venkatesh is committed to ensuring that your privacy is protected. Should we
                  ask you to provide certain information by which you can be identified when using this website, then
                  you can be assured that it will only be used in accordance with this privacy statement.
                </p>
                <p>
                  Abishek Kondagunta Venkatesh may change this policy from time to time by updating this page. You
                  should check this page from time to time to ensure that you are happy with any changes. This policy
                  is effective from August 01, 2025.
                </p>
              </div>
            </section>

            {/* Data Collection Section */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">What We Collect</h2>
              <div className="space-y-4 text-gray-700">
                <p>We may collect the following information:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Name, date of birth</li>
                  <li>Contact information including email address and phone numbers</li>
                  <li>Demographic information such as postcode, country, city, state</li>
                  <li>Other information relevant to customer surveys and/or offers, payment options</li>
                </ul>
              </div>
            </section>

            {/* Data Usage Section */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">What We Do With Your Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We require this information to understand your needs and provide you with a better service, and in
                  particular for the following reasons:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Internal record keeping</li>
                  <li>We may use the information to improve our products and services</li>
                  <li>We may periodically send promotional emails about new products, special offers or other
                  information which we think you may find interesting using the email address which you have
                  provided</li>
                  <li>From time to time, we may also use your information to contact you for market research
                  purposes. We may contact you by email, phone, fax or mail</li>
                  <li>We may use the information to customise the website according to your interests</li>
                </ul>
              </div>
            </section>

            {/* Security Section */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Security</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We are committed to ensuring that your information is secure. In order to prevent unauthorised
                  access or disclosure, we have put in place suitable physical, electronic and managerial procedures to
                  safeguard and secure the information we collect online.
                </p>
              </div>
            </section>

            {/* Cookies Section */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">How We Use Cookies</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you
                  agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a
                  particular site. Cookies allow web applications to respond to you as an individual. The web
                  application can tailor its operations to your needs, likes and dislikes by gathering and remembering
                  information about your preferences.
                </p>
                <p>
                  We may use traffic log cookies to identify which pages are being used. This helps us analyse data
                  about web page traffic and improve our website in order to tailor it to customer needs. We only use
                  this information for statistical analysis purposes and then the data is removed from the system.
                </p>
                <p>
                  Overall, cookies help us provide you with a better website, by enabling us to monitor which pages
                  you find useful and which you do not. A cookie in no way gives us access to your computer or any
                  information about you, other than the data you choose to share with us.
                </p>
                <p>
                  You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but
                  you can usually modify your browser setting to decline cookies if you prefer. This may prevent you
                  from taking full advantage of the website.
                </p>
              </div>
            </section>

            {/* Links Section */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Links to Other Websites</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our website may contain links to other websites of interest. However, once you have used these links
                  to leave our site, you should note that we do not have any control over that other website. Therefore,
                  we cannot be responsible for the protection and privacy of any information which you provide whilst
                  visiting such sites and such sites are not governed by this privacy statement. You should exercise
                  caution and look at the privacy statement applicable to the website in question.
                </p>
              </div>
            </section>

            {/* Controlling Personal Info Section */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Controlling Your Personal Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  You may choose to restrict the collection or use of your personal information in the following ways:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Whenever you are asked to fill in a form on the website, look for the box that you can click to
                    indicate that you do not want the information to be used by anybody for direct marketing purposes
                  </li>
                  <li>
                    If you have previously agreed to us using your personal information for direct marketing purposes,
                    you may change your mind at any time by writing to or emailing us at abishekkvenkatesh@outlook.com
                  </li>
                </ul>
                <p>
                  We will not sell, distribute or lease your personal information to third parties unless we have your
                  permission or are required by law to do so. We may use your personal information to send you
                  promotional information about third parties which we think you may find interesting if you tell us that
                  you wish this to happen.
                </p>
                <p>
                  You may request details of personal information which we hold about you under the Data Protection Act
                  1998. A small fee will be payable. If you would like a copy of the information held on you please
                  contact us by clicking here if you believe that any information we are holding on you is incorrect or
                  incomplete, please write to or email us as soon as possible, at the above address. We will promptly
                  correct any information found to be incorrect.
                </p>
              </div>
            </section>

            {/* Comments Section */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Comments</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  When visitors leave comments on the site we may collect the data shown in the comments form, and also
                  the visitor's IP address and browser user agent string to help spam detection.
                </p>
              </div>
            </section>

            {/* Media Section */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Media</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you upload images to the website, you should avoid uploading images with embedded location
                  data (EXIF GPS) included. Visitors to the website can download and extract any location data from
                  images on the website.
                </p>
              </div>
            </section>

            {/* Contact Forms Section */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Forms</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Information submitted through contact forms on our website is collected and stored for customer
                  service purposes, but we do not use this information for marketing purposes unless explicitly
                  consented to by the user.
                </p>
              </div>
            </section>

            {/* Embedded Content Section */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Embedded Content</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded
                  content from other websites behaves in the exact same way as if the visitor has visited the other
                  website.
                </p>
                <p>
                  These websites may collect data about you, use cookies, embed additional third-party tracking, and
                  monitor your interaction with that embedded content, including tracking your interaction with the
                  embedded content if you have an account and are logged in to that website.
                </p>
              </div>
            </section>

            {/* Data Retention Section */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Data Retention</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can
                  recognize and approve any follow-up comments automatically instead of holding them in a
                  moderation queue.
                </p>
                <p>
                  For users that register on our website (if any), we also store the personal information they provide in
                  their user profile. All users can see, edit, or delete their personal information at any time (except
                  they cannot change their username). Website administrators can also see and edit that information.
                </p>
              </div>
            </section>

            {/* Your Rights Section */}
            <section className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg border border-blue-200">
              <h2 className="text-xl font-bold text-blue-800 mb-4">Your Rights Over Your Data</h2>
              <div className="space-y-4 text-blue-700">
                <p>
                  If you have an account on this site, or have left comments, you can request to receive an exported
                  file of the personal data we hold about you, including any data you have provided to us. You can also
                  request that we erase any personal data we hold about you. This does not include any data we are
                  obliged to keep for administrative, legal, or security purposes.
                </p>
              </div>
            </section>

            {/* Data Sharing Section */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Where We Send Your Data</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Visitor comments may be checked through an automated spam detection service.
                </p>
              </div>
            </section>

            {/* Additional Info Section */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Additional Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>How we protect your data:</strong> We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk.
                </p>
                <p>
                  <strong>Data breach procedures:</strong> We have procedures in place to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
                </p>
                <p>
                  <strong>Industry regulatory disclosure requirements:</strong> As a SEBI registered Research Analyst, we comply with all applicable regulations regarding data protection and privacy.
                </p>
              </div>
            </section>

            {/* Contact Info Section */}
            <section className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
              <h2 className="text-xl font-bold text-orange-800 mb-4">Contact Information</h2>
              <div className="space-y-4 text-orange-700">
                <p>
                  For any privacy-specific concerns, please contact us at:
                </p>
                <p className="font-medium">
                  Email: abishekkvenkatesh@outlook.com
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>SEBI Registered Research Analyst - INH000022066</p>
          <p className="mt-1">
            © {new Date().getFullYear()} AKV Equity Research. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;