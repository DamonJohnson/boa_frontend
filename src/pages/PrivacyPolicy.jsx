import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
                  <div className="text-secondary py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
          <h2 className="mb-4 text-4xl font-extrabold text-center">
            Privacy Policy
          </h2>
          <body>
            <p className="pt-4">This Privacy Policy applies to all information collected on our website and explains how we collect, use, and disclose personal information.</p>
            
            <h4 className="mt-4 text-lg font-bold">Collection of Personal Information</h4>
            <p>When you place an order or create an account on our website, we may collect personal information such as your name, address, email address, phone number, and payment information.</p>
            
            <h4 className="mt-4 text-lg font-bold">Use of Personal Information</h4>
            <p>We use the personal information collected on our website to process your orders, provide customer service, and improve your shopping experience. We may also use your personal information to send you promotional emails or mailings about our products and services.</p>
            
            <h4 className="mt-4 text-lg font-bold">Disclosure of Personal Information</h4>
            <p>We will not share your personal information with any third parties, except as necessary to complete your transaction, such as sharing your shipping address with our carrier. We may also disclose your personal information in response to a court order or legal request, or to protect the rights and safety of Boa Wraps and our customers.</p>
            
            <h4 className="mt-4 text-lg font-bold">Security of Personal Information</h4>
            <p>We take reasonable measures to protect the personal information collected on our website from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure.</p>
            
            <h4 className="mt-4 text-lg font-bold">Changes to this Privacy Policy</h4>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any changes by posting the new Privacy Policy on our website.</p>
            
            <h4 className="mt-4 text-lg font-bold">Contact Us</h4>
            <p>If you have any questions about this Privacy Policy or the personal information we collect on our website, please contact us via our  <Link to="contact" className="underline hover:text-primary">contact form.</Link>{' '}
             By using our website, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy.
            </p>
          </body>
    </div>
  )
}

export default PrivacyPolicy