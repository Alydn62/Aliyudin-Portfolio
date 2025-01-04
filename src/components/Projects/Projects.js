import { useState } from 'react';
import uniqid from 'uniqid';
import { projects } from '../../portfolio';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import './Projects.css';

const Projects = () => {
  const [category, setCategory] = useState('SEMUA');  // Menyimpan kategori yang dipilih

  // Filter proyek berdasarkan kategori yang dipilih
  const filteredProjects = category === 'SEMUA' 
    ? projects 
    : projects.filter(project => project.category === category);

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className="filter-buttons">
  <button type="button" onClick={() => setCategory('SEMUA')}>Semua</button>
  <button type="button" onClick={() => setCategory('TUGAS')}>Tugas</button>
  <button type="button" onClick={() => setCategory('NONTUGAS')}>Nontugas</button>
</div>

      <div className='projects__grid'>
        {filteredProjects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
