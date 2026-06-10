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
  },
  active: {
    label: 'Active',
    fn: (task) => !task.completed,
  },
  completed: {
    label: 'Completed',
    fn: (task) => task.completed,
  },
};
