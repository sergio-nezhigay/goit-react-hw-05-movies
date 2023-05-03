import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, HR } from './SharedLayout.styled';
import { Section } from 'components/Section/Section.styled';

export default function SharedLayout() {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Section>
          <Outlet />
        </Section>
      </Suspense>
    </Container>
  );
}
