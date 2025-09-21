import Image from "next/image";
import SectionHeader from "./SectionHeader";

const Features = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader badgeText="Benefits & Features">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-primary">Exclusive Perks</span> You Get When{" "}
            <span className="text-primary">We Work Together</span>
          </h2>
        </SectionHeader>

        {/* Benefits Grid */}
        <div className="space-y-8">
          {/* First Row */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Content Management - 3/4 */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <div className="flex-1 bg-gray-900 relative">
                <Image
                  src="/images/features/1.png"
                  alt="Content Management System Interface"
                  width={800}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Content Organisation & Management
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  During our partnership all content will be organised...
                </p>
              </div>
            </div>

            {/* Ads Reporting - 1/4 */}
            <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <div className="flex-1 bg-gray-100 relative">
                <Image
                  src="/images/features/2.png"
                  alt="Advertising Dashboard"
                  width={800}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Ads Reporting & Management
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Each ad that is ran for your brand will be tracked...
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Communication - 1/4 */}
            <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <div className="flex-1 bg-gray-100 relative">
                <Image
                  src="/images/features/3.png"
                  alt="Ads Reporting & Management"
                  width={800}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Ads Reporting & Management
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Each ad that is ran for your brand will be tracked...
                </p>
              </div>
            </div>

            {/* Psychographics - 3/4 */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <div className="flex-1 bg-gray-900 relative">
                <Image
                  src="/images/features/4.png"
                  alt="Content Management System Interface"
                  width={800}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Content Organisation & Management
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  During our partnership all content will be organised...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
