
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ResumeEditor from "@/components/ResumeEditor";
import ResumePreview from "@/components/ResumePreview";
import { defaultResumeData } from "@/data/defaultResumeData";
import Header from "@/components/Header";
import AIAssistant from "@/components/AIAssistant";

const Index = () => {
  const [resumeData, setResumeData] = useState(defaultResumeData);
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Pitch Perfect CV
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create a professional resume in minutes with our AI-powered resume builder. 
            Get smart suggestions, ATS-friendly formatting, and professionally designed templates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <Card className="p-6 shadow-sm border border-gray-200 bg-white rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Edit Your Resume</h2>
                <Button 
                  onClick={() => setShowAIAssistant(!showAIAssistant)}
                  variant="outline"
                  className="flex items-center gap-2 border-gray-300 hover:bg-gray-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
                  AI Assistant
                </Button>
              </div>
              <ResumeEditor resumeData={resumeData} setResumeData={setResumeData} />
            </Card>
            {showAIAssistant && <AIAssistant resumeData={resumeData} setResumeData={setResumeData} />}
          </div>
          <div className="lg:col-span-5">
            <div className="sticky top-8">
              <Card className="p-6 shadow-sm border border-gray-200 bg-white rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Preview</h2>
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <ResumePreview resumeData={resumeData} />
                </div>
                <div className="mt-6 flex gap-3 justify-center">
                  <Button variant="outline" className="border-gray-300 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Export PDF
                  </Button>
                  <Button variant="outline" className="border-gray-300 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Export DOCX
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
