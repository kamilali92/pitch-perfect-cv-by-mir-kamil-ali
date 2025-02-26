
import { useState } from "react";
import { ResumeData } from "@/data/defaultResumeData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PlusCircle, Trash2 } from "lucide-react";
import { v4 as uuidv4 } from 'uuid';

interface ResumeEditorProps {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const ResumeEditor = ({ resumeData, setResumeData }: ResumeEditorProps) => {
  const [activeTab, setActiveTab] = useState("personal");

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeData({
          ...resumeData,
          personalInfo: {
            ...resumeData.personalInfo,
            profileImage: reader.result as string,
          },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const updatePersonalInfo = (field: keyof typeof resumeData.personalInfo, value: string) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value,
      },
    });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          id: uuidv4(),
          school: "",
          degree: "",
          year: "",
        },
      ],
    });
  };

  const updateEducation = (id: string, field: keyof typeof resumeData.education[0], value: string) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const removeEducation = (id: string) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter((edu) => edu.id !== id),
    });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        {
          id: uuidv4(),
          company: "",
          position: "",
          duration: "",
          description: "",
        },
      ],
    });
  };

  const updateExperience = (id: string, field: keyof typeof resumeData.experience[0], value: string) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const removeExperience = (id: string) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.filter((exp) => exp.id !== id),
    });
  };

  const addSkill = () => {
    setResumeData({
      ...resumeData,
      skills: [
        ...resumeData.skills,
        {
          id: uuidv4(),
          skill: "",
        },
      ],
    });
  };

  const updateSkill = (id: string, value: string) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.map((skill) =>
        skill.id === id ? { ...skill, skill: value } : skill
      ),
    });
  };

  const removeSkill = (id: string) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter((skill) => skill.id !== id),
    });
  };

  const addAward = () => {
    setResumeData({
      ...resumeData,
      awards: [
        ...resumeData.awards,
        {
          id: uuidv4(),
          title: "",
          organization: "",
          year: "",
        },
      ],
    });
  };

  const updateAward = (id: string, field: keyof typeof resumeData.awards[0], value: string) => {
    setResumeData({
      ...resumeData,
      awards: resumeData.awards.map((award) =>
        award.id === id ? { ...award, [field]: value } : award
      ),
    });
  };

  const removeAward = (id: string) => {
    setResumeData({
      ...resumeData,
      awards: resumeData.awards.filter((award) => award.id !== id),
    });
  };

  const addVolunteering = () => {
    setResumeData({
      ...resumeData,
      volunteering: [
        ...resumeData.volunteering,
        {
          id: uuidv4(),
          organization: "",
          role: "",
          description: "",
          year: "",
        },
      ],
    });
  };

  const updateVolunteering = (id: string, field: keyof typeof resumeData.volunteering[0], value: string) => {
    setResumeData({
      ...resumeData,
      volunteering: resumeData.volunteering.map((vol) =>
        vol.id === id ? { ...vol, [field]: value } : vol
      ),
    });
  };

  const removeVolunteering = (id: string) => {
    setResumeData({
      ...resumeData,
      volunteering: resumeData.volunteering.filter((vol) => vol.id !== id),
    });
  };

  const addTraining = () => {
    setResumeData({
      ...resumeData,
      training: [
        ...resumeData.training,
        {
          id: uuidv4(),
          course: "",
          institution: "",
          year: "",
        },
      ],
    });
  };

  const updateTraining = (id: string, field: keyof typeof resumeData.training[0], value: string) => {
    setResumeData({
      ...resumeData,
      training: resumeData.training.map((train) =>
        train.id === id ? { ...train, [field]: value } : train
      ),
    });
  };

  const removeTraining = (id: string) => {
    setResumeData({
      ...resumeData,
      training: resumeData.training.filter((train) => train.id !== id),
    });
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-4 mb-6">
        <TabsTrigger value="personal">Personal</TabsTrigger>
        <TabsTrigger value="education">Education & Skills</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="additional">Additional</TabsTrigger>
      </TabsList>

      <TabsContent value="personal" className="space-y-4">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={resumeData.personalInfo.name}
              onChange={(e) => updatePersonalInfo("name", e.target.value)}
              placeholder="e.g. John Doe"
            />
          </div>

          <div>
            <Label htmlFor="title">Professional Title</Label>
            <Input
              id="title"
              value={resumeData.personalInfo.title}
              onChange={(e) => updatePersonalInfo("title", e.target.value)}
              placeholder="e.g. Software Developer"
            />
          </div>

          <div>
            <Label htmlFor="aboutMe">About Me</Label>
            <Textarea
              id="aboutMe"
              value={resumeData.aboutMe}
              onChange={(e) =>
                setResumeData({ ...resumeData, aboutMe: e.target.value })
              }
              placeholder="Write a short bio about yourself"
              className="min-h-[120px]"
            />
          </div>

          <div>
            <Label htmlFor="profileImage">Profile Image</Label>
            <div className="flex items-center mt-2 space-x-4">
              {resumeData.personalInfo.profileImage && (
                <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-200">
                  <img
                    src={resumeData.personalInfo.profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <Input
                id="profileImage"
                type="file"
                accept="image/*"
                onChange={handleProfileImageChange}
                className="max-w-xs"
              />
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="education" className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Education</h3>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addEducation}
              className="flex items-center gap-1 border-gray-300 hover:bg-gray-100"
            >
              <PlusCircle size={16} />
              Add Education
            </Button>
          </div>

          {resumeData.education.map((edu) => (
            <div
              key={edu.id}
              className="p-4 mb-4 border border-gray-200 rounded-md bg-gray-50"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-medium">School/University</h4>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeEducation(edu.id)}
                  className="h-8 w-8 p-0 text-gray-500 hover:text-red-500"
                >
                  <Trash2 size={16} />
                  <span className="sr-only">Remove</span>
                </Button>
              </div>

              <div className="grid gap-4">
                <div>
                  <Label htmlFor={`school-${edu.id}`}>School Name</Label>
                  <Input
                    id={`school-${edu.id}`}
                    value={edu.school}
                    onChange={(e) =>
                      updateEducation(edu.id, "school", e.target.value)
                    }
                    placeholder="e.g. Harvard University"
                  />
                </div>

                <div>
                  <Label htmlFor={`degree-${edu.id}`}>Degree/Grade</Label>
                  <Input
                    id={`degree-${edu.id}`}
                    value={edu.degree}
                    onChange={(e) =>
                      updateEducation(edu.id, "degree", e.target.value)
                    }
                    placeholder="e.g. Bachelor of Science"
                  />
                </div>

                <div>
                  <Label htmlFor={`year-${edu.id}`}>Year</Label>
                  <Input
                    id={`year-${edu.id}`}
                    value={edu.year}
                    onChange={(e) =>
                      updateEducation(edu.id, "year", e.target.value)
                    }
                    placeholder="e.g. 2018-2022"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Skills</h3>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addSkill}
              className="flex items-center gap-1 border-gray-300 hover:bg-gray-100"
            >
              <PlusCircle size={16} />
              Add Skill
            </Button>
          </div>

          {resumeData.skills.map((skill) => (
            <div
              key={skill.id}
              className="flex items-center mb-2 gap-2"
            >
              <Input
                value={skill.skill}
                onChange={(e) => updateSkill(skill.id, e.target.value)}
                placeholder="e.g. Project Management"
                className="flex-1"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeSkill(skill.id)}
                className="h-8 w-8 p-0 text-gray-500 hover:text-red-500"
              >
                <Trash2 size={16} />
                <span className="sr-only">Remove</span>
              </Button>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="experience" className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Work Experience</h3>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addExperience}
              className="flex items-center gap-1 border-gray-300 hover:bg-gray-100"
            >
              <PlusCircle size={16} />
              Add Experience
            </Button>
          </div>

          {resumeData.experience.map((exp) => (
            <div
              key={exp.id}
              className="p-4 mb-4 border border-gray-200 rounded-md bg-gray-50"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-medium">Experience Details</h4>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeExperience(exp.id)}
                  className="h-8 w-8 p-0 text-gray-500 hover:text-red-500"
                >
                  <Trash2 size={16} />
                  <span className="sr-only">Remove</span>
                </Button>
              </div>

              <div className="grid gap-4">
                <div>
                  <Label htmlFor={`company-${exp.id}`}>Company</Label>
                  <Input
                    id={`company-${exp.id}`}
                    value={exp.company}
                    onChange={(e) =>
                      updateExperience(exp.id, "company", e.target.value)
                    }
                    placeholder="e.g. Google Inc."
                  />
                </div>

                <div>
                  <Label htmlFor={`position-${exp.id}`}>Position</Label>
                  <Input
                    id={`position-${exp.id}`}
                    value={exp.position}
                    onChange={(e) =>
                      updateExperience(exp.id, "position", e.target.value)
                    }
                    placeholder="e.g. Software Engineer"
                  />
                </div>

                <div>
                  <Label htmlFor={`duration-${exp.id}`}>Duration</Label>
                  <Input
                    id={`duration-${exp.id}`}
                    value={exp.duration}
                    onChange={(e) =>
                      updateExperience(exp.id, "duration", e.target.value)
                    }
                    placeholder="e.g. 2019 to 2022"
                  />
                </div>

                <div>
                  <Label htmlFor={`description-${exp.id}`}>Description</Label>
                  <Textarea
                    id={`description-${exp.id}`}
                    value={exp.description}
                    onChange={(e) =>
                      updateExperience(exp.id, "description", e.target.value)
                    }
                    placeholder="Describe your responsibilities and achievements"
                    className="min-h-[80px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="additional" className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Awards & Achievements</h3>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addAward}
              className="flex items-center gap-1 border-gray-300 hover:bg-gray-100"
            >
              <PlusCircle size={16} />
              Add Award
            </Button>
          </div>

          {resumeData.awards.map((award) => (
            <div
              key={award.id}
              className="p-4 mb-4 border border-gray-200 rounded-md bg-gray-50"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-medium">Award Details</h4>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeAward(award.id)}
                  className="h-8 w-8 p-0 text-gray-500 hover:text-red-500"
                >
                  <Trash2 size={16} />
                  <span className="sr-only">Remove</span>
                </Button>
              </div>

              <div className="grid gap-4">
                <div>
                  <Label htmlFor={`title-${award.id}`}>Award Title</Label>
                  <Input
                    id={`title-${award.id}`}
                    value={award.title}
                    onChange={(e) =>
                      updateAward(award.id, "title", e.target.value)
                    }
                    placeholder="e.g. Employee of the Year"
                  />
                </div>

                <div>
                  <Label htmlFor={`organization-${award.id}`}>Organization</Label>
                  <Input
                    id={`organization-${award.id}`}
                    value={award.organization}
                    onChange={(e) =>
                      updateAward(award.id, "organization", e.target.value)
                    }
                    placeholder="e.g. ABC Company"
                  />
                </div>

                <div>
                  <Label htmlFor={`year-${award.id}`}>Year</Label>
                  <Input
                    id={`year-${award.id}`}
                    value={award.year}
                    onChange={(e) =>
                      updateAward(award.id, "year", e.target.value)
                    }
                    placeholder="e.g. 2022"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Volunteering</h3>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addVolunteering}
              className="flex items-center gap-1 border-gray-300 hover:bg-gray-100"
            >
              <PlusCircle size={16} />
              Add Volunteering
            </Button>
          </div>

          {resumeData.volunteering.map((vol) => (
            <div
              key={vol.id}
              className="p-4 mb-4 border border-gray-200 rounded-md bg-gray-50"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-medium">Volunteering Details</h4>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeVolunteering(vol.id)}
                  className="h-8 w-8 p-0 text-gray-500 hover:text-red-500"
                >
                  <Trash2 size={16} />
                  <span className="sr-only">Remove</span>
                </Button>
              </div>

              <div className="grid gap-4">
                <div>
                  <Label htmlFor={`role-${vol.id}`}>Role</Label>
                  <Input
                    id={`role-${vol.id}`}
                    value={vol.role}
                    onChange={(e) =>
                      updateVolunteering(vol.id, "role", e.target.value)
                    }
                    placeholder="e.g. Volunteer Coordinator"
                  />
                </div>

                <div>
                  <Label htmlFor={`organization-${vol.id}`}>Organization/Description</Label>
                  <Input
                    id={`organization-${vol.id}`}
                    value={vol.organization}
                    onChange={(e) =>
                      updateVolunteering(vol.id, "organization", e.target.value)
                    }
                    placeholder="e.g. Red Cross"
                  />
                </div>

                <div>
                  <Label htmlFor={`description-${vol.id}`}>Additional Details</Label>
                  <Textarea
                    id={`description-${vol.id}`}
                    value={vol.description}
                    onChange={(e) =>
                      updateVolunteering(vol.id, "description", e.target.value)
                    }
                    placeholder="Additional details about your volunteering"
                    className="min-h-[80px]"
                  />
                </div>

                <div>
                  <Label htmlFor={`year-${vol.id}`}>Year</Label>
                  <Input
                    id={`year-${vol.id}`}
                    value={vol.year}
                    onChange={(e) =>
                      updateVolunteering(vol.id, "year", e.target.value)
                    }
                    placeholder="e.g. 2021"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Label htmlFor="interests">Interests</Label>
          <Textarea
            id="interests"
            value={resumeData.interests}
            onChange={(e) =>
              setResumeData({ ...resumeData, interests: e.target.value })
            }
            placeholder="Share your hobbies and interests"
            className="min-h-[100px]"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Training & Certifications</h3>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addTraining}
              className="flex items-center gap-1 border-gray-300 hover:bg-gray-100"
            >
              <PlusCircle size={16} />
              Add Training
            </Button>
          </div>

          {resumeData.training.map((train) => (
            <div
              key={train.id}
              className="p-4 mb-4 border border-gray-200 rounded-md bg-gray-50"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-medium">Training Details</h4>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeTraining(train.id)}
                  className="h-8 w-8 p-0 text-gray-500 hover:text-red-500"
                >
                  <Trash2 size={16} />
                  <span className="sr-only">Remove</span>
                </Button>
              </div>

              <div className="grid gap-4">
                <div>
                  <Label htmlFor={`course-${train.id}`}>Course/Certification</Label>
                  <Input
                    id={`course-${train.id}`}
                    value={train.course}
                    onChange={(e) =>
                      updateTraining(train.id, "course", e.target.value)
                    }
                    placeholder="e.g. Advanced JavaScript"
                  />
                </div>

                <div>
                  <Label htmlFor={`institution-${train.id}`}>Institution</Label>
                  <Input
                    id={`institution-${train.id}`}
                    value={train.institution}
                    onChange={(e) =>
                      updateTraining(train.id, "institution", e.target.value)
                    }
                    placeholder="e.g. Udemy"
                  />
                </div>

                <div>
                  <Label htmlFor={`year-${train.id}`}>Year</Label>
                  <Input
                    id={`year-${train.id}`}
                    value={train.year}
                    onChange={(e) =>
                      updateTraining(train.id, "year", e.target.value)
                    }
                    placeholder="e.g. 2022"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ResumeEditor;
