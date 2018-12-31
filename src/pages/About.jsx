import React from 'react';
import Page from '../templates/Page';

export default () => (
  <Page title='About Me' scroll>
  
    {/* Section 1 */}
    <h2>Past</h2>
    <p>The first thing to know about me is I am a proud military veteran. For fourteen years I served in the United States Navy as a <a href="#dc" data-uk-toggle='target: #dc'>Damage Controlman</a>. For the uninitiated, a Damage Controlman is a shipboard firefighter; however, our jobs entail more than that. There is a strong focus on maintenance management, troubleshooting, and repair skills. Team building and training are fundamental skill sets in the job description as well. My final year in service required more support to the repair side of our organization, from planning to execution; this is where I learned that I enjoyed the journey from inception to fruition of the creative process; leading to the next phase of my life.</p>

    {/* Section 2 */}
    <h2>Present</h2>
    <p>When I separated from the Navy, I decided to mix my love of technology with my passion for creating. Hoping to find my location in the tech world I decided to pursue a degree in Electronics Engineering Technology at DeVry University. My persistence paid off when I completed my Bachelor of Science in two years and three months with honors, Summa Cum Laude. During that pursuit, the curriculum introduced me to programming in both C, C++, and Java. It immediately sparked my interest, and I began to peek further under the veil, in tandem with my coursework. </p>
    <p>Before the completion of my capstone project, I came across an opportunity presented in the form of the Udacity Grow with Google Challenge. In my exploration of the programming scenery, I found Web Development interesting due to the continuously changing terrain and the challenges it presented. I immediately applied for the Front-End Developer scholarship challenge. The three-month challenge allowed a focused approach to building my programming skills that all my previous endeavors could not. Through handwork, determination, and the graces of the people at Udacity I was granted the scholarship into the Front-End Nanodegree Program. I have used this opportunity to venture deeper into the Front-End landscape and get comfortable with developer tools. It has also let me use my training skills to help and encourage my fellow Nanodegree participants. At this point, the possibilities are endless in my mind.</p>

    {/* Section 3 */}
    <h2>Future</h2>
    <p>I am an aspiring developer! Currently, web development inspires me because the shifting terrain makes it a constant challenge, thus a consistent reason for growth. I would feel at home in an organization that persistently challenges the status quo to push the limits and remap the path of technology.</p>

    {/* Continued data modal */}
    <div id="dc" data-uk-modal>
      <div className="uk-modal-dialog uk-margin-auto-vertical">
        
        {/* Close modal button */}
        <button className="uk-modal-close-default" type="button" data-uk-close></button>

        {/* Modal header */}
        <div className="uk-modal-header">
          <h2 className="uk-modal-title">Damage Controlman</h2>
        </div>

        {/* Modal body */}
        <div className="uk-modal-body">
          
          {/* Sub-section 1 */}
          <p>
          Yes, being a first responder to any casualty in an environment where help is indeed far away is in the job description. However, the logistics of maintaining all the critical lifesaving equipment on a warship proves to be the day-to-day: equipment that ranges from emergency response gear and fire suppression systems all the way to complex Chemical, Biological, and Radiological (CBR) detection systems. Spending most of my career on smaller vessels has also granted me knowledge in engineering plant equipment monitoring, trend analysis, and maintenance. Sounds like a full day of events but wait there is more.
            </p>
          
          {/* Sub-section 2 */}
          <p>
          Don’t give up the ship! A common motto heard on a naval vessel. Being in the middle of the ocean means that a crew needs to be able to combat all types of casualties cohesively; in steps the Damage Controlmen (men and women, sorry I didn’t come up with the name). The charge of the Damage Control organization is the systematic training and preparation of the crew for large-scale emergencies. Creating training plans and executing them on varying scales becomes second nature.
            </p>
          
          {/* Sub-section 3 */}
          <p>
          A Damage Controlman is also a part of the Repair Organization. The responsibility of structural repairs, fabrication, and installation falls on us; this includes the logistics of running a small repair shop. Balancing materials, capabilities, and time became fundamental in our success and customer satisfaction.
            </p>
        </div>
      </div>
    </div>
  </Page>
)
