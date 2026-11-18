# GlobalTech AI ITSM – Script Includes
  This document describes the major Script Includes implemented in the GlobalTech AI ITSM scoped application.

# 1. AIIncidentAgent
 # Purpose: Analyze incident descriptions and generate classification and priority recommendations.

  # Method: analyze(requestText)

# 2. AIKnowledgeAgent
  # Purpose: Search the custom AI Knowledge Context table for relevant troubleshooting articles.

  # Method: searchKnowledge(requestText)

# 3. AIProblemAgent
  # Purpose: Identify recurring incidents based on category and Configuration Item.

  # Method: analyzeRecurringIncidents(category, ciSysId)

# 4. AIChangeAgent
  # Purpose: Evaluate Change Request risk using change type, impact, outage expectation and backout plan availability.

 # Method: assesChange(changeType, impact, outageExpected, hasBackoutPlan)

# 5. AIGovernanceEngine
  # Purpose: Evaluate AI policies and determine whether actions require approval or can be automatically executed.

  # Method: evaluate(actionName, agentSysId, confidence)

 # 6. AIExecutionDispatcher
   # Purpose: Orchestrate AI agent execution.

# Responsibilities:

  . Retrieve AI Execution records.
  . Identify the assigned agent.
  . Invoke the appropriate Script Include.
  . Store execution results.
  . Generate recommendations where applicable.
  . Update execution status.
  . Record audit activities.
# 7. AIActionExecutor
  # Purpose: Simulate approved AI actions.

# Responsibilities:

  . Retrieve the execution and approval records.
  . Verify approval status.
  . Simulate the approved action.
  . Update execution output and status.
  .  Record action simulation audit logs.
# Safety: The current implementation simulates actions rather than modifying real Incident or Change records.

# 8. AIExecutionRetryManager
 # Purpose: Handle failed AI executions.

# Responsibilities:

  . Retrieve failed executions.
  . Check agent availability.
  . Validate maximum retry attempts.
  . Increment retry count.
  . Requeue execution.
  . Record retry audit activities.
# 9. AIAuditService
 # Purpose: Maintain traceability of AI activities.

# Responsibilities:

  . Record agent name.
  . Record action type.
  . Capture execution reference.
  . Capture target table and record.
  . Record before and after values.
  . Track success or failure results.
# Technical Notes
  . All Script Includes belong to the GlobalTech AI ITSM scoped application.

  . The implementation uses server-side JavaScript and GlideRecord for ServiceNow table operations.

