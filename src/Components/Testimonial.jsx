import React from 'react';
import { FaLinkedinIn, FaShareAlt } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'CEO of Innovate',
    avatar: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1',
    review: 'This service has been groundbreaking for our business. Highly recommend to anyone looking to improve their workflow!',
    linkedIn: '#',
  },
  {
    id: 2,
    name: 'Jane Smith',
    designation: 'Marketing Director',
    avatar: 'https://randomuser.me/api/portraits/men/83.jpg',
    review: 'Their team is extremely responsive and supportive. Our results have been impressive. A true partnership!',
    linkedIn: '#',
  },
  {
    id: 3,
    name: 'Amanda Bynes',
    designation: 'Product Manager',
    avatar: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
    review: 'The customization capabilities and user-friendly interface are top-notch. It’s transformed our operations.',
    linkedIn: '#',
  },
  {
    id: 4,
    name: 'Mark Johnson',
    designation: 'Head of Development',
    avatar: 'https://images.unsplash.com/photo-1505247964246-1f0a90443c36',
    review: 'A game-changer in efficiency and performance. Their service is exceptional, making our processes seamless.',
    linkedIn: '#',
  },
  {
    id: 5,
    name: 'Lucy Heartfilia',
    designation: 'UX Designer',
    avatar: 'https://images.unsplash.com/photo-1484863137850-59afcfe05386',
    review: 'Brilliant support and usability. Our team has benefited greatly from the intuitive design and features.',
    linkedIn: '#',
  },
  {
    id: 6,
    name: 'Natsu Dragneel',
    designation: 'Software Engineer',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    review: 'Efficient, reliable, and innovative. Highly satisfied with the outcomes and improvements in our project management.',
    linkedIn: '#',
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className='bg-gradient-to-br from-orange-100 via-white to-yellow-100 shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 transform hover:shadow-2xl'>
    <img className='w-24 h-24 rounded-full' src={testimonial.avatar} alt='user avatar' />
    <h5 className='text-lg font-bold mt-4'>{testimonial.name}</h5>
    <p className='text-sm text-gray-500'>{testimonial.designation}</p>
    <p className='mt-4 text-gray-600 text-center'>{testimonial.review}</p>
    <div className='flex justify-center gap-4 mt-4'>
      <a href={testimonial.linkedIn} className='text-blue-500 text-xl'><FaLinkedinIn /></a>
      <button className='text-gray-500 text-xl'><FaShareAlt /></button>
    </div>
  </div>
);

const Testimonial = () => (
  <section className='p-8 bg-gray-100'>
    <div className='text-center mb-8'>
      <h2 className='text-3xl font-bold'>What Our Customers Say</h2>
      <p className='text-gray-600'>Your trust matters to us!</p>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {testimonials.map(testimonial => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  </section>
);

export default Testimonial;