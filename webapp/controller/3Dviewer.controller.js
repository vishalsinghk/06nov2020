sap.ui.define([
	"sap/ui/core/sample/RoutingNestedComponent/base/BaseController",
	"sap/base/Log",
	"sap/ui/model/json/JSONModel"
], function(Controller, Log, JSONModel) {
	debugger;
	"use strict";
	return Controller.extend("sap.ui.core.sample.RoutingNestedComponent.controller.3Dviewer", {
		
		onInit: function() {
			Log.info(this.getView().getControllerName(), "onInit");

			// HTML string bound to the formatted text control
			var oModel = new JSONModel({
                recipient : {
                    enabled : false,
                    name : "Hii 3d viewer ",
                    HTML: "I this is 3dviewerpage"}
				});
                // var oInput1 = sap.m.Input({
                //     enabled : "{view>/enabled}"
                // });
                var oData = new sap.ui.model.json.JSONModel(oModel);
                sap.ui.getCore().setModel(oData, "modelname");
			this.getView().setModel(oModel);
        },
        onEnabled : function () {
            debugger;
            var oData = sap.ui.getCore().getModel("modelname").getData();
            // var oData = new sap.ui.model.json.JSONModel(oModel);
             oData.setProperty("/recipient/enabled", true);
            // oEvent.getSource().getBindingContext("oModel").setProperty("/enabled","true");
            //   oModel.recipient.setModel(enabled,true);
            // var oModel = new JSONModel({
            //     recipient : {
            //         enabled :true,
            //         name : "enabled ",
            //         HTML: "I this is 3dviewerpage"}
			// 	});
            this.getView().setModel(oData);
        },
         onDisabled : function () {
            debugger;
            var oData = sap.ui.getCore().getModel("modelname").getData();
            // var oData = new sap.ui.model.json.JSONModel(oModel);
             oData.setProperty("/recipient/enabled", false);
            this.getView().setModel(oData);
         }
	});
});