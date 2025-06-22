sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("zbvov.controller.View1", {
        onInit: function () {

        },

        onPress: function() {
            // This function will be called when the button is pressed
            alert("Button Pressed!");
        }
    });
});
