sap.ui.define([
	"sap/ui/core/sample/RoutingNestedComponent/base/BaseController",
	"sap/base/Log",
	"sap/ui/model/json/JSONModel"
], function(Controller, Log, JSONModel) {
	debugger;
	"use strict";
	return Controller.extend("sap.ui.core.sample.RoutingNestedComponent.controller.Home", {
		
		onInit: function() {
			Log.info(this.getView().getControllerName(), "onInit");

			// HTML string bound to the formatted text control
			var oModel = new JSONModel({
				HTML: "I this is my first page"});

			this.getView().setModel(oModel);
		}
	});
});
