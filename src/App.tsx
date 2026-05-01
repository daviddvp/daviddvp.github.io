import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage }       from '@/pages/Home';
import { ExperiencePage } from '@/pages/Experience';
import { ProjectsPage }   from '@/pages/Projects';
import { StackPage }      from '@/pages/Stack';
import { ContactPage }    from '@/pages/Contact';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index             element={<HomePage />} />
          <Route path="experiencia" element={<ExperiencePage />} />
          <Route path="proyectos"   element={<ProjectsPage />} />
          <Route path="stack"       element={<StackPage />} />
          <Route path="contacto"    element={<ContactPage />} />
          {/* Redirige rutas desconocidas al inicio */}
          <Route path="*"          element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
