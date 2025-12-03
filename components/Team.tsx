
import React from 'react';

const TeamMemberCard: React.FC<{
  imgSrc: string;
  name: string;
  role: string;
}> = ({ imgSrc, name, role }) => (
  <div className="text-center p-6 bg-white/40 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/30 h-full transform hover:-translate-y-2">
    <img
      src={imgSrc}
      alt={name}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md border-4 border-white/50"
    />
    <h3 className="text-xl font-bold font-heading text-brand-blue mb-1">{name}</h3>
    <p className="text-brand-green font-semibold">{role}</p>
  </div>
);

const Team: React.FC = () => {
  const teamMembers = [
    {
      imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
      name: 'Alex "Commander" Chen',
      role: 'Founder & Lead Strategist'
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1580894742597-8797b5204127?q=80&w=400&auto=format&fit=crop",
      name: 'Maria "Breaker" Garcia',
      role: 'Operations Specialist'
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1627541593072-9383b723f504?q=80&w=400&auto=format&fit=crop",
      name: 'Sam "Gadget" Jones',
      role: 'Eco-Disposal Expert'
    },
     {
      imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      name: 'Jessica Riley',
      role: 'Customer Relations'
    }
  ];

  return (
    <section id="team" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-brand-blue">
            Meet The Squad
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            The elite, disciplined team dedicated to liberating your space.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="scroll-animate" style={{ animationDelay: `${index * 100}ms` }}>
              <TeamMemberCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
