jQuery(document).ready(function() {

	var host = "";
	var port = "";

	function getSession(id) {
		var sessionObj = {
			'topic' : 'the holy doge',
			'data' : 'How can I discuss gracefully about the holy doge?',
			'owner' : 2,
			'date' : 1449317640,
			'helper' : 4,
			'messages' : [
				{
					'owner' : 4,
					'data' : 'hey there, Im here to help you',
					'date' : 1449317640 	
				},
				{
					'owner' : 2,
					'data' : 'cool stuff buddy, I really like you',
					'date' : 1449317640 	
				},
				{
					'owner' : 4,
					'data' : 'stuff and thanks',
					'date' : 1449317640 	
				},
			]
		};

		return sessionObj;

	};
	
	function getHelper(id) {
		var helper = {
			'avatarUrl' : 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
			'name' : 'Ron Romba',
			'role' : 'HELPER'
		};
		return helper;
	};
	
	function getPadawan(id) {
		var padawan = {
			'avatarUrl' : 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
			'name' : 'Ron Romba',
			'role' : 'HELPER'
		};
		return padawan;
	};

	function postMessage(sessionId, message) {
		
	};

	function getDocuments(language) {
		var documents = {
			'data' : [{
				'title' : "this is a title",
				'tags' : [{
					'lang' : 'de',
					'name' : 'language',
					'date' : 1449317640
				}],
				'url' : 'http://refugee-board.de/',
				'date' : 1449317640
			}, {
				'title' : "this is another title",
				'tags' : [{
					'lang' : 'en',
					'name' : 'language',
					'date' : 1449317640
				}],
				'url' : 'http://refugee-board.de/',
				'date' : 1449317640
			},{
				'title' : "this is a title",
				'tags' : [{
					'lang' : 'de',
					'name' : 'language',
					'date' : 1449317640
				}],
				'url' : 'http://refugee-board.de/',
				'date' : 1449317640
			}]
		};
		return documents;
	};

	function doRequest(method, url, postData) {

	};

});
