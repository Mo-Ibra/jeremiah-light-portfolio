import Image from "next/image";
import SectionHeader from "./SectionHeader";

const Features = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader badgeText="Benefits & Features">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            <span className="text-primary">Exclusive Perks</span> You Get When{" "}
            <span className="text-primary">We Work Together</span>
          </h2>
        </SectionHeader>

        {/* Benefits Grid */}
        <div className="space-y-8">
          {/* First Row */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Content Management - 3/4 */}
            <div className="lg:col-span-3 bg-black rounded-4xl shadow-lg overflow-hidden flex flex-col">
              <div className="flex-1 bg-black relative">
                <Image
                  src="/images/features/1.png"
                  alt="Content Management System Interface"
                  width={800}
                  height={400}
                  className="w-full h-[400px] object-cover p-2 rounded-4xl"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Content Organisation & Management
                </h3>
                <p className="text-muted leading-relaxed">
                  Forget messy Google Drive folders and lost files. You get 24/7
                  access to a dedicated, AI-searchable creative hub. Every ad,
                  raw clip, and asset is perfectly organized and instantly
                  accessible, creating a valuable, evergreen content library for
                  your brand.
                </p>
              </div>
            </div>

            {/* Ads Reporting - 1/4 */}
            <div className="lg:col-span-1 bg-black rounded-4xl shadow-lg overflow-hidden flex flex-col">
              <div className="flex-1 bg-black relative">
                <Image
                  src="/images/features/2.png"
                  alt="Advertising Dashboard"
                  width={800}
                  height={400}
                  className="w-full h-[400px] object-cover p-2 rounded-4xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3">
                  Weekly Performance Reporting
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  You&apos;ll get a transparent report each week detailing what&apos;s
                  working and what&apos;s not, so we can iterate and drive better
                  results together.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Communication - 1/4 */}
            <div className="lg:col-span-1 bg-black rounded-4xl shadow-lg overflow-hidden flex flex-col">
              <div className="flex-1 bg-black relative">
                <Image
                  src="/images/features/3.png"
                  alt="Ads Reporting & Management"
                  width={800}
                  height={400}
                  className="w-full h-[400px] object-cover p-2 rounded-4xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3">
                  Direct & Rapid Communication
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  You get direct, same-day communication with me. No account
                  managers, no waiting - just fast, consistent support, whenever
                  you want.
                </p>
              </div>
            </div>

            {/* Psychographics - 3/4 */}
            <div className="lg:col-span-3 bg-black rounded-4xl shadow-lg overflow-hidden flex flex-col">
              <div className="flex-1 bg-black relative">
                <Image
                  src="/images/features/4.png"
                  alt="Content Management System Interface"
                  width={800}
                  height={400}
                  className="w-full h-[400px] object-cover p-2 rounded-4xl"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Proprietary Audience Insights
                </h3>
                <p className="text-muted leading-relaxed">
                  We go beyond basic demographics. Our proprietary database
                  tracks the emotional and behavioural psychographics of your
                  target audience. This allows us to craft ads with messaging
                  that resonates on a deeper level, leading to higher conversion
                  rates and stronger brand affinity.
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
