import { Link, ExternalLink, Shield } from 'lucide-react';
import { SiShopify, SiAmazon, SiWordpress, SiEbay, SiEtsy, SiWoocommerce } from 'react-icons/si';

const Integration = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
              Seamless Platform Integration
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-neutral-500">
              Connect with all major e-commerce and affiliate platforms. getBadger works with the platforms you already use.
            </p>
            
            <div className="mt-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex-shrink-0 h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                  <Link className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900">Universal compatibility</h3>
                  <p className="mt-1 text-sm text-neutral-500">Works with all major affiliate networks and e-commerce platforms.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex-shrink-0 h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                  <ExternalLink className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900">API-driven integration</h3>
                  <p className="mt-1 text-sm text-neutral-500">Connect via robust APIs with customizable webhooks and event triggers.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                  <Shield className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900">Secure data handling</h3>
                  <p className="mt-1 text-sm text-neutral-500">Enterprise-grade security for all your affiliate and customer data.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-medium text-neutral-900 mb-6">Supported Platforms</h3>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                  <div className="w-14 h-14 flex items-center justify-center mb-3">
                    <SiAmazon className="text-4xl text-[#FF9900]" />
                  </div>
                  <span className="text-sm font-medium text-neutral-900">Amazon</span>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                  <div className="w-14 h-14 flex items-center justify-center mb-3">
                    <SiShopify className="text-4xl text-[#7AB55C]" />
                  </div>
                  <span className="text-sm font-medium text-neutral-900">Shopify</span>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                  <div className="w-14 h-14 flex items-center justify-center mb-3">
                    <SiWordpress className="text-4xl text-[#21759B]" />
                  </div>
                  <span className="text-sm font-medium text-neutral-900">WordPress</span>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                  <div className="w-14 h-14 flex items-center justify-center mb-3">
                    <SiWoocommerce className="text-4xl text-[#7F54B3]" />
                  </div>
                  <span className="text-sm font-medium text-neutral-900">WooCommerce</span>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                  <div className="w-14 h-14 flex items-center justify-center mb-3">
                    <SiEbay className="text-4xl text-[#E53238]" />
                  </div>
                  <span className="text-sm font-medium text-neutral-900">eBay</span>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                  <div className="w-14 h-14 flex items-center justify-center mb-3">
                    <SiEtsy className="text-4xl text-[#F56400]" />
                  </div>
                  <span className="text-sm font-medium text-neutral-900">Etsy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
