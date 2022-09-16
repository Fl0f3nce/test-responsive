/*Version 0.8 2015-06-19 11:06*/

function IelmScore(p_total_subtasks) {
    var iTotalSubtasks = p_total_subtasks;
    var iDoneSubtasks = 0;
    var iWrongInputs = 0;
    var iDoneInputs = 0;
    var iRightInputs = 0;
    var iSelectors = {
        total_subtasks : "#_ielm_common_infobox_score_totalSubtasks",
        done_subtasks : "#_ielm_common_infobox_score_doneSubtasks",
        wrong_inputs : "#_ielm_common_infobox_score_wrongInputs",
        done_inputs : "#_ielm_common_infobox_score_doneInputs",
        right_inputs : "#_ielm_common_infobox_score_rightInputs",
        auto_inputs : "#_ielm_common_infobox_score_autoInputs",
        error_rate :"#_ielm_common_infobox_score_errorRate",
        success_rate :"#_ielm_common_infobox_score_successRate"
    };
    this.totalSubtasks = function () {
        return iTotalSubtasks;
    };
    this.doneSubtasks = function () {
        return iDoneSubtasks;
    };
    this.wrongInputs = function () {
        return iWrongInputs;
    };
    this.doneInputs = function () {
        return iDoneInputs;
    };
    this.rightInputs = function () {
        return iRightInputs;
    };
    this.autoInputs = function () {
        return this.doneSubtasks() - this.rightInputs();
    }
    
    this.errorRate = function () {
        return (iDoneInputs===0) ? 0 : iWrongInputs/iDoneInputs;
    };
    this.errorRatePercent = function () {
        return Math.round(this.errorRate()*100,2) +"%";
    };
    
    this.successRate = function () {
        var ret = this.rightInputs()/(this.doneSubtasks()+this.wrongInputs());
        return (this.doneInputs()===0 || this.doneSubtasks()===0 || ret<0) ? 0 : ret;
    };
    this.successRatePercent = function () {
        return Math.round(this.successRate()*100,2) +"%";
    };
    
    this.right = function() {
        iDoneSubtasks++;
        iDoneInputs++;
        iRightInputs++;
        this.updateDom();
    };
    
    this.wrong = function() {
        iWrongInputs++;
        iDoneInputs++;
        this.updateDom();
    };
    this.auto = function () {
      iDoneSubtasks++; 
      this.updateDom();
    };
    this.autoNtimes = function (n) {
        iDoneSubtasks+=n;
        this.updateDom();
    }
    this.updateDom = function () {
        $(iSelectors.total_subtasks).html(this.totalSubtasks());
        $(iSelectors.done_subtasks).html(this.doneSubtasks());
        $(iSelectors.wrong_inputs).html(this.wrongInputs());
        $(iSelectors.done_inputs).html(this.doneInputs());
        $(iSelectors.right_inputs).html(this.rightInputs());
        $(iSelectors.auto_inputs).html(this.autoInputs());
        $(iSelectors.error_rate).html(this.errorRatePercent());
        $(iSelectors.success_rate).html(this.successRatePercent());
    };
	 this.serializeData = function () {
    /* wss 20150731 */
    /* Serialize the data of this object to a data object 
     * not containing the methods of this object */
    var ser = new Object();
    ser["total_subtasks"] = iTotalSubtasks;
    ser["done_subtasks"] = iDoneSubtasks;
    ser["wrong_inputs"] = iWrongInputs;
    ser["done_inputs"] = iDoneInputs;
    ser["right_inputs"] = iRightInputs;
    return ser;
  }
  this.deserializeData = function (dataobj) {
    /* wss 20150731 */
    /* Deserialize the data of this object with the data of a data object 
     * not containing the methods of this object */
    iTotalSubtasks = dataobj["total_subtasks"];
    iDoneSubtasks = dataobj["done_subtasks"];
    iWrongInputs = dataobj["wrong_inputs"];
    iDoneInputs = dataobj["done_inputs"];
    iRightInputs = dataobj["right_inputs"];
  }
    this.updateDom();
}

