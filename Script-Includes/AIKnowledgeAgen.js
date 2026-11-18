var AIKnowledgeAgent = Class.create();

AIKnowledgeAgent.prototype = {

initialize: function() {
this.agentName = 'AI Knowledge Research Agent';
},

searchKnowledge: function(requestText) {

var result = {
success: true,
agent: this.agentName,
matched: false,
knowledgeTitle: '',
knowledgeContent: '',
confidence: 0
};

if (!requestText) {
result.success = false;
result.message = 'Request text is required.';
return result;
}

var searchText = requestText.toLowerCase();

var knowledge = new GlideRecord(
'x_78515_globalte_0_ai_knowledge_context'
);

knowledge.addQuery('active', true);
knowledge.query();

var bestScore = 0;
var bestTitle = '';
var bestContent = '';

while (knowledge.next()) {

var title = knowledge.getValue('knowledge_title') || '';
var content = knowledge.getValue('knowledge_content') || '';
var category = knowledge.getValue('category') || '';

var combinedText = (
title + ' ' + content + ' ' + category
).toLowerCase();

var words = searchText.split(/\s+/);
var score = 0;

for (var i = 0; i < words.length; i++) {

var word = words[i].replace(/[^a-z0-9]/g, '');

if (word.length > 3 &&
combinedText.indexOf(word) >= 0) {
score++;
}
}

if (score > bestScore) {
bestScore = score;
bestTitle = title;
bestContent = content;
}
}

if (bestScore > 0) {

result.matched = true;
result.knowledgeTitle = bestTitle;
result.knowledgeContent = bestContent;

result.confidence = Math.min(
0.95,
0.60 + (bestScore * 0.10)
);

} else {

result.message =
'No matching knowledge record found. Manual review required.';

result.confidence = 0.30;
}

return result;
},

type: 'AIKnowledgeAgent'
};
