// People.jsx - Final Updated Structure with UI/UX Engineer
import React from 'react';
import './People.css';
import ceoImage from '../../assets/ceo.jpeg';
import vaishnavImage from '../../assets/vaishnav_new.jpg';
import advisor1 from '../../assets/technical-advisor-1.jpeg';
import advisor2 from '../../assets/technical-advisor-2.jpeg';
import sayandeepImage from '../../assets/sayandeep.jpg';

const teamData = [
  // CEO
  { id: 1, name: 'Ava Johnson', role: 'Director', title: 'Director', image: ceoImage, bio: 'Architecting the corporate vision and driving market expansion strategies.' },

  // Directors
  { id: 3, name: 'Vaishnav Nath', role: 'Associate Director', title: 'Director', image: vaishnavImage, bio: 'Leading Product Strategy and Software Engineering divisions.' },

  // Technical Advisors
  { id: 4, name: 'Arjit Mondal', role: 'Senior Technical Advisor', title: 'Advisor', image: advisor1, bio: 'Senior authority on complex infrastructure diagnostics and remediation.' },
  { id: 5, name: 'Koushik Roy', role: 'AI & Data Advisor', title: 'Advisor', image: advisor2, bio: 'Strategic advisor for AI integration and data-driven analytical architectures.' },
  { id: 2, name: 'Sayandip Ganguly', role: 'Technical Advisor', title: 'Advisor', image: sayandeepImage, bio: 'Spearheading strategic partnerships and technical innovation initiatives.' }, // Moved & Updated

  // Developer (Full-Stack)
  { id: 6, name: 'M.Prajyoth', role: 'Full-Stack Developer', title: 'Developer', image: '/assets/my image/finley-green.jpg', bio: 'Develops and maintains core application services.' },

  // NEW: UI/UX Engineer
  { id: 7, name: 'Khushi', role: 'UI/UX Engineer', title: 'Developer', image: '/assets/my image/harper-scott.jpg', bio: 'Engineering intuitive, accessible, and aesthetic user experience systems.' },
];

const renderTeamCard = (member) => (
  <div key={member.id} className="team-card">
    <div className="profile-image-wrapper">
      <img
        src={member.image}
        alt={member.name}
        className="profile-photo"
      />
    </div>
    <div className="profile-content">
      <h4 className="member-name">{member.name}</h4>
      <p className="member-role">{member.role}</p>
      <p className="member-bio">{member.bio}</p>
    </div>
  </div>
);

const renderTeamGroup = (title, members) => (
  <div key={title} className="team-group">
    <h3 className="group-title">{title}</h3>
    <div className="team-grid">
      {members.map(member => renderTeamCard(member))}
    </div>
  </div>
);


const People = () => {
  // Group members including CEO for display
  const executiveAndDirectors = teamData.filter(m => m.title === 'CEO' || m.title === 'Director');
  const advisors = teamData.filter(m => m.title === 'Advisor');
  // Updated: Filter for all members designated as 'Developer'
  // const developers = teamData.filter(m => m.title === 'Developer');

  const groupedTeam = [
    { title: 'Executive Leadership & Directors', members: executiveAndDirectors },
    { title: 'Technical Advisory Board', members: advisors },
    // { title: 'Engineering Team', members: developers }, // Removed as per request
  ];

  return (
    <section className="people-section">
      <div className="people-container">

        {/* Header Section */}
        <div className="people-header">
          <p className="people-tag">THE TEAM</p>
          <h2 className="people-title">Visionary Leadership & Technical Excellence</h2>
          <p className="people-description">
            Merging deep engineering pedigree with strategic foresight to deliver robust, human-centric infrastructure solutions.
          </p>
        </div>

        {/* Main Team Structure */}
        <div className="team-structure">
          {groupedTeam.map(group =>
            group.members.length > 0 ? renderTeamGroup(group.title, group.members) : null
          )}
        </div>

      </div>
    </section>
  );
};

export default People;