export const robotTaskConfig = {
  pairs: [
    { label: 'Incoming Call', action: 'Connected', result: 'Answered' },
    { label: 'Calendar', action: 'Checking calendar', result: 'Appointment Booked' },
    { label: 'Analytics', action: 'Building Report', result: 'Report Ready' },
  ],
  tasks: [
    { id: 'receptionist', title: 'Incoming Call', incoming: 'Ready', action: 'Connected', result: 'Answered', pair: 0 },
    { id: 'email', title: 'Email', incoming: 'Ready', action: 'Preparing', result: 'Sent', pair: 0 },
    { id: 'calendar', title: 'Calendar', incoming: 'Ready', action: 'Checking calendar', result: 'Appointment Booked', pair: 1 },
    { id: 'crm', title: 'CRM', incoming: 'Ready', action: 'Updating', result: 'Saved', pair: 1 },
    { id: 'workflow', title: 'Workflow', incoming: 'Ready', action: 'Running', result: 'Completed', pair: 2 },
    { id: 'analytics', title: 'Analytics', incoming: 'Ready', action: 'Building Report', result: 'Report Ready', pair: 2 },
  ],
} as const
