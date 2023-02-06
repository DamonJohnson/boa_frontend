import React from 'react'

const TermsOfService = () => {
    return (
         <div className="text-secondary py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
          <h2 className="mb-4 text-4xl font-extrabold text-center">
            Terms of Service
          </h2>
          <body>
            <p className="pt-4">This Terms of Service policy governs the use of the ecommerce platform and the purchase of products through the platform.</p>
            
            <h4 className="mt-4 text-lg font-bold">Product Availability</h4>
            <p>While we make every effort to keep our product inventory updated, availability of products is subject to change without notice.</p>
            
            <h4 className="mt-4 text-lg font-bold">Order Processing</h4>
            <p>All orders are subject to acceptance and availability. We reserve the right to reject any order for any reason.</p>
            
            <h4 className="mt-4 text-lg font-bold">Payment Terms</h4>
            <p>Payment must be made at the time of purchase through the platform’s secure payment gateway.</p>
            
            <h4 className="mt-4 text-lg font-bold">Shipping and Delivery</h4>
            <p>Shipping and delivery times are estimates only and we are not responsible for any delay or failure to deliver. The customer is responsible for providing accurate shipping information.</p>
            
            <h4 className="mt-4 text-lg font-bold">Returns and Refunds</h4>
            <p>We offer a 30-day return policy for unused and unopened products. Refunds will be issued to the original method of payment.</p>
                
            <h4 className="mt-4 text-lg font-bold">Warranty</h4>
            <p>Our products come with a 90-day warranty against defects in materials and workmanship.</p>
                
            <h4 className="mt-4 text-lg font-bold">Limitation of Liability</h4>
            <p> In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our products or platform.</p>
                
            <h4 className="mt-4 text-lg font-bold">Intellectual Property</h4>
            <p>All intellectual property rights, including trademarks, trade names, and copyrights, are reserved.</p>
        
            <h4 className="mt-4 text-lg font-bold">Governing Law</h4>
            <p>These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction of Australia.</p>
            
            <h4 className="mt-4 text-lg font-bold">Changes to Terms of Service</h4>
            <p>We reserve the right to change these Terms of Service at any time. Your continued use of the platform following any changes indicates your acceptance of the new Terms of Service.</p>
            
            <h4 className="mt-4 text-lg font-bold">Contact Us</h4>
            <p>If you have any questions regarding these Terms of Service, please contact us through our <a href="contact" className="underline hover:text-primary">contact form.</a>
             </p>
          </body>
    </div>
    )
}

export default TermsOfService