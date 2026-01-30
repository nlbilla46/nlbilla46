import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, ArrowRight, ExternalLink, GraduationCap } from "lucide-react";

const Education = () => {
  const bachelorCourses = [
    {
      code: "CSE1505",
      name: "Information and Data Management",
      credits: "5 ECTS",
      instructors: ["Dr. A. Katsifodimos", "Dr. C. Lofi"],
      year: "1",
      period: "3",
      url: "https://www.studiegids.tudelft.nl/courses/study-guide/educations/14258"
    },
    {
      code: "CSE2430",
      name: "Operating Systems",
      credits: "5 ECTS",
      instructors: ["Dr. J. Decouchant", "Dr. K. Atasu"],
      year: "3",
      period: "3",
      url: "https://www.studiegids.tudelft.nl/courses/study-guide/educations/14270"
    }
  ];

  const masterCourses = [
    {
      code: "CS4160",
      name: "Blockchain Engineering",
      credits: "5 ECTS",
      lecturers: ["Dr. J.A. Pouwelse", "Dr. J. Decouchant"],
      period: "4",
      url: "https://www.studiegids.tudelft.nl/courses/study-guide/educations/14764"
    },
    {
      code: "CS4525",
      name: "Web-Scale Data Management",
      credits: "5 ECTS",
      lecturers: ["Dr. A. Katsifodimos", "Dr. C. Lofi"],
      period: "2",
      url: "https://www.studiegids.tudelft.nl/courses/study-guide/educations/14750"
    },
    {
      code: "CS4545",
      name: "Distributed Algorithms",
      credits: "5 ECTS",
      lecturers: ["Dr. J. Decouchant", "Dr. J.A. Pouwelse"],
      period: "2",
      url: "https://www.studiegids.tudelft.nl/courses/study-guide/educations/14765"
    },
    {
      code: "CS4550",
      name: "Distributed Data Systems",
      credits: "5 ECTS",
      lecturers: ["Dr. A. Katsifodimos", "Dr. K. Atasu"],
      period: "3",
      url: "https://www.studiegids.tudelft.nl/courses/study-guide/educations/14766"
    },
    {
      code: "CS4725",
      name: "Research Seminar on Scalable Learning Systems",
      credits: "5 ECTS",
      lecturers: ["Dr. K. Atasu", "Dr. Y. Chen"],
      period: "4",
      url: "https://www.studiegids.tudelft.nl/courses/study-guide/educations/14432"
    }
  ];

  const blockchainCertificate = [
    { code: "CS4520", name: "Security and Cryptography", url: "https://www.studiegids.tudelft.nl/a101_displayCourse.do?course_id=70109" },
    { code: "CS4545", name: "Distributed Algorithms", url: "https://www.studiegids.tudelft.nl/a101_displayCourse.do?course_id=70129" },
    { code: "CS4160", name: "Blockchain Engineering", url: "https://www.studiegids.tudelft.nl/a101_displayCourse.do?course_id=70129" }
  ];

  const stats = [
    { icon: BookOpen, value: "7+", label: "Courses Offered" },
    { icon: Users, value: "500+", label: "Students Annually" },
    { icon: Award, value: "Excellence", label: "Teaching Quality" }
  ];

  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Education & Learning
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer students education that prepares them for a leading role in science and engineering of
            data-intensive systems. This includes sharing our passion for topics from distributed &
            decentralised systems, Blockchain technology, federated learning, and scalable data management.
          </p>
          <p className="text-muted-foreground mt-4">
            TU Delft students can find all information on education in{" "}
            <a
              href="https://brightspace.tudelft.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Brightspace
            </a>
            .
          </p>
        </div>

        {/* Bachelor Courses */}
        <div className="mb-16 animate-slide-up">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mr-4">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-academic">Bachelor Courses</h3>
              <p className="text-muted-foreground">Foundational courses for undergraduate students</p>
            </div>
          </div>

          <Card className="border-border/50 hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left p-3 font-semibold text-academic">Course Code</th>
                      <th className="text-left p-3 font-semibold text-academic">Course Name</th>
                      <th className="text-left p-3 font-semibold text-academic">Credits</th>
                      <th className="text-left p-3 font-semibold text-academic">Instructor(s)</th>
                      <th className="text-left p-3 font-semibold text-academic">Year</th>
                      <th className="text-left p-3 font-semibold text-academic">Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bachelorCourses.map((course) => (
                      <tr key={course.code} className="border-b border-border/30">
                        <td className="p-3">
                          <a
                            href={course.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-semibold flex items-center"
                          >
                            {course.code}
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </td>
                        <td className="p-3 text-foreground">{course.name}</td>
                        <td className="p-3">
                          <Badge variant="outline" className="text-xs">{course.credits}</Badge>
                        </td>
                        <td className="p-3 text-muted-foreground text-sm">
                          {course.instructors.map((instructor, index) => (
                            <span key={instructor}>
                              {instructor}
                              {index < course.instructors.length - 1 && <br />}
                            </span>
                          ))}
                        </td>
                        <td className="p-3 text-center">{course.year}</td>
                        <td className="p-3 text-center">{course.period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Master Courses */}
        <div className="mb-16 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mr-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-academic">Master Courses</h3>
              <p className="text-muted-foreground">Advanced courses for graduate students</p>
            </div>
          </div>

          <Card className="border-border/50 hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left p-3 font-semibold text-academic">Course Code</th>
                      <th className="text-left p-3 font-semibold text-academic">Course Name</th>
                      <th className="text-left p-3 font-semibold text-academic">Credits</th>
                      <th className="text-left p-3 font-semibold text-academic">Lecturer(s)</th>
                      <th className="text-left p-3 font-semibold text-academic">Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    {masterCourses.map((course) => (
                      <tr key={course.code} className="border-b border-border/30">
                        <td className="p-3">
                          <a
                            href={course.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-semibold flex items-center"
                          >
                            {course.code}
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </td>
                        <td className="p-3 text-foreground">{course.name}</td>
                        <td className="p-3">
                          <Badge variant="outline" className="text-xs">{course.credits}</Badge>
                        </td>
                        <td className="p-3 text-muted-foreground text-sm">
                          {course.lecturers.map((lecturer, index) => (
                            <span key={lecturer}>
                              {lecturer}
                              {index < course.lecturers.length - 1 && <br />}
                            </span>
                          ))}
                        </td>
                        <td className="p-3 text-center">{course.period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Blockchain Certificate
        <div className="mb-16 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-card border-2 border-primary rounded-xl flex items-center justify-center mr-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-academic">Blockchain Certificate</h3>
              <p className="text-muted-foreground">Master students can qualify for a Blockchain Engineering Certificate</p>
            </div>
          </div>

          <Card className="border-border/50 hover:shadow-elegant transition-all duration-300 bg-gradient-card">
            <CardContent className="p-6">
              <p className="text-foreground/80 mb-6">
                Master Students can qualify for a Blockchain Engineering Certificate by taking the following courses:
              </p>
              <div className="space-y-3">
                {blockchainCertificate.map((course, index) => (
                  <div key={course.code} className="flex items-center p-4 bg-background/50 rounded-lg border border-border/30">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-semibold flex items-center"
                      >
                        {course.code} - {course.name}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div> */}

        {/* Master Thesis */}
        <div className="mb-16 animate-slide-up" style={{ animationDelay: '600ms' }}>
          <Card className="border-border/50 hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-academic">Master Thesis</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Master students who like to do their graduation thesis in DIS are encouraged to select
                at least two of the DIS-offered lectures.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="text-center group hover:shadow-elegant transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${800 + index * 100}ms` }}
            >
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                <div className="text-3xl font-bold text-academic mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '1200ms' }}>
          <Card className="max-w-2xl mx-auto bg-gradient-card border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-academic">
                Join Our Educational Journey
              </h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Interested in our courses or pursuing research in distributed systems?
                Explore our educational offerings and research opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-gradient-hero hover:shadow-glow transition-all duration-300" asChild>
                  <a href="https://brightspace.tudelft.nl/" target="_blank" rel="noopener noreferrer">
                    Access Brightspace
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" className="border-primary/20 hover:bg-primary/5" asChild>
                  <a href="https://www.studiegids.tudelft.nl/" target="_blank" rel="noopener noreferrer">
                    Course Catalog
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;