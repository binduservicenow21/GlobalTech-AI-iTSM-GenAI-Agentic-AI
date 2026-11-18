# GlobalTech AI ITSM – Test Cases and Results
# 1. AI Incident Triage Agent
  # Test Scenario: VPN connectivity failure.

  # Input: VPN connection is not working. Users cannot connect to the corporate network.

  # Expected Result:
    . Category: Network
    .  Priority: High
    . Confidence: 0.95
    . Execution: Completed
    . Result: Passed

  #  2. AI Knowledge Research Agent
    Test Scenario: VPN troubleshooting knowledge search.

   Input: How can I troubleshoot VPN connectivity issues and reset my network connection?

# Expected Result:

  . Relevant VPN knowledge article identified.
  . Troubleshooting content returned.
  . Confidence: 0.90
  . Knowledge recommendation created.
  . Result: Passed

# 3. AI Problem Investigation Agent
 . Test Scenario: Recurring network incidents.

 . Input: Investigate recurring network incidents and identify the root cause.

  . Test Data: Matching network incidents associated with the same Configuration Item.

# Expected Result:

  . Matching incidents identified.
  . Incident count: 3
  . Problem recommendation generated.
  . Confidence: 0.95
# Result: Passed

# 4. AI Change Risk Assessment Agent
  Test Scenario: Production database upgrade with expected outage and no backout plan.

# Expected Result:

 . Change risk: Critical
 . Approval required: True
 . Confidence: 0.95
 . AI Approval record created.
 . Approved action simulated successfully.
# Result: Passed

# 5. AI Governance Agent
 Test Scenario: High-risk delete incident action.

# Expected Result:

 . High-risk policy identified.
 . Automatic execution disabled.
 . Manager approval required.
 . Approval decision recorded.
 . Action simulation completed.
 . Audit log created.
# Result: Passed

# 6. Retry Mechanism Test
  Test Scenario: Retry a failed AI Execution.

# Expected Result:

  . Failed execution identified.
 . Retry count incremented.
  . Execution requeued and dispatched.
  . Retry activity logged.
# Result: Passed

# 7. Security Testing
Test                        Expected Result            Result

 Employee A               Only own requests visible   Passed

Employee B                Only own requests visible   Passed 

Analyst                   Employee A and B requests visible   Passed

Admin                   Employee A and B requests visible    Passed

# Note: Analyst and Admin were tested using a user with multiple roles. Isolated Manager role testing remains pending.

# 8. Dashboard Validation
The following seven visualizations were created:

  . Total AI Requests
  . AI Requests by Status
  . AI Executions by Status
  . AI Recommendations by Status
  . AI Pending Approvals
  . AI Audit Logs by Action Type
  . AI Agent Execution Summary
# Result: Dashboard created and agent/status data verified in the corresponding ServiceNow lists.

# Overall Test Summary
The five AI Agent workflows, approval simulation, retry mechanism, audit logging and selected access-control scenarios were successfully tested.

Final independent role testing and full regression testing remain planned activities.

