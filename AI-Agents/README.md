# GlobalTech AI ITSM – AI Agents Documentation
# 1. AI Incident Triage Agent
# Purpose: Analyze incident-related requests and recommend incident classification and priority.

# Script Include: AIIncidentAgent

# Method: analyze(requestText)

# Responsibilities:

  . Analyze incident descriptions.
  . Identify incident category.
  . Recommend priority.
  . Generate confidence scores.
  . Provide structured analysis results.
# Example: VPN connectivity failure is analyzed and classified as Network with High priority.

# 2. AI Knowledge Research Agent
 # Purpose: Identify relevant knowledge articles for employee IT support requests.

# Script Include: AIKnowledgeAgent

  # Method: searchKnowledge(requestText)

# Responsibilities:

  . Search AI Knowledge Context records.
  . Match request keywords against article title and content.
  . Return relevant troubleshooting information.
  . Provide confidence scores.
# Example: VPN troubleshooting request matches the VPN connectivity troubleshooting article.

# 3. AI Problem Investigation Agent
  # Purpose: Identify recurring incidents and recommend Problem investigation.

  # Script Include: AIProblemAgent

  # Method: analyzeRecurringIncidents(category, ciSysId)

# Responsibilities:

   . Identify incidents with matching categories and configuration items.
   .  Analyze incidents within the configured seven-day period.
   . Count matching incidents.
   . Recommend Problem creation when the configured threshold is reached.
# Example: Three recurring network incidents associated with the same CI trigger a Problem recommendation.

# 4. AI Change Risk Assessment Agent
  # Purpose: Assess Change Request risk and identify approval requirements.

  # Script Include: AIChangeAgent

  # Method: assesChange(changeType, impact, outageExpected, hasBackoutPlan)

# Responsibilities:

  . Evaluate change type.
  . Evaluate business impact.
  . Check expected outage.
  . Check backout plan availability.
  . Recommend risk level.
  . Identify approval requirements.
# Example: An emergency production database upgrade with expected outage and no backout plan receives a critical risk assessment.

# 5. AI Governance Agent
  # Purpose: Evaluate whether a proposed action can be automatically executed or requires human approval.

   # Script Include: AIGovernanceEngine

   # Method: evaluate(actionName, agentSysId, confidence)

# Responsibilities:

  . Evaluate AI Policy records.
  . Check permitted agents.
  . Evaluate confidence thresholds.
 . Check auto-execution settings.
  . Determine approval requirements.
# Example: A high-risk delete incident action requires manager approval rather than automatic execution.

  # Agent Orchestration
  . All five agents are invoked through 
  . AIExecutionDispatcher.

# The dispatcher:

  . Retrieves the AI Execution record.
  . Identifies the associated AI Agent.
  . Retrieves the related AI Request.
  . Invokes the appropriate Script Include.
  . Stores execution output.
  . Creates recommendations where applicable.
  . Updates execution status.
  . Records audit activities.
# Implementation Note
These agents currently use scripted, rule-based analysis and simulation.
They demonstrate agent orchestration and governance patterns but are not connected to a live external LLM.




