import Navbar from "@/components/Navbar";
import DashboardPreview from "@/components/DashboardPreview";
import FragmentedSystems from "@/components/FragmentedSystems";
import ValueProposition from "@/components/ValueProposition";
import RoleBasedArchitecture from "@/components/RoleBasedArchitecture";
import AutomatedAssessments from "@/components/AutomatedAssessments";
import WhyMentrr from "@/components/WhyMentrr";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import InterviewReadiness from "@/components/InterviewReadiness";
import PlacementVisibility from "@/components/PlacementVisibility";
import InstitutionalCommunication from "@/components/InstitutionalCommunication";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative text-center px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #E8EEFF 100%)",
        }}
      >
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="inline-block text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6">
            Enterprise Academic Management
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4 sm:mb-6 px-2">
            One platform to run academics,
            <br className="hidden sm:block" />
            <span className="sm:inline block">
              {" "}
              assessments, and placements
            </span>
            <br className="hidden sm:block" />
            <span className="text-[#904BFF]">at scale</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-4">
            Menntr is a role-based platform for universities and colleges to
            manage administrators, faculty, students, assessments, and placement
            readiness with measurable outcomes.
          </p>

          <div className="flex justify-center gap-3 flex-wrap px-4">
            <button className="bg-[linear-gradient(90deg,_#904BFF_0%,_#C053C2_100%)] hover:opacity-95 text-white font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md">
              Request Demo
            </button>
            <button className="border border-[#E1D3E8] text-[#6C5477] hover:bg-gray-50 font-medium px-6 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all duration-500">
              Talk to Founders
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <DashboardPreview />
      <FragmentedSystems />
      <ValueProposition />
      <RoleBasedArchitecture />
      <AutomatedAssessments />
      <InterviewReadiness />
      <PlacementVisibility />
      <InstitutionalCommunication />
      <WhyMentrr />
      <CTASection />
      <Footer />
    </main>
  );
}
