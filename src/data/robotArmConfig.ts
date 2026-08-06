import analyticsArm from '../../assets/animation/generated/analytics-arm.png'
import robotBody from '../../assets/animation/generated/body.png'
import calendarArm from '../../assets/animation/generated/calendar-arm.png'
import crmArm from '../../assets/animation/generated/crm-arm.png'
import emailArm from '../../assets/animation/generated/email-arm.png'
import receptionistArm from '../../assets/animation/generated/receptionist-arm.png'
import workflowArm from '../../assets/animation/generated/workflow-arm.png'

export const robotArmConfig = {
  debug: false,
  body: robotBody,
  cycleDuration: 9200,
  pairs: [
    { label: 'Incoming Call', action: 'Connected', result: 'Answered', duration: 700 },
    { label: 'Calendar', action: 'Checking calendar', result: 'Appointment Booked', duration: 600 },
    { label: 'Analytics', action: 'Building Report', result: 'Report Ready', duration: 500 },
  ],
  tasks: [
    { id: 'receptionist', title: 'Incoming Call', incoming: 'Ready', action: 'Connected', result: 'Answered', asset: receptionistArm, pair: 0, rig: { anchorX: 43, anchorY: 27, width: 62, duration: 700, rotationRetracted: -2, rotationDeployed: -5, translateX: 3, translateY: 1, transformOriginX: 92, transformOriginY: 22, zIndex: 3, flipX: true } },
    { id: 'email', title: 'Email', incoming: 'Ready', action: 'Preparing', result: 'Sent', asset: emailArm, pair: 0, rig: { anchorX: 57, anchorY: 27, width: 62, duration: 700, rotationRetracted: 2, rotationDeployed: 5, translateX: -3, translateY: 1, transformOriginX: 10, transformOriginY: 18, zIndex: 3, flipX: true } },
    { id: 'calendar', title: 'Calendar', incoming: 'Ready', action: 'Checking calendar', result: 'Appointment Booked', asset: calendarArm, pair: 1, rig: { anchorX: 42, anchorY: 32, width: 59, duration: 600, rotationRetracted: -7, rotationDeployed: -10, translateX: 3, translateY: 1, transformOriginX: 94, transformOriginY: 25, zIndex: 2, flipX: true } },
    { id: 'crm', title: 'CRM', incoming: 'Ready', action: 'Updating', result: 'Saved', asset: crmArm, pair: 1, rig: { anchorX: 58, anchorY: 32, width: 59, duration: 600, rotationRetracted: 7, rotationDeployed: 10, translateX: -3, translateY: 1, transformOriginX: 7, transformOriginY: 44, zIndex: 2, flipX: true } },
    { id: 'workflow', title: 'Workflow', incoming: 'Ready', action: 'Running', result: 'Completed', asset: workflowArm, pair: 2, rig: { anchorX: 43, anchorY: 37, width: 56, duration: 500, rotationRetracted: -11, rotationDeployed: -14, translateX: 3, translateY: 0, transformOriginX: 95, transformOriginY: 32, zIndex: 1, flipX: true } },
    { id: 'analytics', title: 'Analytics', incoming: 'Ready', action: 'Building Report', result: 'Report Ready', asset: analyticsArm, pair: 2, rig: { anchorX: 57, anchorY: 37, width: 56, duration: 500, rotationRetracted: 11, rotationDeployed: 14, translateX: -3, translateY: 0, transformOriginX: 8, transformOriginY: 18, zIndex: 1, flipX: true } },
  ],
} as const
