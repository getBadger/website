const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-12 prose prose-indigo mx-auto text-neutral-500">

          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-neutral-900 sm:text-5xl sm:tracking-tight lg:text-6xl">About getBadger</h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-neutral-500">
              Learn about our mission and the team behind our open source tools
            </p>
          </div>
          <p>
          Badger was born out of a desire to bring transparency to the online shopping and marketing experience. As tech-savvy users ourselves, we recognized the need for tools that empower shoppers and affiliate marketers with clear, honest information about the digital marketplace.
         </p>
          <p>
          We set out to build open source tools that put control back in the hands of the people. Our team of transparency advocates and digital marketing experts came together to create Badger - a suite of tools that provides insights, optimizes experiences, and ensures fairness in the digital economy.
          </p>
        
        </div>
        
        {/* <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-primary">2,000+</p>
              <p className="mt-2 text-sm font-medium text-neutral-500">Active Users</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-primary">94%</p>
              <p className="mt-2 text-sm font-medium text-neutral-500">User Satisfaction</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-primary">65%</p>
              <p className="mt-2 text-sm font-medium text-neutral-500">Average Conversion Boost</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-primary">15+</p>
              <p className="mt-2 text-sm font-medium text-neutral-500">Platform Integrations</p>
            </div>
          </div>
        </div> */}
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Our Mission</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-neutral-500 text-center">
              We're on a mission to empower both marketers and shoppers with transparent, powerful tools that level the playing field and create more value for everyone in the ecosystem.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <img src="https://i.imgur.com/xgshOou.jpeg" alt="Diego Rameriz" width={24} height={24} className="h-24 w-24 rounded-full bg-gray-200 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-neutral-900">Diego Rameriz</h3>
              <p className="text-sm text-neutral-500">Co-Founder</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <img src="https://i.imgur.com/mSwPqeS.jpeg" width={24} height={24} alt="Naquan Smith" className="h-24 w-24 rounded-full bg-gray-200 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-neutral-900">Naquan Smith</h3>
              <p className="text-sm text-neutral-500">Co-Founder</p>
            </div>
            
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
