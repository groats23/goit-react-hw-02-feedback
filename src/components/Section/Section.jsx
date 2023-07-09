import PropTypes from 'prop-types';
import { ComponentsSection, SectionTitle } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <ComponentsSection>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </ComponentsSection>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
