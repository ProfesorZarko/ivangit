import React from 'react';
import '../components/about/About.css';
import AboutForm from '../components/AboutForm';

export default function About() {
  return (
    <div className="about">
       <div className="upper">
        <div className="upperleft d">
          <AboutForm />
        </div>
        <div className="uppermiddle d">
          upper middle
        </div>
        <div className="upperright d">
          upper right
       </div>
    </div>
    </div>
  )
}
