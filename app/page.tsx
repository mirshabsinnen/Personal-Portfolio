import { Suspense } from "react";
import { connection } from "next/server";
import Navbar from "@/components/Navbar";

async function CurrentYear() {
  await connection();
  return new Date().getFullYear();
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#171717]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2"
      >
        
<div>
  <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
    Welcome to my portfolio
  </p>

  <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Hi, I'm Mirshab.
    <br />
    <span className="text-3xl text-blue-600 sm:text-4xl lg:text-[2.75rem]">
          Technology & Business
    </span>
  </h1>

  <p className="mt-6 max-w-lg text-base leading-8 text-gray-600">
    I'm an Information Technology undergraduate at SLIIT
    interested in how technology, data and problem-solving
    can create meaningful solutions. Through university
    projects and professional experience in finance, I've
    developed an interest in software development, business
    and data analysis, quality assurance, and mobile
    applications.
  </p>

  <div className="mt-9 flex flex-wrap gap-4">
    <a
      href="#projects"
      className="rounded-full bg-blue-600 px-7 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
    >
      Explore My Work
    </a>

    <a
      href="#contact"
      className="rounded-full border border-gray-300 px-7 py-3 text-sm font-medium transition duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-50"
    >
      Get in Touch
    </a>
  </div>

  <p className="mt-10 text-sm text-gray-500">
    Based in Sri Lanka
  </p>
</div>


        {/* Profile Photo Placeholder */}
        
<div className="flex justify-center md:justify-end">
  <div className="group relative aspect-square w-full max-w-sm">

    {/* Decorative background */}
    <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-blue-100 blur-2xl transition duration-500 group-hover:bg-blue-200" />
    <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-indigo-100 blur-2xl" />

    {/* Main profile card */}
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-blue-50 to-gray-100 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

      {/* Decorative circle */}
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-blue-200/60" />
      <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full border border-blue-200/60" />

      <div className="relative z-10 text-center">

        <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-indigo-600 text-5xl font-bold text-white shadow-lg transition duration-500 group-hover:scale-105">
          M
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
          Mirshab
        </h3>

        <p className="mt-2 text-sm font-medium text-blue-600">
          IT Undergraduate at SLIIT
        </p>

        <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-blue-500" />

        <p className="mt-4 text-sm text-gray-500">
          Technology · Data · Problem Solving
        </p>

      </div>

      {/* Bottom label */}
      <div className="absolute bottom-6 rounded-full border border-white/80 bg-white/80 px-5 py-2 text-xs font-medium text-gray-600 shadow-sm backdrop-blur">
        Based in Sri Lanka
      </div>

    </div>
  </div>
</div>

      </section>

      {/* About Section */}
      
<section
  id="about"
  className="relative overflow-hidden border-t border-gray-200 bg-white px-6 py-28"
>
  <div className="mx-auto max-w-6xl">

    {/* Section heading */}
    <div className="mb-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
        A little about me
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Beyond the <span className="text-blue-600">code.</span>
      </h2>
    </div>

    {/* Main content */}
    <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

      {/* Introduction */}
      <div>
        <h3 className="max-w-xl text-2xl font-semibold leading-relaxed tracking-tight text-gray-900 sm:text-3xl">
          Exploring technology, understanding problems and building meaningful solutions.
        </h3>

        <p className="mt-8 max-w-xl text-base leading-8 text-gray-600">
          I'm currently pursuing a BSc (Hons) in Information
          Technology at SLIIT. My academic journey has given me
          opportunities to work on practical projects involving
          software development, databases and modern application
          technologies.
        </p>

        <p className="mt-5 max-w-xl text-base leading-8 text-gray-600">
          I'm interested in exploring different areas of IT,
          from developing applications and analysing data to
          understanding software quality. I enjoy collaborating
          with others, learning new technologies and continuously
          challenging myself to grow.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <div className="h-px w-12 bg-blue-600" />
          <p className="text-sm font-medium text-gray-500">
            Always learning. Always building.
          </p>
        </div>
      </div>

      {/* Areas of interest */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
            Areas of Interest
          </h3>
          <span className="text-xs text-gray-400">01 — 04</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">

          <div className="group rounded-2xl border border-gray-200 bg-[#fafafa] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-lg">
            <span className="text-sm font-medium text-blue-600">01</span>
            <h4 className="mt-5 text-lg font-semibold text-gray-900">
              Full Stack Development
            </h4>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Building web applications and working across frontend and backend technologies.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-[#fafafa] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-lg">
            <span className="text-sm font-medium text-blue-600">02</span>
            <h4 className="mt-5 text-lg font-semibold text-gray-900">
              Business & Data Analysis
            </h4>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Understanding information, identifying patterns and supporting better decisions.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-[#fafafa] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-lg">
            <span className="text-sm font-medium text-blue-600">03</span>
            <h4 className="mt-5 text-lg font-semibold text-gray-900">
              Quality Assurance
            </h4>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Exploring software testing, reliability and improving user experiences.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-[#fafafa] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-lg">
            <span className="text-sm font-medium text-blue-600">04</span>
            <h4 className="mt-5 text-lg font-semibold text-gray-900">
              Mobile Development
            </h4>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Exploring mobile technologies and developing application experiences.
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


      {/* Skills Section */}
      

<section
  id="skills"
  className="border-t border-gray-200 bg-[#fafafa] px-6 py-28"
>
  <div className="mx-auto max-w-6xl">
    {/* Section heading */}
    <div className="mb-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
        My technical toolkit
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Skills & <span className="text-blue-600">Expertise.</span>
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
        Technologies and tools I've explored through academic projects,
        practical development experience, software testing and continuous learning.
      </p>
    </div>

    {/* Skills grid */}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

      {/* Programming */}
      <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
        <div className="mb-7 flex items-center justify-between">
          <span className="text-sm font-medium text-blue-600">01</span>
          <span className="text-xs text-gray-400">FOUNDATIONS</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          Programming Languages
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Languages used across software development and academic projects.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["JavaScript", "TypeScript", "Java", "PHP", "Kotlin", "Dart", "SQL"].map((skill) => (
            <span key={skill} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 transition group-hover:border-blue-100">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Frontend */}
      <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
        <div className="mb-7 flex items-center justify-between">
          <span className="text-sm font-medium text-blue-600">02</span>
          <span className="text-xs text-gray-400">WEB</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          Frontend Development
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Building web interfaces and interactive application experiences.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["React", "Next.js", "Tailwind CSS", "Vite"].map((skill) => (
            <span key={skill} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 transition group-hover:border-blue-100">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
        <div className="mb-7 flex items-center justify-between">
          <span className="text-sm font-medium text-blue-600">03</span>
          <span className="text-xs text-gray-400">SERVER</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          Backend Development
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Developing server-side applications, APIs and application logic.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["Node.js", "Express.js", "Spring Boot", "REST APIs"].map((skill) => (
            <span key={skill} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 transition group-hover:border-blue-100">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Databases */}
      <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
        <div className="mb-7 flex items-center justify-between">
          <span className="text-sm font-medium text-blue-600">04</span>
          <span className="text-xs text-gray-400">DATA</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          Databases & Storage
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Working with relational databases, NoSQL databases and local storage.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["PostgreSQL", "MySQL", "MongoDB", "Hive"].map((skill) => (
            <span key={skill} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 transition group-hover:border-blue-100">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
        <div className="mb-7 flex items-center justify-between">
          <span className="text-sm font-medium text-blue-600">05</span>
          <span className="text-xs text-gray-400">APPLICATIONS</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          Mobile Development
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Developing cross-platform mobile applications and Android solutions.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["Flutter", "React Native", "Expo", "Kotlin", "Android Studio"].map((skill) => (
            <span key={skill} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 transition group-hover:border-blue-100">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Software Testing and QA */}
      <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
        <div className="mb-7 flex items-center justify-between">
          <span className="text-sm font-medium text-blue-600">06</span>
          <span className="text-xs text-gray-400">QUALITY</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          Software Testing & QA
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Applying testing techniques to validate application functionality,
          identify defects and improve software quality.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Manual Testing",
            "Functional Testing",
            "Regression Testing",
            "Test Case Design",
            "Bug Reporting",
            "API Testing",
            "Postman",
            "Unit Testing",
          ].map((skill) => (
            <span key={skill} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 transition group-hover:border-blue-100">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Analytics and tools */}
      <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
        <div className="mb-7 flex items-center justify-between">
          <span className="text-sm font-medium text-blue-600">07</span>
          <span className="text-xs text-gray-400">PRODUCTIVITY</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          Analytics & Tools
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Tools for data analysis, visualization, development and collaboration.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["Power BI", "Microsoft Excel", "Git", "GitHub", "VS Code", "Jira", "Notion"].map((skill) => (
            <span key={skill} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 transition group-hover:border-blue-100">
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>

    {/* Closing note */}
    <div className="mt-12 border-t border-gray-200 pt-7">
      <p className="text-sm leading-7 text-gray-500">
        My technical toolkit continues to evolve as I explore new technologies
        and gain experience through practical projects.
      </p>
    </div>
  </div>
</section>



      {/* Projects Section */}
      
<section
  id="projects"
  className="border-t border-gray-200 bg-white px-6 py-28"
>
  <div className="mx-auto max-w-6xl">

    {/* Section heading */}
    <div className="mb-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
        Selected work
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Projects & <span className="text-blue-600">Experience.</span>
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
        A selection of academic and personal projects showcasing my
        experience across web development, mobile applications,
        databases and problem-solving.
      </p>
    </div>

    {/* Projects grid */}
    <div className="grid gap-6 md:grid-cols-2">

      {/* AgriConnect */}
      <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm font-medium text-blue-600">01 / WEB DEVELOPMENT</span>
          <span className="text-xs text-gray-400">FULL STACK</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
          AgriConnect
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          A web-based agricultural marketplace connecting farmers,
          consumers and delivery agents through a unified platform.
        </p>

        <div className="mt-6">
          <p className="text-sm font-semibold text-gray-900">
            My contribution
          </p>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Contributed to user management, authentication,
            authorization, role-based access control and user-related
            CRUD operations.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {["Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL"].map((tech) => (
            <span key={tech} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-6 pt-8 text-sm font-semibold">
          <a
            href="https://github.com/senalgalagedara/AgriConnect-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 transition-colors hover:text-blue-800"
          >
            Frontend ↗
          </a>
          <a
            href="https://github.com/senalgalagedara/AgriConnect-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 transition-colors hover:text-blue-800"
          >
            Backend ↗
          </a>
        </div>
      </div>

      {/* OneCampus */}
      <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm font-medium text-blue-600">02 / WEB DEVELOPMENT</span>
          <span className="text-xs text-gray-400">FULL STACK</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
          OneCampus
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          A student support and communication platform designed
          to improve interaction between students and lecturers.
        </p>

        <div className="mt-6">
          <p className="text-sm font-semibold text-gray-900">
            My contribution
          </p>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Worked on user management, authentication, role-based
            access control and feedback management functionality.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"].map((tech) => (
            <span key={tech} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-8">
          <a
            href="https://github.com/AkinduGunasekara/Student_Support_And_Communication_Management_System"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
          >
            View GitHub ↗
          </a>
        </div>
      </div>

      {/* SmartCampus */}
      <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm font-medium text-blue-600">03 / WEB DEVELOPMENT</span>
          <span className="text-xs text-gray-400">FULL STACK</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
          SmartCampus
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          An academic group project focused on developing a
          smart campus web application using modern frontend
          and backend technologies.
        </p>

        <div className="mt-6">
          <p className="text-sm font-semibold text-gray-900">
            Project focus
          </p>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Collaborative development involving frontend
            implementation, backend services and database integration.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {["React", "Java", "Spring Boot", "MySQL", "Spring Security"].map((tech) => (
            <span key={tech} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-8">
          <a
            href="https://github.com/gaganakalhara08/it3030-paf-2026-smart-campus-group-WE-165"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
          >
            View GitHub ↗
          </a>
        </div>
      </div>

      {/* SuwaSeva */}
      <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm font-medium text-blue-600">04 / MOBILE DEVELOPMENT</span>
          <span className="text-xs text-gray-400">HEALTHCARE</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
          SuwaSeva Hospital OPD
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          A hospital outpatient department management application
          designed to support appointment workflows and patient-related
          services.
        </p>

        
        <div className="mt-6">
          <p className="text-sm font-semibold text-gray-900">
             My contribution
          </p>
         <p className="mt-2 text-sm leading-6 text-gray-600">
              Implemented login and signup functionality and developed
              the complete patient-side workflow, covering patient
              interactions and appointment-related processes.
         </p>
        </div>


        <div className="mt-6 flex flex-wrap gap-2">
          {["React Native", "Expo", "Node.js", "Express.js", "MongoDB", "Axios"].map((tech) => (
            <span key={tech} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-8">
          <a
            href="https://github.com/mirshabsinnen/Suwa-Seva-Hospital-OPD/tree/feature/patient-feedback"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
          >
            View GitHub ↗
          </a>
        </div>
      </div>

      {/* Finance Tracker */}
      <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm font-medium text-blue-600">05 / MOBILE DEVELOPMENT</span>
          <span className="text-xs text-gray-400">PERSONAL FINANCE</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
          Finance Tracker
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          A mobile application project focused on tracking personal
          finances and presenting spending information through
          visual summaries.
        </p>

        <div className="mt-6">
          <p className="text-sm font-semibold text-gray-900">
            My contribution
          </p>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Worked on mobile application development using Flutter,
            exploring state management, local data storage and
            financial data visualisation.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {["Flutter", "Dart", "BLoC / Cubit", "Hive", "fl_chart"].map((tech) => (
            <span key={tech} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-8">
          <a
            href="https://github.com/mirshabsinnen/Finance-Tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
          >
            View GitHub ↗
          </a>
        </div>
      </div>

    </div>

    {/* Closing note */}
    <div className="mt-14 border-t border-gray-200 pt-7">
      <p className="text-sm leading-7 text-gray-500">
        Each project represents an opportunity to apply what I've learned,
        explore new technologies and develop practical problem-solving skills.
      </p>
    </div>

  </div>
</section>


      {/* Experience & Education Section */}
      
<section
  id="experience"
  className="border-t border-gray-200 bg-[#fafafa] px-6 py-28"
>
  <div className="mx-auto max-w-6xl">

    {/* Section heading */}
    <div className="mb-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
        My journey
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Experience & <span className="text-blue-600">Education.</span>
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
        My professional experience and academic journey have helped
        me develop a broader understanding of technology, problem-solving
        and business processes.
      </p>
    </div>

    <div className="grid gap-12 md:grid-cols-2">

      {/* Experience */}
      <div>
        <h3 className="mb-8 text-xl font-semibold text-gray-900">
          Professional Experience
        </h3>

        <div className="border-l-2 border-blue-600 pl-6">

          <p className="text-sm font-medium text-blue-600">
            Professional Experience
          </p>

          <h4 className="mt-3 text-xl font-bold text-gray-900">
            Finance Assistant / Finance Executive
          </h4>

          <p className="mt-2 text-sm text-gray-500">
            Debt Works Credit Management
          </p>

          <p className="mt-5 text-sm leading-7 text-gray-600">
            Gained practical experience supporting financial operations
            and administrative processes, including invoice preparation,
            VAT documentation, financial record maintenance and
            accounts receivable.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Financial Documentation",
              "Record Management",
              "Attention to Detail"
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="mb-8 text-xl font-semibold text-gray-900">
          Education
        </h3>

        <div className="border-l-2 border-blue-600 pl-6">

          <p className="text-sm font-medium text-blue-600">
            Undergraduate Studies
          </p>

          <h4 className="mt-3 text-xl font-bold text-gray-900">
            BSc (Hons) in Information Technology
          </h4>

          <p className="mt-2 text-sm text-gray-500">
            Sri Lanka Institute of Information Technology (SLIIT)
          </p>

          <p className="mt-5 text-sm leading-7 text-gray-600">
            Pursuing a multidisciplinary degree that provides a
            broad foundation across computing, technology and
            business-related disciplines. The programme offers
            exposure to various areas of IT, helping me understand
            how different technologies and disciplines work together
            to solve real-world problems.
          </p>

          <div className="mt-7">
            <p className="mb-3 text-sm font-semibold text-gray-900">
              Areas of Academic Exposure
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Software Development",
                "Data Science & Analytics",
                "Information Security",
                "UI/UX Design",
                "Database Systems",
                "Computer Networking",
                "IT Business Management"
              ].map((area) => (
                <span
                  key={area}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-600 transition-colors hover:border-blue-200 hover:text-blue-600"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


      {/* Contact Section */}
      
{/* Contact */}
<section
  id="contact"
  className="border-t border-gray-200 bg-white px-6 py-28"
>
  <div className="mx-auto max-w-6xl">
    <div className="mx-auto max-w-3xl text-center">

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
        Let's connect
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Have an opportunity
        <br />
        <span className="text-blue-600">or an idea?</span>
      </h2>

      <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600">
        I'm open to internship opportunities, collaborations and
        conversations around technology, software development,
        data and business solutions. I'd love to hear from you.
      </p>

      {/* Email CTA */}
      <div className="mt-9 flex flex-col items-center gap-4">
        <a
          href="mailto:mirshabsinnen@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
        >
          Get in Touch
          <span aria-hidden="true">↗</span>
        </a>

      </div>

      {/* Social links */}
      <div className="mt-14 border-t border-gray-100 pt-8">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
          Find me online
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-8 text-sm font-semibold text-gray-600">
          <a
            href="https://github.com/mirshabsinnen"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-600"
          >
            GitHub ↗
          </a>

          <a
            href="https://linkedin.com/in/mirshab-sinnen"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-600"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Footer */}
<footer className="border-t border-gray-200 bg-[#fafafa] px-6 py-8">
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

    <div>
      <p className="text-sm font-semibold text-gray-900">
        Mirshab Sinnen
      </p>
      <p className="mt-1 text-xs text-gray-500">
        IT Undergraduate · Sri Lanka
      </p>
    </div>

    <p className="text-xs text-gray-500">
      © <Suspense fallback="2026"><CurrentYear /></Suspense>{" "}
      Mirshab. All rights reserved.
    </p>

    <p className="text-xs text-gray-500">
      Designed & developed by Mirshab.
    </p>

  </div>
</footer>

    </main>
  );
}
