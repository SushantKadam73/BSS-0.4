import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const SectionsAccordion = ({ sections = {}, order = [] }) => {
  const entries = order.length ? order.map(key => [key, sections[key]].filter(Boolean)).filter(x => x.length === 2) : Object.entries(sections || {});
  if (!entries.length) return null;
  return (
    <section style={{ padding: '60px 40px', background: 'var(--secondary-olive)' }}>
      <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto' }}>
        <h2 className="heading-2" style={{ marginBottom: 16 }}>Learn More</h2>
        <Accordion type="single" collapsible>
          {entries.map(([title, val]) => (
            <AccordionItem key={title} value={title}>
              <AccordionTrigger>
                <span className="heading-6" style={{ textAlign: 'left' }}>{title}</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="prose prose-invert" style={{ background: 'var(--bg-page)', border: '1px solid var(--border-medium)', borderRadius: 8, padding: 16 }}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{val?.md || ''}</ReactMarkdown>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default SectionsAccordion;
