import React from 'react';
import Page from '../templates/Page';

export default () => (
  <Page title='About Me'>
    <h2>Past</h2>
    <p>First thing to know about me is I am a proud military veteran. For fourteen years I served in the United States Navy as a <a href="#dc" data-uk-toggle='target: #dc'>Damage Controlman</a>. For the uninitiated, a Damage Controlman is referred to as a shipboard firefighter, however, our jobs entail more than that. There is a strong focus on maintenance management, troubleshooting, and repair skills. Team building, and training are fundamental skill sets in the job description as well. My final year in service required more support to the repair side of our organization, from planning to execution. This is where I learned that I enjoyed the journey from inception to fruition of the creative process; leading to the next phase of my life.</p>

    <h2>Present</h2>
    <p>When I separated from the Navy I decided to mix my love of technology with my passion to create.  Hoping to find my location in the tech world I decided to pursue a degree in Electronics Engineering Technology at DeVry University. My persistence paid off when I completed my Bachelor of Science in two years and three months with honors, Summa Cum Laude. During that pursuit I was introduced to programming in both C, C++, and Java. It immediately sparked my interest and I began to peak further under the veil, in tandem with my course work. </p>
    <p>Prior to the completion of my capstone project, I came across an opportunity presented in the form of the Udacity Grow with Google Challenge. In my exploration of the programming landscape, I found Web Development interesting due to the constantly change landscape and the challenges it presented. I immediately applied for the Front-End Developer scholarship challenge. The three-month challenge allowed a focused approach to building my programming skills that all my previous endeavors could not. Through handwork, determination, and the graces of the people at Udacity I was granted the scholarship into the Front-End Nanodegree Program. I have used this opportunity to venture deeper into the Front-End landscape and get comfortable with developer tools. It has also let me use my training skills to help and encourage my fellow Nanodegree participants. At this point, the possibilities are endless in my mind.</p>

    <h2>Future</h2>
    <p>I am an aspiring developer! Currently, web development inspires me because the shifting terrain makes it a constant challenge, thus a consistent reason for growth. I would feel at home in an organization that persistently challenges the status quo in order to push the limits and remap the path of a technology.</p>
    <div id="dc" data-uk-modal>
      <div className="uk-modal-dialog uk-margin-auto-vertical">
        <button className="uk-modal-close-default" type="button" data-uk-close></button>
        <div className="uk-modal-header">
          <h2 className="uk-modal-title">Damage Controlman</h2>
        </div>
        <div className="uk-modal-body">
          <p>
            Yes, being a first responder to any casualty in an environment where help is truly far away is in the job description. However, the logistics of maintaining all the critical lifesaving equipment on a warship proves to be the day-to-day. Equipment that ranges from emergency response gear and fire suppression systems all the way to complex Chemical, Biological, and Radiological (CBR) detection systems. Spending most of my career on smaller vessels, has also granted me knowledge in engineering plant equipment monitoring, trend analysis, and maintenance. Sounds like a full day of events but wait there is more.
            </p>
          <p>
            Don’t give up the ship! This is a common motto spoken on a naval vessel. Being in the middle of the ocean means that a crew needs to be able to cohesively combat all types of casualties; in steps the Damage Controlmen (men and women, sorry I didn’t come up with the name). The Damage Control organization is charged with the systematic training and preparation of the crew for large-scale emergency situations. Creating training plans and executing them on varying scales becomes second nature.
            </p>
          <p>
            A Damage Controlman is also a part of the Repair Organization. The responsibility of structural repairs, fabrication, and installation falls on us. This includes the logistics of running a small repair shop. Balancing materials, capabilities, and time became fundamental in our success and customer satisfaction.
            </p>
        </div>
      </div>
    </div>
  </Page>
)
