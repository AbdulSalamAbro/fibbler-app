import Header from "@/app/components/common/Header/Header";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

interface StepProps {
  title: string;
  description: string;
  imgSrc: string;
  warning?: string;
  information?: string;
}

const Step = ({ title, description, imgSrc, information }: StepProps) => {
  return (
    <div className="rounded-[16px] border-[4px] border-[#181127] bg-[#fcfbfd] p-6 shadow-md">
      <h3 className="text-[#181127] text-[18px] lg:text-[20px] font-[600] mb-2">
        {title}
      </h3>
      <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500]">
        {description}
      </p>
      {information && (
        <div className="rounded-md bg-blue-50 p-4 mt-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <InformationCircleIcon
                className="h-5 w-5 text-blue-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm text-blue-700">{information}</p>
            </div>
          </div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={title}
        className="mt-4 w-full rounded-[8px] border border-[#181127]"
      />
    </div>
  );
};

const HubSpotGuide = () => {
  return (
    <main>
      <Header />
      <section className="xl:pt-[106px] md:pt-[70px] pt-[50px] pb-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto text-center max-w-[863px] mb-[35px]">
            <h1 className="text-[#181127] font-[600] text-[25px] lg:text-[44px] leading-[109.7%] tracking-[0.44px]">
              How to Connect to HubSpot
            </h1>
          </div>
          <div className="space-y-8">
            <Step
              title="Go to Data Sources"
              description="Navigate to the 'Data Sources' section on your dashboard."
              imgSrc="/assets/img/article/data_sources_tab.webp"
            />
            <Step
              title="Connect to HubSpot"
              description="Locate HubSpot in the list and click the 'Connect' button."
              imgSrc="/assets/img/article/connect.webp"
            />
            <Step
              title="Sign In to Your HubSpot Account"
              description="Enter your HubSpot credentials to authorize access."
              information="You need the App Marketplace access permission set."
              imgSrc="/assets/img/article/login.webp"
            />
            <Step
              title="Select the Account"
              description="Choose the HubSpot account you wish to integrate."
              imgSrc="/assets/img/article/choose_account.webp"
            />
            <Step
              title="Connect to the Fibbler App"
              description="Finalize the connection by selecting 'Connect to Fibbler App'."
              imgSrc="/assets/img/article/connecting.webp"
            />
            <div className="mt-8 text-center font-[600] text-[#181127] text-[16px] lg:text-[18px]">
              <p>🚀 Finished! You can now load historical data.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HubSpotGuide;
