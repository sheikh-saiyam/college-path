College Booking Web Application
A web application built with Next.js, Typescript, MongoDB, and Clerk authentication to facilitate booking college services and facilities with a user-friendly, responsive interface.
Features

Navigation: Includes Home, Colleges, Admission, and My College sections.
Home Page:
Search bar below the navbar to find colleges by name, displaying college cards.
Section with 3 college cards showcasing college image, name, admission dates, events, research history, and sports, each with a "Details" button linking to a detailed college page (images, admission process, events, research works, sports categories).
College image gallery displaying graduate group pictures.
Research paper links from recommended college students.
Review section showing user feedback for specific colleges.

Colleges Route: Displays 5-6 college cards with image, name, rating, admission date, research count, and a "Details" button for events and sports facilities.
Admission Route: Lists colleges; clicking a college reveals a form (Candidate Name, Subject, Email, Phone, Address, DOB, Image) with a submit button. Submitted data appears in the "My College" route.
My College Route: Shows user’s college details and allows adding reviews with ratings, which appear in the Home page review section.
Authentication:
Registration/login via Clerk (email/password, Google, social media).
Password reset functionality.
College details and review submission restricted to logged-in users.
Displays user’s profile name after login.

Profile Route: Accessible by clicking the profile name, displays user details (Name, Email, University, Address) with an "Edit" button to update info, saved via a "Save" button.
404 Route: Custom, creative 404 page for invalid routes.
Responsiveness: Fully responsive design for desktops, tablets, and mobile devices.

Tech Stack

Technologies: Next.js, Tailwind CSS, Typescript
Database: MongoDB
Authentication: Clerk
Deployment: Vercel

Installation

Clone the repository:git clone <https://github.com/sheikh-saiyam/college-path>

Navigate to the project directory:cd college-booking-app

Install dependencies:npm install

Set up environment variables:
Create a .env.local file in the root directory.
Add Clerk and MongoDB configurations:NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
MONGODB_URI=<your-mongodb-uri>

Run the development server:npm run dev
