# GlobalTech AI ITSM – Technical Architecture
# 1. Architecture Overview
The solution is built as a custom scoped ServiceNow application using AI Request management, five specialized AI agents, execution orchestration, governance, approval workflows, and audit logging.

# 2. Architecture Components
# Request Layer
. AI Request table
. Employee request submission
. Request type identification
# AI Agent Layer
  . AI Incident Triage Agent
  . AI Knowledge Research Agent
  . AI Problem Investigation Agent
  . AI Change Risk Assessment Agent
  . AI Governance Agent
# Orchestration Layer
  . AIExecutionDispatcher
  . AIExecutionRetryManager
# Recommendation Layer
  . AI Recommendation records
  . Agent-generated analysis
  . Confidence scores
# Governance Layer
  . AI GovernanceEngine
  . AI Policy
  . AI Approval
   . Manager approval process
# Execution Layer
. AIActionExecutor
. Approved action simulation
. Execution status management
# Audit Layer
. AIAuditService
. AI Audit Log
. Execution history and traceability
# 3. End-to-End Execution Flow
   1. Employee creates an AI Request.
   2. AI Execution record is created.
   3. Dispatcher identifies the appropriate AI Agent.
   4. Agent processes the request.
   5. Execution output is stored.
   6. AI Recommendation is created where applicable.
   7. Governance evaluates the proposed action.
   8.   High-risk actions enter approval.
   9.   Manager approves or rejects.
   10.   Approved actions are simulated.
   11.     Audit records capture important activities.
# 4. Security Architecture
    . Role-based access control.
     . Employee-specific AI Request visibility.
     . Analyst access to employee requests.
     . Manager approval workflow.
     . Administrator access.
# 5. Implementation Technology
    . ServiceNow Australia release
    . Scoped Application
    . JavaScript
    . Glide Record
    . Script Includes
    . Business Rules
    .  ACLs
    . Platform Analytics
# 6. Architecture Limitation
The current solution uses scripted AI simulation and does not yet invoke an external LLM service.

