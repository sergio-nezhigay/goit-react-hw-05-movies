import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';
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
      <Suspense fallback={<div>Loading the app...</div>}>
        <main>
          <Section>
            <Outlet />
          </Section>
        </main>
      </Suspense>
    </Container>
  );
}
