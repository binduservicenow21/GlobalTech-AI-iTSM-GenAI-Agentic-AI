var AIProblemAgent = Class.create();
AIProblemAgent.prototype = {
    initialize: function() {
		this.agentName = 'AI Problem Investigation Agent';
		},
		analyzeRecurringIncidents: function(category, ciSysId){
			var result = {
				success: true,
				agent: this.agentName,
				category: category,
				configurationItem: ciSysId,
				incidentCount: 0,
				recommendProblem: false,
				recommendation: '',
				confidence: 0
			};
			if (!category || !ciSysId){
				result.success = false;
				result.message = 'Category and Configuration Item are required.';
				return result;
				}
				var incidents = new GlideAggregate('incident');
				incidents.addQuery('category', category);
				incidents.addQuery('cmdb_ci', ciSysId);
				incidents.addQuery('sys_created_on','>=',gs.daysAgoStart(7));
				incidents.addAggregate('COUNT');
				incidents.query();

				if (incidents.next()){
					result.incidentCount = parseInt(incidents.getAggregate('COUNT'), 10) || 0;
                }
				if (result.incidentCount >= 3) {
					result.recommendProblem = true;
					result.recommendation = 'Recurring incident pattern detected.' +       'Recommend creating a problem record for investigation.';
					result.confidence = 0.95;
				} else {
					result.recommendation = 'Insufficient recurring incidents to recommend' +  'Problem creation. Continue monitoring.';
					result.confidence = 0.80;
				}
				return result;
		},
	

    type: 'AIProblemAgent'
};
