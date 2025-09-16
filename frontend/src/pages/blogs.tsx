import AppBar from "../components/appBar";
import BlogData from "../components/Blog";

export default function Blog(){
    return (
        <>
        <div>
            <AppBar />
        </div>
<div className="flex flex-col items-center px-10" >
<BlogData 
  AuthorName="SisyPhus" 
  title="Learning Lovable Library" 
  PublishedDate="1 January 2025" 
  content="What it is: An AI app builder for non-coders and coders.
           Key Features:
           You describe the app you want (in plain English).
           It generates the UI + backend instantly.
           You can customize further with code.
           Use Case: Instead of writing everything yourself, you can bootstrap a full-stack app in minutes and then tweak it." 
/>

<BlogData 
  AuthorName="Athena" 
  title="Mastering TypeScript in 30 Days" 
  PublishedDate="12 February 2025" 
  content="What it is: A structured learning path for TypeScript.
           Key Features:
           Hands-on projects, quizzes, and challenges.
           Covers generics, utility types, and advanced patterns.
           Use Case: Developers wanting to level up from JavaScript to TypeScript mastery." 
/>

<BlogData 
  AuthorName="Orpheus" 
  title="Building Scalable React Apps" 
  PublishedDate="20 March 2025" 
  content="What it is: A guide to scaling React applications.
           Key Features:
           Monorepos, micro-frontends, performance tuning.
           Patterns for state management and code splitting.
           Use Case: Teams working on enterprise-grade applications." 
/>

<BlogData 
  AuthorName="Nyx" 
  title="The Future of AI Agents" 
  PublishedDate="5 April 2025" 
  content="What it is: An exploration of autonomous AI agents.
           Key Features:
           Multi-agent collaboration, real-world task automation.
           Safety considerations and alignment challenges.
           Use Case: Research labs and startups building next-gen AI workflows." 
/>

<BlogData 
  AuthorName="Hermes" 
  title="APIs for the Modern Web" 
  PublishedDate="18 May 2025" 
  content="What it is: A practical guide to REST, GraphQL, and gRPC.
           Key Features:
           Designing scalable APIs, authentication, and versioning.
           Real-world examples with Node.js and Go.
           Use Case: Backend engineers designing APIs for global-scale apps." 
/>



</div>


        </>
    )
}