import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowDown,
  ArrowUpRight,
  CirclePlay,
  Compass,
  Landmark,
  Palette,
  Sparkles,
} from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: DynastyHome,
})

type ProjectCategory = 'All' | 'Wealth' | 'Art' | 'Becoming'

const projects = [
  {
    number: '01',
    title: 'The Freedom Fund',
    category: 'Wealth',
    description:
      'A personal operating system for saving, investing, and buying back my time.',
    detail: 'Ongoing · 2024—',
    tone: 'gold',
  },
  {
    number: '02',
    title: 'Rooms I Remember',
    category: 'Art',
    description:
      'A growing visual study of homes, objects, light, and the stories they keep.',
    detail: 'Photography · Volume I',
    tone: 'rose',
  },
  {
    number: '03',
    title: 'The Long Game',
    category: 'Becoming',
    description:
      'Twelve months of stronger habits, quieter mornings, and deliberate change.',
    detail: 'Journal · 38 entries',
    tone: 'green',
  },
  {
    number: '04',
    title: 'Sunday Studio',
    category: 'Art',
    description:
      'Small experiments in paint, collage, type, and making without permission.',
    detail: 'Mixed media · 17 pieces',
    tone: 'blue',
  },
  {
    number: '05',
    title: 'Keys & Foundations',
    category: 'Wealth',
    description:
      'Notes from learning property, place, and what it means to build a home.',
    detail: 'Research · In progress',
    tone: 'clay',
  },
  {
    number: '06',
    title: 'Notes to Future Me',
    category: 'Becoming',
    description:
      'Letters, lessons, and evidence that the person I imagined is taking shape.',
    detail: 'Private archive · 2022—',
    tone: 'plum',
  },
]

const categories: ProjectCategory[] = ['All', 'Wealth', 'Art', 'Becoming']

function DynastyHome() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All')
  const [isMemoryPlaying, setIsMemoryPlaying] = useState(false)
  const visibleProjects = projects.filter(
    (project) =>
      activeCategory === 'All' || project.category === activeCategory,
  )

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Dynasty home">
          D<span>Y</span>NASTY
        </a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#archive">Archive</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-note" href="#now">
          <span className="status-dot" /> Now, July 2026
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker reveal reveal-one">
          <Compass size={16} /> A personal archive of a life in progress
        </div>
        <div className="hero-title-wrap">
          <h1 className="hero-title" aria-label="Dynasty">
            <span className="reveal reveal-two">DYNA</span>
            <span className="outline-text reveal reveal-three">STY</span>
          </h1>
          <div className="hero-orbit" aria-hidden="true">
            <span>Est.</span>
            <strong>MMXXVI</strong>
          </div>
        </div>
        <div className="hero-footer reveal reveal-four">
          <p>
            A living record of what I’m <em>building</em>, what I’m{' '}
            <em>becoming</em>, and everything worth remembering along the way.
          </p>
          <a className="round-link" href="#projects" aria-label="Explore projects">
            <ArrowDown size={22} />
          </a>
        </div>
      </section>

      <section className="manifesto" id="about">
        <p className="eyebrow">The idea</p>
        <div className="manifesto-copy">
          <span className="drop-cap">D</span>
          <p>
            ynasty is not about where I came from. It is about what I choose to
            leave behind: work with meaning, honest proof of growth, and a life
            documented with warmth.
          </p>
        </div>
        <div className="manifesto-aside">
          <span>( A house for every chapter )</span>
          <div className="seal" aria-hidden="true">
            <Sparkles size={24} />
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected chapters · 2022—2026</p>
            <h2>The work of a lifetime.</h2>
          </div>
          <p className="section-intro">
            Money, making, and the slow art of becoming someone I’m proud to
            know.
          </p>
        </div>

        <div className="filter-row" aria-label="Filter projects">
          {categories.map((category) => (
            <button
              className={activeCategory === category ? 'active' : ''}
              key={category}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-list">
          {visibleProjects.map((project) => (
            <article className="project-row" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className={`project-art project-art-${project.tone}`}>
                <ProjectMark category={project.category} />
              </div>
              <div className="project-copy">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-meta">
                <span>{project.detail}</span>
                <a href="#archive" aria-label={`See memories related to ${project.title}`}>
                  <ArrowUpRight size={21} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="archive-section" id="archive">
        <div className="archive-heading">
          <p className="eyebrow">The camera roll</p>
          <h2>Proof I was here.</h2>
          <p>Pictures, moving moments, and the beautiful ordinary.</p>
        </div>
        <div className="memory-grid">
          <div className="memory memory-tall memory-one">
            <span>Lisbon, 6:42 PM</span>
          </div>
          <div className="memory memory-video memory-two">
            <button
              type="button"
              aria-label={isMemoryPlaying ? 'Pause summer film' : 'Play summer film'}
              aria-pressed={isMemoryPlaying}
              onClick={() => setIsMemoryPlaying((playing) => !playing)}
            >
              <CirclePlay size={44} strokeWidth={1.25} />
            </button>
            <span>{isMemoryPlaying ? 'Playing memory…' : 'Summer film · 01:18'}</span>
          </div>
          <div className="memory-quote">
            <p>“Collecting days that feel like they belong in a film.”</p>
            <span>Field note 024</span>
          </div>
          <div className="memory memory-three">
            <span>Sunday table</span>
          </div>
          <div className="memory memory-four">
            <span>On the way home</span>
          </div>
        </div>
        <a className="archive-button" href="#now">
          Continue to the present <ArrowUpRight size={18} />
        </a>
      </section>

      <section className="now-section" id="now">
        <div>
          <p className="eyebrow">Right now · Summer 2026</p>
          <h2>Planting things I may never sit in the shade of.</h2>
        </div>
        <div className="now-list">
          <p><span>Reading</span> The Creative Act</p>
          <p><span>Building</span> A calmer financial life</p>
          <p><span>Learning</span> To trust the long route</p>
        </div>
      </section>

      <footer>
        <div className="footer-mark">DYNASTY</div>
        <div className="footer-bottom">
          <p>Built slowly. Kept forever.</p>
          <p>© 2026 · Somewhere between here and there</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  )
}

function ProjectMark({ category }: { category: string }) {
  if (category === 'Wealth') return <Landmark size={38} strokeWidth={1.25} />
  if (category === 'Art') return <Palette size={38} strokeWidth={1.25} />
  return <Sparkles size={38} strokeWidth={1.25} />
}
