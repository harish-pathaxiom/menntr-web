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
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center px-4 md:px-8 pt-20 pb-12">
        <div className="inline-block text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6">
          Enterprise Academic Management
        </div>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
          One platform to run academics,
          <br />
          assessments, and placements -<br />
          <span className="text-purple-600">at scale</span>
        </h1>

        <p className="text-base text-gray-600 max-w-2xl mx-auto mb-10">
          Menntr is a role-based platform for universities and colleges to
          manage administrators, faculty, students, assessments, and placement
          readiness with measurable outcomes.
        </p>

        <div className="flex justify-center gap-3 flex-wrap">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-sm">
            Request Demo
          </button>
          <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-6 py-3 rounded-lg transition-colors">
            Talk to Founders
          </button>
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
