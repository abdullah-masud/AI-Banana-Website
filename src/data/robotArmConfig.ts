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
  cycleDuration: 17500,
  finalAt: 13250,
  resetAt: 16000,
  tasks: [
    { id: 'receptionist', title: 'Incoming Phone Call', incoming: 'Waiting', action: 'Connecting call', result: 'Answered', asset: receptionistArm, start: 900, duration: 2200, rig: { anchorX: 43, anchorY: 27, width: 76, rotationRetracted: 13, rotationDeployed: -5, translateX: 7, translateY: 5, transformOriginX: 92, transformOriginY: 22, zIndex: 3, flipX: true } },
    { id: 'email', title: 'New Email', incoming: 'Waiting', action: 'Preparing reply', result: 'Sent', asset: emailArm, start: 3600, duration: 2200, rig: { anchorX: 57, anchorY: 27, width: 76, rotationRetracted: -13, rotationDeployed: 5, translateX: -7, translateY: 5, transformOriginX: 10, transformOriginY: 18, zIndex: 3, flipX: true } },
    { id: 'calendar', title: 'Meeting Request', incoming: 'Waiting', action: 'Checking calendar', result: 'Scheduled', asset: calendarArm, start: 6200, duration: 1800, rig: { anchorX: 42, anchorY: 32, width: 72, rotationRetracted: 9, rotationDeployed: -10, translateX: 8, translateY: 2, transformOriginX: 94, transformOriginY: 25, zIndex: 2, flipX: true } },
    { id: 'crm', title: 'CRM Update', incoming: 'Waiting', action: 'Updating customer', result: 'Saved', asset: crmArm, start: 8300, duration: 1500, rig: { anchorX: 58, anchorY: 32, width: 72, rotationRetracted: -9, rotationDeployed: 10, translateX: -8, translateY: 2, transformOriginX: 7, transformOriginY: 26, zIndex: 2, flipX: true } },
    { id: 'workflow', title: 'Workflow Automation', incoming: 'Waiting', action: 'Running automation', result: 'Completed', asset: workflowArm, start: 10000, duration: 1350, rig: { anchorX: 43, anchorY: 37, width: 68, rotationRetracted: 8, rotationDeployed: -14, translateX: 7, translateY: -2, transformOriginX: 95, transformOriginY: 36, zIndex: 1, flipX: true } },
    { id: 'analytics', title: 'Analytics', incoming: 'Waiting', action: 'Building report', result: 'Report Ready', asset: analyticsArm, start: 11500, duration: 1350, rig: { anchorX: 57, anchorY: 37, width: 68, rotationRetracted: -8, rotationDeployed: 14, translateX: -7, translateY: -2, transformOriginX: 8, transformOriginY: 25, zIndex: 1, flipX: true } },
  ],
} as const
