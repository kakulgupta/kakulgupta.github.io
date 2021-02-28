import React from 'react';
import profilePic from './assets/profile_pic.jpg';
import { Link } from './components/Link';

function App() {
  // Return the App component.
  return (
    <main className="p-20">
      <section className="flex flex-wrap">
        <div className="w-60">
          <img className="rounded-full ring-8 ring-green-700 ring-opacity-50" src={profilePic} alt="Profile Kakul Gupta" />
        </div>
        <div className="pl-16">
          <p className="text-6xl">
            Hi! I'm Kakul Gupta
          </p>
          <p>
            Fullstack developer
          </p>
        </div>
      </section>
      <section className="flex flex-wrap justify-center">
        <Link href="https://github.com/kakulgupta/" name="Github" />
        <Link href="mailto:kakul.gupta009@gmail.com" name="Email" />
        <Link href="https://linkedin.com/in/kakul-gupta/" name="LinkedIn" />
        <Link href="https://twitter.com/kakul009" name="Twitter" />
      </section>
    </main>
  );
}

export default App;
