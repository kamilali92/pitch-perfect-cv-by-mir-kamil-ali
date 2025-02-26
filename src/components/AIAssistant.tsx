
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeData } from "@/data/defaultResumeData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

interface AIAssistantProps {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const AIAssistant = ({ resumeData, setResumeData }: AIAssistantProps) => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("enhance");
  const { toast } = useToast();

  const enhancementPrompts = [
    "Make my work experience sound more professional",
    "Improve my 'About Me' section with more compelling language",
    "Suggest skills that would be relevant for my experience",
    "Optimize my resume for ATS systems",
    "Improve the clarity and impact of my achievements",
  ];

  const handleAIEnhance = (section?: string) => {
    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      switch (section) {
        case "about":
          setResumeData({
            ...resumeData,
            aboutMe:
              "I am a dedicated, organized High School Student with excellent time management skills, seeking part-time and future full-time opportunities. With valuable customer service experience gained at my family's cafe, I've developed strong interpersonal skills and a passion for client satisfaction. I quickly adapt to new environments, enjoy acquiring new skills, and consistently demonstrate reliability and punctuality. I'm eager to contribute my enthusiasm and work ethic to your organization.",
          });
          break;
        case "skills":
          const enhancedSkills = [
            ...resumeData.skills,
            { id: "skill-ai-1", skill: "Customer Relationship Management" },
            { id: "skill-ai-2", skill: "Inventory Management" },
            { id: "skill-ai-3", skill: "Effective Time Management" },
          ];
          setResumeData({
            ...resumeData,
            skills: enhancedSkills,
          });
          break;
        case "experience":
          const enhancedExperience = resumeData.experience.map((exp) => {
            if (exp.company === "Roseville Coffee Shop") {
              return {
                ...exp,
                description:
                  "Provided exceptional customer service while efficiently operating point-of-sale systems and handling cash and credit payments. Prepared and served high-quality beverages according to company standards. Maintained a clean and organized work environment while managing inventory and restocking supplies.",
              };
            }
            if (exp.company === "Babysitting") {
              return {
                ...exp,
                description:
                  "Responsibly cared for children up to 8 years old, ensuring their safety and well-being. Planned and facilitated age-appropriate educational activities and games. Prepared nutritious meals and snacks, maintained cleanliness, and communicated effectively with parents about children's activities and behavior.",
              };
            }
            return exp;
          });
          setResumeData({
            ...resumeData,
            experience: enhancedExperience,
          });
          break;
        default:
          // Process custom prompt
          toast({
            title: "AI Enhancement Applied",
            description: "Your resume has been enhanced based on your prompt.",
          });
          break;
      }
      
      setIsLoading(false);
      
      toast({
        title: "AI Enhancement Complete",
        description: "Your resume has been improved with AI suggestions.",
      });
    }, 1500);
  };

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    handleAIEnhance();
    setPrompt("");
  };

  return (
    <Card className="p-6 shadow-sm border border-gray-200 bg-white rounded-xl">
      <div className="flex items-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 mr-2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
        <h2 className="text-xl font-semibold text-gray-800">AI Resume Assistant</h2>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="enhance">Quick Enhance</TabsTrigger>
          <TabsTrigger value="custom">Custom Prompt</TabsTrigger>
        </TabsList>

        <TabsContent value="enhance" className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-medium text-gray-800 mb-3">AI-Powered Enhancements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Button
                variant="outline"
                size="sm"
                className="justify-start text-sm border-gray-300 hover:bg-gray-100 h-auto py-2 px-3"
                onClick={() => handleAIEnhance("about")}
                disabled={isLoading}
              >
                Enhance About Me Section
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="justify-start text-sm border-gray-300 hover:bg-gray-100 h-auto py-2 px-3"
                onClick={() => handleAIEnhance("skills")}
                disabled={isLoading}
              >
                Suggest Relevant Skills
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="justify-start text-sm border-gray-300 hover:bg-gray-100 h-auto py-2 px-3"
                onClick={() => handleAIEnhance("experience")}
                disabled={isLoading}
              >
                Improve Work Descriptions
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="justify-start text-sm border-gray-300 hover:bg-gray-100 h-auto py-2 px-3"
                onClick={() => handleAIEnhance()}
                disabled={isLoading}
              >
                ATS Optimization
              </Button>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-medium text-gray-800 mb-3">Suggested Prompts</h3>
            <div className="space-y-2">
              {enhancementPrompts.map((enhancePrompt, index) => (
                <div
                  key={index}
                  className="p-2 rounded-md border border-gray-200 bg-white cursor-pointer hover:bg-gray-100 transition-colors text-sm text-gray-700"
                  onClick={() => {
                    setActiveTab("custom");
                    setPrompt(enhancePrompt);
                  }}
                >
                  {enhancePrompt}
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="custom">
          <form onSubmit={handlePromptSubmit} className="space-y-4">
            <Textarea
              placeholder="Describe how you'd like to improve your resume..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[120px] border-gray-300"
            />
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || !prompt.trim()}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                  Generate with AI
                </>
              )}
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default AIAssistant;
