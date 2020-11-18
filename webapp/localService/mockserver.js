sap.ui.define([
	"sap/ui/core/util/MockServer",
	"sap/base/util/UriParameters"
], function (MockServer, UriParameters) {
	"use strict";

	return {

		init: function () {
			debugger;
			// create
			var oMockServer = new MockServer({
				rootUri: "https://cors-anywhere.herokuapp.com/http://services.odata.org/V2/Northwind/Northwind.svc"
			});

			var oUriParameters = UriParameters.fromQuery(window.location.search);

			// configure mock server with a delay
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: oUriParameters.get("serverDelay") || 500
			});

			// simulate
			var sPath = "../localService/";
			oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");

			// start
			oMockServer.start();
		}
	};

});