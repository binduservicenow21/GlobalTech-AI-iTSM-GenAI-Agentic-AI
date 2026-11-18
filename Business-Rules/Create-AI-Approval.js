(function executeRule(current, previous /*null when async*/) {

// Get the executing AI Agent
var agent = current.ai_agent.getRefRecord();

if (!agent.isValidRecord()) {
gs.error('AI Approval: Agent not found.');
return;
}

var agentCode = agent.getValue('agent_code');

// Support Governance and Change Risk Assessment agents
if (agentCode != 'governance' &&
agentCode != 'change_risk_assessment') {
return;
}

// Read execution output
var output = current.getValue('output_data');

if (!output) {
gs.error('AI Approval: Output data is empty.');
return;
}

var result;

try {
result = JSON.parse(output);
} catch (e) {
gs.error('AI Approval: Invalid JSON: ' + e.message);
return;
}

// Confirm approval is required
if (result.approvalRequired !== true) {
gs.info('AI Approval: Approval not required.');
return;
}

// Prevent duplicate approvals
var existing = new GlideRecord(
'x_78515_globalte_0_ai_approval'
);

existing.addQuery(
'related_execution',
current.getUniqueValue()
);
existing.query();

if (existing.next()) {
gs.info('AI Approval already exists.');
return;
}

// Determine requested action and risk
var requestedAction = 'AI action approval';
var riskLevel = result.riskLevel || 'high';

if (agentCode == 'change_risk_assessment') {
requestedAction =
'Change Risk Assessment - ' +
(result.changeType || 'Change') +
' change approval';

riskLevel = (result.riskLevel || 'high').toLowerCase();

} else {
requestedAction = result.action || 'AI action approval';
}

// Create AI Approval
var approval = new GlideRecord(
'x_78515_globalte_0_ai_approval'
);

approval.initialize();

approval.setValue('approval_id', gs.generateGUID());
approval.setValue(
'related_execution',
current.getUniqueValue()
);
approval.setValue('requested_action', requestedAction);
approval.setValue('risk_level', riskLevel);
approval.setValue('approval_status', 'requested');

var approvalSysId = approval.insert();

if (approvalSysId) {

gs.info(
'AI Approval created for ' +
agentCode +
'. Sys ID: ' +
approvalSysId
);

var auditService = new AIAuditService();

auditService.logAction({
executionId: current.getUniqueValue(),
agentName: agent.getValue('agent_name'),
actionType: 'approval_requested',
targetTable: 'x_78515_globalte_0_ai_approval',
targetRecord: approvalSysId,
beforeValue: '',
afterValue: 'requested',
result: 'success'
});

} else {
gs.error('AI Approval creation failed.');
}

})(current, previous);




