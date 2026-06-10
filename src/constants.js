export const TAGS = [
  { id: 'other', label: 'Other' },
  { id: 'work', label: 'Work' },
  { id: 'health', label: 'Health' },
  { id: 'personal', label: 'Personal' },
];

export const FILTERS = {
  all: {
    label: 'All',
    fn: () => true,
    svg: './assets/all.svg',
  },
  work: {
    label: 'Work',
    fn: (t) => t.tag === 'work',
    svg: './assets/work.svg',
  },
  health: {
    label: 'Health',
    fn: (t) => t.tag === 'health',
    svg: './assets/health.svg',
  },
  personal: {
    label: 'Personal',
    fn: (t) => t.tag === 'personal',
    svg: './assets/personal.svg',
  },
  completed: {
    label: 'Completed',
    fn: (t) => t.completed,
    svg: './assets/completed.svg',
  },
};
