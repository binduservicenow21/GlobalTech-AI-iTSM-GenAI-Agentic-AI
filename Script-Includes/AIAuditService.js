var AIAuditService = Class.create();
AIAuditService.prototype = {
    initialize: function() {
		this.serviceName = 'GlobalTech AI Audit Service';
    },
	logAction: function(details) {
		var result = {
			success: false,
			message: '',
			auditId: ''

		};
		if(!details || !details.agentName || !details.actionType || !details.result){
			result.message = 'Required audit details are missing.';
			return result;
		}
		try{
			var audit = new GlideRecord('x_78515_globalte_0_ai_audit_log');
			audit.initialize();
			if (details.executionId) {
				audit.setValue('related_execution', details.executionId);
			}
			audit.setValue('agent_name', details.agentName);
			audit.setValue('action_type', details.actionType);
			audit.setValue('target_table', details.targetTable || '');
			audit.setValue('target_record', details.targetRecord || '');
			audit.setValue('before_value', details.beforeValue || '');
			audit.setValue('after_value', details.afterValue || '');
			audit.setValue('result', details.result);

			var auditSysId = audit.insert();
        if (auditSysId) {
			result.success = true;
			result.message = 'Audit record created.';
			result.auditId = auditSysId.toString();
		}  else {
			result.message = 'Audit record could not be created.';
		}

		} catch (e) {
			result.message = 'Audit error: ' + e.message;
			gs.error(this.serviceName + ':' + result.message);
		}
		return result;
	},

    type: 'AIAuditService'
};
