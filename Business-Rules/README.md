# GlobalTech AI ITSM – Business Rules
 # Overview
Business Rules manage AI approval creation, approval decisions, execution status changes and workflow coordination in the GlobalTech AI ITSM application.

# 1. Create AI Approval
 # Table: AI Execution

  # When: After

# Purpose: Automatically create an AI Approval record when an AI Execution enters the waiting_for_approval state.

# Responsibilities:

  . Detect execution status changes.
  . Validate the execution output.
  . Check whether approval is required.
  . Support Governance and Change Risk Assessment agents.
  . Prevent duplicate approval records.
  . Create an AI Approval record.
  . Set approval status to requested.
  . Record approval_requested in AI Audit Log.
# 2. Process AI Approval Decision
  # Table: AI Approval

  # When: After Update

  # Purpose: Process manager approval decisions.

# Responsibilities:

  . Detect approval status changes.
  . Update related AI Execution output.
  . Record approval decisions.
  . Log approval_granted or approval_rejected.
  . Mark rejected or cancelled executions as cancelled.
  . Preserve approved executions for the action simulation process.
# 3. Approval Workflow
  . AI Execution reaches waiting_for_approval.
  . Create AI Approval Business Rule creates an approval record.
  . Manager reviews the requested action.
  . Manager approves, rejects or cancels.
  . Process AI Approval Decision handles the decision.
  . Approved actions can be processed through AIActionExecutor.
  . Audit logs maintain execution traceability.
# 4. Governance Controls
  . High-risk actions require approval.
  . Approval decisions are recorded.
  . Duplicate approval creation is prevented.
  . Approved actions are simulated.
  . Actual Incident and Change records are not modified by the current action simulator.
# Implementation Note
These Business Rules are part of the custom GlobalTech AI ITSM scoped application. They coordinate AI execution and approval processing.




