
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ResumeEditor from "@/components/ResumeEditor";
import ResumePreview from "@/components/ResumePreview";
import { defaultResumeData } from "@/data/defaultResumeData";
import Header from "@/components/Header";
import AIAssistant from "@/components/AIAssistant";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, BorderStyle, WidthType, AlignmentType } from "docx";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [resumeData, setResumeData] = useState(defaultResumeData);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const exportPDF = async () => {
    if (!resumeRef.current) return;
    
    toast({
      title: "Creating PDF",
      description: "Please wait while we generate your PDF...",
    });

    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${resumeData.personalInfo.name.replace(/\s+/g, '_')}_resume.pdf`);
      
      toast({
        title: "PDF Created!",
        description: "Your resume has been exported as PDF successfully.",
      });
    } catch (error) {
      console.error("Error exporting PDF:", error);
      toast({
        title: "Export Failed",
        description: "There was an error exporting your resume to PDF.",
        variant: "destructive",
      });
    }
  };

  const exportDOCX = async () => {
    try {
      toast({
        title: "Creating DOCX",
        description: "Please wait while we generate your DOCX file...",
      });

      const { personalInfo, aboutMe, education, experience, skills, awards, volunteering, interests, training } = resumeData;
      
      // Create document
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                text: personalInfo.name,
                heading: HeadingLevel.HEADING_1,
                alignment: AlignmentType.CENTER,
              }),
              new Paragraph({
                text: personalInfo.title,
                alignment: AlignmentType.CENTER,
                spacing: {
                  after: 400,
                },
              }),
              
              // About Me
              new Paragraph({
                text: "ABOUT ME",
                heading: HeadingLevel.HEADING_2,
                spacing: {
                  before: 400,
                  after: 200,
                },
              }),
              new Paragraph({
                text: aboutMe,
                spacing: {
                  after: 400,
                },
              }),
              
              // Experience
              new Paragraph({
                text: "EXPERIENCE",
                heading: HeadingLevel.HEADING_2,
                spacing: {
                  before: 400,
                  after: 200,
                },
              }),
              ...experience.flatMap(exp => [
                new Paragraph({
                  text: exp.company,
                  heading: HeadingLevel.HEADING_3,
                  spacing: {
                    before: 200,
                  },
                }),
                new Paragraph({
                  children: [
                    new TextRun({ text: exp.position, bold: true }),
                    new TextRun({ text: ` — ${exp.duration}` }),
                  ],
                }),
                new Paragraph({
                  text: exp.description,
                  spacing: {
                    after: 200,
                  },
                }),
              ]),
              
              // Education
              new Paragraph({
                text: "EDUCATION",
                heading: HeadingLevel.HEADING_2,
                spacing: {
                  before: 400,
                  after: 200,
                },
              }),
              ...education.flatMap(edu => [
                new Paragraph({
                  text: edu.school,
                  heading: HeadingLevel.HEADING_3,
                  spacing: {
                    before: 200,
                  },
                }),
                new Paragraph({
                  children: [
                    new TextRun({ text: edu.degree }),
                    new TextRun({ text: ` (${edu.year})` }),
                  ],
                  spacing: {
                    after: 200,
                  },
                }),
              ]),
              
              // Skills
              new Paragraph({
                text: "SKILLS",
                heading: HeadingLevel.HEADING_2,
                spacing: {
                  before: 400,
                  after: 200,
                },
              }),
              ...skills.map(skill => new Paragraph({
                text: `• ${skill.skill}`,
                spacing: {
                  before: 100,
                },
              })),
              
              // Awards
              ...(awards.length > 0 ? [
                new Paragraph({
                  text: "AWARDS",
                  heading: HeadingLevel.HEADING_2,
                  spacing: {
                    before: 400,
                    after: 200,
                  },
                }),
                ...awards.flatMap(award => [
                  new Paragraph({
                    children: [
                      new TextRun({ text: award.title, bold: true }),
                      new TextRun({ text: ` — ${award.organization} (${award.year})` }),
                    ],
                    spacing: {
                      before: 100,
                    },
                  }),
                ]),
              ] : []),
              
              // Volunteering
              ...(volunteering.length > 0 ? [
                new Paragraph({
                  text: "VOLUNTEERING",
                  heading: HeadingLevel.HEADING_2,
                  spacing: {
                    before: 400,
                    after: 200,
                  },
                }),
                ...volunteering.flatMap(vol => [
                  new Paragraph({
                    children: [
                      new TextRun({ text: vol.role, bold: true }),
                      new TextRun({ text: ` — ${vol.organization}` }),
                    ],
                    spacing: {
                      before: 100,
                    },
                  }),
                  ...(vol.description ? [
                    new Paragraph({
                      text: vol.description,
                    }),
                  ] : []),
                  new Paragraph({
                    text: vol.year,
                    spacing: {
                      after: 100,
                    },
                  }),
                ]),
              ] : []),
              
              // Interests
              ...(interests ? [
                new Paragraph({
                  text: "INTERESTS",
                  heading: HeadingLevel.HEADING_2,
                  spacing: {
                    before: 400,
                    after: 200,
                  },
                }),
                new Paragraph({
                  text: interests,
                }),
              ] : []),
              
              // Training
              ...(training.length > 0 ? [
                new Paragraph({
                  text: "TRAINING & CERTIFICATIONS",
                  heading: HeadingLevel.HEADING_2,
                  spacing: {
                    before: 400,
                    after: 200,
                  },
                }),
                ...training.flatMap(train => [
                  new Paragraph({
                    children: [
                      new TextRun({ text: train.course, bold: true }),
                      new TextRun({ text: ` — ${train.institution} (${train.year})` }),
                    ],
                    spacing: {
                      before: 100,
                    },
                  }),
                ]),
              ] : []),
            ],
          },
        ],
      });
      
      // Generate blob from document
      const blob = await Packer.toBlob(doc);
      
      // Create download link and trigger download
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${resumeData.personalInfo.name.replace(/\s+/g, '_')}_resume.docx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "DOCX Created!",
        description: "Your resume has been exported as DOCX successfully.",
      });
    } catch (error) {
      console.error("Error exporting DOCX:", error);
      toast({
        title: "Export Failed",
        description: "There was an error exporting your resume to PDF.",
        variant: "destructive",
      });
    }
  };

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
                  <div ref={resumeRef}>
                    <ResumePreview resumeData={resumeData} />
                  </div>
                </div>
                <div className="mt-6 flex gap-3 justify-center">
                  <Button 
                    variant="outline" 
                    className="border-gray-300 hover:bg-gray-100"
                    onClick={exportPDF}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Export PDF
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-gray-300 hover:bg-gray-100"
                    onClick={exportDOCX}
                  >
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
