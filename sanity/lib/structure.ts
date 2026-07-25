import { defineConfig } from 'sanity';

export const structure = (S: any) =>
  S.defaults().then(() =>
    S.list()
      .title('Content')
      .items([
        S.documentTypeListItem('service').title('Services'),
        S.documentTypeListItem('industry').title('Industries'),
        S.documentTypeListItem('teamMember').title('Team Members'),
      ])
  );
