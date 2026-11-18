# GlobalTech-AI-iTSM-GenAI-Agentic-AI
# Project Overview
GlobalTech AI ITSM is a ServiceNow-based GenAI and Agentic AI capstone project designed to improve IT Service Management through intelligent request analysis, automated recommendations, governance controls, approval workflows, and audit tracking.

The project is developed on the ServiceNow Australia release using a custom scoped application.

# Business Objectives
Improve Incident Management through AI-assisted triage.
Identify recurring incidents and recommend Problem investigations.
Assess Change Management risks.
Provide knowledge-based troubleshooting recommendations.
Implement governance and human approval for high-risk actions.
Maintain execution history and audit logs.
# AI Agents
AI Agent                                                Responsibility

AI Incident Triage Agent                         Incident classification and priority recommendations
AI Knowledge Research Agent                     Search knowledge context and suggest solutions
AI Problem Investigation Agent                    Identify recurring incidents
 AI Change Risk Assessment Agent                Assess change risk and approval requirements
 AI Governance Agent                         Evaluate action policies and execution permissions

# Key Features
. Custom AI Request management.
. AI Execution Dispatcher.
. AI Recommendation generation.
. AI Approval management.
. AI Governance Engine.
. AI Execution Retry Manager.
. AI Audit Logging.
. Role-based access control.
. Employee request visibility restrictions.
. Manager approval simulation.
. AI ITSM dashboard with seven visualizations.
# Technical Implementation
Platform: ServiceNow Australia

Application: GlobalTech AI ITSM

# Technologies:

. JavaScript
. GlideRecord
. Script Includes
. Business Rules
. Access Control Lists (ACLs)
. Platform Analytics
. GitHub
# Project Architecture
1. Employee submits an AI Request.
2. Appropriate AI Agent is selected.
3. AI Execution Dispatcher invokes the agent logic.
4. Agent analyzes the request and generates output.
5. AI Recommendations are created where applicable.
6. Governance evaluates whether approval is required.
7. Manager reviews high-risk actions.
8. Approved actions are simulated.
9. AI Audit Logs record execution activities.
# Security
. Employee A can access only their own AI Requests.
. Employee B can access only their own AI Requests.
. Analyst access has been tested across employee requests.
. Admin access has been tested.
. High-risk actions require approval in the simulated workflow.
# Dashboard
The GlobalTech AI ITSM Dashboard includes:

1. Total AI Requests
2. AI Requests by Status
3. AI Executions by Status
4. AI Recommendations by Status
5. AI Pending Approvals
6. AI Audit Logs by Action Type
7. AI Agent Execution Summary
# Testing
The following agent workflows have been tested:

1. Incident Triage
2. Knowledge Research
3. Problem Investigation
4. Change Risk Assessment
   
5. Governance and Approval

Additional security and regression testing is part of final validation.

# Important Implementation Note
The current implementation uses scripted, rule-based AI simulation. It demonstrates agent orchestration, recommendations, governance, approval workflows, and auditability. It is not yet connected to an external Large Language Model (LLM).

# Future Enhancements
. Integrate an external GenAI/LLM service using REST APIs.
. Implement natural-language request understanding.
. Add advanced AI confidence evaluation.
. Expand automated ITSM actions with appropriate safeguards.
# Author
ServiceNow Developer Portfolio Project

# Project: GlobalTech AI ITSM – GenAI & Agentic AI

📸 Project Screenshots
1. Application and Modules
2. AI Agents
3. AI Executions
4. AI Recommendations
5. AI Approvals
6. AI Audit Logs
7. GlobalTech AI ITSM Dashboard
8. Employee Access Validation
Employee A – Own Requests Only

Employee B – Own Requests Only



