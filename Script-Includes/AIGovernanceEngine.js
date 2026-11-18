var AIGovernanceEngine = Class.create();
AIGovernanceEngine.prototype = {
    initialize: function() {
		this.engineName = 'AI Governance Engine';
    },
	evaluate: function(actionName, agentSysId, confidence){
		var result = {
			success: true,
			engine: this.engineName,
			action: actionName,
			riskLevel: '',
			decision: 'blocked',
			autoExecute: false,
			approvalRequired: false,
			reason: ''
			};
		if (!actionName || !agentSysId || confidence === null || confidence === undefined) {
			result.success = false;
			result.reason = 'Action, agent and confidence are required.';
			return result;
     }
	 confidence = parseFloat(confidence);
	 
	 if (isNaN(confidence) || confidence <  0 || confidence > 1) {
		result.success = false;
		result.reason = 'confidence must be between 0 and 1.';
		return result;

	 } 
	  var policy = new GlideRecord('x_78515_globalte_0_ai_policy');
	  policy.addQuery('action_name', actionName);
	  policy.addQuery('active', true);
	  policy.query();
	  if (!policy.next()){
		result.reason = 'No active AI policy found. Execution blocked.';
		return result;
	  }
	  var allowedAgent = policy.getValue('allowed_agent');
	  if (allowedAgent && allowedAgent != agentSysId){
		result.reason = 'Agent is not authorized for this action.';
		return result;
	  }
	  var risk = policy.getValue('risk_level');
	  var autoExecute = policy.getValue('auto_execution') == '1';
	  var approvalRequired = policy.getValue('approval_required') == '1';
	  var minimumConfidence = parseFloat(policy.getValue('minimum_confidence'));
	  if (isNaN(minimumConfidence)) {
		minimumConfidence = 1;
	  }
	  result.riskLevel = risk;

	  if (risk == 'high' || risk == 'critical' || risk == 'medium'){
		result.decision = 'approval_required';
		result.approvalRequired = true;
		result.reason = 'Human approval is required for this risk level.';
		

	 } else if (risk == 'low') {
		if (confidence < minimumConfidence){
			result.decision = 'approval_required';
			result.approvalRequired = true;
			result.reason = 'Confidence is below the policy threshold.';

		} else if (autoExecute && !approvalRequired){
			result.decision = 'auto_execute';
			result.autoExecute = true;
			result.reason = 'Low-risk action is permitted by the active policy.';
		
		} else {
		result.decision = 'approval_required';
		result.approvalRequired = true;
		result.reason = 'Policy does not permit automatic execution.';
		
	}
	
	 } else {
		result.reason = 'Unknown risk level. Execution blocked.';
	 }
	return result;
	},

	

    type: 'AIGovernanceEngine'
};
