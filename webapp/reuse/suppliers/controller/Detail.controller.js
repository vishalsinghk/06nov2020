sap.ui.define([
	"sap/ui/core/sample/RoutingNestedComponent/base/BaseController",
	"sap/base/Log"
], function(Controller, Log) {
	debugger;
	"use strict";

	return Controller.extend("sap.ui.core.sample.RoutingNestedComponent.reuse.suppliers.controller.Detail", {

		onInit: function() {
			this.getOwnerComponent().getRouter().getRoute("detail").attachMatched(this._onMatched, this);
		},

		_onMatched: function(oEvent) {
			Log.info(this.getView().getControllerName(), "_onMatched");
			var oArgs = oEvent.getParameter("arguments");

			this.getOwnerComponent().getModel().metadataLoaded().then(this._bindData.bind(this, oArgs.id));
		},

		_bindData: function(id) {
			Log.info(this.getView().getControllerName(), "_bindData");

			var sObjectPath = this.getOwnerComponent().getModel().createKey("Suppliers", { SupplierID: id });

			this.getView().bindElement({
				//debugger
				path: "/" + sObjectPath,
				events: {
					change: function() {
						debugger;
						Log.info(this.getView().getControllerName(), "_bindData change");
						this.getView().setBusy(false);
					}.bind(this),
					dataRequested: function() {
						debugger;
						Log.info(this.getView().getControllerName(), "_bindData dataRequested");
						this.getView().setBusy(true);
					}.bind(this),
					dataReceived: function() {
						debugger;
						Log.info(this.getView().getControllerName(), "_bindData dataReceived"
						);
						this.getView().setBusy(false);
						if (this.getView().getBindingContext() === null) {
							this.getOwnerComponent().getRouter().getTargets().display("notFound");
						}
					}.bind(this)
				}
			});
		}
	});
});
